<template>
  <div ref="containerRef" style="width: 100%;height: 100%;"></div>
</template>

<script setup>
import { useDarkMode, useNav } from '@slidev/client'
import {ref, watch, onMounted, onUnmounted} from 'vue'
import {Infographic} from '@antv/infographic'

const props = defineProps({
  data: {
    type: String,
    default: '',
  },
  click: {
    type: Boolean,
    default: false,
  }
})

const containerRef = ref(null)
let infographic = ref(null)
const { isDark } = useDarkMode()
const nav = useNav()
const parseStringRef = ref(null)

function initInfographic() {
  if (infographic.value) infographic.value.destroy()
  infographic.value = new Infographic({
    container: containerRef.value,
    width: '100%',
    height: '100%',
  })
  if (!props.data) return
  if (props.click) {
    if (!parseStringRef.value) parseStringRef.value = parseString(props.data)
    const clickNum = nav.currentRoute.value.query.clicks || 0
    infographic.value.render(`${parseStringRef.value.strNoData}
${parseStringRef.value.strDataNoItems}
  items
    ${parseStringRef.value.itemsArray.slice(0, Math.min(clickNum * 1 + 1, parseStringRef.value.itemsArray.length)).join('\n')}`)
  } else {
    infographic.value.render(props.data)
  }
}

onMounted(() => {
  initInfographic()
})

onUnmounted(() => {
  if (infographic.value) {
    infographic.value.destroy()
  }
})

watch(() => props.data, (newData) => {
  if (newData) {
    parseStringRef.value = null
    initInfographic()
  }
})

watch(() => props.click, (val) => {
  parseStringRef.value = null
  initInfographic()
})

watch(() => nav.currentRoute.value.query.clicks, () => {
  initInfographic()
})

watch(() => isDark.value, (newDark) => {
  if (newDark) {
    infographic.value.update({
      theme: 'dark',
    })
  } else {
    infographic.value.update({
      theme: 'light',
    })
  }
})

/**
 * 精准拆分字符串为指定的三个部分
 * @param {string} str - 原始字符串
 * @returns {object} 包含strNoData、strDataNoItems、itemsArray三个结果
 */
function parseString(str) {
  const lines = str.split('\n')
  let strNoDataLines = []       // 行集合（非data内容）
  let strDataNoItemsLines = []       // 行集合（data内除items外）
  let itemsLines = []      // items的原始行集合
  let inDataBlock = false
  let inItemsBlock = false
  let currentItemBuffer = []
  let dataLineSpaceNum = 0
  let itemsLineSpaceNum = 0

  lines.forEach(line => {
    if (line.trim() === 'data') {
      inDataBlock = true
      dataLineSpaceNum = line.search(/\S/)
      strDataNoItemsLines.push(line)
      return
    }

    if (!inDataBlock) {
      strNoDataLines.push(line)
      return
    }

    if (inDataBlock) {
      if (line.trim() === 'items') {
        itemsLineSpaceNum = line.search(/\S/)
        inItemsBlock = true
        return
      }

      if (!inItemsBlock) {
        strDataNoItemsLines.push(line)
        return
      }

      const curLineSpaceNum = line.search(/\S/)
      if (curLineSpaceNum <= itemsLineSpaceNum) {
        inItemsBlock = false
        if (curLineSpaceNum <= dataLineSpaceNum) {
          inDataBlock = false
          strNoDataLines.push(line)
        } else {
          strDataNoItemsLines.push(line)
        }
        return
      }

      // 处理items区块内的内容
      if (inItemsBlock) {
        itemsLines.push(line)
        return
      }
    }
  })

  const itemsArray = []
  itemsLines.forEach(line => {
    const curLineSpaceNum = line.search(/\S/)
    if (line.trim().startsWith('- label') && curLineSpaceNum === itemsLineSpaceNum + 2) {
      if (currentItemBuffer.length > 0) {
        itemsArray.push(currentItemBuffer.join('\n'))
        currentItemBuffer = []
      }
    }
    if (line.trim() !== '') {
      currentItemBuffer.push(line)
    }
  })
  if (currentItemBuffer.length > 0) {
    itemsArray.push(currentItemBuffer.join('\n'))
  }

  const strNoData = strNoDataLines.join('\n')
  const strDataNoItems = strDataNoItemsLines.join('\n')

  return {
    strNoData,
    strDataNoItems,
    itemsArray
  }
}
</script>