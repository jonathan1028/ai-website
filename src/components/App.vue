<template>
  <div id="app" class="app">
      <app-header class="app-header"></app-header>
      <div class="main-content">
        <!-- Inject page content -->
        <router-view></router-view>
      </div>
      <div class="footer">
      </div>
  </div>
</template>

<script>
import AppHeader from './AppHeader'
export default {
  name: 'app',
  components: {
    AppHeader
  }
}
</script>

<style>
/* Removes default margin and padding for all html elements */
* { margin: 0; padding: 0; }
html {
  background-color: white;
  font-family: 'Open Sans', sans-serif;
  margin: 0 0 0 0;
}
body {
  margin: 0;
  padding: 0;
}

:root {
  --theme-color1: rgba(45,48,245,1);
  --theme-color2: rgba(35,150,153,1);
  --link-color: rgb(48,62,240);
}

/* ---------------------------------  Application layout ------------------------ */
.app {
  height: 100vh; /* Extends page to bottom of view port even if page content is not long enough */
  display: grid;
  grid: 60px auto 80px / 1fr;
}
.app-header {
  grid-column:  1 / -1; /* -1 causes header to expand to the end of grid regardless of number of columns*/
  position: sticky; /* For fixed header */
  top: 0; /* For fixed header */
  border: 1px solid #BFBFBF;
  background-color: white;
}
.main-content {
  grid-column-start:  1;
  grid-column-end:  -1;
}
.footer {
  grid-column:  1 / -1; /* -1 causes header to expand to the end of grid regardless of number of columns*/
  background-color: rgb(52,62,71);
}
/* ---------------------------------------- Application Styling ---------------------------- */
.box {
  background-color: white;
  margin: 0 0 0 0;
  padding: 1% 10%;
  border: 1px solid #BFBFBF;
  background-color: white;
  /* border: 1px solid #BFBFBF;
  background-color: white;
  box-shadow: 3px 3px 3px 3px #aaaaaa; */
  -webkit-box-shadow: 0 1px 2px #777;
  -moz-box-shadow: 0 2px 1px #777;
  box-shadow: 0 2px 1px #777;
}
form{
  padding: 0px;
  margin: 0px;
}
form > button{
  margin-top: 40px;
}
label {
  width: 30%;
  display: block;
  text-align: right;
  padding-right: 5%;
  /* border: .5px solid lightgray; */
  display: flex;
  align-items: center;
  justify-content: flex-end;
}
.field {
  width: 50%;
  /* border: .5px solid lightgray; */
  margin-bottom: 1%;
  display: flex;
  align-items: center;
}
input{
  width: 70%;
  border: .5px solid lightgray;
  padding: 1%;
}
input:hover{
  border: .5px solid gray;
  /* background-color: white;
  box-shadow: 3px 3px 3px 3px #aaaaaa; */
}
/* button{
  margin-bottom: 1%;
  -webkit-box-shadow:0 1px 4px rgba(0, 0, 0, 0.3), 0 0 40px rgba(0, 0, 0, 0.1) inset;
  -moz-box-shadow:0 1px 4px rgba(0, 0, 0, 0.3), 0 0 40px rgba(0, 0, 0, 0.1) inset;
  box-shadow:0 1px 4px rgba(0, 0, 0, 0.3), 0 0 40px rgba(0, 0, 0, 0.1) inset;
}
button:hover{
  background-color: rgb(250, 250, 250);
  -webkit-box-shadow:0 1px 4px rgba(0, 0, 0, 0.3), 0 0 40px rgba(0, 0, 0, 0) inset;
  -moz-box-shadow:0 1px 4px rgba(0, 0, 0, 0.3), 0 0 40px rgba(0, 0, 0, 0) inset;
  box-shadow:0 1px 4px rgba(0, 0, 0, 0.3), 0 0 40px rgba(0, 0, 0, 0) inset;
} */
</style>
