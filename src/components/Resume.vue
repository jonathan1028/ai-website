<template>
  <div class="resume">
    <div class="page">
      <div class="right-header">
        <div class="emblem">
          <svg height="30pt" width="30pt" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 1000 1000" enable-background="new 0 0 1000 1000" xml:space="preserve">
            <g><g fill="white" transform="translate(0.000000,512.000000) scale(0.100000,-0.100000)"><path d="M4871.6,4951.4c-32.6-40.2-852.8-1144.1-1822.5-2453L1282.2,116.4l1816.7-2447.2L4915.7-4780h84.3h84.3L6901-2330.9L8717.8,116.4L6901,2565.5L5084.3,5012.7l-78.6,5.7C4934.8,5024.2,4923.3,5016.5,4871.6,4951.4z M6674.9,2354.7L8334.5,116.4L6674.9-2120.1C5760.8-3352.3,5007.7-4358.4,5000-4358.4s-762.7,1006.1-1674.9,2238.3L1665.5,116.4L3327,2358.5c916,1232.2,1669.2,2240.2,1676.8,2236.4C5009.6,4593,5762.7,3585,6674.9,2354.7z"/></g></g>
          </svg>
          <svg
            class="test"
            height="30pt" width="30pt" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 1000 1000" enable-background="new 0 0 1000 1000" xml:space="preserve">
            <g><g fill="white" transform="translate(0.000000,512.000000) scale(0.100000,-0.100000)"><path d="M4871.6,4951.4c-32.6-40.2-852.8-1144.1-1822.5-2453L1282.2,116.4l1816.7-2447.2L4915.7-4780h84.3h84.3L6901-2330.9L8717.8,116.4L6901,2565.5L5084.3,5012.7l-78.6,5.7C4934.8,5024.2,4923.3,5016.5,4871.6,4951.4z M6674.9,2354.7L8334.5,116.4L6674.9-2120.1C5760.8-3352.3,5007.7-4358.4,5000-4358.4s-762.7,1006.1-1674.9,2238.3L1665.5,116.4L3327,2358.5c916,1232.2,1669.2,2240.2,1676.8,2236.4C5009.6,4593,5762.7,3585,6674.9,2354.7z"/></g></g>
          </svg>
        </div>
        <div class="name">
          Jonathan Lee
        </div>
        <div class="main-position">
          Machine Learning Engineer
        </div>
      </div>
      <div class="left-header">
        <div></div>
      </div>
      <div class="left-column">
        <div class="profile-pic">
          <img src="../assets/head-shot.jpg">
        </div>
        <div class="section">
          <div class="section-title">
            Contact
          </div>
          <div class="item">512.576.2238</div>
          <div class="item">lee.jonathanw@gmail.com</div>
          <div class="item">AgilentInnovations.com</div>
          <div class="item">LinkedIn.com/in/jonathanwlee</div>
        </div>
        <div class="section-break"></div>
        <div class="section">
          <!-- <div class="section-title">
            Skills
          </div> -->
          <div class="subsection">Financial Modeling</div>
          <div class="item">Regression Analysis, Advanced Time Series Models, Fama French Models, Principle Component Analysis Models, Multi-factor Alpha Models, Advanced Portfolio Optimization Using Convex Equations, Portfolio Regularization</div>
          <div class="subsection">Data Analysis</div>
          <div class="item">Data Pipelines, Data Normalization Techniques, Heteroskedasticity Tests, Statistical Significance Tests, Data Visualizations, mySQL, MongoDB, PostgreSQL, GraphQL & Graph DBs, Firebase, AWS</div>
          <div class="subsection">Languages/Libraries</div>
          <div class="item">JS, Python, MQL4, Java, C++, PHP, Ruby, HTML, CSS, Jupyter, Pandas, NumPy, SciPy, Scikit-learn, PyTorch, Zipline, Plotly, ZeroMQ</div>
          <div class="subsection">Other Skills</div>
          <div class="item">Road Maps, Critical Path Analysis, Technical Debt Mgmt Plans, Documentation, Prototyping, Scrum, Kanban, Jira/Confluence, Git, GitHub</div>
        </div>
        <div class="section-break"></div>
      </div>
      <div class="right-column">
        <div class="section">
          <div class="section-title">Summary</div>
          <div class="profile-text">
            Unquenchable thirst for learning, researching, and theorizing about the future impacts of technology on business and society. Recently I've become endlessly curious in the potential applications of Deep Reinforcement Learning models to real world problems - especially in the areas of financial markets, global economics, and quantitative investment analysis.</div>
          <br>
          <div class="profile-text">
            Previously I founded/built 2 different companies in the real estate investment industry with an emphasis on using technology to drive efficiency, identify market mispricings, and create other competitive advantages - often by building my own in-house custom software applications & tools.
          </div>
        </div>
        <div class="section-break"></div>
        <div class="section">
          <div class="section-title">Technical Experience</div>
          <div class="job">
            <div class="job-header">
              <div class="company">Recent Projects, &nbsp;</div>
              <div class="position">Quantitative Financial Research w ML &nbsp;</div>
              <div class="time"></div>
            </div>
            <div class="job-experience">
              <img class="diamond-small" src="../assets/diamond2.svg">
              <div class="experience">Built a multi-node asynchronous distributive server network that can communicate across inproc, IPC, TCP, TIPC, multicast as well as interface with other nodes running software written in other languages. It has separate nodes for data intake, analysis and decision making, and trade placement. </div>
            </div>
            <div class="job-experience">
              <img class="diamond-small" src="../assets/diamond2.svg">
              <div class="experience">Built a multi-factor risk model for identifying certain high-risk currency trading strategies previously considered unusable that could be altered in small ways and made profitable in select scenarios.</div>
            </div>
            <div class="job-experience">
              <img class="diamond-small" src="../assets/diamond2.svg">
              <div class="experience">Built a natural language processing service that scrapes financial data from EDGAR and conducts sentiment analysis on it.</div>
            </div>
          </div>
          <div class="job">
            <div class="job-header">
              <div class="company">Good Citizen Network, &nbsp;</div>
              <div class="position">Product Mgr/Developer, &nbsp;</div>
              <div class="time">Jun. 18 - Nov. 18</div>
            </div>
            <div class="job-experience">
              <img class="diamond-small" src="../assets/diamond2.svg">
              <div class="experience">Lead the re-architecting and build of a new graphQL API and front-end structure which reduced the legacy code base by over 80%, improved development speed/cost by 8X, reduced multi-second page load times to zero, improved security, and increased scalability. </div>
              <!-- <img class="diamond-small" src="../assets/diamond2.svg">
              <div class="experience">Setup git workflow and AWS Code Pipelines for continuous development.</div>
              <img class="diamond-small" src="../assets/diamond2.svg">
              <div class="experience">Researched scalable search APIs/architectures and proposed findings and solution to CEO.</div> -->
            </div>
          </div>
          <div class="job">
            <div class="job-header">
              <div class="company">Cloud Cutlist, &nbsp;</div>
              <div class="position">Product Mgr/Developer, &nbsp;</div>
              <div class="time">Aug. 2016 – Nov. 2017</div>
            </div>
            <div class="job-experience">
              <img class="diamond-small" src="../assets/diamond2.svg">
              <div class="experience">Developed ERP manufacturing software which doubled throughput rate, reduced materials waste by 50%, and created tracking and data analysis for all manufacturing hours. Users enter custom product dimensions and the product then generated a cut-list, a materials order, and a process list with estimated hours for production.</div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- ===================================================== Page 2 =========================================== -->
    <div class="page">
      <div class="right-header">
        <div class="emblem">
          <svg height="30pt" width="30pt" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 1000 1000" enable-background="new 0 0 1000 1000" xml:space="preserve">
            <g><g fill="white" transform="translate(0.000000,512.000000) scale(0.100000,-0.100000)"><path d="M4871.6,4951.4c-32.6-40.2-852.8-1144.1-1822.5-2453L1282.2,116.4l1816.7-2447.2L4915.7-4780h84.3h84.3L6901-2330.9L8717.8,116.4L6901,2565.5L5084.3,5012.7l-78.6,5.7C4934.8,5024.2,4923.3,5016.5,4871.6,4951.4z M6674.9,2354.7L8334.5,116.4L6674.9-2120.1C5760.8-3352.3,5007.7-4358.4,5000-4358.4s-762.7,1006.1-1674.9,2238.3L1665.5,116.4L3327,2358.5c916,1232.2,1669.2,2240.2,1676.8,2236.4C5009.6,4593,5762.7,3585,6674.9,2354.7z"/></g></g>
          </svg>
          <svg
            class="test"
            height="30pt" width="30pt" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 1000 1000" enable-background="new 0 0 1000 1000" xml:space="preserve">
            <g><g fill="white" transform="translate(0.000000,512.000000) scale(0.100000,-0.100000)"><path d="M4871.6,4951.4c-32.6-40.2-852.8-1144.1-1822.5-2453L1282.2,116.4l1816.7-2447.2L4915.7-4780h84.3h84.3L6901-2330.9L8717.8,116.4L6901,2565.5L5084.3,5012.7l-78.6,5.7C4934.8,5024.2,4923.3,5016.5,4871.6,4951.4z M6674.9,2354.7L8334.5,116.4L6674.9-2120.1C5760.8-3352.3,5007.7-4358.4,5000-4358.4s-762.7,1006.1-1674.9,2238.3L1665.5,116.4L3327,2358.5c916,1232.2,1669.2,2240.2,1676.8,2236.4C5009.6,4593,5762.7,3585,6674.9,2354.7z"/></g></g>
          </svg>
        </div>
        <div class="name">
          Jonathan Lee
        </div>
        <div class="main-position">
          Machine Learning Engineer
        </div>
      </div>
      <div class="left-header">
        <div></div>
      </div>
      <div class="left-column">
        <div class="page2-offset"></div>
        <div class="section">
          <div class="section-title">
            Honors
          </div>
          <div class="item">Empact Entrepreneur's "Most Inspiring Entrepreneurship Story" award and invitation to speak at the United Nations venue in New York.</div>
        </div>
        <div class="section-break"></div>
        <div class="section">
          <div class="section-title">
            Publications
          </div>
          <div class="subsection">U.S. Builder's Review</div>
          <div class="item">"A pioneer in creative residential real estate development."</div>
          <div class="subsection">Urban Land Institute</div>
          <div class="item">Showcased our SOL Neighborhood as a model of creative mixed-income housing projects.</div>
        </div>
        <div class="section-break"></div>
        <div class="section">
          <div class="section-title">
            Education
          </div>
          <div class="subsection">Udacity</div>
          <div class="item">Nanodegree, Artificial Intelligence in Trading</div>
          <div>(In progress)</div>
          <div class="item">Nanodegree, Deep Learning (In progress)</div>
          <div class="item">Nanodegree, Quantitative Financial Modeling, 2019</div>
          <div class="subsection">Udemy</div>
          <div class="item">AWS Certified Solutions Architect - Associate, 2018</div>
          <div>(Coursework completed - did not sit for exam)</div>
          <div class="subsection">University of Texas</div>
          <div class="item">B.A., 2002 - 2006</div>
        </div>
        <div class="section-break"></div>
      </div>
      <div class="right-column">
        <div class="section">
          <div class="job">
            <div class="job-header">
              <div class="company">Construction Central, &nbsp;</div>
              <div class="position">Product Mgr/Developer, &nbsp;</div>
              <div class="time">Nov. 2012 – Apr. 2016</div>
            </div>
            <div class="job-experience">
              <img class="diamond-small" src="../assets/diamond2.svg">
              <div class="experience">Researched existing construction software to identify competitors, unmet market needs, and initial feature set. Grew product to include additional components of: customer relationship management, vendor management, estimating, budgeting, project management, a complex job costing system, and bookkeeping.</div>
            </div>
          </div>
          <div class="section-title">Investment Experience</div>
          <div class="job">
            <div class="job-header">
              <div class="company">787 Developers, &nbsp;</div>
              <div class="position">President &amp; Founder, &nbsp;</div>
              <div class="time">Apr. 2012 – Jun. 2018</div>
            </div>
            <div class="job-experience">
              <!-- <svg src="../assets/diamond2.svg"></svg> -->
              <img class="diamond-small" src="../assets/diamond2.svg">
              <!-- <svg
                class="diamond-small"
                x="0px" y="0px"
                viewBox="0 0 1000 1000"
                enable-background="new 0 0 1000 1000"
                >
                <g fill="black" transform="translate(0.000000,512.000000) scale(0.100000,-0.100000)"><path stroke-width="95%" d="M4871.6,4951.4c-32.6-40.2-852.8-1144.1-1822.5-2453L1282.2,116.4l1816.7-2447.2L4915.7-4780h84.3h84.3L6901-2330.9L8717.8,116.4L6901,2565.5L5084.3,5012.7l-78.6,5.7C4934.8,5024.2,4923.3,5016.5,4871.6,4951.4z M6674.9,2354.7L8334.5,116.4L6674.9-2120.1C5760.8-3352.3,5007.7-4358.4,5000-4358.4s-762.7,1006.1-1674.9,2238.3L1665.5,116.4L3327,2358.5c916,1232.2,1669.2,2240.2,1676.8,2236.4C5009.6,4593,5762.7,3585,6674.9,2354.7z"/></g>
              </svg> -->
              <div class="experience">Founded and grew one of the largest in-fill residential single-family development companies in Austin.</div>
              <img class="diamond-small" src="../assets/diamond2.svg">
              <div class="experience">Conducted investment analysis, built financial models and pro
formas, raised million dollar+ capital rounds, and made all portfolio investment selections - which resulted in an on average internal rate of return to investors of 20%+.</div>
              <img class="diamond-small" src="../assets/diamond2.svg">
              <div class="experience">Oversaw full cycle planning, design, and construction of up to 10 projects simultaneously which varied from single-family homes to 30 unit neighborhoods.</div>
              <img class="diamond-small" src="../assets/diamond2.svg">
              <div class="experience">Created a product so highly regarded that we received multiple national publications and regularly broke area price records in our neighborhoods.</div>
            </div>
          </div>
          <div class="job">
            <div class="job-header">
              <div class="company">Sharp Realty, &nbsp;</div>
              <div class="position">President &amp; Cofounder, &nbsp;</div>
              <div class="time">Dec. 2006 – Mar. 2012</div>
            </div>
            <div class="job-experience">
              <img class="diamond-small" src="../assets/diamond2.svg">
              <div class="experience">Rebuilt the entire operations, sales, and marketing segments for the
management of 200 investment properties through the implementation of new systems and technology - which increased the operational efficiency of the business by 400%, cut annual tenant evictions by 1/3rd, and increased average rents collected across the entire portfolio.</div>
              <img class="diamond-small" src="../assets/diamond2.svg">
              <div class="experience">Regularly conducted substantial financial analysis and maintained different inhouse trend analysis models on the local real estate market, built pro formas and presentations, and made investment recommendations to our clients.</div>
              <img class="diamond-small" src="../assets/diamond2.svg">
              <div class="experience">Prepared the company for acquisition and sold it in 2012 ($15 Million in real estate assets under management at the time of sale).</div>
            </div>
          </div>
          <div class="footer">
            *This resume was built with HTML and CSS Grid to create an easily reformatable and printable living document, control the details down to the pixel level, and as a small demonstration of my technological acumen and ability to design, build, and present to a discriminating audience.
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Resume',
  created () {
    // alert('This resueate an easilogical acudiscriminating audience.')
  }
}
</script>

<style lang="scss" scoped>
@import url('https://fonts.googleapis.com/css?family=Montserrat:100,100i,200,200i,300,300i,400,400i,500,500i,600,600i,700,700i,800,800i,900,900i');

@media print, screen {
.resume {
  font-family: 'Montserrat', sans-serif;
  * {
    transition: none !important;
  }
  -webkit-print-color-adjust: exact;
  .page {
    height: 791pt;
    width: 612pt;
    display: grid;
    grid-template-columns: 33% 67%;
    grid-template-rows: 20% 80%;
    grid-template-areas:
      "left-header      right-header"
      "left-column      right-column";
    align-items: start;
    color: white;
    border: 1px solid black;
    margin: 0pt 0pt;
    padding: 0;
    .left-header {
      grid-area: left-header;
      background-color: rgb(70, 70, 69);
      height: 100%;
    }
    .right-header {
      height: 100%;
      grid-area: right-header;
      display: grid;
      padding-top: 35pt;
      grid-template-rows: 35pt 45pt auto;
      grid-template-areas:
      "emblem"
      "name"
      "main-position";
      background-color: rgb(70, 70, 69);
      text-align: center;
      // border: 1px solid white;
      // // align-items: start;
      .emblem {
        grid-area: emblem;
        // border: 1px solid white;
        font-size: 30pt;
        img {
          font-size: 10pt;
        }
      }
      .name {
        grid-area: name;
        font-size: 40pt;
        text-transform: uppercase;
        // border: 1px solid white;
      }
      .main-position {
        grid-area: main-position;
        // border: 1px solid white;
        margin-top: 5pt;
        font-size: 18pt;
        font-weight: 100;
        text-transform: uppercase;
      }
    }
    .left-column {
      height: calc(100% + 95pt);
      grid-area: left-column;
      background-color: lightblue;
      // border: 1px solid blue;
      margin: -125pt 0pt 0pt 25pt;
      padding: 15pt 20pt;
      .profile-pic {
        // background-color: lightgray;
        img {
          width: 140pt;
          height: 140pt;
          border-radius: 50%;
        }
        margin-bottom: 10pt;
      }
      .page2-offset {
        margin-top: 90pt;
      }
      .section {
        color: black;
        text-align: center;
        font-size: 9pt;
        font-weight: 500;
        .section-title {
          font-size: 15pt;
          text-transform: uppercase;
        }
        .item {
          margin-top: 8pt;
        }
      }
      .subsection {
        margin-top: 16pt;
        font-size: 12;
        text-transform: uppercase;
        font-weight: 700;
      }
      .section-break {
        border: 0.15vh solid black;
        margin: 20pt 0pt;
      }
    }
    .right-column {
      grid-area: right-column;
      background-color: white;
      color: black;
      padding: 20pt 25pt 0pt 25pt;
      .section {
        .section-title {
          font-size: 20pt;
          font-weight: 500;
          text-transform: uppercase;
          text-align: center;
          margin-bottom: 15pt;
        }
        .profile-text {
          font-size: 10pt;
        }
      }
      .section-break {
        // border: 0.15vh solid black;
        margin: 15pt 0pt;
      }
      .job {
        font-size: 10pt;
        margin-bottom: 18pt;
        .job-header {
          display: flex;
          align-items: center;
          justify-items: start;
          font-weight: 500;
          .company {
            font-weight: 600;
          }
        }
        .job-experience {
          margin: 2pt 0pt 0pt 8pt;
          display: grid;
          grid-template-columns: auto auto;
          .icon {
            font-size: 8pt;
            margin-top: 2pt;
          }
          .experience {
            margin-left: 4pt;
            font-weight: 300;
            margin-bottom: 6pt;
            .underline {
              text-decoration: underline;
            }
          }
        }
      }
    }
    .test {
      /* height: 100%; */
      margin-left: -30pt;
      // background-color: yellow;
      // color: black;
    }
    .diamond-small {
      margin-top: 2pt;
    }
    .footer {
      background-color: white;
      margin-top: 10pt;
      font-size: 8pt;
    }
  }
}
}
</style>
