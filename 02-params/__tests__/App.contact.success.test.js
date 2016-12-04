import React from 'react';
import ReactDOM from 'react-dom';
import App from '../src/App';

import Router from 'react-router/MemoryRouter';
import { renderToString, renderToStaticMarkup } from 'react-dom/server';

// Removed React Data attributes not required for Snaphot testing
const format = (html) => {
  function replacer(match, p1, p2, p3, offset, string) {
    return [p1, p2, p3].join(' - ');
  }
// 
  let data = html.replace(/data\-reactid\=\"[0-9]*\"/g, '');
  data = data.replace(/data\-react\-checksum\=\"-[0-9]*\"/g, '');
  data = data.replace(/data\-react\-checksum\=\"[0-9]*\"/g, '');
  data = data.replace(/\<\!\-\- react\-empty\: [0-9]* \-\-\>/g, '');
  data = data.replace(/data\-reactroot\=\"\"/g, '');
  data = data.replace(/\<\!\-\- \/react\-text \-\-\>/g, '');
  data = data.replace(/\<\!\-\- react\-text\: [0-9]* \-\-\>/g, '');
  data = data.replace(/ *>/g, '>');
  return data;
}

import {
  homeHTML, aboutHTML, applicationHTML, applicationWithNotesHTML, 
  missingHTML, contactHTML, contactSuccessHTML, empty
} from "./data";

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