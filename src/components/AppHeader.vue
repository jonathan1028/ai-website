<template>
  <div class="header-content">
      <!-- <div class="main-nav"> -->
        <!-- Logo -->
        <div></div>
        <div class="logo"></div>
        <!-- Main navigation -->
        <div></div>
        <div class="nav-buttons">
          <router-link to="/">Home</router-link>
          <div>|</div>
          <router-link to="/projects">Projects</router-link>
          <div>|</div>
          <router-link to="/learn">Learn</router-link>
        </div>
        <div></div>
      <!-- </div> -->
  </div>
</template>

<script>
export default {
  name: 'AppHeader'
}
</script>

<style>
/* .header{
  position: fixed;
  top: 0;
  width: 100%;
  height: 60px;
  background-color: white;
  /* opacity: 0.3;
  filter: alpha(opacity=50); For IE8 and earlier
  -webkit-box-shadow:0 1px 4px rgba(0, 0, 0, 0.3), 0 0 40px rgba(0, 0, 0, 0.1) inset;
  -moz-box-shadow:0 1px 4px rgba(0, 0, 0, 0.3), 0 0 40px rgba(0, 0, 0, 0.1) inset;
  box-shadow:0 1px 4px rgba(0, 0, 0, 0.3), 0 0 40px rgba(0, 0, 0, 0.1) inset;
} */
.header-content{
  display: grid;
  grid-template-columns: 5% auto auto auto 5%;
  align-items: center;
  width: 100%;
  height: 100%;
  /* margin: 0 auto; */
}
.logo{
  font-size: 2em;
  color:rgb(48,62,240);
  /* margin-right: 5em; */
}
.main-nav{
  display: flex;
  justify-content: flex-start;
  align-items: center;
}
.nav-buttons{
  display: flex;
  align-items: center;
  justify-content: flex-end;
  color: #3273dc;
  cursor: pointer;
  text-decoration: none;
}
.nav-buttons a{
  color: #3273dc;
  font-size: 1.5em;
  text-decoration: none;
}
.nav-buttons a:visited{
  color: #3273dc;
  text-decoration: none;
}
.nav-buttons a:hover{
  color: var(--theme-color2);
  text-decoration: underline;
  -webkit-transform: scale(1.05);
  -ms-transform: scale(1.05);
  transform: scale(1.05);
  text-decoration: none;
}
</style>
