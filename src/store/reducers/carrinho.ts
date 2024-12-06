import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import { Produto } from '../../App'

type CarrinhoState = {
  itens: Produto[]
}

const initialState: CarrinhoState = {
  itens: []
}

const carrinhoSlice = createSlice({
  name: 'carrinho',
  initialState,
  reducers: {
    adicionar: (state, action: PayloadAction<Produto>) => {
      const produtoPrateleira = action.payload
      if (state.itens.find((produto) => produto.id === produtoPrateleira.id)) {
        state.itens = state.itens.filter(
          (produto) => produto.id !== produtoPrateleira.id
        )
      } else {
        state.itens.push(produtoPrateleira)
      }
    }
  }
})

export const { adicionar } = carrinhoSlice.actions
export default carrinhoSlice.reducer
