import React from "react";
import ReactDOM from "react-dom";
import Spinner from "./common/components/Spinner";
import Routes from "./routes";
import "./styles/index.scss";
import { Provider } from "react-redux";
import { createStore } from "redux";
import rootReducer from "./redux/reducers";

const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <Spinner />
      <Routes />
    </React.StrictMode>
  </Provider>,
  document.getElementById("root")
);
