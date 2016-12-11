import React from 'react';
import ReactDOM from 'react-dom';
import App from '../src/App';

import Router from 'react-router/MemoryRouter';
import { renderToString, renderToStaticMarkup } from 'react-dom/server';

import data from "./data.json";

describe("query.test.js", () => {
    it('App renders correctly', () => {
    const div = document.createElement('div');

    const pathname = "/queries";  
    const html = renderToStaticMarkup(<Router initialEntries={[{ pathname }]}>
        <App />
    </Router>);

    expect(html).toContain(data[pathname]);
    });
});
