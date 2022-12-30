/* eslint-disable @next/next/no-img-element */
import {
  HERO,
  SECTION_1,
  SECTION_2 as S2,
  SECTION_3 as S3,
  SECTION_4 as S4,
  SECTION_5,
} from '@/content/homepage';

const HeroSection = () => {
  return (
    <>
      <section
        id="hero-section"
        className="section-background 
        py-8 lg:py-24"
      >
        <div className="container mx-auto flex">
          <img
            // className="absolute top-0 b-auto right-0 pt-16 sm:w-6/12 -mt-48 sm:mt-0 w-10/12 max-h-360-px rotate-image"
            style={{
              position: 'absolute',
              height: '700px',
              right: 0,
            }}
            src="/img/pattern_nextjs.png"
            alt="..."
          />
          {/* <div className="left w-full lg:w-1/2  px-12">
            <div className="c flex justify-center items-center">
              <img className="h-auto" src="/img/podcast_steve.svg" alt="" />
            </div>
          </div> */}
          <div className="right lg:w-1/2 p-6 lg:p-16 ml-16">
            <h1 className="font-semibold text-5xl text-slate-900">
              Steven J Chang
            </h1>
            <br />
            <br />
            <br />
            <h2 className="font-semibold text-4xl text-slate-600">
              {HERO.heading}
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-slate-500">
              {HERO.paragraph}
            </p>
            <div className="mt-12">
              <a
                href={HERO.cta.href}
                target="_blank"
                rel="noreferrer"
                className="get-started text-white font-bold px-8 py-4 rounded-md outline-none focus:outline-none mr-4 mb-1 bg-slate-400 active:bg-slate-500 uppercase text-sm shadow hover:shadow-lg ease-linear transition-all duration-150"
              >
                {HERO.cta.label}
              </a>
              <a
                href={HERO.cta2.href}
                target="_blank"
                rel="noreferrer"
                className="github-star ml-1 text-white font-bold px-8 py-4 rounded-md outline-none focus:outline-none mr-1 mb-1 bg-slate-700 active:bg-slate-600 uppercase text-sm shadow hover:shadow-lg"
              >
                {HERO.cta2.label}
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HeroSection;
