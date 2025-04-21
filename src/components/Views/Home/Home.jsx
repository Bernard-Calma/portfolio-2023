import './Home.css'

import { useState } from 'react';

import {SkillIcon} from './components';

const Home = () => {
    const [skillsList] = useState([
        {
            id: 0,
            skill: "React",
            imageLink: "https://img.icons8.com/color/256/react-native.png"
        },
        {
            id: 1,
            skill: "Redux",
            imageLink: "https://img.icons8.com/color/256/redux.png"
        },
        {
            id: 2,
            skill: "React Router",
            imageLink: "images/skills/reactRouter.png"
        }, 
        {
            id: 3,
            skill: "React Native",
            imageLink: "images/skills/reactNative.png"
        },
        {
            id: 5,
            skill: "JavaScript",
            imageLink: "https://img.icons8.com/color/256/javascript.png"
        },
        {
            id: 7,
            skill: "Python",
            imageLink: "https://img.icons8.com/color/256/python.png"
        },
        {
            id: 8,
            skill: "Github",
            imageLink: "https://img.icons8.com/color/256/github.png"
        },
        {
            id: 9,
            skill: "Flask",
            imageLink: "images/skills/flask.png"
        },
        {
            id: 10,
            skill: "Django",
            imageLink: "images/skills/django.png"
        },
        {
            id: 13,
            skill: "SQL",
            imageLink: "https://img.icons8.com/external-soft-fill-juicy-fish/256/external-sql-coding-and-development-soft-fill-soft-fill-juicy-fish.png"
        },
        {
            id: 14,
            skill: "NoSQL",
            imageLink: "images/skills/nosql.png"
        },
        {
            id: 15,
            skill: "PostgreSQL",
            imageLink: "https://img.icons8.com/color/256/postgreesql.png"
        },
        {
            id: 16,
            skill: "MongoDB",
            imageLink: "https://img.icons8.com/color/256/mongodb.png"
        },
        {
            id: 26,
            skill: "HTML",
            imageLink: "https://img.icons8.com/color/256/html-5.png"
        },
        {
            id: 27,
            skill: "CSS",
            imageLink: "https://img.icons8.com/color/256/css3.png"
        },
        {
            id: 4,
            skill: "NodeJS",
            imageLink: "https://img.icons8.com/color/256/nodejs.png"
        },
    ])

    return (
        <main id='home'>
            <div className='left'>
                <h1 id='name'>Bernard Calma</h1>
                <h2 id='title'> {"> Full Stack Developer"}</h2>
                {/* <p className='introduction'> - More than 2 years of experience on full stack development</p> */}
                {/* <h1 className='resume'>Resume</h1>
                <a href="https://docs.google.com/document/d/1FS3ZBXxwShEy43DSy0TpcTurWmtiqI7h"
                    target='_black'
                    rel='noreferrer'>
                    <i className="fa-solid fa-file" />
                </a> */}
                <div className='blurry-gradient-green'/>

                <p className='gitHubConst'>
                    <span className='variableType'>const </span> 
                    <span className='variableName'>githubLink </span> 
                    {"= "}
                    <a href='https://github.com/Bernard-Calma' target='_blank' rel='noreferrer'>"https://github.com/nard-calma"</a>
                </p>
            </div>

            <div className='right skills'>
                <div className='blurry-gradient-blue'/>
                <h2>Tech</h2>
                <div className="skillsSubList">
                    {skillsList.map(skill => <SkillIcon 
                        key = {skill.id}
                        skill = {skill}
                        />     
                    )}
                </div>
            </div>
        </main>
    )
}

export default Home;