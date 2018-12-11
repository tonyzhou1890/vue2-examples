<template>
  <div class="container">
    <textarea class="textarea" :value="input" @input="update"></textarea>
    <div class="compiled" v-html="compiledMarkdown"></div>
  </div>
</template>

<script>
export default {
  name: 'markdown',
  data() {
    return {
      compiledMarkdown: '',
      input: ''
    }
  },
  methods: {
    update: window._.debounce(function(e) {
      this.input = e.target.value
      this.compiledMarkdown = window.marked(this.input, { sanitize: true })
    }, 300)
  }
}
</script>

<style scoped>
.container {
  width: 100%;
  height: 100%;
}
.textarea, .compiled {
  width: 50%;
  height: 100%;
  float: left;
  box-sizing: border-box;
  border: 1px solid #ccc;
  padding: 5px;
}
.textarea {
  resize: none;
  font-size: 16px;
  font-family: 'Courier New', Courier, monospace;
}
</style>
