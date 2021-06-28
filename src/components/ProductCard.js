import React, { useState } from 'react';
import { useHistory } from 'react-router';
import PropTypes from 'prop-types';
import { API } from '../config';
import styled from 'styled-components/macro';

function ProductCard({ url, subtitle, title, id, type }) {
  const history = useHistory();
  const [likeStatus, setLikeStatus] = useState(false);

  const goToDetail = () => {
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

  // const toggleLike = e => {
  //   e.stopPropagation();
  //   setLikeStatus(!likeStatus);
  // };

  // 실제 서버와 통신할때 사용할 좋아요 버튼 이벤트
  const patchLikeProject = e => {
    e.stopPropagation();
    fetch(`${API.MYCAMP_LIKED}/${id}`, {
      method: 'PATCH',
      headers: { Authorization: localStorage.getItem('token') },
    })
      .then(res => res.json())
      .then(res => {
        res.status === 'SUCCESS' && res['is_liked']
          ? setLikeStatus(true)
          : setLikeStatus(false);
      })
      .catch(err => alert(err));
  };

  return (
    <Container type={type} onClick={goToDetail}>
      <Thumbnail>
        <UnLikeIcon onClick={patchLikeProject} className="far fa-heart" />
        <LikeIcon status={likeStatus} className="fas fa-heart" />
        <img alt="thumbnail" src={url} />
      </Thumbnail>
      <SubTitle>{`${subtitle.brand} - ${subtitle.host}`}</SubTitle>
      <Title>{title}</Title>
    </Container>
  );
}

ProductCard.propTypes = {
  url: PropTypes.string.isRequired,
  subtitle: PropTypes.objectOf(PropTypes.string).isRequired,
  title: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
  type: PropTypes.oneOf(['user', 'admin', 'main']).isRequired,
};

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
