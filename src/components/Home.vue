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
      <h1>Agilent is</h1>
      <h2>Agile + Intelligent</h2>
    </div>
    <div class="panel2">
      <h1>Philosophy</h1>
      <p>To live at the very bleeding edge of technology where the status quo is obliterated and obtaining a product that's faster, more reliable, and maintains a higher lever of security is just part of the everyday. </p>
    </div>
    <div class="panel3 gradient">
      <h1>Our Focus</h1>
      <ul>
        <li>Basic Websites</li>
        <li>Complex Web Applications</li>
        <li>Artificial Intelligence</li>
      </ul>
      <!-- <h2>Basic Websites, Complex Web applications, Artificial Intelligence </h2> -->
    </div>
    <div class="panel4">
      <h1>Sandbox</h1>
      <!-- <h2>Counter, timer, clock</h2> -->
      Coming soon
    </div>
    <div class="panel5 gradient">
      <h1>Technologies</h1>
      <h2>Vue.js, GraphQL, Apollo, Static Site Generators </h2>
      <!-- <h2>Pull examples from Netlify, Vue, GraphQL, Apollo, etc </h2> -->
    </div>
  </div>
</template>

<script>
export default {
  name: 'Home'
}
</script>

<style scoped>
  .container {
    display: grid;
    grid-template-rows: auto auto auto 300px 300px;
  }
  .panel1, .panel2, .panel3, .panel4, .panel5 {
    padding: 1% 10%;
    border: 1px solid #BFBFBF;
  }
  .panel1 {
    padding-top: 2.5%;
    height: auto;
  }
  .panel1 > h1 {
    font-size: 8em;
    margin: 0;
    padding: 0;
  }
  .panel1 > h2 {
    font-size: 3em;
    padding-left: 50%;
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
  li {
    font-size: 1.2em;
    list-style-type: none;
  }
  .grid-container {
    display: grid;
    grid-template-columns: 5% auto auto auto 5%
  }
  .block1 {
    grid-column:  2 / 3;
    /* margin-top: 100px; */
    padding-top: 100px;
    height: 300px;
    font-weight: 400;
  }
  .block2 {
    /* margin-top: 100px; */
    height: 300px;
    font-weight: 100;
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
</style>
