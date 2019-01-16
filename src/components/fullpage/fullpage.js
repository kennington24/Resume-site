import React from 'react';
import 'fullpage.js/vendors/scrolloverflow';
import ReactFullpage from '@fullpage/react-fullpage';
import './fullpage.css';

class Fullpage extends React.Component {
  render() {
    return (
      <ReactFullpage
        licenseKey={'OPEN-SOURCE-GPLV3-LICENSE'}
        sectionsColor={['#ffffff55', '#ffffff85', '#ffffff85']}
        anchors={['Home', 'Projects', 'Contact']}
        navigationTooltips={['Home', 'Projects', 'Contact']}
        slidesNavigation={true}
        navigation={true}
        recordHistory={false}
        render={({ state, fullpageApi }) => {
          return (
            <ReactFullpage.Wrapper>
              <ul id="myMenu">
                <li data-menuanchor="Home" class="active">
                  <a href="#Home">First section</a>
                </li>
                <li data-menuanchor="Projects">
                  <a href="#Projects">Second section</a>
                </li>
                <li data-menuanchor="Contact">
                  <a href="#Contact">Third section</a>
                </li>
              </ul>
              <div className="section">
                <h3>
                  My name is Kenny Pham and I am a software developer living in
                  Denver, CO. My main focus is on the front end with React.
                </h3>
              </div>
              <div className="section">
                <div class="slide">
                  <h3>Projects</h3>
                </div>
                <div class="slide">
                  <p>Projects</p>
                </div>
              </div>
              <div className="section">Contact</div>
            </ReactFullpage.Wrapper>
          );
        }}
      />
    );
  }
}

export default Fullpage;
