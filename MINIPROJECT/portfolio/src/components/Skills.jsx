import { Container, Row, Col } from "react-bootstrap";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Skills = () => {
  
  const skillCategories = [
    {
      title: "Programming Languages",
      skills: [
        { name: "JavaScript", level: 95, color: "#F7DF1E" },
        { name: "Python", level: 85, color: "#3776AB" },
        { name: "HTML/CSS", level: 90, color: "#E34F26" },
        { name: "Dart", level: 80, color: "#0175C2" },
        { name: "SQL", level: 75, color: "#4479A1" },
      ]
    },
    {
      title: "Frontend Frameworks & Libraries",
      skills: [
        { name: "React", level: 90, color: "#61DAFB" },
        { name: "React Native", level: 85, color: "#61DAFB" },
        { name: "Flutter", level: 88, color: "#02569B" },
        { name: "Redux", level: 80, color: "#764ABC" },
        { name: "Bootstrap", level: 85, color: "#7952B3" },
      ]
    },
    {
      title: "Backend & Databases",
      skills: [
        { name: "Node.js", level: 85, color: "#339933" },
        { name: "Express.js", level: 80, color: "#000000" },
        { name: "MongoDB", level: 75, color: "#47A248" },
        { name: "Firebase", level: 80, color: "#FFCA28" },
        { name: "REST APIs", level: 85, color: "#FF6B6B" },
      ]
    },
    {
      title: "Tools & DevOps",
      skills: [
        { name: "Git", level: 90, color: "#F05032" },
        { name: "GitHub", level: 85, color: "#181717" },
        { name: "Docker", level: 70, color: "#2496ED" },
        { name: "VS Code", level: 95, color: "#007ACC" },
        { name: "Figma", level: 75, color: "#F24E1E" },
      ]
    },
    {
      title: "AI/ML Technologies",
      skills: [
        { name: "TensorFlow", level: 75, color: "#FF6F00" },
        { name: "Keras", level: 70, color: "#D00000" },
        { name: "Scikit-learn", level: 75, color: "#F7931E" },
        { name: "OpenCV", level: 65, color: "#5C3EE8" },
        { name: "Pandas", level: 80, color: "#150458" },
      ]
    }
  ];

  const SkillBar = ({ skill, isVisible }) => {
    return (
      <div className="skill-item" style={{ marginBottom: '15px' }}>
        <div className="skill-info" style={{ 
          display: 'flex', 
          justifyContent: 'space-between', 
          marginBottom: '5px',
          color: '#FFFFFF'
        }}>
          <span style={{ fontWeight: '500', fontSize: '16px' }}>{skill.name}</span>
          <span style={{ fontWeight: '500', fontSize: '14px', color: '#C7D2FE' }}>{skill.level}%</span>
        </div>
        <div className="skill-bar-container" style={{
          width: '100%',
          height: '10px',
          backgroundColor: 'rgba(255, 255, 255, 0.1)',
          borderRadius: '5px',
          overflow: 'hidden'
        }}>
          <div 
            className="skill-bar-fill"
            style={{
              width: isVisible ? `${skill.level}%` : '0%',
              height: '100%',
              background: `linear-gradient(90deg, ${skill.color}, #2FF3E0)`,
              borderRadius: '5px',
              transition: 'width 1.5s ease-in-out',
              position: 'relative'
            }}
          >
            <div style={{
              position: 'absolute',
              right: '0',
              top: '0',
              width: '3px',
              height: '100%',
              backgroundColor: '#FFFFFF',
              opacity: '0.7'
            }}></div>
          </div>
        </div>
      </div>
    );
  };

  const SkillCategory = ({ category, isVisible }) => {
    return (
      <div className="skill-category-card" style={{
        background: 'rgba(10, 26, 79, 0.7)',
        borderRadius: '15px',
        padding: '25px',
        height: '100%',
        border: '1px solid rgba(11, 46, 166, 0.3)',
        transition: 'transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out'
      }}>
        <h3 style={{
          color: '#2FF3E0',
          fontSize: '22px',
          marginBottom: '20px',
          fontWeight: '600',
          textAlign: 'center'
        }}>{category.title}</h3>
        <div className="skill-list">
          {category.skills.map((skill, index) => (
            <SkillBar key={index} skill={skill} isVisible={isVisible} />
          ))}
        </div>
      </div>
    );
  };

  return (
    <section className="skill" id="skills">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                  <div className="skill-bx">
                    <h2>Skills & Technologies</h2>
                    <p style={{ fontSize: '18px', marginBottom: '40px' }}>
                      A comprehensive representation of my technical stack across different categories. 
                      From frontend to backend, mobile development to AI/ML, here's what I've learned and mastered.
                    </p>
                    
                    <Row className="g-4">
                      {skillCategories.map((category, index) => (
                        <Col xs={12} md={6} lg={4} key={index} style={{ marginBottom: '20px' }}>
                          <TrackVisibility partialVisibility>
                            {({ isVisible: catVisible }) => (
                              <SkillCategory 
                                category={category} 
                                isVisible={catVisible}
                              />
                            )}
                          </TrackVisibility>
                        </Col>
                      ))}
                    </Row>

                    {/* Legend */}
                    <div className="skill-legend" style={{
                      marginTop: '40px',
                      padding: '20px',
                      background: 'rgba(11, 46, 166, 0.1)',
                      borderRadius: '10px',
                      border: '1px solid rgba(24, 198, 232, 0.2)',
                      textAlign: 'center'
                    }}>
                      <h4 style={{ color: '#FFFFFF', marginBottom: '15px' }}>Proficiency Levels</h4>
                      <div className="legend-items" style={{
                        display: 'flex',
                        justifyContent: 'center',
                        gap: '30px',
                        flexWrap: 'wrap'
                      }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                          <div style={{
                            width: '15px',
                            height: '15px',
                            background: 'linear-gradient(90deg, #F7DF1E, #2FF3E0)',
                            borderRadius: '3px'
                          }}></div>
                          <span style={{ color: '#C7D2FE' }}>Basic (50-69%)</span>
                        </div>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                          <div style={{
                            width: '15px',
                            height: '15px',
                            background: 'linear-gradient(90deg, #61DAFB, #2FF3E0)',
                            borderRadius: '3px'
                          }}></div>
                          <span style={{ color: '#C7D2FE' }}>Intermediate (70-84%)</span>
                        </div>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                          <div style={{
                            width: '15px',
                            height: '15px',
                            background: 'linear-gradient(90deg, #0A66FF, #2FF3E0)',
                            borderRadius: '3px'
                          }}></div>
                          <span style={{ color: '#C7D2FE' }}>Advanced (85-100%)</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  );
};