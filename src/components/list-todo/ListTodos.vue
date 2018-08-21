<template>
  <div class="ui middle aligned selection list">
    <div class="item" v-for="item in listTodos" :key="item.id">
      <img class="ui avatar image" src="https://semantic-ui.com/images/avatar/small/daniel.jpg">
      <div class="content">
        <div class="header">{{item.name}}</div>
        <div class="description">{{item.description}}</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ListTodos',
  props: {
    listTodos: Array
  }
}
</script>
