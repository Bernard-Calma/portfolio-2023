import { useEffect, useState } from "react";

const Bio = () => {
  const [displayedLines, setDisplayedLines] = useState([]);
  const [currentLine, setCurrentLine] = useState('');
  const [lineIndex, setLineIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);

  const bio = `Hi, I'm Bernard Calma, a Software Engineer with 1 year of full-stack development experience and over 10 years in IT. Specializing in React, Node.js, and MongoDB, I build scalable, high-performance applications and user interfaces.

With a solid foundation in full-stack technologies, I enjoy developing intuitive, responsive web applications from front-end design to back-end logic. I’ve worked on a variety of projects, including budgeting tools, automation apps, and leadership tracking systems, delivering clean, maintainable solutions that meet user needs and business goals.

My experience spans both startup and enterprise environments, where I’ve collaborated with cross-functional teams and led projects to success. I'm skilled in Agile methodologies, RESTful APIs, and database management (MongoDB, PostgreSQL), always focused on optimizing code for performance and efficiency.

In addition to my technical expertise, I bring strong problem-solving skills, a collaborative mindset, and a passion for continuous learning. I’m currently pursuing a BS in Software Engineering to further enhance my abilities.

If you’re looking for a dedicated full-stack developer with a strong IT background, let’s connect—I’d love to contribute to your project!`;

  const formatBio = (text, maxLength = 80) => {
    const paragraphs = text.trim().split("\n\n");
    const lines = [];

    for (const paragraph of paragraphs) {
      const words = paragraph.trim().split(/\s+/);
      let currentLine = "";

      for (const word of words) {
        if ((currentLine + " " + word).trim().length > maxLength) {
          lines.push(currentLine.trim());
          currentLine = word;
        } else {
          currentLine += " " + word;
        }
      }
      if (currentLine) lines.push(currentLine.trim());

      lines.push(""); // blank line for paragraph break
    }

    return lines;
  };

  // Build the full block
  const contentLines = formatBio(bio).map(line => `*${line ? " " + line : ""}`);
  const lines = ["/**", "* About Me", ...contentLines, "**/"];
  const totalLines = lines.length;
  const numberWidth = totalLines.toString().length;

  const formatLineNumber = (num) =>
    String(num).padStart(numberWidth, " ");

  useEffect(() => {
    if (lineIndex >= lines.length) return;

    const line = lines[lineIndex];
    
    // Set the interval to type characters at a fixed speed
    const interval = setInterval(() => {
      if (charIndex < line.length) {
        const nextChar = line.slice(0, charIndex + 1);
        setCurrentLine(nextChar);
        setCharIndex(prev => prev + 1);
      } else {
        // When the line is done, add it to displayed lines
        setDisplayedLines(prev => [...prev, line]);
        setLineIndex(prev => prev + 1);
        setCharIndex(0);
        setCurrentLine('');
        clearInterval(interval); // clear the interval after the line is typed
      }
    }, 50); // Adjust the 100ms to control typing speed (slower or faster)

    return () => clearInterval(interval); // Cleanup the interval on component unmount
  }, [charIndex, lineIndex, lines]);

  return (
    <>
        <div className="page-mainview bio">
            <p className="page-title"> {`professional-info > bio`}</p>
            <div className="section-view">
            <div className="bio" style={{ fontFamily: "monospace", whiteSpace: "pre" }}>
                {displayedLines.map((line, i) => (
                    <p key={i}>
                    {formatLineNumber(i + 1)} {line}
                    </p>
                ))}
                {lineIndex < lines.length && (
                    <p>
                    {formatLineNumber(lineIndex + 1)} {currentLine}
                    <span className="cursor">|</span>
                    </p>
                )}
                </div>
            </div>
        </div>
        <div className="page-subview">
            <p className="page-title"> // Code snippet</p>
            <div className="section-view">
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
        </div>
    </>
  );
};

export default Bio;
