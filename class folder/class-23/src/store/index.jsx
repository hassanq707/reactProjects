import { configureStore } from "@reduxjs/toolkit";

import Products_slice from "./slices/Products_slice";

const store = configureStore({
  reducer: {
    products: Products_slice,
  },
});

export { store };
