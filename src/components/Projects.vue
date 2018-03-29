<template>
  <div>
    <div class="main-box">
      <h1>Projects</h1>
      <div class="box">
        <h1>Agilent - Customer Relationship Manager</h1>
        <h3>Built With: Vue.js, GraphQL, GraphCool, and a Static Site Generator</h3>
        <p>A modern CRM built with optimistic reponse (no page refreshes required), lightning fast searh and sort technology, and statically generated.</p>
        <a href='http://crm.agilentinnovations.com'>Check it Out -></a>
      </div>
      <div class="box">
        <h1>Project 2</h1>
        <h2>Ideas</h2>
        <ul>
          <li>Basic scraper</li>
          <li>CRM</li>
          <li>Admin panel</li>
          <li>CMS</li>
          <li>787</li>
          <li>Cloud Cutlist</li>
          <li>Movie display panel</li>
          <li>Google map integration</li>
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
.main-box {
  background-color: white;
  margin-top: 60px;
  margin-bottom: 80px;
  padding: 1% 10%;
  padding-bottom: 5%;
}
.box {
  background-color: white;
  margin: 0 0 1% 0;
  padding: 1% 5%;
  /* -webkit-box-shadow: 0 1px 2px #777;
  -moz-box-shadow: 0 2px 1px #777;
  box-shadow: 2px 2px 1px #777; */
  border: 1px solid #BFBFBF;
  background-color: white;
  box-shadow: 3px 3px 3px 3px #aaaaaa;
}
</style>
