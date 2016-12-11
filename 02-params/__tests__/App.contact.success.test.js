import React from 'react';
import ReactDOM from 'react-dom';
import App from '../src/App';

import Router from 'react-router/MemoryRouter';
import { renderToString, renderToStaticMarkup } from 'react-dom/server';

import {
  homeHTML, aboutHTML, applicationHTML, applicationWithNotesHTML, 
  missingHTML, contactHTML, contactSuccessHTML, empty
} from "./data/index";

describe('app.contact.test', () => {
  it('Successfully completed', () => {
    const div = document.createElement('div');
    const pathname = '/contact';
    const query = {
        firstName: "Garry",
        message: "Thank you for watching the best react-router demo ever!"
      }

    const html = renderToStaticMarkup(<Router initialEntries={[{ pathname, query }]}>
      <App />
    </Router>);

    expect(html).toContain(contactSuccessHTML);
  });

  it('Show contact form', () => {
    const div = document.createElement('div');
    const pathname = '/contact';
    const html = renderToStaticMarkup(<Router initialEntries={[{ pathname }]}>
      <App />
    </Router>);

    expect(html).toContain(contactHTML);
  });

});