import { createSelector } from "@reduxjs/toolkit";

export const selectProducts = (state) => state.products.items;
export const selectProductStatus = (state) => state.products.status;

export const selectProductById = (id) =>
  createSelector([selectProducts], (products) =>
    products.find((p) => p.id === Number(id))
  );
