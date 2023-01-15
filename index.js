/**
 * @format
 */

import { registerRootComponent } from 'expo';
import App from './src/App';
import {name as appName} from './app.json';
import { Provider } from "react-redux";
import store from "./src/store";

const Root = () => {

    return (
        <Provider store={store}>
            <App />
        </Provider>
    )

}
registerRootComponent(Root);