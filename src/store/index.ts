import {combineReducers, configureStore} from "@reduxjs/toolkit"
import githubReducer from "./githubSlice"
import storage from "redux-persist/lib/storage"
import {persistStore, persistReducer} from "redux-persist"

const reducers = combineReducers({
  github: githubReducer,
})

const persistConfig = {
  key: "root",
  storage,
}

const persistedReducer = persistReducer(persistConfig, reducers)

export const store = configureStore({
  reducer: persistedReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: ["persist/PERSIST"],
      },
    }),
})

export const persistor = persistStore(store)

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
