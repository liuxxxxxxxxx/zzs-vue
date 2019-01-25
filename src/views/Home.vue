<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    {{user}}
  </div>
</template>

<script>
// @ is an alias to /src
import {mapState} from 'vuex';
export default {
  name: 'home',
  components: {
  },
  computed:{
    ...mapState(['user'])
  }
}
</script>
