<template>
  <ul class="container">
    <item :model="model" />
  </ul>
</template>

<script>
export default {
  data() {
    return {
      model:
        {
          name: 'My Tree',
          children: [
            { name: 'hello' },
            { name: 'wat' },
            {
              name: 'child folder',
              children: [
                {
                  name: 'child folder',
                  children: [
                    { name: 'hello' },
                    { name: 'wat' }
                  ]
                },
                { name: 'hello' },
                { name: 'wat' }
              ]
            }
          ]
        }

    }
  }
}
</script>

<style scoped>
.container {
  padding-left: 1em;
}
</style>
