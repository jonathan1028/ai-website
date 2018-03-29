<template>
  <div>
    <div class="main-box">
      <h1>Learn</h1>
      <div class="box">
        <h2>Why you wanted a static website</h2>
      </div>
      <div class="box">
        <h2>The difference between one language and another</h2>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Learn'
}
</script>
<style scoped>
  .main-box {
    height: 100%;
    background-color: white;
    margin-top: 60px;
    margin-bottom: 80px;
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
</style>
