<template>
  <div>
    <div class="box gradient block1">
      <!-- <svg xmlns="http://www.w3.org/2000/svg" width="200px" height="200px" >
        <defs>
          <linearGradient id="lgrad" x1="0%" y1="14%" x2="100%" y2="86%" >
            <stop offset="0%" style="stop-color:rgb(42,23,255);stop-opacity:1" />
            <stop offset="100%" style="stop-color:rgb(35,150,153);stop-opacity:1" />
          </linearGradient>
        </defs>
        <rect x="0" y="0" width="100%" height="100%" fill="url(#lgrad)"/>
      </svg> -->
      <h1>Agilent Innovations</h1>
      <h2>Agile + Intelligent</h2>
    </div>
    <div class="box block2">
      <h1>Philosophy</h1>
      <p>- Living on the bleeding edge of technology has many benefits: projects that have long lives and lots of time before they can become out of date, </p>
    </div>
    <div class="box block2 gradient">
      <h1>Focus</h1>
      <h2>Basic Websites, Complex web applications, AI </h2>
    </div>
    <div class="box block2">
      <h1>Sandbox</h1>
      <h2>Counter, timer, clock</h2>
    </div>
    <div class="box block2">
      <h1>Technologies</h1>
      <h2>Pull examples from Netlify, Vue, GraphQL, Apollo, etc </h2>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Home'
}
</script>

<style scoped>
  .block1 {
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
