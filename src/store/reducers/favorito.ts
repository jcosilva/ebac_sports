import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import { Produto } from '../../App'

type FavoritoState = {
  itens: Produto[]
}

const initialState: FavoritoState = {
  itens: []
}

const favoritoSlice = createSlice({
  name: 'favorito',
  initialState,
  reducers: {
    favoritar: (state, action: PayloadAction<Produto>) => {
      const produtoPrateleira = action.payload
      if (state.itens.find((p) => p.id === produtoPrateleira.id)) {
        state.itens = state.itens.filter((p) => p.id !== produtoPrateleira.id)
      } else {
        state.itens.push(produtoPrateleira)
      }
    }
  }
})

export const { favoritar } = favoritoSlice.actions
export default favoritoSlice.reducer
