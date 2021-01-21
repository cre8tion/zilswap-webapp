import createSagaMiddleware from "redux-saga";
import priceSaga from "./app/priceSaga";
import statsSaga from "./app/statsSaga";
import zapSaga from "./app/zapSaga";

const sagaMiddleware = createSagaMiddleware();

export function startSagas() {
  sagaMiddleware.run(priceSaga);
  sagaMiddleware.run(statsSaga);
  sagaMiddleware.run(zapSaga);
};

export default sagaMiddleware;
