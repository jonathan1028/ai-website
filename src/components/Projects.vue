<template>
  <div class="container gradient">
    <div class="main-box">
      <h1>Projects</h1>
      <div class="project-box">
        <h1>Customer Relationship Manager</h1>
        <p>A modern CRM built with optimistic reponse (no page refreshes), lightning fast searh and sort technology, and statically generated.</p>
        <h3>Built With: Vue.js, GraphQL, GraphCool, and a Static Site Generator</h3>
        <button>
          <a href='http://crm.agilentinnovations.com'>Check it Out</a>
          </button>
      </div>
      <div class="project-box">
        <h1>Admin Panel</h1>
        <h3>Link coming soon</h3>
      </div>
      <div class="project-box">
        <h1>787 Developers - Website</h1>
        <h3>Link coming soon</h3>
      </div>
      <div class="project-box">
        <h1>Cloud Cutlist</h1>
        <h3>Link coming soon</h3>
      </div>
      <div class="project-box">
        <h1>Upcoming Projects</h1>
        <ul>
          <li>Website Asset Scraper</li>
          <li>Movie Display Panel</li>
          <li>Google Map Integration</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Projects'
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
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
.container {
  background-color: var(--theme-color2);
  padding: 0% 0%;
  margin: 0;
  /* padding-bottom: 5%; */
}
.main-box {
  padding: 1% 0%;
  background-color:  rgba(255, 255, 255, 0.0);
  /* opacity: 1;
  filter: alpha(opacity=50); For IE8 and earlier */
}
.main-box > h1 {
  padding-left: 10%;
  font-size: 2.5em;
  color:  rgba(255, 255, 255, 0.90);
  animation-name: fadeIn2;
  animation-duration: 2s;
}
a {
  font-size: 1.5em;
  color:   rgba(35,150,153,.5);
  text-decoration: none;
}
button {
  margin-top: 2%;
  background-color: white;
  border: 2px solid  rgba(35,150,153,.7);
}
button:hover{
  -webkit-transform: scale(1.05);
  -ms-transform: scale(1.05);
  transform: scale(1.05);
}
.project-box {
  opacity: 1;
  background-color:  rgba(255, 255, 255, 1);
  margin: 0 10% 1% 10%;
  padding: 1% 5%;
  border: 1px solid #BFBFBF;
  animation-name: fadeIn1;
  animation-duration: 2s;
  /* -webkit-box-shadow: 0 1px 2px #777;
  -moz-box-shadow: 0 2px 1px #777;
  box-shadow: 2px 2px 1px #777; */
  /* border: 1px solid #BFBFBF;
  background-color: white;
  box-shadow: 3px 3px 3px 3px #aaaaaa; */
}
.project-box:hover{
  /* -webkit-transform: scale(1.01);
  -ms-transform: scale(1.01);
  transform: scale(1.01); */
  /* border: 1px solid #BFBFBF;
  background-color: white;
  box-shadow: 3px 3px 3px 3px #aaaaaa; */
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
</style>
