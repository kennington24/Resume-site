import React from 'react';

function projectBox(props) {
  return (
    <div className="slide">
      <div className="ProjectBox">
        <div className="ProjectTitle">
          <h2>{props.title}</h2>
          <a href={props.youtubeURL}>YouTube </a>

          <a href={props.githubURL}>GitHub</a>
        </div>
        <img src={props.img} alt={props.title} />
        <p>{props.tech}</p>
        <p>{props.description}</p>
      </div>
    </div>
  );
}

export default projectBox;
