import "./about.css";
export default function About() {
  return (
    <section className="sec3">
      <div class="container py-5">
        <h2 className="pb-3 border-bottom border-warning featuresh2">About</h2>

        <div className="row">
          <div class="cardabout">
            <div class="profileImage">
            <a href="https://www.flaticon.com/free-icons/black-man" title="black man icons">Black man icons created by microstd - Flaticon</a>
            </div>
            <div class="textContainer">
              <p class="name">Reginald Shawn Annan</p>
              <p class="profileabout">Full-Stack Software Engineer</p>
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
