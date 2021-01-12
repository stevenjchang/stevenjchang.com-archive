import "sections/ServiceSection.scss";

export function ServiceSection() {
  return (
    <section id="service-section" className="section section-outer">
      <div className="inner-container">
        {/* <div className="left"> */}
        <div class="left tabs-container">
          <label for="tab1" className="tab-label">
            <div className="tab-label-text">Website</div>
          </label>
          <label for="tab2" className="tab-label">
            <div className="tab-label-text">E-Commerce site</div>
          </label>
          <label for="tab3" className="tab-label">
            <div className="tab-label-text">
              Marketing, Tracking & Analytics
            </div>
          </label>
          <label for="tab-n" className="tab-label">
            <div className="tab-label-text">Software Development</div>
          </label>
          {/* </div> */}
        </div>
        <div className="right">
          <input name="tab" id="tab1" type="radio" checked />
          <div class="tab-content">
            <div className="tab-content-inner">
              <h2>1</h2>
              <p>Your paragraph goes here.</p>
            </div>
          </div>
          <input name="tab" id="tab2" type="radio" />
          <div class="tab-content">
            <div className="tab-content-inner">
              <h2>2</h2>
              <p>Your paragraph goes here.</p>
            </div>
          </div>
          <input name="tab" id="tab3" type="radio" />
          <div class="tab-content">
            <div className="tab-content-inner">
              <h2>3</h2>
              <p>Your paragraph goes here.3</p>
            </div>
          </div>
          <input name="tab" id="tab-n" type="radio" />
          <section class="tab-content">
            <div className="tab-content-inner">
              <h2>4</h2>
              <p>Your paragraph goes here.</p>
            </div>
          </section>
        </div>
      </div>
    </section>
  );
}
