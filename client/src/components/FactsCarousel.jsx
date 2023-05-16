import { React, useRef } from "react";
import { useContext } from "react";
import PetContext from "../context/petsContextProvider";
// import Button from "react-bootstrap/Button";
// import Container from "react-bootstrap/Container";
// import Row from "react-bootstrap/Row";
// import Col from "react-bootstrap/Col";
// import Carousel from "react-bootstrap/Carousel";

import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";

const FactsCarousel = () => {
  const { catfacts, dogfacts } = useContext(PetContext);
  console.log(catfacts);
  console.log(dogfacts.data);

  const facts = catfacts.map(({ fact }) => fact);
  // const factsdogs=dogfacts.data
  console.log(facts);
  //   // console.log(facts)
  const randomFactCat = facts[Math.floor(Math.random() * facts.length)];

  const randomFactDog = dogfacts.data && dogfacts.data[0].attributes.body;

  console.log("catfact", randomFactCat);

  const carouselRef = useRef();

  const handlePrev = () => {
    carouselRef.current.prev();
  };

  const handleNext = () => {
    carouselRef.current.next();
  };

  return (
    <div className="carousel-wrapper">
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 4500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <p className="fact-text">{randomFactCat}</p>
        </SwiperSlide>
        <SwiperSlide>
          <p className="fact-text">{randomFactDog}</p>
        </SwiperSlide>
      </Swiper>
    </div>
    // <Container className="factscarousel">
    //   <Row>
    //     {" "}
    //     <Carousel ref={carouselRef}>
    //       <Carousel.Item>
    //         <Carousel.Caption className="carousel-caption">
    //           <p className="fact-text">{randomFactCat}</p>
    //         </Carousel.Caption>
    //       </Carousel.Item>
    //       <Carousel.Item>
    //         <Carousel.Caption className="carousel-caption">
    //           <p className="fact-text">{randomFactDog}</p>
    //         </Carousel.Caption>
    //       </Carousel.Item>
    //       {/* Add more Carousel.Item components for more text */}
    //     </Carousel>
    //   </Row>
    // </Container>
  );
};

export default FactsCarousel;
