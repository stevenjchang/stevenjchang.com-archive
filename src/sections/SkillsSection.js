import "sections/SkillsSection.scss";

const data = [
  {
    title: "Responsive Design",
    paragraph:
      "paragraph Lorem ipsum dolor sit, amet consectetur adipisicing elit. Harum nihil odit natus quo minima itaque perspiciatis deleniti ratione voluptates alias ipsam magnam reiciendis vitae sapiente est rem autem voluptate doloribus, ",

    // imgUrl: "https://via.placeholder.com/100x100",
    bgUrl: "/images/bg_blob/blob4.svg",
    imgUrl: "/images/icons/mobile.svg",
  },
  {
    // title: "SEO Friendly",
    title: "Responsive Design",
    paragraph:
      "paragraph Lorem ipsum dolor sit, amet consectetur adipisicing elit. Harum nihil odit natus quo minima itaque perspiciatis deleniti ratione voluptates alias ipsam magnam reiciendis vitae sapiente est rem autem voluptate doloribus, ",
    bgUrl: "/images/bg_blob/blob2.svg",
    imgUrl: "/images/icons/magic-wand.svg",
  },
  {
    title: "Beautifully Designed",
    paragraph:
      "paragraph Lorem ipsum dolor sit, amet consectetur adipisicing elit. Harum nihil odit natus quo minima itaque perspiciatis deleniti ratione voluptates alias ipsam magnam reiciendis vitae sapiente est rem autem voluptate doloribus, ",
    bgUrl: "/images/bg_blob/blob6.svg",
    imgUrl: "/images/icons/paint.svg",
  },
];

function Card({ title, paragraph, imgUrl, bgUrl }) {
  return (
    <div className="bg-white p-12 m-4 shadow rounded-md">
      <div className="flex flex-col items-center ">
        <div
          className="image-wrapper flex justify-center "
          style={{
            backgroundImage: `url(${bgUrl})`,
            backgroundSize: "contain",
            height: "100px",
            width: "100px",
          }}
        >
          <img
            src={imgUrl}
            alt=""
            className=""
            style={{
              width: "33px",
            }}
          />
        </div>
        <h3 className="my-6 font-semibold">{title}</h3>
        <p className="text-sm">{paragraph}</p>
      </div>
    </div>
  );
}

function SkillsSection() {
  return (
    <div className="section-outer custom-bg-gray-12">
      <section className="section-inner">
        <div className="container flex justify-between">
          {data.map((item, idx) => (
            <Card {...item} key={idx} />
          ))}
        </div>
      </section>
    </div>
  );
}

export { SkillsSection };
