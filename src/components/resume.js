import React, { Component } from "react";
import { Grid, Cell } from "react-mdl";
import Education from './education'
import Experience from "./experience";
import Skills from "./skills";

class Resume extends Component {
  render() {
    return (
      <div>
        <Grid>
          <Cell col={4}>
            <div style={{ textAlign: "center" }}>
              <img
                src="https://www.shareicon.net/download/2015/09/18/103157_man_512x512.png"
                alt="avatar"
                style={{ height: "200px" }}
              />
            </div>
            <h2 style={{ paddingTop: "2em" }}>Brandon Chao</h2>
            <h4 style={{ color: "grey" }}>Programmer</h4>
            <hr style={{ borderTop: "3px solid #833fb2", width: "50%" }} />
            <p>
              Hello, World.
            </p>
            <h2 style={{ paddingTop: "2em" }}>Sizzle</h2>
            <h5>Address</h5>
            <p> hacker way menlo park, 34315</p>
            <h5>phone</h5>
            <p>789456133</p>
            <h5>Email</h5>
            <p>lofu6@yahoo.com</p>
            <h5>web</h5>
            <p>.com</p>
            <hr style={{ borderTop: "3px solid #833fb2", width: "50%" }} />
          </Cell>
          <Cell className="resume-right-col" col={8}>
            <h2>education</h2>
            <Education
              startYear={2008}
              endYear={2010}
              schoolName="MassBay Community College"
              schoolDescription="Community College"
            />

            <Education
              startYear={2011}
              endYear={2015}
              schoolName="UMass Boston"
              schoolDescription="Exercise and Health Sciences"
            />
            <hr style={{ borderTop: "3px solid #e22947" }} />
            <h2>Exp</h2>
            <Experience
              startYear={2016}
              endYear={2016}
              jobName="Electrician Apprentice"
              jobDescription="Electrician Apprentice"
            />

            <Experience
              startYear={2019}
              endYear={2019}
              jobName="Parking Meter Supervisor"
              jobDescription="enforced parking rules"
            />

            <hr style={{ borderTop: "3px solid #e22947" }} />
            <h2>Skills</h2>
            <Skills skill="javascript" progress={60} />
            <Skills skill="html/css" progress={60} />
            <Skills skill="R" progress={60} />
            <Skills skill="React" progress={60} />
          </Cell>
        </Grid>
      </div>
    );
  }
}

export default Resume;
