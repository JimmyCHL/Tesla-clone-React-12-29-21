import React from "react";
import styled from "styled-components";
import Fade from "react-reveal/Fade";

const Section = ({
  title,
  description,
  leftBtnText,
  rightBtnText,
  backgroundImg,
}) => {
  return (
    <Wrap bgImage={backgroundImg}>
      <Fade bottom>
        <ItemText>
          <h1>{title}</h1>
          <p>{description}</p>
        </ItemText>
      </Fade>
      <Buttons>
        <Fade bottom>
          <ButtonGroup>
            <LeftButton>{leftBtnText}</LeftButton>
            {rightBtnText ? <RightButton>{rightBtnText}</RightButton> : null}
          </ButtonGroup>
          <DownArrow src="/images/images/down-arrow.svg" />
        </Fade>
      </Buttons>
    </Wrap>
  );
};

export default Section;

const Wrap = styled.div`
  width: 100vw;
  height: 100vh;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  flex-direction: column;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-image: ${(props) => `url("/images/images/${props.bgImage}")`};
`;

const ItemText = styled.div`
  text-align: center;
  padding-top: 15vh;
`;

const Buttons = styled.div`
  text-align: center;
`;

const ButtonGroup = styled.div`
  display: flex;
  margin-bottom: 30px;
  @media (max-width: 767px) {
    flex-direction: column;
  }
`;

const LeftButton = styled.div`
  background-color: rgba(23, 26, 32, 0.8);
  height: 40px;
  width: 256px;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 100px;
  opacity: 0.85;
  text-transform: uppercase;
  font-size: 12px;
  cursor: pointer;
  margin-bottom: 10px;
  margin-right: 8px;
`;

const RightButton = styled(LeftButton)`
  background: #ffffff52;
  color: black;
  font-weight: 500;
`;

const DownArrow = styled.img`
  height: 40px;
  animation: animateDown infinite 1.5s;
  margin-bottom: 10px;
`;
