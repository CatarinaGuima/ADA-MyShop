import { useState } from "react";
import { FiLogIn, FiLogOut, FiShoppingCart } from "react-icons/fi";

import * as S from "./styles";
import { Cart } from "../Cart/Cart";
import { useDispatch, useSelector } from "react-redux";
import { RootReducer } from "../../redux/root-reducer";
import { login, logout } from "../../redux/User/user-slice";

export const Header: React.FC = () => {
  const {user} = useSelector((rootReducer: RootReducer) => rootReducer.userReducer);

  const dispatch = useDispatch();

  const isLogged = user !== null;
  const [showCart, setShowCart] = useState(false);
  
  function handleUserAuth() {
    //usuário não está logado
    if (user === null) {
      // despachar a action de login
      dispatch(login({
        name: 'Catarina Guimarães',
        email: 'catarina.guimaraes15@gmail.com',
      }));
    } else {
      // despachar a action de logout
      dispatch(logout({}));
    }
  };

  return (
    <S.StyledHeader>
      <S.Wrapper>
        <S.HeaderTitle>MyShop.</S.HeaderTitle>

        <S.ButtonWrapper>
          <S.AuthButton isLogged={isLogged} onClick={handleUserAuth}>
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
