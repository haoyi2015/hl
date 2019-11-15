<template>

  <!-- <limit-textarea :maxLen="10" placeholder="最多输入10个字符"></limit-textarea> -->
  <limit-textarea :max-len="10" placeholder="最多输入10个字符" isCut></limit-textarea>
</template>
<script>
import limitTextarea from '@/components/limitTextarea/index'
export default {
  data() {
    return {}
  },
  components: {
    limitTextarea
  }
}
</script>
