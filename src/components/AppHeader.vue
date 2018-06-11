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
          <div class="sizing">|</div>
          <router-link to="/projects">Projects</router-link>
          <div class="sizing">|</div>
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

<style lang="scss">
@import "../assets/global.scss";
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
  grid-template-columns: 5vh auto auto auto 5vh;
  align-items: center;
  width: 100%;
  height: 100%;
  /* margin: 0 auto; */
}
.logo{
  font-size: .5vh;
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
  justify-content:space-around;
  color: #3273dc;
  /* cursor: pointer; */
  text-decoration: none;
  padding: 0vh, 2.5vw, 1vh, 2.5vw;
}
.nav-buttons a{
  color: #3273dc;
  font-size: 3vh;
  text-decoration: none;
}
.nav-buttons a:visited{
  color: #3273dc;
  text-decoration: none;
}
.nav-buttons a:hover{
  color: var(--theme-color2);
  -webkit-transform: scale(1.05);
  -ms-transform: scale(1.05);
  transform: scale(1.05);
  text-decoration: none;
}
.sizing {
  font-size: 3vh;
}
</style>
