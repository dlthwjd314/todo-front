import { combineReducers } from "redux";
import reducer from "./todo";
import loading from "./loading";

const rootReducer = combineReducers({
  reducer,
  loading,
});

export function* rootSaga() {
  yield all([reducer()]); //all() -> 여러 사가를 합쳐주는 역할
}

export default rootReducer;
