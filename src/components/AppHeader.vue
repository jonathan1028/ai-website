<template>
  <div class="header">
    <!-- <div class="logo"></div> -->
    <!-- Main navigation -->
    <div class="nav-buttons">
      <router-link to="/">Home</router-link>
      <div class="grid-item sizing">|</div>
      <router-link to="/projects">Projects</router-link>
      <div class="sizing">|</div>
      <router-link to="/learn">Learn</router-link>
      <div class="sizing">|</div>
      <router-link to="/resume">Resume</router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AppHeader'
}
</script>

<style lang="scss" scoped>
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
.header {
  //border: 1px solid red;
  //justify-self: end;
  align-self: center;
  //display: flex;
  justify-self: end;
  // grid-template-columns: 5vh auto auto auto 5vh;
  // align-items: center;
  // width: 100%;
  // height: 100%;
  /* margin: 0 auto; */
  .nav-buttons {
    //border: 1px solid red;
    display: grid;
    grid-template-rows: 100%;
    grid-template-columns: auto auto auto auto auto auto auto;
    width: 50vw;
    align-items: center;
    color: #3273dc;
    text-decoration: none;
  }
  .grid-item {
    //width: auto;
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
    -webkit-transform: scale(1.1);
    -ms-transform: scale(1.1);
    transform: scale(1.1);
    text-decoration: none;
  }
  .sizing {
    font-size: 3vh;
  }
}
//////////////////////////////////////////////////// Mobile ///////////////////////////////////////////////
@media only screen and (max-width: 600px) {
  .header {
    .nav-buttons {
      justify-self: start;
      //border: 1px solid red;
      // display: grid;
      // grid-template-rows: 100%;
      // grid-template-columns: auto auto auto auto auto auto auto;
      width: 90vw;
      margin-left: 5vw;
      margin-right: 5vw;
      // align-items: center;
      // color: #3273dc;
      // text-decoration: none;
    }
  }
}
</style>
