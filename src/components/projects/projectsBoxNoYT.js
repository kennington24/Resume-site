import React from 'react';

function projectBoxNoYT(props) {
  return (
    <div className="slide">
      <div className="ProjectBox">
        <div className="ProjectTitle">
          <h2>{props.title}</h2>
          <a href={props.githubURL}>GitHub</a>
        </div>
        <img src={props.img} alt={props.title} />
        <p>{props.tech}</p>
        <p>{props.description}</p>
      </div>
    </div>
  );
}

export default projectBoxNoYT;
