import { configureStore } from "@reduxjs/toolkit";
import rootSaga from "../sagas";
import createSagaMiddleware from "redux-saga";
import userReducer from "../slices/userSlice";

const sagaMiddleware = createSagaMiddleware();


const store = configureStore({
  reducer: {
    user: userReducer
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(sagaMiddleware)
},
);

sagaMiddleware.run(rootSaga);


export default store;
