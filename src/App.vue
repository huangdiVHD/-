<template>
  <div id="app">
    <navigation></navigation>
    <router-view></router-view>
  </div>
</template>
<script>
// @ is an alias to /src

import navigation from "@/components/navigation.vue";
export default {
  name: "Home",
  components: {
    navigation
  }
};
</script>
<style lang="scss">
ul{
  list-style: none;
}
a{
  text-decoration: none;
}
*{
margin: 0px;
padding: 0px;
}
</style>
