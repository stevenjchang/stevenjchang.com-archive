import React from "react";

import Carousel from "../../components/Carousel.js";

const TestimonialCarousel = () => {
  return (
    <>
      <div className="section-background bg-gray-200 py-24">
        <div className="container mx-auto bg-blue-100">
          <Carousel>
            <div>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Recusandae amet laboriosam quis non itaque perspiciatis nam
              provident velit? Voluptatum, nesciunt minima. Perferendis
              repellendus cupiditate soluta error ab, excepturi ad voluptatum
              placeat provident non incidunt quasi enim quia exercitationem,
              sint architecto.
            </div>
            <div>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Inventore, eligendi. Debitis deserunt voluptatibus minus amet
              assumenda numquam odio inventore, atque quisquam minima
              perspiciatis distinctio, optio hic natus nesciunt ad veritatis
              deleniti? Explicabo aspernatur, suscipit quae voluptates
              exercitationem hic fugit, rerum molestias debitis ex quasi dolore!
              Corporis ipsum similique quisquam. Numquam.
            </div>
            <div>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Recusandae amet laboriosam quis non itaque perspiciatis nam
              provident velit? Voluptatum, nesciunt minima. Perferendis
              repellendus cupiditate soluta error ab, excepturi ad voluptatum
              placeat provident non incidunt quasi enim quia exercitationem,
              sint architecto.
            </div>
            <div>Slide 4</div>
            <div>Slide 5</div>
          </Carousel>
        </div>
      </div>
    </>
  );
};

export default TestimonialCarousel;
