<template>
  <div class="container">
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
      <h1 class="slideInRight">Agilent is</h1>
      <h2>Agile + Intelligent</h2>
    </div>
    <div class="panel2">
      <h1>Philosophy</h1>
      <p>To live at the very bleeding edge of technology where the status quo is obliterated and obtaining a product that's faster, more reliable, and maintains a higher lever of security is just part of the everyday. </p>
    </div>
    <div class="panel3 gradient">
      <h1 class="hidden" v-infocus="'slideInLeft'">Our Focus</h1>
      <ul class="hidden" v-infocus="'slideInLeft'">
        <!-- <li>Basic Websites</li> -->
        <li>Complex Web Applications</li>
        <li>MVPs</li>
        <li>Data Visualizations</li>
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
      <ul class="hidden" v-infocus="'slideInRight'">
        <li>Vue.js</li>
        <li>GraphQL</li>
        <li>Apollo</li>
        <li>Prisma/GraphCool</li>
        <li>Static Site Generators</li>
        <li>Worldwide Content Delivery Network</li>
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

<style scoped>
  .container {
    display: grid;
    grid-template-rows: auto auto auto auto auto;
  }
  h1 {
    padding-bottom: 2vh;
  }
  .panel1, .panel2, .panel3, .panel4, .panel5 {
    height: auto;
    padding: .5vh 5vh;
    border-bottom: .15vh solid #BFBFBF;
  }
  .panel1 {
    padding-left: 5vw;
    padding-top: 6vh;
    padding-bottom: 4vh;
  }
  .panel1 > h1 {
    font-size: 20vh;
  }
  .panel1 > h2 {
    font-size: 10vh;
    padding-left: 40vw;
  }
  .panel2, .panel3, .panel4, .panel5 {
    padding: 3% 10% 6% 10%;
    font-size: 1.5em;
  }
  .panel2 {
    color: rgb(100, 100, 100);
  }
  .panel3 {
    text-align: right;
  }
  .panel4 {
    text-align: center;
    color: rgb(100, 100, 100);
  }
  .panel5 {
    text-align: left;
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
  @keyframes slideInRight {
    from {
      margin-left: 100%;
      width: 100%;
    }

    to {
      margin-left: 0vw;
      width: 100%;
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
</style>
