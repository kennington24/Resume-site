import React from 'react';
import 'fullpage.js/vendors/scrolloverflow';
import ReactFullpage from '@fullpage/react-fullpage';
import './fullpage.css';
import Selfie from '../../images/Selfie.jpg';
import Talos from '../../images/Talos.jpg';

class Fullpage extends React.Component {
  render() {
    return (
      <ReactFullpage
        licenseKey={'OPEN-SOURCE-GPLV3-LICENSE'}
        anchors={['Home', 'Projects', 'Contact']}
        sectionsColor={['#ffffff65', '#53687e', '#53687e']}
        slidesNavigation={true}
        recordHistory={false}
        menu={['myMenu']}
        render={({ state, fullpageApi }) => {
          
          return (
            <ReactFullpage.Wrapper>
              <div className="section">
              <img src={Selfie} className="Selfie" alt="Me" />
              <div>
                <img src={Talos} className="Talos" alt="Talos" />
              </div>
                <h2>
                  Kenny Pham
                </h2>
                <br />

                <h3>
                  Software Developer driven by UI/UX
                </h3>
                <br />

                <h3>Pillow Fort Enthusiast </h3>
                <br />

                <h3>
                Denver, Colorado
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
              <div className="section">
                <h2>Contact</h2>
                <form name="contact" data-netlify="true">
  <p>
    <label>Name: <input type="text" name="name" /></label>
  </p>
  <p>
    <label>Email: <input type="email" name="email" /></label>
  </p>
  <p>
    <label>Message: <input type="message" name="message" /></label>
  </p>
  <p>
    <button type="submit">Send</button>
  </p>
</form>
              </div>
            </ReactFullpage.Wrapper>
          );
        }}
      />
    );
  }
}

export default Fullpage;
