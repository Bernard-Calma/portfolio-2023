import './Home.css'

import { useState } from 'react';

import SkillIcon from './SkillIcon';

const Home = () => {
    const [skillsList] = useState([
        {
            id: 0,
            skill: "React",
            imageLink: "https://img.icons8.com/color/256/react-native.png",
            category: "Front-End"
        },
        {
            id: 1,
            skill: "Redux",
            imageLink: "https://img.icons8.com/color/256/redux.png",
            category: "Tools"
        },
        {
            id: 2,
            skill: "React Router",
            imageLink: "images/skills/reactRouter.png",
            category: "Tools"
        }, 
        {
            id: 3,
            skill: "React Native",
            imageLink: "images/skills/reactNative.png",
            category: "Front-End"
        },
        {
            id: 4,
            skill: "NodeJS",
            imageLink: "https://img.icons8.com/color/256/nodejs.png",
            category: "Back-End"
        },
        {
            id: 5,
            skill: "JavaScript",
            imageLink: "https://img.icons8.com/color/256/javascript.png",
            category: "Programming Language",
        },
        {
            id: 6,
            skill: "jQuery",
            imageLink: "images/skills/jquery.png",
            category: "Tools"
        },
        {
            id: 7,
            skill: "Python",
            imageLink: "https://img.icons8.com/color/256/python.png",
            category: "Programming Language"
        },
        {
            id: 8,
            skill: "Github",
            imageLink: "https://img.icons8.com/color/256/github.png",
            category: "Tools"
        },
        {
            id: 9,
            skill: "Flask",
            imageLink: "images/skills/flask.png",
            category: "Back-End"
        },
        {
            id: 10,
            skill: "Django",
            imageLink: "images/skills/django.png",
            category: "Back-End"
        },
        {
            id: 11,
            skill: "Java",
            imageLink: "https://img.icons8.com/color/256/java-coffee-cup-logo.png",
            category: "Programming Language"
        },
        {
            id: 12,
            skill: "Lua",
            imageLink: "https://img.icons8.com/nolan/256/lua-language.png",
            category: "Programming Language"
        },
        {
            id: 13,
            skill: "SQL",
            imageLink: "https://img.icons8.com/external-soft-fill-juicy-fish/256/external-sql-coding-and-development-soft-fill-soft-fill-juicy-fish.png",
            category: "Back-End"
        },
        {
            id: 14,
            skill: "NoSQL",
            imageLink: "images/skills/nosql.png",
            category: "Back-End"
        },
        {
            id: 15,
            skill: "PostgreSQL",
            imageLink: "https://img.icons8.com/color/256/postgreesql.png",
            category: "Back-End"
        },
        {
            id: 16,
            skill: "MongoDB",
            imageLink: "https://img.icons8.com/color/256/mongodb.png",
            category: "Back-End"
        },
        {
            id: 17,
            skill: "Access",
            imageLink: "https://img.icons8.com/color/256/microsoft-access-2019.png",
            category: "Back-End"
        },
        {
            id: 18,
            skill: "ExpressJS",
            imageLink: "images/skills/express.png",
            category: "Back-End"
        },
        {
            id: 19,
            skill: "Bootstrap",
            imageLink: "https://img.icons8.com/color/256/bootstrap.png",
            category: "Front-End"
        },
        {
            id: 20,
            skill: "Tailwind CSS",
            imageLink: "https://img.icons8.com/color/256/tailwindcss.png",
            category: "Front-End"
        },
        {
            id: 21,
            skill: "Fusion360",
            imageLink: "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/464bfb9c-9a76-465b-b539-f36ab9f06047/ddhhv4r-ef877702-5764-4670-bb52-eb514ecd60ed.png/v1/fill/w_512,h_512,strp/fusion_360_honeycomb_icon_by_freddiderfred_ddhhv4r-fdivlview.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9NTEyIiwicGF0aCI6IlwvZlwvNDY0YmZiOWMtOWE3Ni00NjViLWI1MzktZjM2YWI5ZjA2MDQ3XC9kZGhodjRyLWVmODc3NzAyLTU3NjQtNDY3MC1iYjUyLWViNTE0ZWNkNjBlZC5wbmciLCJ3aWR0aCI6Ijw9NTEyIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmltYWdlLm9wZXJhdGlvbnMiXX0.5ID_baqEggkjJcu_NIXYHP5bpVtj7J8DJCQ4OYOZVz4",
            category: "Tools"
        },
        {
            id: 22,
            skill: "Arduino",
            imageLink: "https://img.icons8.com/color/256/arduino.png",
            category: "Front End"
        },
        {
            id: 23,
            skill: "C#",
            imageLink: "https://img.icons8.com/color/256/c-sharp-logo-2.png",
            category: "Programming Language"
        },
        {
            id: 24,
            skill: "C++",
            imageLink: "https://img.icons8.com/color/256/c-plus-plus-logo.png",
            category: "Programming Language"
        },
        {
            id: 25,
            skill: "Visual Basic",
            imageLink: "https://upload.wikimedia.org/wikipedia/en/e/e4/Visual_Basic_6.0_logo.png",
            category: "Programming Language"
        },
        {
            id: 26,
            skill: "HTML",
            imageLink: "https://img.icons8.com/color/256/html-5.png",
            category: "Front-End"
        },
        {
            id: 27,
            skill: "CSS",
            imageLink: "https://img.icons8.com/color/256/css3.png",
            category: "Front-End"
        },
        {
            id: 28,
            skill: "JSON",
            imageLink: "images/skills/json.png",
            category: "Tools"
        },
        {
            id: 29,
            skill: "MySQL",
            imageLink: "images/skills/mysql.png",
            category: "Back-End"
        },
        {
            id: 30,
            skill: "EJS",
            imageLink: "images/skills/ejs.png",
            category: "Tools"
        }
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
                {/* <h2>Languages</h2>
                <div className="skillsSubList">
                    {skillsList.map(skill => skill.category === "Programming Language"
                        ? <SkillIcon 
                        key = {skill.id}
                        skill = {skill}
                        />       
                        : ''
                    )}
                </div>
                <h2>Front-End</h2>
                <div className="skillsSubList">
                    {skillsList.map(skill => skill.category === "Front-End"
                        ? <SkillIcon 
                        key = {skill.id}
                        skill = {skill}
                        /> 
                        : ''
                    )}
                </div>

                <h2>Back-End</h2>
                <div className="skillsSubList">
                    {skillsList.map(skill => skill.category === "Back-End"
                        ? <SkillIcon 
                        key = {skill.id}
                        skill = {skill}
                        /> 
                        : ''
                    )}
                </div>

                <h2>Tools</h2>
                <div className="skillsSubList">
                    {skillsList.map(skill => skill.category === "Tools"
                        ? <SkillIcon 
                            key = {skill.id}
                            skill = {skill}
                        /> 
                        : ''
                    )}
                </div> */}
            </div>
        </main>
    )
}

export default Home;