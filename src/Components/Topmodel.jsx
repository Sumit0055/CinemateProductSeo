// import bg_5 from "@/assets/images/about/127.jpg";
import som from "@/assets/images/about/som2.jpeg";
import bg_1 from "@/assets/images/video/videoCover.png";

export default function Topmodel() {
  return (
    <section className="ftco-section-2">
      <div className="container-fluid">
        <div className="section-2-blocks-wrapper d-flex row no-gutters">
          {/* Left Image */}
          <div
            className="img col-md-6 ftco-animate"
            role="img"
            aria-label="Cinemate Production photography session"
            style={{
              backgroundImage: `url(${som.src})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              marginTop: "50px",
            }}
          />

          {/* Right Text + Video */}
          <div className="text col-md-6 ftco-animate">
            <div className="text-inner align-self-start">
              <h3 className="heading">
                Cinemate Production – Visual Storytellers
              </h3>
              <p>
                Passionate <strong>photographers</strong> capturing timeless
                stories through the lens, blending <strong>creativity</strong>{" "}
                with emotion. From candid moments to cinematic frames, every
                shot turns memories into art with a premium production
                experience.
              </p>

              <ul className="my-4">
                <li>
                  <span className="ion-ios-checkmark-circle mr-2"></span>
                  Candid moments with a cinematic finish
                </li>
                <li>
                  <span className="ion-ios-checkmark-circle mr-2"></span>
                  Editorial direction for people and brands
                </li>
                <li>
                  <span className="ion-ios-checkmark-circle mr-2"></span>
                  Coverage across Delhi NCR and India
                </li>
              </ul>

              {/* Video Section */}
              <div className="row align-items-center">
                <div className="col-md-7 ftco-animate">
                  <video
                    width="100%"
                    controls
                    poster={bg_1.src} // thumbnail image
                    className="video-block"
                  >
                    <source src="/videos/final2.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                </div>
                <div className="col-md-4 d-md-flex align-items-center">
                  <h3 className="watchvideo-heading">
                    <a href="/videos/final2.mp4" target="_blank" rel="noopener noreferrer">
                      <span className="ion-ios-play"></span> Watch our video promo
                    </a>
                  </h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
