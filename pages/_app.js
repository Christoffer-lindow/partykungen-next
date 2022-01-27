import React from "react";
import { Provider } from "react-redux";
import { createWrapper } from "next-redux-wrapper";
import store from "../reducers/store";
import "../styles/globals.css";
import NavBar from "../components/NavBar/NavBar";

function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <NavBar />
      <Component {...pageProps} />
    </Provider>
  );
}
const makestore = () => store;
const wrapper = createWrapper(makestore);

export default wrapper.withRedux(MyApp);
