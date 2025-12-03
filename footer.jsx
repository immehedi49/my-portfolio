
import { Link } from "react-router-dom";

export default function Footer() {
    return (
        <div className="footer">
            <div className="footer-content">
                <div className="footer-link">
                    <p>Links</p>
                    <Link to="/home">Home</Link>  
                    <Link to="/aboutme">About Me</Link>
                    <Link to="/education">Education</Link>
                    <Link to="/project">Project</Link>
                    <Link to="/contact">Contact</Link>
                </div>

                <div className="footer-contact">
                    <h3>My Contacts</h3>
                    <h1>✆  +8801577072443</h1>
                    <h2>✉︎  m.hasanrafin49@gmail.com</h2>
                </div>

                <div className="footer-social">
                    <h1>Stay Connected on</h1>
                    <div className="footer-git">
                        <div className="git-img">
                            <a href="https://github.com/immehedi49" target="_blank" rel="noopener noreferrer">
                            <img src="/assets/git.png" alt="GitHub" />
                            </a>
                        </div>
                        <div>
                            {/* <p className="git-text">GitHub</p> */}
                            <a className="git-link" href="https://github.com/immehedi49">github.com/immehedi49</a>
                        </div>
                    </div>

                    <div className="footer-linked">
                        <div className="linked-img">
                                    <a href="https://www.linkedin.com/in/mehedihasan49" target="_blank" rel="noopener noreferrer">
                                    <img src="/assets/linkedin.png" alt="LinkedIn" />
                                    </a>
                        </div>
                        <div>
                            {/* <p className="linked-text">LinkedIn</p> */}
                            <a className="linked-link" href="https://www.linkedin.com/in/mehedihasan49">linkedin.com/in/mehedihasan49</a>
                        </div>
                    </div>
                </div>
            </div>

            <div className="footer-copy">
                Copyright © 2025 <span>Md. Mehedi Hasan</span>
            </div>
        </div>
    );
}
