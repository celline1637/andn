import React, { useState } from 'react';
import DaumPostcode from 'react-daum-postcode';
import styled from 'styled-components';
import Button from '../../../../components/Button';
import Input from '../../../../components/Input';
import Container from '../components/Container';
// import { useRecoilValue } from 'recoil';
import { useRecoilState } from 'recoil';
import { orderState } from './orderState';

function Address(params) {
  const [inputs, setInputs] = useRecoilState(orderState);
  const [zipcode, setZipcode] = useState(''); // 우편번호
  const [address, setAddress] = useState(''); // 주소
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
    setAddress(fullAddress);
    setIsOpenPost(false);
  };

  const getFullAddress = e => {
    const { value } = e.target;
    let kakaoInputs = `${zipcode + address}`;
    setInputs({
      ...inputs,
      address: `${kakaoInputs}${value}`,
    });
  };

  const handleInput = e => {
    const { name, value } = e.target;
    setInputs({
      ...inputs,
      [name]: value,
    });
  };

  const copyInfo = e => {
    e.preventDefault();
    setInputs({
      ...inputs,
      recipient: inputs.orderer,
      recipient_contact: inputs.orderer_contact,
    });
  };

  return (
    <Container title="배송지" msg btn>
      {/* 인풋값 복사 가능한 버튼 */}
      <Button onClick={copyInfo} color="black">
        안녕
      </Button>
      <Input
        value={inputs.recipient}
        onChange={handleInput}
        name="recipient"
        label="이름"
      />
      <Input
        value={inputs.recipient_contact}
        onChange={handleInput}
        name="recipient_contact"
        label="휴대전화"
        placeholder="01012345678 숫자만 입력해주세요"
      />
      <Wrapper>
        <Button onClick={onChangeOpenPost} color="btn" outline>
          주소찾기
        </Button>
        <Input name="zipcode" value={zipcode} />
      </Wrapper>
      <Input name="address" value={address} />
      <Input
        onChange={getFullAddress}
        name="addressDetail"
        placeholder="상세 주소 입력"
      />
      <Input
        onChange={handleInput}
        name="request"
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
