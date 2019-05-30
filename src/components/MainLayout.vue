<template>
  <div class="layout">
    <app-header
      class="main-header"
    />
    <div class="main-content">
      <router-view></router-view>
    </div>
    <div class="footer">
    </div>
  </div>
</template>

<script>
import AppHeader from './AppHeader'

export default {
  name: 'MainLayout',
  components: {
    AppHeader
  }
}
</script>

<style lang="scss" scoped>
.layout {
  display: grid;
  grid-template-rows: 8vh auto 10vh;
  grid-template-columns: 100%;
  grid-template-areas:
  "main-header"
  "main-content"
  "footer";
}
.header {
  grid-area: main-header;
}
.main-content {
  grid-area: main-content;
}
.footer {
  grid-area: footer;
  background-color: rgb(52,62,71);
}
</style>
