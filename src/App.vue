<template>
  <div id="app">
    <router-view/>
  </div>
</template>


<style lang="scss">
@import "~@/assets/style/helper.scss";
@import "~@/assets/style/reset.scss";

body {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-size: 16px;
  color: #333;
  font-family: $font-hei;
  line-height: 1.5;
  background: #f5f5f5;
}
#app{
  max-width: 500px;
  margin: 0 auto;
}
</style>
