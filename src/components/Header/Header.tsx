import { useState } from "react";
import { FiLogIn, FiLogOut, FiShoppingCart } from "react-icons/fi";

import * as S from "./styles";
import { Cart } from "../Cart/Cart";

export const Header: React.FC = () => {
  const isLogged = false;
  const [showCart, setShowCart] = useState(false);
  
  return (
    <S.StyledHeader>
      <S.Wrapper>
        <S.HeaderTitle>MyShop.</S.HeaderTitle>

        <S.ButtonWrapper>
          <S.AuthButton isLogged={isLogged}>
            {isLogged ? "Logout" : "Login"}
            {isLogged ? <FiLogOut/> : <FiLogIn/>}
          </S.AuthButton>
          <S.CartButton onClick={() => setShowCart(!showCart)}>
            Carrinho
            <FiShoppingCart />
          </S.CartButton>
        </S.ButtonWrapper>
      </S.Wrapper>
      <Cart showCart={showCart} />
    </S.StyledHeader>
  );
};
