import { useState } from "react";

const TechnicalSkills = () => {
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
    ]);
    return (
        <div className="page-view technical-skills">
            <div className="page-mainview">
                <p className="page-title">Technical Skills</p>
                <table className="section-view">
                <tr>
                    <td valign="top">
                        <h3><strong>Languages:</strong></h3>
                            <ul>
                                <li><img src="https://img.shields.io/badge/JavaScript-323330?style=for-the-badge&logo=javascript&logoColor=F7DF1E"/></li>
                                <li><img src="https://img.shields.io/badge/json-5E5C5C?style=for-the-badge&logo=json&logoColor=white"/></li>
                                <li><img src="https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white"/></li>
                                <li><img src="https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white"/></li>
                                <li><img src="https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white"/></li>
                                <li><img src="https://img.shields.io/badge/Python-FFD43B?style=for-the-badge&logo=python&logoColor=blue"/></li>
                                <li><img src="https://img.shields.io/badge/Java-ED8B00?style=for-the-badge&logo=java&logoColor=white"/></li>
                                <li><img src="https://img.shields.io/badge/C%2B%2B-00599C?style=for-the-badge&logo=c%2B%2B&logoColor=white"/></li>
                                <li><img src="https://img.shields.io/badge/Lua-2C2D72?style=for-the-badge&logo=lua&logoColor=white"/></li>
                            </ul>
                    </td>
                    <td valign="top"> 
                        <h3><strong>Database & Server:</strong></h3>
                            <ul>
                                <li><img src="https://img.shields.io/badge/MongoDB-4EA94B?style=for-the-badge&logo=mongodb&logoColor=white"/></li>
                                <li><img src="https://img.shields.io/badge/Postman-FF6C37?style=for-the-badge&logo=Postman&logoColor=white"/></li>
                                <li><img src="https://img.shields.io/badge/Heroku-430098?style=for-the-badge&logo=heroku&logoColor=white"/></li>
                                <li><img src="https://img.shields.io/badge/SQLite-07405E?style=for-the-badge&logo=sqlite&logoColor=white"/></li>
                                <li><img src="https://img.shields.io/badge/PostgreSQL-316192?style=for-the-badge&logo=postgresql&logoColor=white"/></li>

                            </ul>
                    </td> 
                    <td valign="top"> 
                        <h3><strong>Frameworks & Library:</strong></h3>
                            <ul>
                                
                                <li><img src="https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB"/></li>
                                <li><img src="https://img.shields.io/badge/React_Native-20232A?style=for-the-badge&logo=react&logoColor=61DAFB"/></li>
                                <li><img src="https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white"/></li>
                                <li><img src="https://img.shields.io/badge/Redux-593D88?style=for-the-badge&logo=redux&logoColor=white"/></li>
                                <li><img src="https://img.shields.io/badge/Sass-CC6699?style=for-the-badge&logo=sass&logoColor=white"/></li>
                                <li><img src="https://img.shields.io/badge/GIT-E44C30?style=for-the-badge&logo=git&logoColor=white"/></li>
                                <li><img src="https://img.shields.io/badge/axios-671ddf?&style=for-the-badge&logo=axios&logoColor=white"/></li>
                                <li><img src="https://img.shields.io/badge/Django-092E20?style=for-the-badge&logo=django&logoColor=green"/></li>
                                <li><img src="https://img.shields.io/badge/Expo-1B1F23?style=for-the-badge&logo=expo&logoColor=white"/></li>
                                <li><img src="https://img.shields.io/badge/Express%20js-000000?style=for-the-badge&logo=express&logoColor=white"/></li>
                                <li><img src="https://img.shields.io/badge/Flask-000000?style=for-the-badge&logo=flask&logoColor=white"/></li>
                                <li><img src="https://img.shields.io/badge/Bootstrap-563D7C?style=for-the-badge&logo=bootstrap&logoColor=white"/></li>
                                <li><img src="https://img.shields.io/badge/Arduino-00979D?style=for-the-badge&logo=Arduino&logoColor=white"/></li>
                                <li><img src="https://img.shields.io/badge/jQuery-0769AD?style=for-the-badge&logo=jquery&logoColor=white"/></li>
                            </ul> 
                    </td>
                </tr>
            </table>
            </div>
            <div className="page-subview">
                <p className="page-title">Github Stats</p>
                <div className="section-view">
                {/* <img src="	https://github-profile-summary-cards.vercel.app/api/cards/profile-details?username=bernard-calma"/> */}
                    <img src="https://github-readme-stats.vercel.app/api/top-langs/?username=bernard-calma&layout=compact"/>
                    {/* <img src="https://github-readme-stats.vercel.app/api?username=bernard-calma&show_icons=true&theme=radical"/> */}
                    {/* <img src="https://github-readme-streak-stats.herokuapp.com/?user=bernard-calma&theme=radical"/> */}
                </div>
            </div>
        </div>
    );
}

export default TechnicalSkills;