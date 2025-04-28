import { useState } from "react";
import "./AboutMe.css"
import { Bio, Markdown, MenuOption } from "./components";

const AboutMe = ({pageMenuRef}) => {
    const [subContent, setSubContent] = useState("bio")
    
    return(
        <main className="about-me">
            <div className="page-menu" ref={pageMenuRef}>
                <div className="sections">
                    <img className="icon" src="/images/icons/info-professional.svg" alt="icon"/>
                    <img className="icon" src="/images/icons/info-personal.svg" alt="icon"/>
                    <img className="icon" src="/images/icons/info-hobbies.svg" alt="icon"/>
                </div>
                <div className="section-content">
                    <MenuOption 
                        className="section-title"
                        icon="/images/icons/arrow.svg"
                        label="professional-info"
                    />
                    <div className="section-sub-contents">
                    <div className="sub-content">
                        <MenuOption 
                            icon="/images/icons/caret.svg"
                            label={<Markdown label="bio" />}
                            open={subContent === "bio"}
                            onClick={() => setSubContent("bio")}
                        />
                        <MenuOption 
                            icon="/images/icons/caret.svg"
                            label={<Markdown label="experience" />}
                            open={subContent === "experience"}
                            onClick={() => setSubContent("experience")}
                        />
                        <MenuOption 
                            icon="/images/icons/caret.svg"
                            label={<Markdown label="hard-skills" />}
                            open={subContent === "hard-skills"}
                            onClick={() => setSubContent("hard-skills")}
                        />
                        <MenuOption 
                            icon="/images/icons/caret.svg"
                            label={<Markdown label="soft-skills" />}
                            open={subContent === "soft-skills"}
                            onClick={() => setSubContent("soft-skills")}
                        />
                    </div>
                    </div>
                    <MenuOption 
                        className="section-title"
                        icon="/images/icons/arrow.svg"
                        label="contacts"
                    />
                    <div className="contacts">
                        <MenuOption
                            icon="/images/icons/email.svg"
                            label=" nard.calma@gmail.com"
                        />
                        <MenuOption
                            icon="/images/icons/phone.svg"
                            label=" +1(123)-456-789"
                        />
                    </div>
                </div>
            </div>
            <div className="page-view" >
            <p className="page-title"> professional-info <span>X</span></p>
            <div className="section-view">
                <Bio />
            </div>
            </div>
            <div className="page-subview">
                <h2>// Code snippet</h2>
                <div className="code-snippet">
                    <div className="code-snippet-header">
                        <img className="icon" src="/images/bc-logo.jpg" alt="icon"/>
                        <p className="git-username">@bernard-calma</p>
                    </div>
                    <div className="code-snippet-body">
                        <p>{`useEffect(() => {`} </p> 
                        <p>{`   if (lineIndex >= lines.length) return;`} </p> 
                        <p>{`   const line = lines[lineIndex];`}</p>
                        <p>{`   // Set the interval to type characters at a fixed speed`} </p> 
                        <p>{`   const interval = setInterval(() => {`} </p> 
                        <p>{`    if (charIndex < line.length) {`}</p>
                        <p>{`      const nextChar = line.slice(0, charIndex + 1);{`} </p> 
                        <p>{`      setCurrentLine(nextChar);`} </p> 
                        <p>{`      setCharIndex(prev => prev + 1);`}</p>
                        <p>{`    } else {`} </p> 
                        <p>{`       // When the line is done, add it to displayed lines`} </p> 
                        <p>{`       setDisplayedLines(prev => [...prev, line]);`}</p>
                        <p>{`       setLineIndex(prev => prev + 1);`} </p> 
                        <p>{`       setCharIndex(0);;`} </p> 
                        <p>{`       setCurrentLine('');`}</p>
                        <p>{`       clearInterval(interval); // clear the interval after the line is typed`} </p> 
                        <p>{`    }`} </p> 
                        <p>{`    }, 50); // Adjust the 100ms to control typing speed (slower or faster)`}</p>
                        <p>{``} </p> 
                        <p>{`   return () => clearInterval(interval); // Cleanup the interval on component unmount`} </p> 
                        <p>{`}, [charIndex, lineIndex, lines]);`}</p>
                    </div>

                </div>
            </div>
      </main>
    )
}

export default AboutMe;

//         setLineIndex(prev => prev + 1);
//         setCharIndex(0);
//         setCurrentLine('');
//         clearInterval(interval); // clear the interval after the line is typed
//       }
//     }, 50); // Adjust the 100ms to control typing speed (slower or faster)

//     return () => clearInterval(interval); // Cleanup the interval on component unmount
//   }, [charIndex, lineIndex, lines]);