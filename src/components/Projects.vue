<template>
  <div class="container background">
    <div class="main-box">
      <h1 class="header">Projects</h1>
      <div class="project-box flipInX">
        <h2>Customer Relationship Manager</h2>
        <p>A modern CRM built with optimistic reponse (no page refreshes), lightning fast searh and sort technology, and statically generated.</p>
        <h3>Built With: Vue.js, GraphQL, GraphCool, and a Static Site Generator</h3>
        <button>
          <a href='http://crm.agilentinnovations.com'>View Demo</a>
        </button>
      </div>
      <div class="project-box flipInX">
        <h2>DGnet Watchdog</h2>
        <p>A enterprise web application used by customers such as GE for asset monitoring. Hired originally to build data visualizations for their front-end displays.
          Was then hired to rebuild their entire front-end system in the Vue framework, and then hired to create a mobile friendly web version of the application.</p>
        <h3>Built With: Vue.js, Vuex, Firebase, D3.js, CSS Grid, Media Queries</h3>
        <button>Link coming soon</button>
      </div>
      <div class="project-box flipInX">
        <h2>Value Request</h2>
        <p>Assisted with the front-end development of a commercial appraisal application that allows users to
          upload CSV files, modify the CSV files in browser, conduct regression analysis with the results being
          charted in the application, and then pull user selected regressions into an adjustment grid.
          The adjustment grid then allows a user to pull in a number of sales comparables and to make
          real-time adjustments in various factors that the value of their subject propery. Upon completion of
          their anaylsis of all these criteria, the application export a CSV report for them to be able to send to their clients.</p>
        <h3>Built With: Vue.js, Vuex, Chart.js</h3>
        <button>Link coming soon</button>
      </div>
      <div class="project-box flipInX">
        <h2>Penny Pincher</h2>
        <p>A Mint-like personal budgeting web application.
        </p>
        <h3>Built With: Vue.js, Vuex, Auth0, GraphQL, GraphCool, and a Static Site Generator</h3>
        <button>Link coming soon</button>
      </div>
      <div class="project-box flipInX">
        <h2>Admin Panel</h2>
        <p>A custom built admin panel to allow for the management of users and Saas type applications.
        </p>
        <h3>Built With: Vue.js, GraphQL, GraphCool, and a Static Site Generator</h3>
        <button>Link coming soon</button>
      </div>
      <div class="project-box flipInX">
        <h2>Construction Central</h2>
        <p>A construction management web application for a custom home builder that was used internally to manage all of their day-to-day operations.
          The application started as a simple vendor management application and grew to include the following modules:
          customer relationship management, estimating, budgeting, project management, job costing, and bookkeeping.
        </p>
        <h3>Built With: Meteor.js, MongoDB</h3>
        <button>Link coming soon</button>
      </div>
      <div class="project-box flipInX">
        <h2>Cloud Cutlist</h2>
        <p>An ERP type web application that was used by a small manufacturing company to allow for a stream-lined ordering and manufacturing process.
          The application included the following modules:
          customer relationship manager, order management, process management, parametric product template modeling, and a Cut-List & Bill of Materials generation.
        </p>
        <h3>Built With: Meteor.js, MongoDB</h3>
        <button>Link coming soon</button>
      </div>
      <!-- <div class="project-box">
        <h1>Upcoming Projects</h1>
        <ul>
          <li>Website Asset Scraper</li>
          <li>Movie Display Panel</li>
          <li>Google Map Integration</li>
        </ul>
      </div> -->
    </div>
  </div>
</template>

<script>
export default {
  name: 'Projects'
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
@import "../assets/global.scss";
.main-box {
  // @include border-radius(10px);
  background-color:  rgba(255, 255, 255, 0.0);
  display: grid;
  grid-template-columns: 40vw 40vw;
  grid-column-gap: 4vw;
  margin-left: 8vw;
  margin-right: 8vw;
  padding: 1% 0%;
  p {
    font-size: 1vh;
  }
  /* opacity: 1;
  filter: alpha(opacity=50); For IE8 and earlier */
}
.main-box > h1 {
  /* padding-left: 10%; */
  padding-bottom: 2%;
  /* font-size: 2.5em; */
  color:  rgba(255, 255, 255, 0.90);
}
.header {
  grid-column:  1 / -1; /* -1 causes header to expand to the end of grid regardless of number of columns*/
}
.project-box {
  opacity: 1;
  background-color:  rgba(255, 255, 255, 1);
  /* margin-left: 5vw; */
  margin-bottom: 1vh;
  padding: 3vh 3vw;
  -webkit-box-shadow: 10px 10px 93px 0px rgba(0,0,0,0.75);
  -moz-box-shadow: 10px 10px 93px 0px rgba(0,0,0,0.75);
  box-shadow: 10px 10px 93px 0px rgba(0,0,0,0.75);
}
.project-box:hover{
  /* -webkit-transform: scale(1.01);
  -ms-transform: scale(1.01);
  transform: scale(1.01); */
  /* border: 1px solid #BFBFBF;
  background-color: white;
  box-shadow: 3px 3px 3px 3px #aaaaaa; */
  -webkit-box-shadow: 10px 10px 93px 0px rgba(0,0,0,0.75);
  -moz-box-shadow: 10px 10px 93px 0px rgba(0,0,0,0.75);
  box-shadow: 10px 10px 93px 0px rgba(0,0,0,0.75);
}
.project-box > h2 {
  padding-bottom: 2vh;
}
.project-box > p {
  font-size: 2vh;
  color: rgba(0,0,0,0.75);
}
/* a {
  font-size: 1.5em;
  color:   rgba(35,150,153,1);
} */
button {
  margin-top: 2%;
  background-color: white;
  border: 2px solid  rgba(35,150,153,1);
  border-radius: 10px;
}
button:hover{
  background-color: rgba(35,150,153,1);
  color: white;
  /* -webkit-transform: scale(1.05);
  -ms-transform: scale(1.05);
  transform: scale(1.05); */
}
button:hover > a{
  background-color: rgba(35,150,153,1);
  color: white;
  /* -webkit-transform: scale(1.05);
  -ms-transform: scale(1.05);
  transform: scale(1.05); */
}
.background {
  background-color: lightgray;
}
.gradient {
  background: -moz-linear-gradient(325deg, rgba(45,48,245,1) 0%, rgba(35,150,153,1) 100%); /* ff3.6+ */
  background: -webkit-gradient(linear, left top, right bottom, color-stop(0%, rgba(45,48,245,1)), color-stop(100%, rgba(35,150,153,1))); /* safari4+,chrome */
  background: -webkit-linear-gradient(325deg, rgba(45,48,245,1) 0%, rgba(35,150,153,1) 100%); /* safari5.1+,chrome10+ */
  background: -o-linear-gradient(325deg, rgba(45,48,245,1) 0%, rgba(35,150,153,1) 100%); /* opera 11.10+ */
  background: -ms-linear-gradient(325deg, rgba(45,48,245,1) 0%, rgba(35,150,153,1) 100%); /* ie10+ */
  background: linear-gradient(125deg, rgba(45,48,245,1) 0%, rgba(35,150,153,1) 100%); /* w3c */
  filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#2D30F5', endColorstr='#239699',GradientType=1 ); /* ie6-9 */
}
.effect8
{
    position:relative;
    -webkit-box-shadow:0 1px 4px rgba(0, 0, 0, 0.3), 0 0 40px rgba(0, 0, 0, 0.1) inset;
       -moz-box-shadow:0 1px 4px rgba(0, 0, 0, 0.3), 0 0 40px rgba(0, 0, 0, 0.1) inset;
            box-shadow:0 1px 4px rgba(0, 0, 0, 0.3), 0 0 40px rgba(0, 0, 0, 0.1) inset;
}
.effect8:before, .effect8:after
{
    content:"";
    position:absolute;
    z-index:-1;
    -webkit-box-shadow:0 0 20px rgba(0,0,0,0.8);
    -moz-box-shadow:0 0 20px rgba(0,0,0,0.8);
    box-shadow:0 0 20px rgba(0,0,0,0.8);
    top:10px;
    bottom:10px;
    left:0;
    right:0;
    -moz-border-radius:100px / 10px;
    border-radius:100px / 10px;
}
.effect8:after
{
    right:10px;
    left:auto;
    -webkit-transform:skew(8deg) rotate(3deg);
       -moz-transform:skew(8deg) rotate(3deg);
        -ms-transform:skew(8deg) rotate(3deg);
         -o-transform:skew(8deg) rotate(3deg);
            transform:skew(8deg) rotate(3deg);
}
.flipInX {
  backface-visibility: visible !important;
  animation-name: flipInX;
  animation-duration: 2s;
}
@keyframes flipInX {
  from {
    transform: perspective(400px) rotate3d(1, 0, 0, 90deg);
    animation-timing-function: ease-in;
    opacity: 0;
  }

  40% {
    transform: perspective(400px) rotate3d(1, 0, 0, -20deg);
    animation-timing-function: ease-in;
  }

  60% {
    transform: perspective(400px) rotate3d(1, 0, 0, 10deg);
    opacity: 1;
  }

  80% {
    transform: perspective(400px) rotate3d(1, 0, 0, -5deg);
  }

  to {
    transform: perspective(400px);
  }
}
@keyframes slideInLeft {
  from {
    transform: translate3d(-100%, 0, 0);
    visibility: visible;
  }

  to {
    transform: translate3d(0, 0, 0);
  }
}
@keyframes fadeIn1 {
    0%   {background-color:rgba(255, 255, 255, 0.00)};
    25%  {background-color:rgba(255, 255, 255, 0.20)};
    50%  {background-color:rgba(255, 255, 255, 0.70)};
    100% {background-color:rgba(255, 255, 255, 0.90)};
}
@keyframes fadeIn2 {
    0%   {color:rgba(255, 255, 255, 0.00)};
    25%  {color:rgba(255, 255, 255, 0.20)};
    50%  {color:rgba(255, 255, 255, 0.70)};
    100% {color:rgba(255, 255, 255, 0.90)};
}
</style>
