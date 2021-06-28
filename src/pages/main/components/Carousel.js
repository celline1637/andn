import React, { useState, useEffect } from 'react';
import styled, { keyframes } from 'styled-components/macro';

function Carousel() {
  const [mainCarouselDatas, setMainCarouselDatas] = useState();
  const [index, setIndex] = useState(0);
  const delay = 4000;

  useEffect(() => {
    fetch('/data/mainCarousel.json')
      .then(res => res.json())
      .then(carouselDatas => setMainCarouselDatas(carouselDatas.courses));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    setInterval(goToNextIndex, delay);
    return () => {
      clearInterval(goToNextIndex);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [mainCarouselDatas]);

  const goToNextIndex = () => {
    mainCarouselDatas &&
      setIndex(prevIndex =>
        prevIndex === mainCarouselDatas.length - 1 ? 0 : prevIndex + 1
      );
  };

  return mainCarouselDatas ? (
    <Container>
      <BlurImgGroup
        style={{ transform: `translate3d(${-index * 100}%, 0, 0)` }}
      >
        {mainCarouselDatas.map((mainCarouselData, i) => {
          return (
            <img key={i} alt="배경이미지" src={mainCarouselData.thumbnail} />
          );
        })}
      </BlurImgGroup>
      <CarouselContents>
        <ImageShow>
          <SlidingImages
            style={{ transform: `translate3d(${-index * 100}%, 0, 0)` }}
          >
            {mainCarouselDatas.map((mainCarouselData, i) => {
              return (
                <img
                  key={i}
                  alt="메인이미지"
                  src={mainCarouselData.thumbnail}
                />
              );
            })}
          </SlidingImages>
        </ImageShow>
        <SlidingContents>
          <DescriptionShow>
            <SlidingDescriptions
              style={{ transform: `translate3d(${-index * 100}%,0,0)` }}
            >
              {mainCarouselDatas.map((mainCarouselData, idx) => {
                return (
                  <Description key={idx}>
                    <MainDescription>
                      {mainCarouselData.main_description}
                    </MainDescription>
                  </Description>
                );
              })}
            </SlidingDescriptions>
          </DescriptionShow>

          <ProgressNavigator>
            <Index>
              <CurrentIndex>{`${index + 1} | `} </CurrentIndex>
              <TotalLength>{`${mainCarouselDatas.length}`}</TotalLength>
            </Index>
            <ProgressBar>
              <CurrentProgress />
            </ProgressBar>
            <div className="ArrowIcons">
              <ArrowLeftBtn
                className="fas fa-chevron-left"
                type="button"
                onClick={() => {
                  index === 0
                    ? setIndex(mainCarouselDatas.length - 1)
                    : setIndex(index - 1);
                }}
              >
                <ArrowLeftIcon />
              </ArrowLeftBtn>
              <ArrowRightBtn
                className="fas fa-chevron-right"
                type="button"
                onClick={() => {
                  index === mainCarouselDatas.length - 1
                    ? setIndex(0)
                    : setIndex(index + 1);
                }}
              >
                <ArrowRightIcon />
              </ArrowRightBtn>
            </div>
          </ProgressNavigator>
        </SlidingContents>
      </CarouselContents>
    </Container>
  ) : null;
}

const progress = keyframes`
  from {
  transform: translateX(-100%);
  }
  to {
  transform: translateX(0);
}`;

const Container = styled.div`
  margin: 0 auto;
  overflow: hidden;
  max-width: 100%;
`;

const BlurImgGroup = styled.div`
  white-space: nowrap;

  & > img {
    display: inline-block;
    width: 100%;
    height: 40vh;
    filter: blur(6px);
  }
`;

const CarouselContents = styled.div`
  ${({ theme }) => theme.flexColumnSet()};
  margin: 0 auto;
  position: relative;
  bottom: 180px;
  width: 90%;
  margin-bottom: -180px;

  /* ${({ theme }) => theme.tablet`
    width: fit-content;
    margin-bottom: -320px;
  `}; */
`;

const ImageShow = styled.div`
  margin: 0 20px;
  overflow: hidden;
  max-width: 550px;
`;

const SlidingImages = styled.section`
  white-space: nowrap;
  transition: 1000ms;

  & > img {
    display: inline-block;
    width: 100%;
    object-fit: cover;
    height: 30vh;
  }
`;

const SlidingContents = styled.section`
  overflow: hidden;
  width: 355px;
  ${({ theme }) => theme.desktop`
      width: 450px;
     transform: translateY(20px);
  `};
`;

const DescriptionShow = styled.div`
  margin: 0 auto;
  overflow: hidden;
  max-width: 450px;
  position: absolute;
  top: -50px;
  width: 355px;

  /* @media ${({ theme }) => theme.mobile} {
    position: absolute;
    top: -50px;
    width: 355px;
  } */
`;

const SlidingDescriptions = styled.div`
  white-space: nowrap;
  transition: 1000ms;
`;

const Description = styled.div`
  display: inline-block;
  width: 355px;

  ${({ theme }) => theme.desktop`
    width: 450px;
  `};
`;

const MainDescription = styled.p`
  font-size: 22px;
  font-weight: 700;
  color: white;
  line-height: 1.5;
  ${({ theme }) => theme.tablet`
   font-size: 30px;
`};
`;

const ProgressNavigator = styled.div`
  display: flex;
  position: absolute;
  align-items: center;
  font-size: 15px;
  left: 30px;
  width: 85%;
  bottom: 15px;

  ${({ theme }) => theme.tablet`
   bottom: 100px;
  `};
`;

const Index = styled.span`
  flex-shrink: 0;
`;

const CurrentIndex = styled.span`
  color: white;
`;

const TotalLength = styled.span`
  color: white;
`;

const ProgressBar = styled.div`
  width: 100%;
  margin: 0 20px;
  height: 1px;
  background-color: grey;
  overflow: hidden;

  ${({ theme }) => theme.tablet`
    width: 300px;
`};
`;

const CurrentProgress = styled.div`
  width: 300px;
  height: 1px;
  background-color: white;
  animation: ${progress} 4s;
  animation-iteration-count: infinite;
`;

const ArrowLeftBtn = styled.button`
  display: none;
  margin-right: 10px;
  cursor: pointer;
  ${({ theme }) => theme.tablet`
    display : block;
 `};
`;

const ArrowLeftIcon = styled.i`
  width: 23px;
  color: white;
`;

const ArrowRightBtn = styled.button`
  display: none;
  cursor: pointer;

  ${({ theme }) => theme.tablet`
    display : block;
`};
`;

const ArrowRightIcon = styled.i`
  width: 23px;
  color: white;
`;

export default Carousel;
