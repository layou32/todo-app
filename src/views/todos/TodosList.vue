<template>
  <div class="ui grid container">
    <div class="row">
      <div @click="obtenerTodos" style="cursor: pointer;" class="seven wide column">
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
        <list-todos :list-todos="listTodos"/>
      </div>
    </div>
  </div>
</template>

<script>
import {mapActions, mapGetters} from 'vuex'
import * as todo from '@/store/modules/todo/mutations-types'
import ListTodos from '@/components/list-todo/ListTodos'
export default {
  components: {
    ListTodos
  },
  methods: {
    ...mapActions({
      obtenerTodos: todo.GET_TODOS
    })
  },
  computed: {
    ...mapGetters({
      listTodos: todo.GET_TODOS
    })
  }
}
</script>
