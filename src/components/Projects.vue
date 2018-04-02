<template>
  <div class="container gradient">
    <div class="main-box">
      <h1>Projects</h1>
      <div class="project-box flipInX">
        <h1>Customer Relationship Manager</h1>
        <p>A modern CRM built with optimistic reponse (no page refreshes), lightning fast searh and sort technology, and statically generated.</p>
        <h3>Built With: Vue.js, GraphQL, GraphCool, and a Static Site Generator</h3>
        <button>
          <a href='http://crm.agilentinnovations.com'>View Demo</a>
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

.flipInX {
  backface-visibility: visible !important;
  animation-name: flipInX;
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
.project-box > h1, h2, h3, p, ul {
  padding-bottom: 2%;
}
ul {
  padding-left: 5%;
}
button {
  padding: 1%;
  margin-bottom: 2%;
}
.main-box {
  padding: 1% 0%;
  background-color:  rgba(255, 255, 255, 0.0);
  /* opacity: 1;
  filter: alpha(opacity=50); For IE8 and earlier */
}
.main-box > h1 {
  padding-left: 10%;
  padding-bottom: 2%;
  font-size: 2.5em;
  color:  rgba(255, 255, 255, 0.90);
  animation-name: fadeInX;
  animation-duration: 2s;
}
a {
  font-size: 1.5em;
  color:   rgba(35,150,153,1);
  text-decoration: none;
}
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
.project-box {
  opacity: 1;
  background-color:  rgba(255, 255, 255, 1);
  margin: 0 10% 1% 10%;
  padding: 1% 5%;
  /* border: 1px solid #BFBFBF; */
  animation-name: slideInLeft;
  animation-duration: 2s;
  /* -webkit-box-shadow: 0 1px 2px #777;
  -moz-box-shadow: 0 2px 1px #777;
  box-shadow: 2px 2px 1px #777; */
  /* border: 1px solid #BFBFBF;
  background-color: white;
  box-shadow: 3px 3px 3px 3px #aaaaaa; */
 -moz-box-shadow: 5px 5px rgba(0,0,0,0.5);
-webkit-box-shadow: 5px 5px rgba(0,0,0,0.5);
box-shadow: 5px 5px rgba(0,0,0,0.5);
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
</style>
