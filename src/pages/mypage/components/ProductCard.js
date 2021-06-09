import React from 'react';
import { useHistory } from 'react-router';
import styled from 'styled-components/macro';

function ProductCard({ url, subtitle, title, id }) {
  const history = useHistory();

  const goToDetail = () => {
    history.push(`/mypage_campaign_more/${id}`);
  };

  return (
    <Container onClick={goToDetail}>
      <Img alt="thumbnail" src={url[0]} srcset={(url[1], url[2])} />
      <SubTitle>{`${subtitle.brand} - ${subtitle.hostname}`}</SubTitle>
      <Title>{title}</Title>
    </Container>
  );
}

const Container = styled.div`
  width: ${({ theme }) => theme.calcVw(750, 318)};
  margin: ${({ theme }) => theme.calcVw(750, 40)}
    ${({ theme }) => theme.calcVw(750, 15)};
`;

const Img = styled.img`
  width: 100%;
  height: ${({ theme }) => theme.calcVw(750, 370.6)}; ;
`;

const SubTitle = styled.div`
  font-size: ${({ theme }) => theme.calcVw(750, 20)};
  font-weight: 500;
  letter-spacing: ${({ theme }) => theme.calcVw(750, -0.5)};
  color: ${({ theme }) => theme.colors.secondary_btn};
`;

const Title = styled.div`
  font-size: ${({ theme }) => theme.calcVw(750, 28)};
  font-weight: 500;
  line-height: ${({ theme }) => theme.calcVw(750, 38)};
  letter-spacing: ${({ theme }) => theme.calcVw(750, -1.4)};
  color: ${({ theme }) => theme.colors.black};
`;

export default ProductCard;
