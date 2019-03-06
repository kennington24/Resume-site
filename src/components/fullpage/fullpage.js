import React from 'react';
// import 'fullpage.js/vendors/scrolloverflow';
import ReactFullpage from '@fullpage/react-fullpage';
import './fullpage.css';

import Selfie from '../../files/Images/Selfie.jpg';
import Talos from '../../files/Images/Talos.jpg';
import Quilly from '../../files/ProjectMaterials/QuillyPreview.png';
import BallGame from '../../files/ProjectMaterials/BallGameDemo.gif';
import Conways from '../../files/ProjectMaterials/ConwaysDemo.gif';

import Github from '../../files/Icons/Github.svg';
import Mail from '../../files/Icons/Mail.svg';
import LinkedIn from '../../files/Icons/Linkedin.svg';

import Resume from '../../files/Resume/Resume.pdf';

class Fullpage extends React.Component {
  render() {
    return (
      <ReactFullpage
        licenseKey={'OPEN-SOURCE-GPLV3-LICENSE'}
        anchors={['Home', 'Projects', 'Contact']}
        sectionsColor={['#ffffff65', '#ffffff65', '#ffffff65']}
        slidesNavigation={true}
        recordHistory={false}
        menu={['myMenu']}
        render={({ state, fullpageApi }) => {
          return (
            <ReactFullpage.Wrapper>
              <div className="section">
                <div className="HomeBox">
                  <img src={Selfie} className="Selfie" alt="Me" title="Me" />
                  <div>
                    <img
                      src={Talos}
                      className="Talos"
                      alt="Talos"
                      title="Talos"
                    />
                  </div>
                  <h2>Kenny H Pham</h2>
                  <br />
                  <p>Software Developer driven by UI/UX</p>
                  <br />
                  <p>Pillow Fort Enthusiast </p>
                  <br />
                  <p>Denver, Colorado</p>
                  <br />
                  <a href={Resume}>
                    <btn>Resume</btn>
                  </a>
                </div>
              </div>

              <div className="section">
                <div className="slide">
                  <div className="ProjectBox">
                    <div className="ProjectTitle">
                      <h2>Quilly </h2>
                      <a href="https://youtu.be/W4RoVPulbg4">YouTube </a>

                      <a href="https://github.com/Lambda-School-Labs/CS8-Quilly">
                        GitHub
                      </a>
                    </div>
                    <img src={Quilly} alt="quilly" />
                    <p>Tech Stack: React, Node.JS, Express, MongoDB</p>
                    <p>
                      Quilly is a job application tracker that allows a user to
                      keep track of all their applications all in one place. It
                      is based off a Kanban board for the ease of use.
                    </p>
                  </div>
                </div>

                <div>
                  <div className="slide">
                    <div className="ProjectBox">
                      <div className="ProjectTitle">
                        <h2>Ball Collision Game</h2>
                        <a href="https://github.com/kennington24/Ball-Collision-Game">
                          GitHub
                        </a>
                      </div>
                      <img src={BallGame} alt="ball collision" />
                      <p>Tech Stack: HTML, CSS, HTML Canvas, Javascript</p>
                      <p>
                        A simple ball collision game that keeps track of score
                        and lives. Can be controlled by mouse or keyboard.{' '}
                      </p>
                    </div>
                  </div>
                </div>

                <div>
                  <div className="slide">
                    <div className="ProjectBox">
                      <div className="ProjectTitle">
                        <h2>Conways Life</h2>
                        <a href="https://github.com/kennington24/Conways-Life/tree/master/projects/life">
                          GitHub
                        </a>
                      </div>
                      <img src={Conways} alt="conways life" />
                      <p>Tech Stack: HTML, CSS, HTML Canvas, Javascript</p>
                      <p>
                        Conways Game of Life is a game which takes an initial
                        starting point and takes a certain set of rules to
                        control whether surronding points die or live.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="section">
                <h1>Lets Connect! :)</h1>
                <div className="ContactBox">
                  <a href="https://www.linkedin.com/in/kennington24/">
                    <img
                      src={LinkedIn}
                      alt="LinkedIn"
                      className="Icon"
                      title="LinkedIn"
                    />
                  </a>
                  <a href="https://www.github.com/kennington24/">
                    <img
                      src={Github}
                      alt="GitHub"
                      className="Icon"
                      Title="Github"
                    />
                  </a>
                  <a href="mailto:khpham24@gmail.com?Subject=Greetings%20from%20your%20site!">
                    <img
                      src={Mail}
                      alt="E-Mail"
                      className="Icon"
                      title="Send me an E-Mail"
                      target="_blank"
                    />
                  </a>
                </div>
              </div>
            </ReactFullpage.Wrapper>
          );
        }}
      />
    );
  }
}

export default Fullpage;
