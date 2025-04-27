import { useEffect, useState } from "react";

const Bio = () => {
  const [displayedLines, setDisplayedLines] = useState([]);
  const [currentLine, setCurrentLine] = useState('');
  const [lineIndex, setLineIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);

  const bio = `I'm Bernard Calma, a front-end developer with over a decade of experience in technical troubleshooting and over a year specializing in modern web development. With a strong foundation in React, Redux, JavaScript, and full-stack technologies, I enjoy crafting intuitive, high-performing user interfaces and scalable applications.

I've contributed to projects ranging from leadership tracking systems and budgeting tools to auction platforms and automation apps. Whether building from scratch or optimizing existing codebases, I focus on delivering clean, maintainable solutions that enhance user experience and meet project goals.

My background includes hands-on roles in both startup and enterprise environments, where I’ve collaborated with cross-functional teams and mentored peers to meet tight deadlines and improve workflow efficiency. I’m also well-versed in Agile methodologies, RESTful APIs, and working with a wide range of databases including PostgreSQL and MongoDB.

In addition to my technical skill set, I bring strong project management abilities, critical thinking, and a proactive, team-oriented mindset. I'm currently pursuing a BS in Software Engineering and constantly expanding my capabilities through ongoing education and side projects.

If you're looking for a developer who combines solid technical expertise with a collaborative spirit, let’s connect—I’d love to hear about your project!`;

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
  const lines = ["/**", "* About Me", ...contentLines, "*/"];
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
  );
};

export default Bio;
