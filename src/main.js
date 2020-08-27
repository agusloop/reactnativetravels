import React from "react";
import Routes from "./routes/routes";
import { Provider } from "react-redux";
import Store from "./redux/stores/stores";

//Instanciar Store
const store = Store();

export default function App() {
    return (
        <Provider store={store}>
            <Routes />
        </Provider>
    )
}