<template>
  <div class="todo-footer">
    <footer>vue-koa-todos by <span>BreezyMelon</span></footer>
  </div>
</template>

<script>
export default {
  name: 'todo',
  data () {
    return {}
  }
}
</script>

<style scoped lang="scss">
.todo-footer {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  flex: 0 0 auto;
  height: 140px;
  line-height: 140px;
  color: #b7b7b7;
  font-size: 14px;
  font-weight: normal;
  span {
    font-weight: bold;
  }
}
</style>
