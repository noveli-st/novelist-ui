<template>
    <span v-html="convertedText"></span>
</template>
<script>
export default {
    props: {
        text: {
            type: String,
            default: ""
        }
    },
    computed: {
      convertedText() {
          return this.text
              .replace(/(<\/?)div(?![a-z])/gi, (g, start) => `${start}p`)
              .replace(/(<)(?!(?:\/?(?:p|br|figure|figcaption|img))(?![a-z]))/gi, "&lt;")
      }
    }
}
</script>
