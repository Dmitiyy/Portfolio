import React from 'react';
import Photo from '../../assets/images/about.jpg';
import './about.sass';
import './about-media.sass';

const About = () => {
    return (
        <div className="about">
            <h2 className="about_title">About me</h2>
            <div className="about_wrap">
                <div className="about_inner-photo">
                    <img src={Photo} alt="nature"/>
                </div>
                <div className="about_inner-text">
                    <p className="about_descr">
                        Hello, my name is Peshkov Dmitry, I am a Front-end developer. 
                        I turn static sites into dynamic ones, animate them. 
                        I started at school, I liked programming. After that, 
                        I took several front-end development courses. I also 
                        have a certificate of completion of the course. Every 
                        day I improve my knowledge in the field of IT. I carry 
                        out the assigned tasks at the highest level. We will work 
                        out your task, create a work plan. There is also experience 
                        in the development of CRM systems, various online stores 
                        with a pre-prepared design. We will work out your task, create 
                        a work plan. There is also experience in the development of CRM 
                        systems, various online stores with a pre-prepared design. 
                        For animations I use various libraries like AOS.js. For 
                        responsive design using React.js Material Ui. On the way 
                        to realizing my dreams!
                    </p>
                    <ul className="about_grid">
                        <li className="about_grid-item">HTML</li>
                        <li className="about_grid-item">CSS(SASS/SCSS)</li>
                        <li className="about_grid-item">JAVASCRIPT</li>
                        <li className="about_grid-item">REACT</li>
                        <li className="about_grid-item">VUE</li>
                        <li className="about_grid-item">WEBPACK</li>
                        <li className="about_grid-item">GULP</li>
                        <li className="about_grid-item">GIT</li>
                        <li className="about_grid-item">WORDPRESS</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default About;