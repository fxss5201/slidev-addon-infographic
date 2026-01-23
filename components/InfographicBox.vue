<template>
  <RenderWhen
    :context="context"
    style="height: 100%;">
    <Infographic :data="data" :click="isClick" />
  </RenderWhen>
</template>

<script setup>
import Infographic from './Infographic.vue'
import { computed } from 'vue'

const props = defineProps({
  data: {
    type: String,
    default: '',
  },
  click: {
    type: Boolean,
    default: false,
  },
  isExportPdf: {
    type: Boolean,
    default: false,
  }
})

const oldContext = ['visible', 'print', 'slide', 'overview', 'presenter', 'previewNext']
const context = computed(() => {
  if (props.isExportPdf) {
    oldContext.shift()
  }
  return oldContext
})
const isClick = computed(() => {
  if (props.isExportPdf) {
    return false
  }
  return props.click
})
</script>