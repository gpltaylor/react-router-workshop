import React from 'react';
import ReactDOM from 'react-dom';
import App from '../src/App';

import Router from 'react-router/MemoryRouter';
import { renderToString, renderToStaticMarkup } from 'react-dom/server';

import {
  homeHTML, aboutHTML, applicationHTML, applicationWithNotesHTML, 
  missingHTML, contactHTML, contactSuccessHTML, empty
} from "./data/index";

describe('app.test', () => {

  it('App renders correctly', () => {
    const div = document.createElement('div');
    const pathname = '/about';
    const html = renderToStaticMarkup(<Router initialEntries={[{ pathname }]}>
      <App />
    </Router>);

    expect(html).toContain(aboutHTML);
  });

  it('Application has appId props and notes has noteId', () => {
    const div = document.createElement('div');
    const pathname = '/application/ALF-34059/notes/987654';
    const html = renderToStaticMarkup(<Router initialEntries={[{ pathname }]}>
      <App />
    </Router>);

    expect(html).toContain(applicationWithNotesHTML);
  });

});