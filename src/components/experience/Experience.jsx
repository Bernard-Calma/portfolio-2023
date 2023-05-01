import { useState } from "react"
import "./styles.css"

const Experience = () => {
    const [view,setView] = useState("Education")

    const [schools] = useState(
        [{
            name: "Arizona State University",
            course: "Software Engineering",
            degree: "BS",
            yearGraduate: "(Expected Garduation: 2026)",
            schoolWebsite: "https://engineering.asu.edu/",
            description: `
            - Learned Principles of Programing, Object Oriented Programming, Data Structures and Java.
            - Learned System Design and construct an autonomous firefighter robot using Autodesk Fusion360 for 3D model, TinkerCAD for building circuit, Arduino for logic and MATLAB for simulations.
            `,
            image: "images/education/ASU.png",    
            projects: [
                "Fire Fighter Swarm - ThinkerCAD, Fusion360, Arduino, C++"
            ]
          },
          {
            name: "General Assembly",
            course: "Software Engineering",
            degree: "Certificate",
            yearGraduate: "(Graduated: 2022)",
            schoolWebsite: "https://generalassemb.ly/",
            description: `
            - Gained 450+ hours of experience focused on product development fundamentals, object-oriented programming, MVC frameworks, data modeling, and team collaboration strategies. 
            - Developed a portfolio that includes individual and group projects that has been planned, designed and completed 3-4 days before deadlines.
            `,
            image: "images/education/GA.png",    
            projects: [
                "Auction Hall (Auction Posting App) - React Native (iOS & android), PostgreSQL, Python, Flask, Javascript, CSS StyleSheets",
                "Streamin (Social Media Platform)- React, Mongodb, Express, NodeJS, HTML, CSS, Javascript",
                "Spentrace (Butgeting App) - EJS, MongoDB, Express, NodeJS, HTML, CSS, Javascript",
                "Floating Shoe Game - JavaScript, HTML Canvas, CSS",
                "Tamagotchi Game - JavaScript, HTML, CSS"
            ]
          },
          {
            name: "STI College Bacoor",
            course: "Computer Technology",
            degree: "AS",
            yearGraduate: "(Graduated: 2009)",
            schoolWebsite: "https://www.sti.edu/",
            description: `
            - Studied various programming methodologies, computer networks and concepts, basic computation, and data processing.
            - Experienced building a social media application using Java and a full stack hotel reservation system using Visual Basic and Access.
            `,
            image: "images/education/STI.png",    
            projects: [
                "Social Media App - Java, NetBeans",
                "Hotel Room and Reservation System - VB.net, SQL, Microsoft Access",
                "Solar Powered Radio - Arduino,  C++",
            ]
          }]
    )

    return <section className="sectionExperience">
        <div className="experience top">
            <h1 className="name">Experience</h1>
            <div className="experienceCategory">
                <h2 className="title">Education</h2>
                <h2 className="title">Professional</h2>
            </div>
        </div>
        <div className="experience bottom">
            <div className="experience left">
                {
                    view === "Education"
                    ? <></>
                    : <></>
                }
            </div>
            <div className="experience right">
                Logo
            </div>
        </div>
        
    </section>
}

export default Experience