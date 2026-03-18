
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import arrow1 from "../assets/img/arrow1.svg";
import arrow2 from "../assets/img/arrow2.svg";
import colorSharp from "../assets/img/color-sharp.png"
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

export const Skills = () => {

  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  // ✅ MUST be inside function
  const skills = [
    { name: "HTML/CSS", value: 95 },
    { name: "JavaScript", value: 85 },
    { name: "React JS", value: 80 },
    { name: "Node JS", value: 65 },
    { name: "MongoDB", value: 65 },
    { name: "Git & GitHub", value: 75 }
  ];

  return (
    <section className="skill" id="skills">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="skill-bx">
              <h2>Skills</h2>

              <Carousel responsive={responsive} infinite={true} className="skill-slider">

                {skills.map((skill, index) => (
                  <div className="item" key={index} style={{ padding: "20px" }}>

                    <CircularProgressbar
                      value={skill.value}
                      text={`${skill.value}%`}
                      styles={buildStyles({
                        textColor: "#fff",
                        pathColor: "#0baae4",
                        trailColor: "#333"
                      })}
                    />

                    <h5 style={{ marginTop: "15px", textAlign: "center" }}>
                      {skill.name}
                    </h5>

                  </div>
                ))}

              </Carousel>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
