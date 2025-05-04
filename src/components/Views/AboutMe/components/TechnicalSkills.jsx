const TechnicalSkills = () => {
    return (
        <>
            <div className="page-mainview technical-skills">
                <p className="page-title">{`professional-info > technicial-skills`}</p>
                <table className="section-view">
                <tr>
                    <td valign="top">
                        <h3><strong>Languages:</strong></h3>
                            <ul>
                                <li><img src="https://img.shields.io/badge/JavaScript-323330?style=for-the-badge&logo=javascript&logoColor=F7DF1E" alt="javascript"/></li>
                                <li><img src="https://img.shields.io/badge/json-5E5C5C?style=for-the-badge&logo=json&logoColor=white" alt="json"/></li>
                                <li><img src="https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white" alt="html"/></li>
                                <li><img src="https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white" alt="typescript"/></li>
                                <li><img src="https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white" alt="css"/></li>
                                <li><img src="https://img.shields.io/badge/Python-FFD43B?style=for-the-badge&logo=python&logoColor=blue" alt="python"/></li>
                                <li><img src="https://img.shields.io/badge/Java-ED8B00?style=for-the-badge&logo=java&logoColor=white" alt="java"/></li>
                                <li><img src="https://img.shields.io/badge/Lua-2C2D72?style=for-the-badge&logo=lua&logoColor=white" alt="lua"/></li>
                            </ul>
                    </td>
                    <td valign="top"> 
                        <h3><strong>Database & Server:</strong></h3>
                            <ul>
                                <li><img src="https://img.shields.io/badge/MongoDB-4EA94B?style=for-the-badge&logo=mongodb&logoColor=white" alt="mongodb"/></li>
                                <li><img src="https://img.shields.io/badge/Postman-FF6C37?style=for-the-badge&logo=Postman&logoColor=white" alt="postman"/></li>
                                <li><img src="https://img.shields.io/badge/Heroku-430098?style=for-the-badge&logo=heroku&logoColor=white" alt="heroku"/></li>
                                <li><img src="https://img.shields.io/badge/SQLite-07405E?style=for-the-badge&logo=sqlite&logoColor=white" alt="sqlite"/></li>
                                <li><img src="https://img.shields.io/badge/PostgreSQL-316192?style=for-the-badge&logo=postgresql&logoColor=white" alt="postgres"/></li>

                            </ul>
                    </td> 
                    <td valign="top"> 
                        <h3><strong>Frameworks & Library:</strong></h3>
                            <ul>
                                
                                <li><img src="https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB" alt="react"/></li>
                                <li><img src="https://img.shields.io/badge/React_Native-20232A?style=for-the-badge&logo=react&logoColor=61DAFB" alt="react-native"/></li>
                                <li><img src="https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white" alt="node"/></li>
                                <li><img src="https://img.shields.io/badge/Redux-593D88?style=for-the-badge&logo=redux&logoColor=white" alt="redux"/></li>
                                <li><img src="https://img.shields.io/badge/Sass-CC6699?style=for-the-badge&logo=sass&logoColor=white" alt="redux"/></li>
                                <li><img src="https://img.shields.io/badge/GIT-E44C30?style=for-the-badge&logo=git&logoColor=white" alt="sass"/></li>
                                <li><img src="https://img.shields.io/badge/axios-671ddf?&style=for-the-badge&logo=axios&logoColor=white" alt="git"/></li>
                                <li><img src="https://img.shields.io/badge/Django-092E20?style=for-the-badge&logo=django&logoColor=green" alt="axios"/></li>
                                <li><img src="https://img.shields.io/badge/Expo-1B1F23?style=for-the-badge&logo=expo&logoColor=white" alt="django"/></li>
                                <li><img src="https://img.shields.io/badge/Express%20js-000000?style=for-the-badge&logo=express&logoColor=white" alt="expo"/></li>
                                <li><img src="https://img.shields.io/badge/Flask-000000?style=for-the-badge&logo=flask&logoColor=white" alt="express-js"/></li>
                                <li><img src="https://img.shields.io/badge/Bootstrap-563D7C?style=for-the-badge&logo=bootstrap&logoColor=white" alt="flask"/></li>
                                <li><img src="https://img.shields.io/badge/Arduino-00979D?style=for-the-badge&logo=Arduino&logoColor=white" alt="bootstrap"/></li>
                                <li><img src="https://img.shields.io/badge/jQuery-0769AD?style=for-the-badge&logo=jquery&logoColor=white" alt="jquery"/></li>
                            </ul> 
                    </td>
                </tr>
            </table>
            </div>
            <div className="page-subview">
                <p className="page-title"> // Github Stats</p>
                <div className="section-view">
                {/* <img src="	https://github-profile-summary-cards.vercel.app/api/cards/profile-details?username=bernard-calma"/> */}
                    <img src="https://github-readme-stats.vercel.app/api/top-langs/?username=bernard-calma&layout=compact" alt="languages"/>
                    {/* <img src="https://github-readme-stats.vercel.app/api?username=bernard-calma&show_icons=true&theme=radical"/> */}
                    <img src="https://github-readme-streak-stats.herokuapp.com/?user=bernard-calma&theme=radical" alt="contributions"/>
                </div>
            </div>
        </>
    );
}

export default TechnicalSkills;