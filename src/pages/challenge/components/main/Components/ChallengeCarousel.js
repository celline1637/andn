import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import styled from 'styled-components/macro';

function ChallengeCarousel({ img, desc }) {
  return (
    <StyledSlider {...SETTINGS}>
      {img.map((url, i) => (
        <Slide>
          <img key={i} alt="메인이미지" src={url} />
        </Slide>
      ))}
      <Text>{desc.desc}</Text>
    </StyledSlider>
  );
}

const StyledSlider = styled(Slider)`
  width: ${({ theme }) => theme.calcVw(750, 666)};
  height: fit-content;
  /* height: ${({ theme }) => theme.calcVw(750, 666)}; */
  margin: 0 auto;
  position: relative;

  .slick-dots {
    position: absolute;
    /* bottom: ${({ theme }) => theme.calcVw(750, 4)}; */
  }
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

  .slick-arrow {
    position: absolute;
    z-index: 999;

    &::before {
      color: white;
    }
  }
  .slick-prev {
    left: ${({ theme }) => theme.calcVw(750, 16)};
  }
  .slick-next {
    right: ${({ theme }) => theme.calcVw(750, 16)};
  }
`;

const Slide = styled.div`
  position: relative;

  & > img {
    width: 100%;
  }
`;

const Text = styled.div`
  /* ${({ theme }) => theme.flexColumnSet('space-between', 'flex-start')};
  height: ${({ theme }) => theme.calcVw(750, 100)};
  position: absolute;
  top: 1rem;
  left: 1rem;
  color: white; */
  background-color: red;
  font-size: ${({ theme }) => theme.calcVw(750, 40)};
  font-weight: 500;
  line-height: ${({ theme }) => theme.calcVw(750, 29)};
  letter-spacing: ${({ theme }) => theme.calcVw(750, -1.2)};
`;

export default ChallengeCarousel;

const SETTINGS = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
};
