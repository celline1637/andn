import React, { useState, useEffect } from 'react';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';
import styled from 'styled-components';

function SlickCarousel() {
  const [mainCarouselDatas, setMainCarouselDatas] = useState();

  useEffect(() => {
    fetch('/data/mainCarousel.json')
      .then(res => res.json())
      .then(carouselDatas => setMainCarouselDatas(carouselDatas.courses));
  }, []);

  const settings = {
    dots: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 6500,
  };

  return mainCarouselDatas ? (
    <Wrapper>
      <StyledSlider {...settings}>
        {mainCarouselDatas.map((mainCarouselData, i) => {
          return (
            <Slide>
              <img key={i} alt="메인이미지" src={mainCarouselData.thumbnail} />
              <Text>
                <div>{mainCarouselData.main_description.split(',')[0]}</div>
                <div> {mainCarouselData.main_description.split(',')[1]}</div>
              </Text>
            </Slide>
          );
        })}
      </StyledSlider>
    </Wrapper>
  ) : null;
}

const Wrapper = styled.div`
  width: 100%;
  height: ${({ theme }) => theme.calcVw(750, 400)};
  overflow: hidden;
`;

const Slide = styled.div`
  position: relative;
  & > img {
    width: 100%;
    transform: translateY(-20%);
  }
`;

const Text = styled.div`
  ${({ theme }) => theme.flexColumnSet('space-between', 'flex-start')};
  height: ${({ theme }) => theme.calcVw(750, 100)};
  position: absolute;
  top: 1rem;
  left: 1rem;
  color: white;
  font-size: ${({ theme }) => theme.calcVw(750, 40)};
  font-weight: 500;
  line-height: ${({ theme }) => theme.calcVw(750, 29)};
  letter-spacing: ${({ theme }) => theme.calcVw(750, -1.2)};
`;

const StyledSlider = styled(Slider)`
  height: 45vh;
  .slick-prev:before {
    opacity: 1;
    color: lightgray;
    left: 0;
  }
  .slick-next:before {
    opacity: 1;
    color: lightgray;
  }

  .slick-track {
    display: flex;
  }
  .slick-slide {
    margin: 0 4px;
  }
`;

export default SlickCarousel;
