import bg_5 from "@/assets/images/about/127.jpg";
import bg_1 from "@/assets/images/video/videoCover.png";

export default function Topmodel() {
  return (
    <section className="ftco-section-2">
      <div className="container-fluid">
        <div className="section-2-blocks-wrapper d-flex row no-gutters">
          <div
            className="img col-md-6 ftco-animate"
            role="img"
            aria-label="Cinemate Production photography session"
            style={{
              backgroundImage: `url(${bg_5.src})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          />

          <div className="text col-md-6 ftco-animate">
            <div className="text-inner align-self-start">
              <h3 className="heading">
                Cinemate Production – Visual Storytellers
              </h3>
              <p>
                Passionate <strong>photographers</strong> capturing timeless
                stories through the lens, blending <strong>creativity</strong>
                with emotion. From candid moments to cinematic frames, every
                shot turns memories into art with a premium production
                experience.
              </p>

              <ul className="my-4">
                <li>
                  <span className="ion-ios-checkmark-circle mr-2" aria-hidden="true"></span>
                  Candid moments with a cinematic finish
                </li>
                <li>
                  <span className="ion-ios-checkmark-circle mr-2" aria-hidden="true"></span>
                  Editorial direction for people and brands
                </li>
                <li>
                  <span className="ion-ios-checkmark-circle mr-2" aria-hidden="true"></span>
                  Coverage across Delhi NCR and India
                </li>
              </ul>

              <div className="row align-items-center">
                <div className="col-md-7 ftco-animate">
                  <div
                    className="img-2 d-flex justify-content-center align-items-center"
                    role="img"
                    aria-label="Preview of the Cinemate Production video promo"
                    style={{
                      backgroundImage: `url(${bg_1.src})`,
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                      minHeight: "250px",
                    }}
                  >
                    <a
                      href="/videos/152.mp4"
                      className="button"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="Play Cinemate Production video promo"
                    >
                      <span className="ion-ios-play" aria-hidden="true"></span>
                    </a>
                  </div>
                </div>
                <div className="col-md-4 d-md-flex align-items-center">
                  <h3 className="watchvideo-heading">
                    <a
                      href="/videos/152.mp4"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <span className="ion-ios-play" aria-hidden="true"></span>{" "}
                      Watch our video promo
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
