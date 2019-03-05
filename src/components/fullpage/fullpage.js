import React from 'react';
import 'fullpage.js/vendors/scrolloverflow';
import ReactFullpage from '@fullpage/react-fullpage';
import './fullpage.css';
import Selfie from '../../files/Images/Selfie.jpg';
import Talos from '../../files/Images/Talos.jpg';
import Github from '../../files/Icons/Github.svg';
import Mail from '../../files/Icons/Mail.svg';
import LinkedIn from '../../files/Icons/Linkedin.svg';

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
                <img src={Selfie} className="Selfie" alt="Me" title="Me" />
                <div>
                  <img
                    src={Talos}
                    className="Talos"
                    alt="Talos"
                    title="Talos"
                  />
                </div>

                <h2>Kenny Pham</h2>
                <br />

                <h3>Software Developer driven by UI/UX</h3>
                <br />

                <h3>Pillow Fort Enthusiast </h3>
                <br />

                <h3>Denver, Colorado</h3>
              </div>

              <div className="section">
                <div className="slide">
                  <div className="ProjectBox">
                    <h3>Projects</h3>
                  </div>
                </div>

                <div>
                  <div className="slide">
                    <div className="ProjectBox">
                      <p>Projects</p>
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
                    <img src={Github} className="Icon" Title="Github" />
                  </a>
                  <a href="mailto:khpham24@gmail.com?Subject=Greetings%20from%20your%20site!">
                    <img
                      src={Mail}
                      alt="E-Mail"
                      className="Icon"
                      title="Send me an E-Mail"
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
