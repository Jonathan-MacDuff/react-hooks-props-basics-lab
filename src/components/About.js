import React from "react";
import Links from "./Links"
import user from "../data/user";

function P(props) {
  if (!props.bio) {
    return null
  } else {
    return (
      <p>{props.bio}</p>
    )
  }
};


function About(props) {
  return (
    <div id="about">
      <h2>About Me</h2>
      <P bio={props.bio}/>
      <img src="https://i.imgur.com/mV8PQxj.gif" alt="I made this" />
      <Links 
      github={props.github}
      linkedin={props.linkedin}
      />
    </div>
  );
};

export default About;
