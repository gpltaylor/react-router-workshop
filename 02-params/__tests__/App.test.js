import React from 'react';
import ReactDOM from 'react-dom';
import App from '../src/App';

import Router from 'react-router/MemoryRouter';
import { renderToString } from 'react-dom/server';

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

it('App renders correctly', () => {
  const div = document.createElement('div');
  const pathname = '/about';
  const html = renderToString(<Router initialEntries={[{ pathname }]}>
    <App />
  </Router>);

  expect(format(html)).toContain(aboutHTML);
});

it('Application has appId props and notes has noteId', () => {
  const div = document.createElement('div');
  const pathname = '/application/ALF-34059/notes/987654';
  const html = renderToString(<Router initialEntries={[{ pathname }]}>
    <App />
  </Router>);

  expect(format(html)).toContain(applicationWithNotesHTML);
});


it('Show contact form', () => {
  const div = document.createElement('div');
  const pathname = '/contact';
  const html = renderToString(<Router initialEntries={[{ pathname }]}>
    <App />
  </Router>);

  expect(format(html)).toContain(contactHTML);
});

it('Show contact success if contact from is completed', () => {
  const div = document.createElement('div');
  const pathname = '/contact';
  const query = {
      firstName: "Garry",
      message: "Thank you for watching the best react-router demo ever!"
    }

  const html = renderToString(<Router initialEntries={[{ pathname, query }]}>
    <App />
  </Router>);

  expect(format(html)).toContain(contactSuccessHTML);
});