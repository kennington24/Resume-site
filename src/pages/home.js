import React from 'react';
import Fullpage from '../components/fullpage/fullpage';
import Contact from '../components/contact/contact';
// import Navbar from '../components/navbar/navbar';
import Background from '../images/BWpainting.jpg';

class Home extends React.Component {
  render() {
    return (
      <div className="Homepage">
        <img src={Background} className="background" alt="background" />
        <Contact />
        <Fullpage />
      </div>
    );
  }
}

export default Home;
