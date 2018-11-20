<template>
  <div>
    <router-view></router-view>
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

<style lang="scss">
@import "../assets/global.scss";
/* ------------------------ Application Padding, Margin, & Background --------------- */
/* Removes default margin and padding for all html elements */
* { margin: 0; padding: 0; }
html {
  background-color: white;
}
/* ------------------------- Application Variables ------------------------- */
:root {
  --color1: rgba(45,48,245,1);
  --color2: rgb(42, 177, 182);
  --link-color: rgb(48,62,240);
  --shadow3: 1.5vh -1vh 1vh rgba(0, 7, 2, 0.3);
  --shadow1: 0 .5vh 2vh rgba(0, 0, 0, 0.3), 0 0 40px rgba(0, 0, 0, 0.1) inset;
  --shadow2: 1.5vh -1vh 1vh rgba(0, 0, 0, 0.3);
}

/* ---------------------------- Application Font Styling -------------------------- */
html {
  font-family: 'Open Sans', sans-serif;
}
h1 {
  font-size: 5vh;
}
h2 {
  font-size: 3vh;
}
h3 {
  font-size: 2vh;
}
h4 {
  font-size: 1.8vh;
}
p {
  font-size: 2.5vh;
}
a {
  font-size: 2vh;
  text-decoration: none;
}

/* ---------------------------------  Application Layout ------------------------ */
.app {
  height: 100vh; /* Extends page to bottom of view port even if page content is not long enough */
  display: grid;
  grid: 8vh auto 10vh / 1fr;
}
.app-header {
  grid-column:  1 / -1; /* -1 causes header to expand to the end of grid regardless of number of columns*/
  position: sticky; /* For fixed header */
  top: 0; /* For fixed header */
  border: .15vh solid #BFBFBF;
  background-color: white;
  // @include shadow2;
  @include inset-shadow4;
}
.main-content {
  grid-column-start:  1;
  grid-column-end:  -1;
}
.footer {
  grid-column:  1 / -1; /* -1 causes header to expand to the end of grid regardless of number of columns*/
  background-color: rgb(52,62,71);
}
/* ---------------------------------------- Application Component Styling ---------------------------- */
.page {
  height: calc(.98 * var(--page-height));
  width: calc(.90 * var(--page-width));
  background-color: white;
  margin: auto;
  padding: 1vw;
  -webkit-box-shadow: 0 .25vh 1vh #777;
  -moz-box-shadow: 0 .25vh 1vh #777;
  box-shadow: 0 .5vh 2vh #777;
}

.box {
  background-color: white;
  -webkit-box-shadow: 0 .25vh 1vh #777;
  -moz-box-shadow: 0 .25vh 1vh #777;
  box-shadow: 0 .5vh 2vh #777;
}

.modal {
  margin-top: 5vh;
  border: .5vh solid rgb(70, 70, 70);
  -webkit-box-shadow: 0 .25vh 1vh #777;
  -moz-box-shadow: 0 .25vh 1vh #777;
  box-shadow: 2vh 5vh 2vh #777;
}
.card {

}

.small_logo {
    background:url("/static/images/b1/small_logo_without_text.png") no-repeat;
    background-size:contain;
}
/* ---------------------------------------- Application Form Styling ---------------------------- */
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
  height: 3vh;
  font-size: 2vh;
  border: .25vh solid lightgray;
}
input:hover{
  border-bottom: .25vh solid var(--color1);
}

/* ----------------------------------------- Application List Styling -------------------------- */

li {
  list-style-type: none;
}

/* ------------------------------------ Application Button Styling ----------------------------- */
button{
  font-size: 2vh;
  padding: 1vh;
  height: auto;
  width: auto;
  -webkit-box-shadow:0 .3vh 1vh rgba(0, 0, 0, 0.3), 0 0 2vh rgba(0, 0, 0, 0.1) inset;
  -moz-box-shadow:0 .3vh 1vh rgba(0, 0, 0, 0.3), 0 0 2vh rgba(0, 0, 0, 0.1) inset;
  box-shadow:0 .3vh 1vh rgba(0, 0, 0, 0.3), 0 0 4vh rgba(0, 0, 0, 0.1) inset;
}

button:hover{
  cursor: pointer;
  /* background-color: rgb(250, 250, 250); */
  -webkit-box-shadow:0 .3vh 1vh rgba(0, 0, 0, 0.3), 0 0 2vh rgba(0, 0, 0, 0.1) inset;
  -moz-box-shadow:0 .3vh 1vh rgba(0, 0, 0, 0.3), 0 0 2vh rgba(0, 0, 0, 0.1) inset;
  box-shadow:0 .3vh 1vh rgba(0, 0, 0, 0.2), 0 0 2vh rgba(0, 0, 0, 0.1) inset;
}

.button2 {
    color: white;
    background-color: var(--color3);
    font-size: 3vh;
    cursor: pointer;
    border-radius: 1.5vh;
    border: thin solid #888;
    box-shadow: 1vh 1vh 1vh grey;
    white-space: nowrap;
    padding-left: 3vh;
    padding-right: 3vh;
}

.button2:hover {
    background-color: var(--color-hover2);
    color: white;
    border-radius: 1.5vh;
    border: thin solid white;
    box-shadow: 1vh 1vh 1vh grey;
    white-space: nowrap;
}

/* Extra Small Devices, Phones */
@media (max-width : 480px) {
}
</style>
