<template>
  <div class="page-layout">
    <div class="gradient panel1">
      <!-- <svg xmlns="http://www.w3.org/2000/svg" width="200px" height="200px" >
        <defs>
          <linearGradient id="lgrad" x1="0%" y1="14%" x2="100%" y2="86%" >
            <stop offset="0%" style="stop-color:rgb(42,23,255);stop-opacity:1" />
            <stop offset="100%" style="stop-color:rgb(35,150,153);stop-opacity:1" />
          </linearGradient>
        </defs>
        <rect x="0" y="0" width="100%" height="100%" fill="url(#lgrad)"/>
      </svg> -->
      <h1 class="slideInMain">Agilent is</h1>
      <h2>Agile + Intelligent</h2>
    </div>
    <div class="panel2">
      <h1>Philosophy</h1>
      <p>To live at the very bleeding edge of technology where the status quo is obliterated and obtaining a product that's faster, more reliable, and maintains a higher lever of security is just part of the everyday. </p>
    </div>
    <div class="panel3 gradient">
      <h1 class="hidden" v-infocus="'slideInLeft'">Our Focus</h1>
      <ul>
        <!-- <li>Basic Websites</li> -->
        <li class="hidden" v-infocus="'slideInLeft'">Machine Learning Applications</li>
        <li class="hidden" v-infocus="'slideInLeft'">Data Analysis & Visualizations</li>
        <li class="hidden" v-infocus="'slideInLeft'">Complex Web Applications</li>
        <li class="hidden" v-infocus="'slideInLeft'">MVPs</li>
        <!-- <li>Artificial Intelligence</li> -->
      </ul>
      <!-- <h2>Basic Websites, Complex Web applications, Artificial Intelligence </h2> -->
    </div>
    <div class="panel4">
      <h1>Sandbox</h1>
      <!-- <h2>Counter, timer, clock</h2> -->
      Coming soon
    </div>
    <div class="panel5 gradient">
      <h1 class="hidden" v-infocus="'slideInRight'">Core Technologies</h1>
      <ul>
        <li class="hidden" v-infocus="'slideInRight'">Python</li>
        <li class="hidden" v-infocus="'slideInRight'">Jupyter Notebooks</li>
        <li class="hidden" v-infocus="'slideInRight'">Machine Learning Libraries</li>
        <li class="hidden" v-infocus="'slideInRight'">Pandas, NumPy, SciPy, PyTorch</li>
        <li class="hidden" v-infocus="'slideInRight'">Data Visualization Libraries</li>
        <li class="hidden" v-infocus="'slideInRight'">Amazon Web Services (AWS)</li>
        <br>
        <li class="hidden" v-infocus="'slideInRight'">JavaScript, HTML, CSS</li>
        <li class="hidden" v-infocus="'slideInRight'">Vue</li>
        <li class="hidden" v-infocus="'slideInRight'">GraphQL</li>
        <li class="hidden" v-infocus="'slideInRight'">Apollo</li>
        <li class="hidden" v-infocus="'slideInRight'">Prisma</li>
        <li class="hidden" v-infocus="'slideInRight'">Static Site Generators</li>
      </ul>
      <!-- <h2>Pull examples from Netlify, Vue, GraphQL, Apollo, etc </h2> -->
    </div>
  </div>
</template>

<script>
export default {
  name: 'Home',
  // This function adds a new v-directive
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
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight)
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

<style lang="scss" scoped>
@import "../assets/global.scss";
.page-layout {
  display: grid;
  grid-template-rows: auto auto auto auto auto;
  grid-template-columns: 100%;
  grid-template-areas:
  "panel1"
  "panel2"
  "panel3"
  "panel4"
  "panel5";
  .panel1 {
    //border: 1px solid red;
    grid-area: panel1;
    padding-left: 5vw;
    padding-top: 6vh;
    padding-bottom: 4vh;
    h1 {
      font-size: 20vmin;
    }
    h2 {
      font-size: 10vmin;
      padding-left: 40vw;
    }
  }
  .panel2 {
    //border: 1px solid red;
    grid-area: panel2;
    color: rgb(100, 100, 100);
  }
  .panel3 {
    grid-area: panel3;
    text-align: right;
  }
  .panel4 {
    grid-area: panel4;
    text-align: center;
    color: rgb(100, 100, 100);
  }
  .panel5 {
    grid-area: panel5;
    text-align: left;
  }
  .panel1, .panel2, .panel3, .panel4, .panel5 {
    //@include shadow2;
    //@include inset-shadow3;
    height: auto;
    padding-left: 8vw;
    padding-right: 8vw;
    border-bottom: .15vh solid #BFBFBF;
    h1 {
      padding-bottom: 2vh;
    }
  }
  .panel2, .panel3, .panel4, .panel5 {
    padding-top: 3%;
    padding-bottom: 6%;
    p {
      font-size: 2.5vmin;
    }
    li {
      font-size: 3vmin;
    }
  }
  .gradient {
    color: white;
    background: -moz-linear-gradient(325deg, rgba(45,48,245,1) 0%, rgba(35,150,153,1) 100%); /* ff3.6+ */
    background: -webkit-gradient(linear, left top, right bottom, color-stop(0%, rgba(45,48,245,1)), color-stop(100%, rgba(35,150,153,1))); /* safari4+,chrome */
    background: -webkit-linear-gradient(325deg, rgba(45,48,245,1) 0%, rgba(35,150,153,1) 100%); /* safari5.1+,chrome10+ */
    background: -o-linear-gradient(325deg, rgba(45,48,245,1) 0%, rgba(35,150,153,1) 100%); /* opera 11.10+ */
    background: -ms-linear-gradient(325deg, rgba(45,48,245,1) 0%, rgba(35,150,153,1) 100%); /* ie10+ */
    background: linear-gradient(125deg, rgba(45,48,245,1) 0%, rgba(35,150,153,1) 100%); /* w3c */
    filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#2D30F5', endColorstr='#239699',GradientType=1 ); /* ie6-9 */
  }
  .hidden {
    opacity: 0;
  }
  .slideInMain {
    opacity: 1;
    animation-duration: 2s;
    animation-name: slideInMain;
    /* transform: translate(0, 0); */
    -webkit-transition: all 0.5s ease-out;
    -moz-transition: all 0.5s ease-out;
    transition: all 0.5s ease-out;
  }
  .slideInLeft {
    opacity: 1;
    animation-duration: 3s;
    animation-name: slideInLeft;
    /* transform: translate(0, 0); */
    -webkit-transition: all 0.5s ease-out;
    -moz-transition: all 0.5s ease-out;
    transition: all 0.5s ease-out;
  }
  .slideInRight {
    opacity: 1;
    animation-duration: 2s;
    animation-name: slideInRight;
    /* transform: translate(0, 0); */
    -webkit-transition: all 0.5s ease-out;
    -moz-transition: all 0.5s ease-out;
    transition: all 0.5s ease-out;
  }
  @keyframes slideInMain {
    from {
      margin-left: 100vw;
      width: 100vw;
      font-size: 40vmin;
    }

    to {
      margin-left: 0vw;
      width: 100vw;
      font-size: 20vmin;
    }
  }
  @keyframes slideInRight {
    from {
      margin-left: 100vw;
      width: 100vw;
    }

    to {
      margin-left: 0vw;
      width: 100vw;
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
}
</style>
