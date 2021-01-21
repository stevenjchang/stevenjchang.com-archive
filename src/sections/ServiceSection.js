import { useState } from "react";
import classnames from "classnames";
import "sections/ServiceSection.scss";

const array = [
  {
    name: `Website or Landing Page`,
    text: `To build a stunning homepage for your business <br/> <br/> or landing page for your product`,
  },
  {
    name: `E-Commerce`,
    text:
      "I can help you with a new e-commerce site from scratch, customize a shopify/woo-commerce solution, or simple integrate payment systems onto an existing site",
  },
  {
    name: `Marketing support`,
    text:
      "Need help setting up analytics and tracking tools? Or are the tools just not tracking sales correctly? I can help troubleshoot those issues",
  },
  { name: `Logo Design`, text: "dev" },
];

export function ServiceSection() {
  const [currentTab, setCurrentTab] = useState(0);
  return (
    <div className="section-outer service-section-outer">
      <h2 className="">My Services</h2>
      <section className="section-inner">
        <div className="service-section">
          <div className="left">
            {array.map((item, idx) => {
              const cn = classnames("tab", { active: currentTab === idx });
              return (
                <div
                  className={cn}
                  isActive={currentTab === idx}
                  onClick={() => setCurrentTab(idx)}
                >
                  {item.name}
                </div>
              );
            })}
          </div>
          <div className="right">
            {array.map((item, idx) => {
              const cn = classnames("tab-content", {
                active: currentTab === idx,
              });
              // return <div className={cn}>{item.text}</div>;
              return (
                <div
                  className={cn}
                  dangerouslySetInnerHTML={{ __html: item.text }}
                />
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}

export function ServiceSection_old() {
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
              Marketing Tools Marketing, Tracking & Analytics
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
