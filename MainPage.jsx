import { useEffect } from "react";
import Home from "./home";
import AboutMe from "./aboutme";
import Education from "./education";
import Project from "./project";
import Description from "./description";

export default function MainPage({ scrollTo }) {
  useEffect(() => {
    if (scrollTo) {
      document.getElementById(scrollTo)?.scrollIntoView({ behavior: "smooth" });
    }
  }, [scrollTo]);

  return (
    <div>
      <section id="home"><Home /></section>
      <section id="aboutme"><AboutMe /></section>
      <section id="education"><Education /></section>
      <section id="project"><Project /></section>
      <section id="contact"><Description /></section>
    </div>
  );
}
