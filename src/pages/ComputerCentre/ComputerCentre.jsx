import React from "react";
import "./ComputerCentre.css";

const ComputerCentre = () => {
  return (
    <div className="computer-centre-container">
      <header className="computer-centre-header">
        <h1 className="text-center">Computer Centers</h1>
        <p className="lead h2 text-center">Empowering Innovation through code, connectivity, and curiosity.</p>
      </header>

      <div className="container">
        <div className="row my-4">
          <div className="col mx-auto">
            <div className="card mt-4">
              <div id="mainCarousel" className="carousel slide" data-ride="carousel">
                <ol className="carousel-indicators">
                  <li data-target="#mainCarousel" data-slide-to="0"></li>
                  <li data-target="#mainCarousel" data-slide-to="1" className="active"></li>
                  <li data-target="#mainCarousel" data-slide-to="2"></li>
                </ol>
                <div className="carousel-inner" role="listbox">
                  <div className="carousel-item" style={{ 
                    height: "55vh", 
                    backgroundImage: "url('/img/ComputerCentre/computerCenter-CL7-1.jpg')",
                    backgroundSize: "cover",
                    backgroundPosition: "center"
                  }}>
                    <div className="carousel-caption d-none d-md-block">
                      <h3>CL-7 Labview</h3>
                      <p>Seating, Systems and Podium.</p>
                    </div>
                  </div>
                  <div className="carousel-item active" style={{ 
                    height: "55vh", 
                    backgroundImage: "url('/img/ComputerCentre/computerCenter-CL7-2.jpg')",
                    backgroundSize: "cover",
                    backgroundPosition: "center"
                  }}>
                    <div className="carousel-caption d-none d-md-block">
                      <h3>Teaching and Presentations</h3>
                      <p>State of the art A/V and Projector system.</p>
                    </div>
                  </div>
                  <div className="carousel-item" style={{ 
                    height: "55vh", 
                    backgroundImage: "url('/img/ComputerCentre/computerCenter-CL7-3.jpg')",
                    backgroundSize: "cover",
                    backgroundPosition: "center"
                  }}>
                    <div className="carousel-caption d-none d-md-block">
                      <h3>Student Systems</h3>
                      <p>Advanced student systems and Linux servers.</p>
                    </div>
                  </div>
                </div>
                <a className="carousel-control-prev" href="#mainCarousel" role="button" data-slide="prev">
                  <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                  <span className="sr-only">Previous</span>
                </a>
                <a className="carousel-control-next" href="#mainCarousel" role="button" data-slide="next">
                  <span className="carousel-control-next-icon" aria-hidden="true"></span>
                  <span className="sr-only">Next</span>
                </a>
              </div>

              <div className="card-body">
                <h3 className="card-title">Computer Lab - 7 (CL-7)</h3>
                <p className="card-text">Our advanced Computer lab provides students with access to the latest hardware and software technologies, creating a dynamic environment for hands-on learning, coding, research and innovation across various disciplines.</p>
              </div>
            </div>
          </div>
        </div>

        <div className="row my-5">
          <div className="col-lg-5 portfolio-item mx-auto">
            <div className="card">
              <div id="carousel1" className="carousel slide" data-ride="carousel">
                <ol className="carousel-indicators">
                  <li data-target="#carousel1" data-slide-to="0" className="active"></li>
                  <li data-target="#carousel1" data-slide-to="1"></li>
                </ol>
                <div className="carousel-inner" role="listbox">
                  <div className="carousel-item active" style={{ 
                    height: "35vh", 
                    backgroundImage: "url('/img/ComputerCentre/lab-placeholder-1.jpg')",
                    backgroundSize: "cover",
                    backgroundPosition: "center"
                  }}>
                  </div>
                  <div className="carousel-item" style={{ 
                    height: "35vh", 
                    backgroundImage: "url('/img/ComputerCentre/lab-placeholder-2.jpg')",
                    backgroundSize: "cover",
                    backgroundPosition: "center"
                  }}>
                  </div>
                </div>
              </div>
              <div className="card-body">
                <h4 className="card-title">Computer Lab 1 (CL-1)</h4>
                <p className="card-text">The Web Technology Lab enables students to build interactive websites and web applications using HTML, CSS, JavaScript, and server-side scripting. It enhances skills in front-end and back-end development, preparing students for modern web development challenges.</p>
              </div>
            </div>
          </div>

          <div className="col-lg-5 portfolio-item mx-auto">
            <div className="card">
              <div id="carousel2" className="carousel slide" data-ride="carousel">
                <ol className="carousel-indicators">
                  <li data-target="#carousel2" data-slide-to="0" className="active"></li>
                  <li data-target="#carousel2" data-slide-to="1"></li>
                </ol>
                <div className="carousel-inner" role="listbox">
                  <div className="carousel-item active" style={{ 
                    height: "35vh", 
                    backgroundImage: "url('/img/ComputerCentre/computerCenter-CL2-1.jpg')",
                    backgroundSize: "cover",
                    backgroundPosition: "center"
                  }}>
                  </div>
                  <div className="carousel-item" style={{ 
                    height: "35vh", 
                    backgroundImage: "url('/img/ComputerCentre/lab-placeholder-2.jpg')",
                    backgroundSize: "cover",
                    backgroundPosition: "center"
                  }}>
                  </div>
                </div>
              </div>
              <div className="card-body">
                <h4 className="card-title">Computer Lab 2 (CL-2)</h4>
                <p className="card-text">The DSA Lab provides students with practical experience in implementing core concepts of data structures, algorithms, and operating systems. It enhances analytical and coding skills through hands-on learning of process management, memory allocation, and algorithm design.</p>
              </div>
            </div>
          </div>

          <div className="col-lg-5 portfolio-item mx-auto">
            <div className="card">
              <div id="carousel3" className="carousel slide" data-ride="carousel">
                <ol className="carousel-indicators">
                  <li data-target="#carousel3" data-slide-to="0" className="active"></li>
                  <li data-target="#carousel3" data-slide-to="1"></li>
                </ol>
                <div className="carousel-inner" role="listbox">
                  <div className="carousel-item active" style={{ 
                    height: "35vh", 
                    backgroundImage: "url('/img/ComputerCentre/computerCenter-CL5-1.jpg')",
                    backgroundSize: "cover",
                    backgroundPosition: "center"
                  }}>
                  </div>
                  <div className="carousel-item" style={{ 
                    height: "35vh", 
                    backgroundImage: "url('/img/ComputerCentre/computerCenter-CL5-2.jpg')",
                    backgroundSize: "cover",
                    backgroundPosition: "center"
                  }}>
                  </div>
                </div>
              </div>
              <div className="card-body">
                <h4 className="card-title">Computer Lab 5 (CL-5)</h4>
                <p className="card-text">The CAD Lab offers students hands-on experience in designing and modeling engineering components using advanced CAD software. It helps develop precision, creativity, and visualization skills essential for modern engineering design.</p>
              </div>
            </div>
          </div>

          <div className="col-lg-5 portfolio-item mx-auto">
            <div className="card">
              <div id="carousel4" className="carousel slide" data-ride="carousel">
                <ol className="carousel-indicators">
                  <li data-target="#carousel4" data-slide-to="0" className="active"></li>
                  <li data-target="#carousel4" data-slide-to="1"></li>
                </ol>
                <div className="carousel-inner" role="listbox">
                  <div className="carousel-item active" style={{ 
                    height: "35vh", 
                    backgroundImage: "url('/img/ComputerCentre/lab-placeholder-1.jpg')",
                    backgroundSize: "cover",
                    backgroundPosition: "center"
                  }}>
                  </div>
                  <div className="carousel-item" style={{ 
                    height: "35vh", 
                    backgroundImage: "url('/img/ComputerCentre/lab-placeholder-2.jpg')",
                    backgroundSize: "cover",
                    backgroundPosition: "center"
                  }}>
                  </div>
                </div>
              </div>
              <div className="card-body">
                <h4 className="card-title">Computer Lab 8 (CL-8)</h4>
                <p className="card-text">The ADA(Analysis of Design and Algorithm) Lab focuses on developing efficient algorithms using various design techniques like divide and conquer, greedy, and dynamic programming. Students learn to analyze time and space complexity, enhancing their problem-solving and optimization skills for real-world applications.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ComputerCentre;
