

import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div className="navbar">
      <div class="navbar-content-wrapper">
      <div className="name"><p>Mehedi Hasan</p></div>
      
      <div className="links">
        <div className="href-links">
          <Link to="/home">Home</Link>  
          <Link to="/aboutme">About Me</Link>
          <Link to="/education">Education</Link>
          <Link to="/project">Project</Link>
          <Link to="/contact">Contact</Link>
        </div>
        <button className="button" onClick={() => window.open("https://drive.google.com/file/d/1jgRkc7PEYAa6uIM2-QZiFB98RrsfO6vs/view?usp=sharing", "_blank")} >
                Resume</button>
      </div>
      </div>
      </div>
  );
}
