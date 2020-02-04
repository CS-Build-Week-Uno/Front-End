import React from "react";
import colin from "../assets/colin.jpeg";
import zach from "../assets/zach.png";
import eli from "../assets/eli.jpeg";
import derek from "../assets/derek.jpeg";
import jeff from "../assets/jeff.jpeg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";

const team = [
  {
    name: "Colin de Vries",
    github: "https://github.com/dvcolin",
    linkedin: "https://www.linkedin.com/",
    photo: colin
  },
  {
    name: "Eli Citron",
    github: "https://github.com/ebcitron",
    linkedin: "https://www.linkedin.com/",
    photo: eli
  },
  {
    name: "Derek Etman",
    github: "https://github.com/DerekEtman",
    linkedin: "https://linkedin.com/",
    photo: derek
  },
  {
    name: "Jeff Butler",
    github: "https://github.com/jeffbutlerspringdale",
    linkedin: "https://linkedin.com/",
    photo: jeff
  },
  {
    name: "Zach Young",
    github: "https://github.com/zachtyoung",
    linkedin: "https://linkedin.com/",
    photo: zach
  }
];
const Landing = () => {
  return (
    <>
      <h3>
        Hello World, welcome to our game. This is a description about our game
        that you are reading. Isn't it a wonderful game? We think so. It's about
        stuff and things and some more things and other stuff, you know, the
        usual. Take a second to enjoy this beauty becuase we worked hard on it.
        Okay... we worked on it.{" "}
      </h3>
      <h1>Our Team</h1>
      <div className="team-wrapper">
        {team.map(el => (
          <div>
            <img src={el.photo}></img>
            <h3>{el.name}</h3>
            <a href={el.github}>
              <FontAwesomeIcon icon={faGithub} size="2x"></FontAwesomeIcon>
            </a>
            <a href={el.linkedin}>
              <FontAwesomeIcon icon={faLinkedin} size="2x"></FontAwesomeIcon>
            </a>
          </div>
        ))}
      </div>
    </>
  );
};

export default Landing;
