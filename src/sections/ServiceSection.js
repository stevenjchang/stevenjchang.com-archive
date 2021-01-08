import "sections/ServiceSection.scss";

export function ServiceSection() {
  return (
    <section id="service-section" className="section">
      <div className="inner-container">
        <div className="left">
          <div className="tab active">
            <p className="">Website</p>
          </div>
          <div className="tab">
            <p className="">E-Commerce site</p>
          </div>
          <div className="tab">
            <p className="">Marketing, Tracking & Analytics</p>
          </div>
          <div className="tab">
            <p className="">Software Development</p>
          </div>
        </div>
        <div className="right">right side</div>
      </div>
    </section>
  );
}
