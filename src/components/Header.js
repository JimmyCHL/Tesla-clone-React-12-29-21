import React, { useState } from "react";
import styled from "styled-components";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import { selectCars } from "../features/Car/CarSlice";
import { useSelector } from "react-redux";

const Header = () => {
  const [burgerStatus, setBurgerStatus] = useState(false);
  const cars = useSelector(selectCars);

  return (
    <Container>
      <a>
        <img src="/images/images/logo.svg" alt="" />
      </a>
      <Menu>
        {cars?.map((car, index) => (
          <a key={index} href="#">
            {car}
          </a>
        ))}
      </Menu>
      <RightMenu>
        <a href="#">Shop</a>
        <a href="#">Tesla Account</a>
        <CustomMenu onClick={() => setBurgerStatus(true)} />
      </RightMenu>
      <BurgerNav show={burgerStatus}>
        <CustomClose onClick={() => setBurgerStatus(false)} />
        {cars?.map((car, index) => (
          <li key={index}>
            <a href="#">{car}</a>
          </li>
        ))}

        <li>
          <a href="#">Existing Inventory</a>
        </li>
        <li>
          <a href="#">Used Inventory</a>
        </li>
        <li>
          <a href="#">Trade-in</a>
        </li>
        <li>
          <a href="#">Cybertruck</a>
        </li>
        <li>
          <a href="#">Roadster</a>
        </li>
        <li>
          <a href="#">Charging</a>
        </li>
        <li>
          <a href="#">Utilities</a>
        </li>
        <li>
          <a href="#">Used Inventory</a>
        </li>
        <li>
          <a href="#">Support</a>
        </li>
      </BurgerNav>
    </Container>
  );
};

export default Header;

const Container = styled.div`
  min-height: 60px;
  position: fixed;
  background-color: transparent;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 20px;
  top: 0;
  left: 0;
  right: 0;
  z-index: 500;
`;

const Menu = styled.div`
  display: flex;
  align-items: center;

  flex: 1;
  justify-content: center;
  > a {
    font-weight: 600;
    text-transform: uppercase;
    margin-right: 10px;
    white-space: nowrap;
  }

  @media (max-width: 768px) {
    display: none;
  }
`;

const RightMenu = styled.div`
  display: flex;
  align-items: center;
  > a {
    font-weight: 600;
    text-transform: uppercase;
    margin-right: 10px;
    white-space: nowrap;
  }
`;

const CustomMenu = styled(MenuIcon)`
  cursor: pointer;
`;

const BurgerNav = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  background-color: white;
  width: 300px;
  list-style: none;
  padding: 20px;
  display: flex;
  flex-direction: column;
  transform: ${(props) => (props.show ? "translateX(0)" : "translateX(100%)")};
  opacity: ${(props) => (props.show ? "1" : "0")};
  transition: all 0.5s ease-in-out;
  li {
    padding: 15px 0;
    border-bottom: 1px solid rgba(0, 0, 0, 0.2);

    a {
      font-weight: 600;
    }
  }
`;

const CustomClose = styled(CloseIcon)`
  align-self: flex-end;
  cursor: pointer;
`;
