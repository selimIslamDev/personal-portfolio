import React from 'react';
import Hero from '../../Components/Hero';
import About from '../../Components/About';
import Skills from '../../Components/Skills';
import Projects from '../../Components/Projects';
import Experience from '../../Components/Experience';
import Contact from '../../Components/Contact';

const Home = () => {
    return (
        <div id="home">
            <Hero></Hero>
            <About></About>
            <Skills></Skills>
            <Projects></Projects>
            <Experience></Experience>
            <Contact></Contact>
        </div>
    );
};

export default Home;