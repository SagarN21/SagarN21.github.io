import React, { useState, useEffect } from "react";
import CV from "../Files/Sagar-Naik-Resume.pdf";
import DropDown from "./Dropdown";
import { AiOutlineHome } from "react-icons/ai";

const Header = () => {
  const [activeNav, setActiveNav] = useState("#");
  const [selectedOption, setSelectedOption] = useState("");
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    function handleResize() {
      setIsMobile(window.innerWidth <= 1010);
    }

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const handleOptionSelect = (option) => {
    setSelectedOption(option);
  };

  return (
    <>
      <header id="nav-menu">
        <a href="#" className="logo" onClick={() => setActiveNav("#")}>
          Sagar <span style={{ color: "black" }}> Naik </span>
        </a>
        <ul className={`navlist ${isMobile ? "hide-on-mobile" : ""}`}>
          <li className="hide-on-mobile">
            <a
              href="#home"
              className="active"
              onClick={() => setActiveNav("#home")}
            >
              Home
            </a>
          </li>
          <li>
            <a href="#about" onClick={() => setActiveNav("#about")}>
              About
            </a>
          </li>
          <li>
            <a href="#skills" onClick={() => setActiveNav("#skills")}>
              Skills
            </a>
          </li>
          <li>
            <a href="#tools" onClick={() => setActiveNav("#tools")}>
              Tools
            </a>
          </li>
          <li>
            <a href="#projects" onClick={() => setActiveNav("#projects")}>
              Projects
            </a>
          </li>
          <li>
            <a href="#githubs" onClick={() => setActiveNav("#githubs")}>
              GitHub
            </a>
          </li>
          <li>
            <a href="#contact" onClick={() => setActiveNav("#contact")}>
              Contact
            </a>
          </li>
          <li>
            <button id="resume-button-1">
              <a
                href={CV}
                target="_blank"
                download="Sagar-Naik-Resume.pdf"
                id="resume-link-1"
                className="nav-link resume"
                onClick={() =>
                  window.open(
                    "https://drive.google.com/file/d/1UkgB99_4WGdsZg57oMpTfZx6i8ZufexR/view?usp=sharing"
                  )
                }
              >
                Resume
              </a>
            </button>
          </li>
        </ul>
        <div id="menu-icon">
          {isMobile && (
            <DropDown
              style={{ background: "#e6fffd" }}
              options={[
                <a href="#home">
                  <AiOutlineHome />
                </a>,
                <a href="#about" style={{ color: "#e6fffd" }}>
                  About
                </a>,
                <a href="#skills" style={{ color: "#e6fffd" }}>
                  Skills
                </a>,
                <a href="#tools" style={{ color: "#e6fffd" }}>
                  Tools
                </a>,
                <a href="#projects" style={{ color: "#e6fffd" }}>
                  Projects
                </a>,
                <a href="#githubs" style={{ color: "#e6fffd" }}>
                  GitHub
                </a>,
                <a href="#contact" style={{ color: "#e6fffd" }}>
                  Contact
                </a>,
              ]}
              onSelect={handleOptionSelect}
            />
          )}
        </div>
      </header>
    </>
  );
};

export default Header;
