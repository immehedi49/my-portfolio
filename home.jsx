export default function Home() {
    return (
        <div className="home">
            <div className="hi">Hi,it`s me</div>
            <div className="myname">Md. Mehedi Hasan</div>
            <div className="intro-title">Bringing Designs to Life</div>
            <div className="intro">I am a <span className="span">Frontend Developer</span> passionate about translating design vision into clean, efficient, and interactive web applications. My goal is to bridge the gap between aesthetics and functionality, ensuring every user interaction is intuitive, fast, and delightful.</div>
            <div className="button-container">
                <button className="resume-button" onClick={() => window.open("https://drive.google.com/file/d/1JA4WklPjnH42EiV70Ut9K0Z03joDaTlf/view?usp=sharing", "_blank")} >
                Check my resume</button>
            </div>
        </div>
    )
}