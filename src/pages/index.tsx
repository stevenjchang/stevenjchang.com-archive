/* eslint-disable @next/next/no-img-element */
import { GetStaticProps } from 'next';
// import { Stack, Box } from '@mui/joy';
import { withTranslations } from '@/util/i18n/withTranslations';
import { join } from 'path';
import { existsSync, readFileSync } from 'fs';
import { remark } from 'remark';
import html from 'remark-html';

import Link from 'next/link';

import {
  // HERO,
  SECTION_1,
  // SECTION_2 as S2,
  SECTION_3 as S3,
  SECTION_4 as S4,
  SECTION_5,
} from '@/content/homepage';
// import Footer from '@/components/Footers/Footer';
// import IndexNavbar from '@/components/Navbars/IndexNavbar';
import { arrayGroupByN } from '@/utils/transform';
import HeroSection from '@/projects/homepage/sections/HeroSection';
// import HireMeSection from '@/projects/homepage/sections/HireMeSection';
import IndexNavbar from '@/projects/homepage/Navbars/IndexNavbar';

export interface HomePageProps {
  contentHtml: string;
}

const HomePage = (props: any) => {
  // return (
  //   <Stack spacing={1}>
  //     <Box dangerouslySetInnerHTML={{ __html: props.contentHtml }} />
  //   </Stack>
  // );

  return (
    <>
      <IndexNavbar />
      <HeroSection />
      {/* <HireMeSection /> */}

      <section className="mt-48 md:mt-40 pb-40 relative bg-slate-100">
        <div
          className="-mt-20 top-0 bottom-auto left-0 right-0 w-full absolute h-20"
          style={{ transform: `translateZ(0)` }}
        >
          <svg
            className="absolute bottom-0 overflow-hidden"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="none"
            version="1.1"
            viewBox="0 0 2560 100"
            x="0"
            y="0"
          >
            <polygon
              className="text-slate-100 fill-current"
              points="2560 0 2560 100 0 100"
            ></polygon>
          </svg>
        </div>
        <div className="container mx-auto">
          <div className="flex flex-wrap items-center">
            <div className="w-10/12 md:w-6/12 lg:w-4/12 px-12 md:px-4 mr-auto ml-auto -mt-32">
              {/* LEFT */}
              <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-slate-700">
                <img
                  alt="..."
                  src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&q=80"
                  className="w-full align-middle rounded-t-lg"
                />
                <blockquote className="relative p-8 mb-4">
                  <svg
                    preserveAspectRatio="none"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 583 95"
                    className="absolute left-0 w-full block h-95-px -top-94-px"
                  >
                    <polygon
                      points="-30,95 583,95 583,65"
                      className="text-slate-700 fill-current"
                    ></polygon>
                  </svg>
                  <h4 className="text-xl font-bold text-white">
                    {/* Great for your awesome project */}
                    {SECTION_1.headingSection.heading}
                  </h4>
                  <p className="text-md font-light mt-2 text-white">
                    {SECTION_1.headingSection.paragraph}
                  </p>
                </blockquote>
              </div>
            </div>

            <div className="w-full md:w-6/12 px-4">
              <div className="flex flex-wrap">
                {SECTION_1.items.map((item, idx) => (
                  <div key={idx} className="relative flex flex-col mt-4 w-1/2">
                    <div className="px-4 py-5 flex-auto">
                      <div className="text-slate-500 p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-white">
                        <i className={`${item.iconCN}`}></i>
                        <i className=""></i>
                        {/* <FontAwesomeIcon icon={['fab', 'github']} /> */}
                      </div>
                      <h6 className="text-xl mb-1 font-semibold">
                        {item.heading}
                      </h6>
                      <p className="mb-4 text-slate-500">{item.paragraph}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="container mx-auto overflow-hidden pb-20">
          <div className="flex flex-wrap items-center">
            <div className="w-full md:w-4/12 px-12 md:px-4 ml-auto mr-auto mt-48">
              <div className="text-slate-500 p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-6 shadow-lg rounded-full bg-white">
                <i className="fas fa-sitemap text-xl"></i>
              </div>
              <h3 className="text-3xl mb-2 font-semibold leading-normal">
                {/* CSS Components */}
                {S3.heading}
              </h3>
              <p className="text-lg font-light leading-relaxed mt-4 mb-4 text-slate-600">
                {S3.paragraph}
              </p>
              <div className="block pb-6">
                <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-slate-500 bg-white uppercase last:mr-0 mr-2 mt-2">
                  Buttons
                </span>
                <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-slate-500 bg-white uppercase last:mr-0 mr-2 mt-2">
                  Inputs
                </span>
                <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-slate-500 bg-white uppercase last:mr-0 mr-2 mt-2">
                  Labels
                </span>
                <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-slate-500 bg-white uppercase last:mr-0 mr-2 mt-2">
                  Menus
                </span>
                <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-slate-500 bg-white uppercase last:mr-0 mr-2 mt-2">
                  Navbars
                </span>
                <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-slate-500 bg-white uppercase last:mr-0 mr-2 mt-2">
                  Pagination
                </span>
                <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-slate-500 bg-white uppercase last:mr-0 mr-2 mt-2">
                  Progressbars
                </span>
                <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-slate-500 bg-white uppercase last:mr-0 mr-2 mt-2">
                  Typography
                </span>
              </div>
              <a
                href="/"
                target="_blank"
                className="font-bold text-slate-700 hover:text-slate-500 ease-linear transition-all duration-150"
              >
                View All{' '}
                <i className="fa fa-angle-double-right ml-1 leading-relaxed"></i>
              </a>
            </div>

            <div className="w-full md:w-5/12 px-4 mr-auto ml-auto mt-32">
              <div className="relative flex flex-col min-w-0 w-full mb-6 mt-48 md:mt-0">
                <img
                  alt="..."
                  src="/img/component-btn.png"
                  className="w-full align-middle rounded absolute shadow-lg max-w-100-px left-145-px -top-29-px z-3"
                />
                <img
                  alt="..."
                  src="/img/component-profile-card.png"
                  className="w-full align-middle rounded-lg absolute shadow-lg max-w-210-px left-260-px -top-160-px"
                />
                <img
                  alt="..."
                  src="/img/component-info-card.png"
                  className="w-full align-middle rounded-lg absolute shadow-lg max-w-180-px left-40-px -top-225-px z-2"
                />
                <img
                  alt="..."
                  src="/img/component-info-2.png"
                  className="w-full align-middle rounded-lg absolute shadow-2xl max-w-200-px -left-50-px top-25-px"
                />
                <img
                  alt="..."
                  src="/img/component-menu.png"
                  className="w-full align-middle rounded absolute shadow-lg max-w-580-px -left-20-px top-210-px"
                />
                <img
                  alt="..."
                  src="/img/component-btn-pink.png"
                  className="w-full align-middle rounded absolute shadow-xl max-w-120-px left-195-px top-95-px"
                />
              </div>
            </div>
          </div>

          {/* SECTION 4 - List of JavaScript Libraries */}
          <div className="flex flex-wrap items-center pt-32">
            <div className="w-full md:w-6/12 mr-auto ml-auto mt-32">
              <div className="justify-center flex flex-wrap relative">
                {arrayGroupByN(3, S4.items).map((subArray, idx) => {
                  const additionalMarginTop = idx % 2 !== 0 ? 'lg:mt-16' : '';

                  return (
                    <div key={idx} className={`${additionalMarginTop} w-1/2`}>
                      {subArray.map((item: any, idx: number) => {
                        return (
                          <div key={idx} className="w-full px-4 lg:mt-8">
                            <a
                              href={item.targetLink}
                              target="_blank"
                              rel="noreferrer"
                            >
                              <div
                                className={`shadow-lg rounded-lg text-center p-8 ${item.colorCode} `}
                              >
                                <img
                                  alt="..."
                                  className="shadow-md rounded-full max-w-full w-16 mx-auto p-2 bg-white"
                                  src={`${item.iconUrl}`}
                                />
                                <p className="text-lg text-white mt-4 font-semibold">
                                  {item.heading}
                                </p>
                              </div>
                            </a>
                          </div>
                        );
                      })}
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="w-full md:w-4/12 px-12 md:px-4 ml-auto mr-auto mt-48">
              <div className="text-slate-500 p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-6 shadow-lg rounded-full bg-white">
                <i className="fas fa-drafting-compass text-xl"></i>
              </div>
              <h3 className="text-3xl mb-2 font-semibold leading-normal">
                {S4.heading}
              </h3>
              <p className="text-lg font-light leading-relaxed mt-4 mb-4 text-slate-600">
                {S4.paragraph}
              </p>
              <div className="block pb-6">
                <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-slate-500 bg-white uppercase last:mr-0 mr-2 mt-2">
                  Alerts
                </span>
                <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-slate-500 bg-white uppercase last:mr-0 mr-2 mt-2">
                  Dropdowns
                </span>
                <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-slate-500 bg-white uppercase last:mr-0 mr-2 mt-2">
                  Menus
                </span>
                <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-slate-500 bg-white uppercase last:mr-0 mr-2 mt-2">
                  Modals
                </span>
                <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-slate-500 bg-white uppercase last:mr-0 mr-2 mt-2">
                  Navbars
                </span>
                <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-slate-500 bg-white uppercase last:mr-0 mr-2 mt-2">
                  Popovers
                </span>
                <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-slate-500 bg-white uppercase last:mr-0 mr-2 mt-2">
                  Tabs
                </span>
                <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-slate-500 bg-white uppercase last:mr-0 mr-2 mt-2">
                  Tooltips
                </span>
              </div>
              <a
                href="/"
                target="_blank"
                className="font-bold text-slate-700 hover:text-slate-500 ease-linear transition-all duration-150"
              >
                View all
                <i className="fa fa-angle-double-right ml-1 leading-relaxed"></i>
              </a>
            </div>
          </div>
        </div>
        {/* END SECTION 4 */}

        {/* START SECTION 5 */}
        <div className="container mx-auto px-4 pb-32 pt-48">
          <div className="items-center flex flex-wrap">
            <div className="w-full md:w-5/12 ml-auto px-12 md:px-4">
              <div className="md:pr-12">
                <div className="text-slate-500 p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-6 shadow-lg rounded-full bg-white">
                  <i className="fas fa-file-alt text-xl"></i>
                </div>
                <h3 className="text-3xl font-semibold">
                  Complex Documentation
                </h3>
                <p className="mt-4 text-lg leading-relaxed text-slate-500">
                  {`This extension comes a lot of fully coded examples that help
              you get started faster. You can adjust the colors and also the
              programming language. You can change the text and images and
              you're good to go.`}
                </p>
                <ul className="list-none mt-6">
                  <li className="py-2">
                    <div className="flex items-center">
                      <div>
                        <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-slate-500 bg-slate-50 mr-3">
                          <i className="fas fa-fingerprint"></i>
                        </span>
                      </div>
                      <div>
                        <h4 className="text-slate-500">
                          Built by Developers for Developers
                        </h4>
                      </div>
                    </div>
                  </li>
                  <li className="py-2">
                    <div className="flex items-center">
                      <div>
                        <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-slate-500 bg-slate-50 mr-3">
                          <i className="fab fa-html5"></i>
                        </span>
                      </div>
                      <div>
                        <h4 className="text-slate-500">
                          Carefully crafted code for Components
                        </h4>
                      </div>
                    </div>
                  </li>
                  <li className="py-2">
                    <div className="flex items-center">
                      <div>
                        <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-slate-500 bg-slate-50 mr-3">
                          <i className="far fa-paper-plane"></i>
                        </span>
                      </div>
                      <div>
                        <h4 className="text-slate-500">
                          Dynamic Javascript Components
                        </h4>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>

            <div className="w-full md:w-6/12 mr-auto px-4 pt-24 md:pt-0">
              <img
                alt="..."
                className="max-w-full rounded-lg shadow-xl"
                style={{
                  transform: `scale(1) perspective(1040px) rotateY(-11deg) rotateX(2deg) rotate(2deg)`,
                }}
                src="/img/documentation.png"
              />
            </div>
          </div>
        </div>

        <div className="justify-center text-center flex flex-wrap mt-24">
          <div className="w-full md:w-6/12 px-12 md:px-4">
            <h2 className="font-semibold text-4xl">Beautiful Example Pages</h2>
            <p className="text-lg leading-relaxed mt-4 mb-4 text-slate-500">
              {/* description */}
            </p>
          </div>
        </div>
      </section>

      <section className="block relative z-1 bg-slate-600">
        <div className="container mx-auto">
          <div className="justify-center flex flex-wrap">
            <div className="w-full lg:w-12/12 px-4  -mt-24">
              <div className="flex flex-wrap">
                {SECTION_5.items.map(({ heading, imgUrl }, idx) => (
                  <div key={idx} className="w-full lg:w-4/12 px-4">
                    <h5 className="text-xl font-semibold pb-4 text-center">
                      {heading}
                    </h5>
                    <Link href="/auth/login">
                      <div className="hover:-mt-4 relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded-lg ease-linear transition-all duration-150">
                        <img
                          alt="..."
                          className="align-middle border-none max-w-full h-auto rounded-lg"
                          src={imgUrl}
                        />
                      </div>
                    </Link>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-slate-600 overflow-hidden"></section>

      <section className="pb-16 bg-slate-200 relative pt-32">
        <div
          className="-mt-20 top-0 bottom-auto left-0 right-0 w-full absolute h-20"
          style={{ transform: `translateZ(0)` }}
        >
          <svg
            className="absolute bottom-0 overflow-hidden"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="none"
            version="1.1"
            viewBox="0 0 2560 100"
            x="0"
            y="0"
          >
            <polygon
              className="text-slate-200 fill-current"
              points="2560 0 2560 100 0 100"
            ></polygon>
          </svg>
        </div>
      </section>
    </>
  );
};

export default HomePage;

export const getStaticProps: GetStaticProps = withTranslations(async () => {
  const fullPath = join(`.`, `README.md`);
  let fileContents = existsSync(fullPath)
    ? readFileSync(fullPath, `utf8`)
    : null;

  fileContents = fileContents
    ? fileContents
        .split(
          `
`,
        )
        .splice(3, fileContents.length)
        .join(`\n`)
    : `No README.md found in the root of the project. But that's okay! You probably just want begin coding your app. A great place to start would be by modifying the \`getStaticProps\` function in \`src/pages/index.tsx\` to remove this message and accompanying logic. Beyond that, good luck and happy coding!`;

  const processedContent = await remark().use(html).process(fileContents);

  const contentHtml = processedContent.toString();

  return {
    props: {
      contentHtml,
    },
  };
});
