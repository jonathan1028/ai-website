<template>
  <div class="container gradient">
    <div class="main-box gradient">
      <h1>Learn</h1>
      Coming soon
      <!-- <div class="box">
        <h2>Why you wanted a static website</h2>
      </div>
      <div class="box">
        <h2>The difference between one language and another</h2>
      </div> -->
    </div>
  </div>
</template>

<script>
export default {
  name: 'Learn'
}
</script>
<style scoped>
  .container {
    height: 100%;
    color: white;
  }
  .main-box {
    height: 100%;
    background-color: white;
    padding: 1% 10%;
    padding-bottom: 5%;
  }
  .box {
    background-color: white;
    margin: 0 0 1% 0;
    padding: 1% 1%;
    /* -webkit-box-shadow: 0 1px 2px #777;
    -moz-box-shadow: 0 2px 1px #777;
    box-shadow: 2px 2px 1px #777; */
    border: 1px solid #BFBFBF;
    background-color: white;
    box-shadow: 3px 3px 3px 3px #aaaaaa;
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
