import React, { useState } from 'react';
import DaumPostcode from 'react-daum-postcode';
import styled from 'styled-components';
import Button from '../../../../components/Button';
import Input from '../../../../components/Input';
import Container from '../components/Container';
import { useRecoilValue } from 'recoil';

function Address(params) {
  const [zipcode, setZipcode] = useState(''); // 주소
  const [addressDetail, setAddressDetail] = useState(''); // 상세주소

  const [isOpenPost, setIsOpenPost] = useState(false);

  const onChangeOpenPost = e => {
    e.preventDefault();
    setIsOpenPost(!isOpenPost);
  };

  const onCompletePost = data => {
    let fullAddress = data.address;
    let extraAddr = '';

    if (data.addressType === 'R') {
      if (data.bname !== '') {
        extraAddr += data.bname;
      }
      if (data.buildingName !== '') {
        extraAddr +=
          extraAddr !== '' ? `, ${data.buildingName}` : data.buildingName;
      }
      fullAddress += extraAddr !== '' ? ` (${extraAddr})` : '';
    }

    setZipcode(data.zonecode);
    setAddressDetail(fullAddress);
    setIsOpenPost(false);
  };

  return (
    <Container title="배송지" msg btn>
      <Input label="이름" />
      <Input label="휴대전화" placeholder="01012345678 숫자만 입력해주세요" />
      <Wrapper>
        <Button onClick={onChangeOpenPost} color="btn" outline>
          주소찾기
        </Button>
        <Input name="zipcode" value={zipcode} />
      </Wrapper>
      <Input name="address" value={addressDetail} />
      <Input placeholder="상세 주소 입력" />
      <Input
        label="배송 시 요청 사항"
        placeholder="부재 시 문 앞에 놓아주세요"
      />
      {isOpenPost ? (
        <DaumPostcode
          style={postCodeStyle}
          autoClose
          onComplete={onCompletePost}
        />
      ) : null}
    </Container>
  );
}

const postCodeStyle = {
  display: 'block',
  position: 'relative',
  top: '0%',
  width: '400px',
  height: '400px',
  padding: '7px',
};

const Wrapper = styled.div`
  ${({ theme }) => theme.flexSet('center', 'flex-start')};

  & > button {
    padding: ${({ theme }) => theme.calcVw(750, 20)}
      ${({ theme }) => theme.calcVw(750, 29)}
      ${({ theme }) => theme.calcVw(750, 19)}
      ${({ theme }) => theme.calcVw(750, 32)};
    margin-right: ${({ theme }) => theme.calcVw(750, 42)};
    border-radius: ${({ theme }) => theme.calcVw(750, 40)};
    font-size: ${({ theme }) => theme.calcVw(750, 26)};
    font-weight: 500;
    line-height: ${({ theme }) => theme.calcVw(750, 44)};
    letter-spacing: ${({ theme }) => theme.calcVw(750, -1.3)};
  }
`;

export default Address;
