<template>
  <div class="container">
    <div class="list fl">
      <ul class="list-ul">
        <li
          class="list-li"
          v-for="(item, index) in list"
          :key="index"
          :class="[item.component === curComponent ? 'active-li' : '']"
          @click="changeComponent(item)" >{{ item.name }}</li>
      </ul>
    </div>
    <div class="component fl">
      <keep-alive>
        <div class="cur-component" :is="curComponent"></div>
      </keep-alive>
    </div>
  </div>
</template>

<script>
import Markdown from '@/components/Markdown'
import GridTable from '@/components/GridTable'
export default {
  name: 'examples',
  components: {
    Markdown,
    GridTable
  },
  data() {
    return {
      list: [
        {
          name: 'Markdown编辑器',
          component: 'Markdown'
        },
        {
          name: '网格组件',
          component: 'GridTable'
        }
      ],
      curComponent: 'Markdown'
    }
  },
  methods: {
    changeComponent(data) {
      this.curComponent = data.component
    }
  }
}
</script>

<style scoped>
.container {
  width: 100%;
  color: #333;
}
.list {
  width: 150px;
}
.list-li {
  cursor: pointer;
}
.list-li:hover {
  color: lightgreen;
}
.active-li {
  color: green;
}
.component {
  width: calc(100% - 150px);
  height: 500px;
}
.cur-component {
  width: 100%;
  height: 100%;
}
</style>
