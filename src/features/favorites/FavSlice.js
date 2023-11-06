import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  favPizzas: JSON.parse(localStorage.getItem('favPizzas')) || [], // Carregar do localStorage
};

const favSlice = createSlice({
  name: 'fav',
  initialState,
  reducers: {
    addToFavorites(state, action) {
      state.favPizzas.push(action.payload);
      localStorage.setItem('favPizzas', JSON.stringify(state.favPizzas)); // Salvar no localStorage
    },
    removeFromFavorites(state, action) {
      state.favPizzas = state.favPizzas.filter(
        (pizza) => pizza.id !== action.payload
      );
      localStorage.setItem('favPizzas', JSON.stringify(state.favPizzas)); // Atualizar no localStorage
    },
  },
});

export default favSlice.reducer;
export const { addToFavorites, removeFromFavorites } = favSlice.actions;
export const getFavorites = (state) => state.fav.favPizzas;
