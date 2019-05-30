<template>
  <div class="gradient">
    <div class="page-layout">
      <h1 class="header">Machine Learning Projects</h1>
      <!-- <div class="project-box">
        <div class="title">Smart Beta Portfolio Building</div>
        <div class="visual">
          <img src="../assets/chart6.png">
        </div>
        <div class="description">Built a custom smart beta ETF that tracks an external benchmark. Calculated its tracking error and used that
          along with a covariance matrix within a convex equation to determine optimal reweighting of portfolio for least amount of tracking error possible.
        </div>
        <div class="technology">BBuilt With: Python, Jupyter Notebooks, Pandas, NumPy, CvxPy, SciPy, Plotly</div>
        <div class="button-row">
          <button>
            <a href=https://watchdog.dgnet.cloud/>View Production Site</a>
          </button>
        </div>
      </div> -->
      <div class="project-box slideInRight">
        <div class="title">Sentiment Analysis w NLP & RNN</div>
        <!-- <div class="content"> -->
          <div class="visual">
            Visual coming soon . . .
              <!-- <img src="../assets/chart5.png"> -->
              <!-- <img src="../assets/chart6.png"> -->
          </div>
          <div class="description">Built a natrual language processing tool that scrapes different financial websites, stores the data, and then uses a recurrant neural
            network to conduct sentiment analysis and make predictions about future data.
          </div>
        <div class="technology">Built With: Python, Jupyter Notebooks, Pandas, NumPy, PyTorch, Plotly, Beautiful Soup</div>
      </div>
      <h1 class="header">Quantitative Financial Analysis Projects</h1>
      <!-- <ul>
        <li class="hidden" v-infocus="'slideInLeft'">Machine Learning Applications</li>
      </ul> -->
      <div class="project-box hidden" v-infocus="'slideInRight'">
        <div class="title">Smart Beta Portfolio Building</div>
        <!-- <div class="content"> -->
        <div class="visual">
            <!-- <img src="../assets/chart5.png"> -->
            <img src="../assets/chart6.png">
        </div>
        <div class="description">Built a custom smart beta ETF that tracks an external benchmark. Calculated its tracking error and used that
          along with a covariance matrix within a convex equation to determine optimal reweighting of portfolio for least amount of tracking error possible.
        </div>
        <div class="technology">Built With: Python, Jupyter Notebooks, Pandas, NumPy, CvxPy, SciPy, Plotly</div>
      </div>
      <div class="project-box hidden" v-infocus="'slideInLeft'">
        <div class="title">Distribution Analysis & Normalization Tool</div>
        <!-- <div class="content"> -->
          <div class="visual">
              <img src="../assets/chart4.png">
          </div>
          <div class="description">This tool visualizes the returns generated across an entire portfolio on all its various assets and compares them with a standard normal distribution overlay.
            Then applies a Kolmogorov-Smirnoff Test to identify outliers so that the algorithm can be adjusted to either take
            further advantage of the outliers or filter them out altogether.
          </div>
        <div class="technology">Built With: Python, Jupyter Notebooks, Pandas, NumPy, SciPy, Plotly</div>
      </div>
      <div class="project-box hidden" v-infocus="'slideInRight'">
        <div class="title">Signal Entry Display Tool</div>
        <!-- <div class="content"> -->
          <div class="visual">
              <img src="../assets/chart3.png">
          </div>
          <div class="description">Visualization tool for analyzing a trading signal's expected entry points.
          </div>
        <div class="technology">Built With: Python, Jupyter Notebooks, Pandas, NumPy, SciPy, Plotly</div>
      </div>
      <div class="project-box hidden" v-infocus="'slideInLeft'">
        <div class="title">Breakout Visualization Tool</div>
        <!-- <div class="content"> -->
          <div class="visual">
              <img src="../assets/chart2.png">
          </div>
          <div class="description">This tool allows for the visualization of breakouts based user defined criteria and signal inputs.
          </div>
        <div class="technology">Built With: Python, Jupyter Notebooks, Pandas, NumPy, SciPy, Plotly</div>
      </div>
      <div class="project-box hidden" v-infocus="'slideInRight'">
        <div class="title">Statistical Significance Evaluation Tool</div>
        <!-- <div class="content"> -->
          <div class="visual">
              <img src="../assets/chart1.png">
          </div>
          <div class="description">Built a statistical significance testing tool for trading strategies. This tool divides the trading system's return data into quantiles for deeper analysis,
            and uses SciPy to conduct different hypothesis tests to evaluate if the signal is obtaining its results from randomness or real alpha.
          </div>
        <div class="technology">Built With: Python, Jupyter Notebooks, Pandas, NumPy, SciPy, Plotly</div>
      </div>
      <h1 class="header">Web Application Projects</h1>
      <div class="project-box hidden" v-infocus="'slideInLeft'">
        <div class="title">GCN - Social Networking Platform</div>
        <!-- <div class="content"> -->
          <div class="visual">
              <img src="../assets/gcn.png" href='https://www.goodcitizen.network/#/'>
          </div>
          <div class="description">The LinkedIn for volunteering. A social network site where non-profit organizations can post all of their volunteering and donation opportunities and where users can
            interact, commit, and organize around them. It includes messaging, gamification, in-app donations, and more.
          </div>
        <!-- </div> -->
        <div class="technology">Built With: Vue, CSS Grid, Node, MongoDB, AWS</div>
        <div class="button-row">
          <button>
            <a href='https://www.goodcitizen.network/#/'>View Production Site</a>
          </button>
        </div>
        <!-- <button>
          <a href='http://gcn.agilentinnovations.com'>New Version Prototype</a>
        </button> -->
      </div>
      <div class="project-box hidden" v-infocus="'slideInRight'">
        <div class="title">DGnet Watchdog - Asset Monitoring Platform</div>
        <!-- <div class="content"> -->
          <div class="visual">
              <img src="../assets/DGN.png" ref='https://watchdog.dgnet.cloud/'>
          </div>
          <div class="description">An enterprise web application used by customers such as GE for asset monitoring. Hired originally to build data visualizations for their front-end displays.
            Was then hired to rebuild the entire front-end system in the Vue framework and then to create a mobile friendly web version of the application.
          </div>
        <!-- </div> -->
        <div class="technology">Built With: Vue, Vuex, Firebase, D3, CSS Grid</div>
        <div class="button-row">
          <button>
            <a href=https://watchdog.dgnet.cloud/>View Production Site</a>
          </button>
        </div>
      </div>
      <div class="project-box hidden" v-infocus="'slideInLeft'">
        <div class="title">Cloud Cutlist - Manufacturing ERP</div>
        <div class="visual">
          <img src="../assets/meteor.jpeg">
        </div>
        <div class="description">An ERP web application for small-scale manufacturing companies to allow for a stream-lined ordering and manufacturing process.
          The application includes modules for:
          customer relationship manager, order management, process management, parametric product template modeling, and a cut-list & bill of materials generator.
        </div>
        <div class="technology">Built With: Meteor, MongoDB</div>
        <!-- <button>Link Coming Soon</button> -->
      </div>
      <div class="project-box hidden" v-infocus="'slideInRight'">
        <div class="title">Construction Central - Construction ERP</div>
        <div class="visual">
          <img src="../assets/meteor.jpeg">
        </div>
        <div class="description">A construction management web application for custom home builders with modules for:
          customer relationship management, vendor management, estimating, budgeting, project management, job costing, and bookkeeping.
        </div>
        <div class="technology">Built With: Meteor, MongoDB</div>
        <!-- <button>Link Coming Soon</button> -->
      </div>
      <div class="project-box hidden" v-infocus="'slideInLeft'">
        <div class="title">Value Request - Real Estate Appraisal</div>
        <!-- <div class="content"> -->
        <div class="visual">
          <img src="../assets/Value Request.png">
        </div>
        <div class="description">Front-end development of a commercial appraisal application that allows users to
          upload and modify CSV files in browser, conduct regression analysis and view charted results, and then pull selected regressions into an adjustment grid.
          The adjustment grid is an editable table with reactive calculations used to assess the value of a subject property.
        </div>
        <!-- </div> -->
        <div class="technology">Built With: Vue, Vuex, Auth0, Chart.js</div>
        <!-- <button>Link Coming Soon</button> -->
      </div>
      <div class="project-box hidden" v-infocus="'slideInRight'">
        <div class="title">Agilent - Customer Relationship Manager</div>
        <!-- <div class="content"> -->
          <div class="visual">
              <img src="../assets/CRM.png" href='http://crm.agilentinnovations.com'>
          </div>
          <div class="description">
            A modern Customer Relationship Manager project in progress that is built as a Single Page Application (no page refreshes) with lightning fast search and sort technology and statically generated.
          </div>
        <!-- </div> -->
          <div class="technology">Built With: Vue, GraphQL, GraphCool, Apollo, and a Static Site Generator</div>
        <!-- <button>Link Coming Soon</button> -->
        <!-- <button>
          <a href='http://crm.agilentinnovations.com'>View Demo</a>
        </button> -->
      </div>
      <div class="project-box hidden" v-infocus="'slideInLeft'">
        <div class="title">Penny Pincher - Personal Finance</div>
        <div class="visual">
          <img src="../assets/logo.png">
        </div>
        <div class="description">A Mint-like personal budgeting web application with an editable table of expenses that performs real-time
          reactive calculations and displays.
        </div>
        <div class="technology">Built With: Vue, Auth0, GraphQL, GraphCool, and a Static Site Generator</div>
        <!-- <button>Link Coming Soon</button> -->
      </div>
      <div class="project-box hidden" v-infocus="'slideInRight'">
        <div class="title">Agilent - Admin Panel</div>
        <div class="visual">
          <img src="../assets/logo.png">
        </div>
        <div class="description">A custom built admin panel to allow for the management of users and SaaS type applications.
        </div>
        <div class="technology">Built With: Vue, GraphQL, GraphCool, and a Static Site Generator</div>
        <!-- <button>Link Coming Soon</button> -->
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
  name: 'Projects',
  directives: {
    infocus: {
      isLiteral: true,
      inserted: (el, binding, vnode) => {
        let f = () => {
          let rect = el.getBoundingClientRect()
          let inView = (
            rect.width > 0 &&
            rect.height > 0 &&
            rect.top >= 0 &&
            rect.bottom <= (window.innerHeight + 300 || document.documentElement.clientHeight)
          )
          if (inView) {
            el.classList.add(binding.value)
            window.removeEventListener('scroll', f)
          }
        }
        window.addEventListener('scroll', f)
        f()
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
@import "../assets/global.scss";
.page-layout {
  // @include border-radius(10px);
  background-color:  rgba(255, 255, 255, 0.0);
  display: grid;
  grid-template-rows: max-content;
  grid-template-columns: 40vw 40vw;
  grid-column-gap: 4vw;
  margin-left: 8vw;
  margin-right: 8vw;
  padding: 1% 0%;
  h1 {
    padding-top: 2vh;
    padding-bottom: 2vh;
    color:  rgba(255, 255, 255, 0.90);
    text-shadow: 1.5vh 1.5vh 13vh rgba(0,0,0,0.75);
  }
  /* opacity: 1;
  filter: alpha(opacity=50); For IE8 and earlier */
  .header {
    grid-column:  1 / -1; /* -1 causes header to expand to the end of grid regardless of number of columns*/
  }
}
.project-box {
  //border: 1px solid red;
  display: grid;
  grid-template-columns: 1fr;
  //grid-auto-rows: minmax(min-content, max-content);
  //grid-template-rows: min-content 1fr 1fr 1fr 1fr;
  grid-template-rows: 10vh 32vmin auto auto min-content;
  background-color:  rgba(255, 255, 255, 1);
  margin-bottom: 1vh;
  padding: 3vh 3vw;
  // grid-template-areas:
  // "test1"
  // "test2"
  // "test3"
  // "test4"
  // "test5";
  .title {
    //background-color: lightseagreen;
    margin-bottom: 2vh;
    font-size: 3vmin;
  }
  .visual {
    //background-color: orange;
    text-align: center;
    border-bottom: 1px solid black;
    img {
      height: 97%;
      width: 90%;
      padding-bottom: 3%;
    }
  }
  .description {
    //background-color: lightblue;
    font-size: 2vh;
    color: rgba(0,0,0,0.75);
    //top: 0;
    margin-top: 2vh;
  }
  .technology {
    //background-color: lightcoral;
    font-size: 2vmin;
    //margin-bottom: 2vh;
    margin-top: 3vh;
    align-self: end;
  }
  .button-row {
    //background-color: lightgreen;
    align-self: end;
    button {
      @include shadow4;
      margin-top: 1vh;
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
  }
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
.hidden {
  opacity: 0;
}
.flipInX {
  opacity: 1;
  backface-visibility: visible !important;
  animation-name: flipInX;
  animation-duration: 1s;
  //transition: all 0.5s ease-out;
}
.slideInLeft {
  opacity: 1;
  animation-duration: 1s;
  animation-name: slideInLeft2;
  /* transform: translate(0, 0); */
  -webkit-transition: all 0.5s ease-out;
  -moz-transition: all 0.5s ease-out;
  transition: all 0.5s ease-out;
}
.slideInRight {
    opacity: 1;
    animation-duration: 1s;
    animation-name: slideInRight;
    /* transform: translate(0, 0); */
    -webkit-transition: all 0.5s ease-out;
    -moz-transition: all 0.5s ease-out;
    transition: all 0.5s ease-out;
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
@keyframes slideInLeft2 {
  from {
    transform: translate3d(-100%, 50%, 0);
    visibility: visible;
    //width: 50vw;
  }

  to {
    transform: translate3d(0, 0, 0);
    //width: 100vw;
  }
  // from {
  //   margin-right: 100vw;
  //   //width: 100vw;
  // }

  // to {
  //   margin-right: 0vw;
  //   //width: 100vw;
  // }
}
@keyframes slideInRight {
  from {
    transform: translate3d(100%, 50%, 0);
    visibility: visible;
    //margin-left: 100vw;
    //width: 100vw;
  }

  to {
    transform: translate3d(0, 0, 0);
    //margin-left: 0vw;
    //width: 100vw;
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
//////////////////////////////////////////////////// Mobile ///////////////////////////////////////////////
@media only screen and (max-width: 700px) {
  .page-layout {
    // @include border-radius(10px);
    background-color:  rgba(255, 255, 255, 0.0);
    display: grid;
    grid-template-columns: 80vw;
    //grid-column-gap: 4vw;
    margin-left: 10vw;
    margin-right: 10vw;
    //padding: 1% 0%;
    h1 {
      padding-bottom: 2%;
      color:  rgba(255, 255, 255, 0.90);
      text-shadow: 1.5vh 1.5vh 13vh rgba(0,0,0,0.75);
    }
    /* opacity: 1;
    filter: alpha(opacity=50); For IE8 and earlier */
  }
  .project-box {
    .title {
    }
    .visual {
      img {
      }
    }
    .description {
    }
    .technology {
    }
    .button-row {
    }
  }
}
</style>
