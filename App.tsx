import * as React from 'react';
import {Provider} from 'react-redux';
import store from './src/store/store';

import Routes from './src/route/routes';

export default class App extends React.Component {
    render() {
        return (
            <Provider store={store}>
                <Routes />
            </Provider>
        );
    }
}
