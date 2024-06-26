import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./features/cartSlice";
import couponReducer from "./features/couponSlice";
import itemReducer from "./features/itemSlice";
import storeReducer from "./features/storeSlice";
import orderReducer from "./features/orderSlice";
import { TypedUseSelectorHook, useSelector, useDispatch } from "react-redux";

export const configureAppStore = () => {
  const store = configureStore({
    reducer: {
      cart: cartReducer,
      coupons: couponReducer,
      items: itemReducer,
      stores: storeReducer,
      orders: orderReducer,
    },
  });

  // Check if window is defined (client-side) before subscribing to store changes
  if (typeof window !== 'undefined') {
    store.subscribe(() => {
      localStorage.setItem('cart', JSON.stringify(store.getState().cart));
    });
  }

  return store;
};

export const store = configureAppStore();

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
export const useAppDispatch = () => useDispatch<AppDispatch>();
