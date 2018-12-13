<template>
  <div class="container">
    <div class="query"><span>query:</span><input v-model="queryKey" type="text"></div>
    <div class="table-container">
      <table>
        <thead>
          <tr>
            <th
              v-for="(item, index) in columns"
              @click="sortBy(item)"
              :class="{active: sortKey === item}"
              :key="index">{{ item }}
              <span :class="[sortKeys[item] > 0 ? 'dec' : 'asc']"></span>
            </th>
          </tr>
        </thead>
        <tbody>
          <tr
            v-for="(item, index) in gridData"
            :key="index + 'tr'">
            <td
              v-for="(key, index) in columns"
              :key="index + 'td'" >{{ item[key] }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      queryKey: '',
      data: [
        { name: 'Chuck Norris', power: Infinity },
        { name: 'Bruke', power: 9000 },
        { name: 'Chan', power: 8000 },
        { name: 'Jay', power: 7000 },
        { name: 'Lily', power: 6000 },
        { name: 'Jet', power: 5000 }
      ],
      columns: ['name', 'power'],
      sortKey: '',
      sortKeys: {
        name: 1,
        power: 1
      }
    }
  },
  computed: {
    gridData() {
      let temp = this.data
      if (this.queryKey) {
        let queryKey = this.queryKey.toLowerCase()
        temp = temp.filter((item) => {
          return Object.keys(item).some((key) => {
            return String(item[key]).toLowerCase().indexOf(queryKey) > -1
          })
        })
      }
      if (this.sortKey) {
        let order = this.sortKeys[this.sortKey]
        temp = temp.sort((a, b) => {
          a = a[this.sortKey]
          b = b[this.sortKey]
          return (a === b ? 0 : a > b ? 1 : -1) * order
        })
      }
      return temp
    }
  },
  methods: {
    sortBy(val) {
      this.sortKey = val
      this.sortKeys[val] *= -1
    }
  }
}
</script>

<style scoped>
.query {
  padding-bottom: 5px;
}
.query input {
  width: 100px;
}
table {
  border: 2px solid #42b983;
}
th, td {
  min-width: 150px;
  padding: 10px 20px;
}
th {
  background: #42b983;
  color: rgba(255, 255, 255, .6);
  cursor: pointer;
  user-select: none;
}
th.active {
  color: rgba(255, 255, 255, 1);
}
th span {
  display: inline-block;
  border-top: 4px solid white;
  border-left: 4px solid transparent;
  border-right: 4px solid transparent;
  vertical-align: middle;
  opacity: 0.6;
}
th.active span {
  opacity: 1;
}
th span.dec {
  transform: rotate(180deg);
}
td {
  background: #f9f9f9;
}
</style>
