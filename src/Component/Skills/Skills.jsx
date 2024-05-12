import { useEffect, useRef } from 'react';
import './Skills.css';
import css3 from '../../assets/css3.svg';
import html5 from '../../assets/html5.svg';
import javascript from '../../assets/javascript.svg';
import node from '../../assets/node.svg';
import react from '../../assets/react.svg';
import passeportdev from '../../assets/passeportdev.webp';

function Skills() {
    const skillsRef = useRef(null);
  
    useEffect(() => {
      const skills = skillsRef.current.children;
      const total = skills.length;
      const animationDuration = 30; 
  
      for (let i = 0; i < total; i++) {
        const rotate = (360 / total) * i;
        const delay = -(animationDuration / total) * i;
        skills[i].style.transform = `rotate(${rotate}deg) rotate(-${rotate}deg)`;
        skills[i].style.animationDelay = `${delay}s`;
      }
    }, []);
  
    return (
    <>  
    <div id='expérience' className='formation'>
        <h2 className='formation-title'>Formation</h2>
        <p className='formation-subtitle'><span>OpenClassrooms</span> : Intégrateur Web</p>
      </div>
    <div id='skills' className='skills-container'>
    <div className='wheel-container'>
    <h2 className='skills-title'>Skills</h2>
      <div className="skills" ref={skillsRef}>
        <div className="skill">
          <img src={css3} alt="CSS3" />
        </div>
        <div className="skill">
          <img src={html5} alt="HTML5" />
        </div>
        <div className="skill">
          <img src={javascript} alt="JavaScript" />
        </div>
        <div className="skill">
          <img src={node} alt="Node.js" />
        </div>
        <div className="skill">
          <img src={react} alt="React" />
        </div>
      </div>
      </div>
      <a className='passeportdev' href="https://passeport.dev/p/e893fe77-1dc9-42e4-83c3-f9552b0bb500" target="_blank" rel="noopener noreferrer">
  <img src={passeportdev} alt="passeportdev" style={{ filter: 'brightness(0.3)' }} />
  <i className="fas fa-arrow-up-right-from-square" style={{ position: 'absolute', top: '40%', left: '50%', transform: 'translate(-50%, -50%)', color: '#8809ff', fontSize: '2em' }}></i>
</a>
      </div>
      </>
    );
  }
  
  export default Skills;