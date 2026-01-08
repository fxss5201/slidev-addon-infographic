<template>
  <div ref="containerRef" style="width: 100%;height: 100%;"></div>
</template>

<script setup>
import { useDarkMode } from '@slidev/client'
import {ref, watch, onMounted, onUnmounted} from 'vue'
import {Infographic} from '@antv/infographic'

const props = defineProps(['data'])

const containerRef = ref(null)
let infographic = null
const { isDark } = useDarkMode()

function initInfographic(data) {
  if (infographic) infographic.destroy()
  infographic = new Infographic({
    container: containerRef.value,
    width: '100%',
    height: '100%',
  })
  data && infographic.render(data)
}

onMounted(() => {
  initInfographic(props.data)
})

onUnmounted(() => {
  if (infographic) {
    infographic.destroy()
  }
})

watch(() => props.data, (newData) => {
  newData && initInfographic(newData)
})
watch(() => isDark.value, (newDark) => {
  if (newDark) {
    infographic.update({
      theme: 'dark',
    })
  } else {
    infographic.update({
      theme: 'light',
    })
  }
})
</script>