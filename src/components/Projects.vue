<template>
  <div class="container gradient">
    <div class="main-box">
      <h1 class="header">Projects</h1>
      <div class="project-box flipInX">
        <h2>GCN - Social Networking Platform</h2>
        <!-- <div class="content"> -->
          <a href='http://gcn.agilentinnovations.com'>
            <img src="../assets/gcn.png" href='http://gcn.agilentinnovations.com'>
          </a>
          <p>The LinkedIn for volunteering. A Single Page Application (no page refreshes) with lightning fast search and data caching technology. Login with user: test5@test.com and pass: test </p>
        <!-- </div> -->
        <h3>Built With: Vue.js, GraphQL, Apollo, GraphCool, and a Static Site Generator</h3>
        <button>
          <a href='http://gcn.agilentinnovations.com'>View Demo</a>
        </button>
      </div>
      <div class="project-box flipInX">
        <h2>Agilent - Customer Relationship Manager</h2>
        <!-- <div class="content"> -->
          <a href='http://crm.agilentinnovations.com'>
            <img src="../assets/CRM.png" href='http://crm.agilentinnovations.com'>
          </a>
          <p>A modern Customer Relationship Manager project in progress that is built as a Single Page Application (no page refreshes) with lightning fast search and sort technology and statically generated.</p>
        <!-- </div> -->
        <h3>Built With: Vue.js, GraphQL, GraphCool, Apollo, and a Static Site Generator</h3>
        <button>
          <a href='http://crm.agilentinnovations.com'>View Demo</a>
        </button>
      </div>
      <div class="project-box flipInX">
        <h2>DGnet Watchdog - Asset Monitoring</h2>
        <!-- <div class="content"> -->
          <a href='https://watchdog.dgnet.cloud/'>
            <img src="../assets/DGN.png" ref='https://watchdog.dgnet.cloud/'>
          </a>
          <p>An enterprise web application used by customers such as GE for asset monitoring. Hired originally to build data visualizations for their front-end displays.
            Was then hired to rebuild the entire front-end system in the Vue framework and then to create a mobile friendly web version of the application.</p>
        <!-- </div> -->
        <h3>Built With: Vue.js, Vuex, Firebase, D3.js, CSS Grid, Media Queries</h3>
        <button>
          <a href=https://watchdog.dgnet.cloud/>View Production Site</a>
        </button>
      </div>
      <div class="project-box flipInX">
        <h2>Value Request - Real Estate Appraisal</h2>
        <!-- <div class="content"> -->
        <img src="../assets/Value Request.png">
        <p>Assisted with the front-end development of a commercial appraisal application that allows users to
          upload and modify CSV files in browser, conduct regression analysis and view charted results, and then pull selected regressions into an adjustment grid.
          The adjustment grid is an editable table with reactive calculations used to assess the value of a subject property.</p>
        <!-- </div> -->
        <h3>Built With: Vue.js, Vuex, Auth0, Chart.js</h3>
        <button>Link coming soon</button>
      </div>
      <div class="project-box flipInX">
        <h2>Penny Pincher - Personal Finance</h2>
        <img src="../assets/logo.png">
        <p>A Mint-like personal budgeting web application with an editable table of expenses that performs real-time
          reactive calculations and displays.</p>
        <h3>Built With: Vue.js, Vuex, Auth0, GraphQL, GraphCool, and a Static Site Generator</h3>
        <button>Link coming soon</button>
      </div>
      <div class="project-box flipInX">
        <h2>Agilent - Admin Panel</h2>
        <img src="../assets/logo.png">
        <p>A custom built admin panel to allow for the management of users and SaaS type applications.
        </p>
        <h3>Built With: Vue.js, GraphQL, GraphCool, and a Static Site Generator</h3>
        <button>Link coming soon</button>
      </div>
      <div class="project-box flipInX">
        <h2>Construction Central - Construction ERP</h2>
        <img src="../assets/meteor.jpeg">
        <p>A construction management web application for custom home builders with the following modules:
          customer relationship management, vendor management, estimating, budgeting, project management, job costing, and bookkeeping.
        </p>
        <h3>Built With: Meteor.js, MongoDB</h3>
        <button>Link coming soon</button>
      </div>
      <div class="project-box flipInX">
        <h2>Cloud Cutlist - Manufacturing ERP</h2>
        <img src="../assets/rails.png">
        <p>An ERP web application for small-scale manufacturing companies to allow for a stream-lined ordering and manufacturing process.
          The application included the following modules:
          customer relationship manager, order management, process management, parametric product template modeling, and a Cut-List & Bill of Materials generator.
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
  h1 {
    padding-bottom: 2%;
    color:  rgba(255, 255, 255, 0.90);
    text-shadow: 1.5vh 1.5vh 13vh rgba(0,0,0,0.75);
  }
  /* opacity: 1;
  filter: alpha(opacity=50); For IE8 and earlier */
}
.header {
  grid-column:  1 / -1; /* -1 causes header to expand to the end of grid regardless of number of columns*/
}
.project-box {
  display: grid;
  grid-template-columns: 50% 50%;
  grid-template-rows: 7vh 32vh auto 10vh 10vh;
  @include shadow2;
  opacity: 1;
  background-color:  rgba(255, 255, 255, 1);
  margin-bottom: 1vh;
  padding: 3vh 3vw;
  h2 {
    // border: 1px solid red;
    grid-column: 1 / 3;
    padding-bottom: 2vh;
    height: 3vh;
  }
  h3 {
    // border: 1px solid red;
    grid-column: 1 / 3;
    margin-top: 3vh;
  }
  img {
    grid-column: 1 / 3;
    height: 30vh;
    max-width: 30vw;
    //padding-bottom: 2vh;
    //width: 30vh;
  }
  p {
    // border: 1px solid red;
    grid-column: 1 / 3;
    font-size: 2vh;
    color: rgba(0,0,0,0.75);
    top: 0;
  }
  button {
    @include shadow4;
    // @include inset-shadow3;
    margin-top: 1vh;
    // background-color: white;
    background-color: var(--color2);
    color: white;
    border: none;
    border-radius: 1vh;
    a {
      color: white;
    }
  }
  button:hover {
    @include shadow3;
  }
  .content {
    // grid-column: 1 / 3;
    // display: flex;
    // // flex-wrap: wrap;
    // align-items: flex-start;
  }
}
.project-box:hover{
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
