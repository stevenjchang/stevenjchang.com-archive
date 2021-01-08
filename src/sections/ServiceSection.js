import "sections/ServiceSection.scss";

export function ServiceSection() {
  return (
    <section id="service-section" className="section">
      {/* <div className="left"> */}
      <div class="tabs-container">
        <label for="tab1" className="tab-label">
          <div className="tab-label-text">First</div>
        </label>
        <label for="tab2" className="tab-label">
          <div className="tab-label-text">First</div>
        </label>
        <label for="tab3" className="tab-label">
          <div className="tab-label-text">First</div>
        </label>
        <label for="tab-n" className="tab-label">
          <div className="tab-label-text">First</div>
        </label>
      </div>
      {/* </div> */}
      <div className="right">
        <input name="tab" id="tab1" type="radio" checked />
        <div class="tab-content">
          <div className="tab-content-inner">
            <h2> Tab Heading </h2>
            <p>Your peragraph goes here.</p>
          </div>
        </div>
        <input name="tab" id="tab2" type="radio" checked />
        <div class="tab-content">
          <div className="tab-content-inner">
            <h2> Tab Heading </h2>
            <p>Your peragraph goes here.</p>
          </div>
        </div>
        <input name="tab" id="tab3" type="radio" checked />
        <div class="tab-content">
          <div className="tab-content-inner">
            <h2> Tab Heading </h2>
            <p>Your peragraph goes here.</p>
          </div>
        </div>
        <input name="tab" id="tab-n" type="radio" checked />
        <section class="tab-content">
          <div className="tab-content-inner">
            <h2> Tab Heading </h2>
            <p>Your peragraph goes here.</p>
          </div>
        </section>
      </div>
    </section>
  );
}

export function ServiceSection_old() {
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
