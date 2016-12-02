import React from 'react';
import ReactDOM from 'react-dom';
import App from '../src/App';

import Router from 'react-router/MemoryRouter';
import { renderToString } from 'react-dom/server';

import data from "./data.json";
console.log();
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

it('App renders correctly', () => {
  const div = document.createElement('div');
  const pathname = "/";  
  const html = renderToString(<Router initialEntries={[{ pathname }]}>
    <App />
  </Router>);

  expect(format(html)).toContain(data[pathname]);
});

it('application/appid renders correctly', () => {
  const pathname = "/application/DFG-20394";
  const div = document.createElement('div');
  const html = renderToString(<Router initialEntries={[{ pathname }]}>
    <App />
  </Router>);

  expect(format(html)).toContain(data[pathname]);
});

it('application/appid/notes Show application details and a list of notes', () => {
  const pathname = "/application/DFG-20394/notes";
  const div = document.createElement('div');
  const html = renderToString(<Router initialEntries={[{ pathname }]}>
    <App />
  </Router>);

  expect(format(html)).toContain(data[pathname]);
});

it('application/appid/notes/12 Show a single note relating to this application', () => {
  const pathname = "/application/DFG-20394/notes/12";
  const div = document.createElement('div');
  const html = renderToString(<Router initialEntries={[{ pathname }]}>
    <App />
  </Router>);

  expect(format(html)).toContain(data[pathname]);
});

it('application/appid/notes/45 Show a single note relating to this application', () => {
  const pathname = "/application/DFG-20394/notes/45";
  const div = document.createElement('div');
  const html = renderToString(<Router initialEntries={[{ pathname }]}>
    <App />
  </Router>);

  expect(format(html)).toContain(data[pathname]);
});

it('application/appid/notes/99 Shows error that note was not found', () => {
  const pathname = "/application/DFG-20394/notes/99";
  const div = document.createElement('div');
  const html = renderToString(<Router initialEntries={[{ pathname }]}>
    <App />
  </Router>);

  expect(format(html)).toContain(data[pathname]);
});