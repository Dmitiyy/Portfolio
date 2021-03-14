import React from 'react';
import projects from './model';
import './projects-media.sass';
import './projects.sass';

const Projects = () => {
    return (
        <div className="projects">
            <h2 className="projects_title">Projects</h2>
            {
                projects.map((item, i) => {
                    return (
                        <div className="projects_container-item" key={item.id + i}>
                            <div className="projects_wrap-inner">
                                <a target="_blank" rel="noreferrer" href={item.link}><div style={{'backgroundImage': `url(${item.photo})`}} className="projects_item-photo"></div></a>
                                <h3 className="projects_item-title">{item.title}</h3>
                                <p className="projects_item-descr">
                                    {item.descr}
                                </p>
                            </div>
                        </div>
                    );
                })
            }
        </div>
    )
}

export default Projects;