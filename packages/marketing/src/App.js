import { StylesProvider } from '@material-ui/core/styles';
import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { RouteList } from './routes';

export const App = () => {
    return (
        <div>
            <StylesProvider>
                <BrowserRouter>
                    <RouteList />
                </BrowserRouter>
            </StylesProvider>
        </div>

    )
};

export default App;