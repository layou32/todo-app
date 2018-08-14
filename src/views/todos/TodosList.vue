<template>
  <div class="ui grid container">
    <div class="row">
      <div class="seven wide column">
        <h1>Listado de todos:</h1>
      </div>
      <div class="right floated column">
        <button class="circular ui green icon button">
          <i class="icon plus"></i>
        </button>
      </div>
    </div>
    <div class="row">
      <div class="column">
        <div class="ui middle aligned selection list">
          <div class="item">
            <img class="ui avatar image" src="https://semantic-ui.com/images/avatar/small/daniel.jpg">
            <div class="content" v-for="item in listTodo" :key="item.id">
              <div class="header">{{item.name}}</div>
              <div class="description">{{item.description}}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    listTodo: Array
  }
}
</script>

