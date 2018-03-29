<template>
  <div class="header">
    <div class="header-content">
        <!-- <div class="main-nav"> -->
          <!-- Logo -->
          <!-- <div class="logo">Agilent Innovations</div> -->
          <!-- Main navigation -->
          <div class="nav-buttons">
            <router-link to="/">Home</router-link>
            <div>|</div>
            <router-link to="/projects">Projects</router-link>
            <div>|</div>
            <router-link to="/learn">Learn</router-link>
          </div>
        <!-- </div> -->
    </div>
  </div>
</template>

<script>
export default {
  name: 'AppHeader'
}
</script>

<style>
.header{
  position: fixed;
  top: 0;
  width: 100%;
  height: 60px;
  background-color: white;
  /* opacity: 0.3;
  filter: alpha(opacity=50); For IE8 and earlier */
  -webkit-box-shadow:0 1px 4px rgba(0, 0, 0, 0.3), 0 0 40px rgba(0, 0, 0, 0.1) inset;
  -moz-box-shadow:0 1px 4px rgba(0, 0, 0, 0.3), 0 0 40px rgba(0, 0, 0, 0.1) inset;
  box-shadow:0 1px 4px rgba(0, 0, 0, 0.3), 0 0 40px rgba(0, 0, 0, 0.1) inset;
}
.header-content{
  max-width: 90%;
  height: 100%;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.logo{
  margin-right: 1em;
}
.main-nav{
  display: flex;
  justify-content: flex-start;
  align-items: center;
}
.nav-buttons{
  display: flex;
  justify-content:flex-end;
  align-items: center;
  margin-left: 80%;
  color: #3273dc;
  cursor: pointer;
  text-decoration: none;
}
.nav-buttons a{
  color: #3273dc;
  text-decoration: none;
}
.nav-buttons a:visited{
  color: #3273dc;
  text-decoration: none;
}
.nav-buttons a:hover{
  color: gray;
  text-decoration: none;
}
</style>
