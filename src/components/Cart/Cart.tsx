import { useDispatch, useSelector } from "react-redux";
import * as S from "./styles";
import { RootReducer } from "../../redux/root-reducer";
import { removeProduct } from "../../redux/Cart/cart-slice";

interface CartProps {
  showCart: boolean;
}

export const Cart: React.FC<CartProps> = ({ showCart }) => {
  // Obter o estado do carrinho
  const { cart } = useSelector((state: RootReducer) => state.cartReducer);

  // Inicializar o dispatch
  const dispatch = useDispatch();

  // Calcular o total do carrinho
  const total = cart.reduce((totalCart, product) => {
    return totalCart + product.price;
  }, 0);

  return (
    <S.Container showCart={showCart}>
      <S.Title>Carrinho</S.Title>
      <S.CartProductsList>
        {cart.map((product) => (
          <S.CartProductsItem key={product.id}>
            <strong>{product.title}</strong> - ${product.price}
            {/* Passar o ID do produto ao clicar no botão */}
            <button onClick={() => dispatch(removeProduct(product))}>Remover</button>
          </S.CartProductsItem>
        ))}
      </S.CartProductsList>

      <S.CartTotal>Total: ${total.toFixed(2)}</S.CartTotal>
    </S.Container>
  );
};
