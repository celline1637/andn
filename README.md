## 구현 사항

- 전체 비밀번호 페이지 레이아웃
- 비밀번호 유효성 검사
- 비밀번호 더블 체크 검사
- POST 요청 후 SUCCESS일때, 버튼 및 인풋 비활성화 / 버튼 스타일 변경

## 건의 사항

### 1 .수정 완료 후 상태

- 임의적으로 비밀번호 수정 완료 후 버튼과 인풋이 비활성화되도록 만들었습니다.
- 이때, 현재 디자인 시안으로는 인풋창에 별도의 스타일이 적용되지 않지만, 비활성화 조건에서 배경색을 조금 다르게 주어 유저가 차이를 인식할 수 있도록 해주는 것이 좋을 것 같습니다.

### 2 .비밀번호 수정 로직 추가

- 현재는 로그인 후 별다른 확인 과정없이 비밀번호 수정이 가능합니다.
- 아래의 이미지와 같이 현재 비밀번호를 먼저 확인하는 과정이 필요하다 생각됩니다.
- 또한 비밀번호 수정 페이지 뿐만아니라 비밀번호 찾기 페이지가 추가되어야 할 것 같습니다.
  <img width="484" alt="스크린샷 2021-06-09 오후 11 25 25" src="https://user-images.githubusercontent.com/77728308/121641448-294c4180-caca-11eb-8ce1-78431c8927ff.png">
