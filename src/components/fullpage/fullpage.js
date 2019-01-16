import React from 'react';
import 'fullpage.js/vendors/scrolloverflow';
import ReactFullpage from '@fullpage/react-fullpage';

class Fullpage extends React.Component {
  render() {
    return (
      <ReactFullpage
        licenseKey={'OPEN-SOURCE-GPLV3-LICENSE'}
        sectionsColor={['#ffffff85', '#ffffff85', '#ffffff85']}
        navigation={true}
        recordHistory={false}
        render={({ state, fullpageApi }) => {
          return (
            <ReactFullpage.Wrapper>
              <div className="section">
                <h2>Kenny Pham</h2>
              </div>
              <div className="section">
                <h3>Section 2</h3>
              </div>
              <div className="section">
                <h3>Section 3</h3>
              </div>
            </ReactFullpage.Wrapper>
          );
        }}
      />
    );
  }
}

export default Fullpage;
