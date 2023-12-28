import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./user/userSlice";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

const userPersistConfig = {
  key: "user",
  storage: storage,
  blacklist: [], // Add any properties you want to exclude from persistence
};

// Wrap the userReducer with the persistReducer
const persistedUserReducer = persistReducer(userPersistConfig, userReducer);

const store = configureStore({
  reducer: {
    // cart: cartReducer,
    // product: productReducer,
    user: persistedUserReducer,
    // [api.reducerPath]: api.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
});

export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;

const persistor = persistStore(store);

export { store, persistor };
