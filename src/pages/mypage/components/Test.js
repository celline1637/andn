function InfoContainer({ info, subtitle }) {
  // console.log(subtitle);
  let List = Object.values(info.detail);
  console.log(List);
  return (
    <Wrap>
      <Title>{info.title}</Title>
      {subtitle.map((item, i) => (
        <>
          <SubTitle>{item}</SubTitle>
          <Content>{List[i]}</Content>
        </>
      ))}
    </Wrap>
  );
}
