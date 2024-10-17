import * as S from "./styles";
import { FiLogIn, FiLogOut, FiShoppingCart } from "react-icons/fi";

export const Header: React.FC = () => {
  const isLogged = false;
  return (
    <S.StyledHeader>
      <S.Wrapper>
        <S.HeaderTitle>MyShop.</S.HeaderTitle>

        <S.ButtonWrapper>
          <S.AuthButton>
            {isLogged ? "Logout" : "Login"}
            {isLogged ? <FiLogOut/> : <FiLogIn/>}
          </S.AuthButton>
          <S.CartButton>
            Carrinho
            <FiShoppingCart />
          </S.CartButton>
        </S.ButtonWrapper>
      </S.Wrapper>
    </S.StyledHeader>
  );
};
