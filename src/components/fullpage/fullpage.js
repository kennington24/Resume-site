import React from 'react';
import 'fullpage.js/vendors/scrolloverflow';
import ReactFullpage from '@fullpage/react-fullpage';
import './fullpage.css';

class Fullpage extends React.Component {
  render() {
    return (
      <ReactFullpage
        licenseKey={'OPEN-SOURCE-GPLV3-LICENSE'}
        sectionsColor={['#ffffff65', '#ffffff75', '#ffffff85']}
        anchors={['Home', 'Projects', 'Contact']}
        navigationTooltips={['Home', 'Projects', 'Contact']}
        slidesNavigation={true}
        recordHistory={false}
        render={({ state, fullpageApi }) => {
          return (
            <ReactFullpage.Wrapper>
              <ul id="myMenu">
                <li data-menuanchor="Home" className="active">
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
                  Hey there! My name is Kenny Pham and I am from the best state
                  in the US, Colorado.
                </h3>
                <br />
                <h3>
                  In my free time I like to hike, play games, and hangout with
                  my dog.
                </h3>
              </div>
              <div className="section">
                <div className="slide">
                  <h3>Projects</h3>
                </div>
                <div className="slide">
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
