import "./about.css";
export default function About() {
  return (
    <section className="sec3" id="about">
      <div className="container py-5">
        <h2 className="pb-3 border-bottom border-warning featuresh2">About</h2>

        <div className="row">
          <div className="cardabout">
            <div className="profileImage">
            <img src="black-man.png" className="profimg"/>
            </div>
            <div className="textContainer">
              <p className="name">Reginald Shawn Annan</p>
              <p className="profileabout">Full-Stack Software Engineer</p>
            </div>
          </div>
          <div className="col">
            <p className="aboutp">
              This is a project built by Reginald Shawn Annan, An aspiring
              Full-Stack Software Engineer. This project was a test of my
              understanding of not only Front-End and Back-End technologies, but
              also my critical thinking, problem solving skills and most of all
              perseverance and determination. I hope you do have a great
              experience using it. Thank You.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
