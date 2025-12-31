import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import dep1 from "../assets/img/dep1.png";
import dep2 from "../assets/img/dep2.png";
import dep3 from "../assets/img/dep3.png";
import dep4 from "../assets/img/dep4.png";
import dep5 from "../assets/img/dep5.png";
import dep6 from "../assets/img/dep6.png"; 
import 'animate.css';
import KanbanWindow from "./KanbanWindow";

import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const projects = [
    { title: "LIMS PROJECT", description: "Design & Development", imgUrl: dep1 },
    { title: "LIMS PROJECT", description: "Design & Development", imgUrl: dep2 },
    { title: "LIMS PROJECT", description: "Design & Development", imgUrl: dep3 },
    { title: "LIMS PROJECT", description: "Design & Development", imgUrl: dep5 },
    { title: "LIMS PROJECT", description: "Design & Development", imgUrl: dep6 },
    { title: "LIMS PROJECT", description: "Design & Development", imgUrl: dep4 },
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Projects</h2>
                <p>I have developed a variety of projects demonstrating my skills as a Full Stack and Mobile Developer. These include a full-stack E-Commerce platform with real-time inventory and secure payments, a Task Management Dashboard with collaborative kanban boards and Firebase integration, and a Weather Application with location-based forecasting. Additionally, I built medical lab management systems, including appointment booking, patient records, and AI-powered X-ray prediction using TensorFlow.js. Across these projects, I utilized technologies like React, Flutter, Node.js, Express, MongoDB, Firebase, and Redux, applying practical solutions that improve workflow, user engagement, and diagnostic accuracy.</p>
                
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">LIMS Projects</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">Kanban Board</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">AI/ML Projects</Nav.Link>
                    </Nav.Item>
                  </Nav>

                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                      <div className="project-description mb-4" style={{ textAlign: 'center', padding: '20px' }}>
                        <p>
                          Laboratory Information Management System (LIMS) projects developed for medical laboratories. 
                          These systems manage patient data, test results, inventory, and automate laboratory workflows 
                          to improve efficiency and accuracy in diagnostic processes.
                        </p>
                      </div>
                      <Row>
                        {projects.map((project, index) => (
                          <ProjectCard key={index} {...project} />
                        ))}
                      </Row>
                    </Tab.Pane>
                    
                    <Tab.Pane eventKey="second">
                      <div className="project-description mb-4" style={{ textAlign: 'center', padding: '20px' }}>
                        <p>
                          Interactive Task Management Kanban Board built with React. Features include task creation, 
                          drag-and-drop functionality between columns, real-time updates, and local storage persistence. 
                          Demonstrates state management and responsive UI design.
                        </p>
                      </div>
                      <div style={{ padding: '10px' }}>
                        <KanbanWindow />
                      </div>
                    </Tab.Pane>
                    
                    <Tab.Pane eventKey="third">
                      <div className="project-description mb-4" style={{ textAlign: 'center', padding: '20px' }}>
                        <p>
                          Artificial Intelligence and Machine Learning projects focusing on medical image analysis 
                          and predictive modeling. Utilizing deep learning techniques for accurate disease detection 
                          and data-driven healthcare solutions.
                        </p>
                      </div>
                      <div className="project" style={{ padding: '20px', textAlign: 'center' }}>
                        <div className="ai-project-card">
                          <h4 className="ai-project-title">Pneumonia Detection System</h4>
                          <p className="ai-project-subtitle">
                            <strong>CNN Binary Classification Model</strong>
                          </p>
                          <p className="ai-project-description">
                            Developed a convolutional neural network that analyzes chest X-ray images 
                            to detect pneumonia with high accuracy, assisting in early medical diagnosis.
                          </p>
                          
                          <div className="ai-tech-section">
                            <h5 className="ai-tech-title">Technologies Used:</h5>
                            <div className="ai-tech-tags">
                              <span className="ai-tech-tag">TensorFlow</span>
                              <span className="ai-tech-tag">Keras</span>
                              <span className="ai-tech-tag">Python</span>
                              <span className="ai-tech-tag">OpenCV</span>
                            </div>
                          </div>
                          
                          <div className="ai-metrics-grid">
                            <div className="ai-metric-box">
                              <h3 className="ai-metric-value">90%+</h3>
                              <small className="ai-metric-label">Accuracy</small>
                            </div>
                            <div className="ai-metric-box">
                              <h3 className="ai-metric-value">5K+</h3>
                              <small className="ai-metric-label">Images</small>
                            </div>
                            <div className="ai-metric-box">
                              <h3 className="ai-metric-value">98%</h3>
                              <small className="ai-metric-label">Specificity</small>
                            </div>
                          </div>
                        </div>
                      </div>
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>

                {/* More Details Button */}
                <div className="projects text-center mt-4">
                  <a
                    href="https://github.com/wassimhachache?tab=repositories"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <button className="btn-primary">
                      <span>More Details</span>
                    </button>
                  </a>
                </div>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  )
}