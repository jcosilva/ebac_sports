import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
import { Produto } from '../../App'
import * as S from './styles'

import { adicionar } from '../../store/reducers/carrinho'
import { favoritar } from '../../store/reducers/favorito'
import { RootReducer } from '../../store'

export const paraReal = (valor: number) =>
  new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(
    valor
  )

type Props = {
  produto: Produto
}

const ProdutoComponent = ({ produto }: Props) => {
  const dispatch = useDispatch()

  const favoritoList = useSelector((state: RootReducer) => state.favorito.itens)

  const noFavorito = favoritoList.some((item) => item.id === produto.id)

  const itensList = useSelector((state: RootReducer) => state.carrinho.itens)

  const noCarrinho = itensList.some((item) => item.id === produto.id)

  return (
    <S.Produto>
      <S.Capa>
        <img src={produto.imagem} alt={produto.nome} />
      </S.Capa>
      <S.Titulo>{produto.nome}</S.Titulo>
      <S.Prices>
        <strong>{paraReal(produto.preco)}</strong>
      </S.Prices>
      {noFavorito ? (
        <S.BtnComprarSelected
          onClick={() => dispatch(favoritar(produto))}
          type="button"
        >
          (-) Remover dos favoritos
        </S.BtnComprarSelected>
      ) : (
        <S.BtnComprar
          onClick={() => dispatch(favoritar(produto))}
          type="button"
        >
          (+) Adicionar aos favoritos
        </S.BtnComprar>
      )}
      {noCarrinho ? (
        <S.BtnComprarSelected
          onClick={() => dispatch(adicionar(produto))}
          type="button"
        >
          (-) Remover do carrinho
        </S.BtnComprarSelected>
      ) : (
        <S.BtnComprar
          onClick={() => dispatch(adicionar(produto))}
          type="button"
        >
          (+) Adicionar ao carrinho
        </S.BtnComprar>
      )}
    </S.Produto>
  )
}

export default ProdutoComponent
