import React, { useState } from 'react';
import { useHistory } from 'react-router';
import styled from 'styled-components/macro';

function ProductCard({ url, subtitle, title, id, type }) {
  const history = useHistory();
  const [likeStatus, setLikeStatus] = useState(false);

  //data['is_liked']

  const goToDetail = e => {
    if (type === 'main') {
      history.push(`/detail/${id}`);
    }
    if (type === 'user') {
      history.push(`/mypage_campaign_more/${id}`);
    }
    if (type === 'admin') {
      history.push(`/admin_order/${id}`);
    }
  };

  const toggleLike = e => {
    e.stopPropagation();
    setLikeStatus(!likeStatus);
  };

  // 실제 서버와 통신할때 사용할 좋아요 버튼 이벤트
  // ${API.PROJECT}/${id}
  // const patchLikeProject = (e) => {
  // e.stopPropagation();
  //   fetch(``, {
  //     method: 'PATCH',
  //     headers: { Authorization: localStorage.getItem('token') },
  //   })
  //     .then(res => {
  //       if (res.ok) {
  //         return res.json();
  //       } else {
  //         throw new Error();
  //       }
  //     })
  //     .then(res => {
  //       res['is_liked'] ? setLikeStatus(true) : setLikeStatus(false);
  //     })
  //     .catch(err => alert('로그인을 먼저 해주세요.'));
  // };

  return (
    <Container type={type} onClick={goToDetail}>
      <Thumbnail>
        <UnLikeIcon onClick={toggleLike} className="far fa-heart" />
        <LikeIcon status={likeStatus} className="fas fa-heart" />
        <img alt="thumbnail" src={url[0]} srcset={(url[1], url[2])} />
      </Thumbnail>
      <SubTitle>{`${subtitle.brand} - ${subtitle.host}`}</SubTitle>
      <Title>{title}</Title>
    </Container>
  );
}

const Container = styled.div`
  width: ${({ theme }) => theme.calcVw(750, 318)};
  margin: ${({ theme }) => theme.calcVw(750, 40)}
    ${({ theme }) => theme.calcVw(750, 15)};
`;

const Thumbnail = styled.div`
  position: relative;
  width: 100%;
  height: ${({ theme }) => theme.calcVw(750, 370.6)};
  margin-bottom: ${({ theme }) => theme.calcVw(750, 19.6)};
  border-radius: ${({ theme }) => theme.calcVw(750, 4)};
  overflow: hidden;
  cursor: pointer;

  & img {
    width: 100%;
    height: 100%;
    object-fit: cover;

    &:hover {
      transform: scale(1.05);
      transition: transform 0.2s ease;
    }
  }
`;

const SubTitle = styled.div`
  margin-bottom: ${({ theme }) => theme.calcVw(750, 12)};
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

const UnLikeIcon = styled.i`
  position: absolute;
  z-index: 10;
  top: 10px;
  right: 10px;
  font-size: ${({ theme }) => theme.calcVw(750, 30)};
  color: white;
`;

const LikeIcon = styled(UnLikeIcon)`
  display: ${({ status }) => (status ? 'block' : 'none')};
  z-index: 1;
  color: ${({ theme }) => theme.colors.btn};
`;

export default ProductCard;
