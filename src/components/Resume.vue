<template>
  <div class="resume">
    <div class="resume-header">
      <h1>Learn</h1>
      <p>Coming soon</p>
    </div>
    <div>Test</div>
    <div class="left-column">
      Left
    </div>
    <div class="right-column">
      <div class="section1">
        <h1>Summary</h1>
        <p>
          12 years of product conceptualizing, designing, building/manufacturing, and selling.
          Managed multi-million dollar departments and all personnel associated.
          8+ years of full-stack software coding experience in a number of platforms and technologies.
          Deep passion for leadership development and coaching</p>
      </div>
      <div class="section2">
        <h1>Technical Work History</h1>
        <div class="job">
          <div class="company">Agilent Innovations, </div>
          <div class="position">Founder &amp; Product Manager</div>
          <div class="time">April 2018 - Present</div>
          <div class="experience">Good Citizen Network: Lead the re-architecting and build of a new graphQL API to replace an existing NodeJS API. Lead a major refactoring project to bring about code consistency, implement unit testing, and improve application speed. Put in place code reviews to ensure best practices and solid documentation throughout. Setup git workflow and AWS Code Pipelines for continuous development.</div>
          <div class="experience">DGnet Watchdog: Contracted to build an entirely new front-end SPA and fluid mobile design for an enterprise asset monitoring SaaS.</div>
        </div>
        <div class="job">
          <div class="company">Elevation Cabinetry, </div>
          <div class="position">Product Manager</div>
          <div class="time">August 2015 – November 2017</div>
          <div class="experience">Built and maintained a cloud-based ERP platform with the Meteor framework for a small manufacturing company that included a CRM, order management, process management, parametric product template modeling, and a Cut-List & Bill of Materials generator.</div>
        </div>
        <div class="job">
          <div class="company">Iron Rock Construction, </div>
          <div class="position">Product Manager</div>
          <div class="time">November 2012 – April 2016</div>
          <div class="experience">Designed and built a SaaS platform for my residential construction company that was used in our day-to-day operations for a few years. Originally built in PHP and later in Ruby on Rails/JavaScript. The application included components such as: customer relationship management, vendor management, estimating, budgeting, project management, a complex job costing system, and bookkeeping.</div>
        </div>
        <h1>Executive Work History</h1>
        <div class="job">
          <div class="company">787 Developers, </div>
          <div class="position">President &amp; Founder</div>
          <div class="time">April 2012 – April 2017</div>
          <div class="experience">Managed a team or attorneys, architects, engineers, consultants, banks, investors, and construction professionals to design, engineer, and construct residential development projects as a 30 unit single-family home neighborhood with a $10 million+ budget.</div>
          <div class="experience">Created a product so highly regarded that we received multiple publications and regularly broke price records in the neighborhoods we sold in.</div>
        </div>
        <div class="job">
          <div class="company">Iron Rock Construction, </div>
          <div class="position">President &amp; Cofounder</div>
          <div class="time">May 2011 – April 2016</div>
          <div class="experience">Built a team of employees, subcontractors, and vendors and the infrastructure necessary to handle constructing as many as 10 custom homes simultaneously.</div>
        </div>
        <div class="job">
          <div class="company">Sharp Realty, </div>
          <div class="position">President &amp; Cofounder</div>
          <div class="time">December 2006 – March 2012</div>
          <div class="experience">Built the entire operations system for the management of 200 properties which resulted in a 400% increase in operational efficiency. Enacted new tenant management policies that cut annual evictions by 1/3rd and increased overall rents collected across the entire portfolio.</div>
          <div class="experience">Sold company (was managing $15 Million in real estate assets at the time of sale).</div>
        </div>
        <h1>Honors, Awards, &amp; Publications</h1>
        <div class="experience">Publications in the New York Times, U.S. Builder’s Review, and Urban Land Institute praising the creativity and positive community impact of our real estate development projects.</div>
        <div class="experience">Selected by Empact Entrepreneurs for the "Most Inspiring Entrepreneurship Story" award and invited to speak at the United Nations venue in New York.</div>
        <h1>Education &amp; Certifications</h1>
        <div class="experience">University of Texas at Austin - BA, 2002 – 2006, Studied business operations, computer science, trend creation, demographic analysis</div>
        <div class="experience">Other Coursework: AWS Certified Solutions Architect, Deep Learning</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Resume'
}
</script>

<style lang="scss" scoped>
  .resume {
    height: 791pt;
    width: 612pt;
    display: grid;
    grid-template-columns: 30% 70%;
    grid-template-rows: 20% 80%;
    grid-template-areas:
      "resume-header      resume-header"
      "left-column right-column";
    color: white;
    border: 1px solid black;
  }
  .resume-header {
    grid-area: resume-header;
    background-color: darkslategray;
  }
  .left-column {
    grid-area: left-column;
    background-color: pink;
    border: 1px solid blue;
    margin: -125pt 20pt 0pt 20pt;
  }
  .right-column {
    grid-area: right-column;
    background-color: white;
    color: black;
    border: 1px solid red;
  }
  .test {
    /* height: 100%; */
    background-color: yellow;
    color: black;
  }
</style>
