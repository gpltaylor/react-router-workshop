import React from 'react';
import ReactDOM from 'react-dom';
import App from '../src/App';

import Router from 'react-router/MemoryRouter';
import { renderToString, renderToStaticMarkup } from 'react-dom/server';

import data from "./data.json";


it('App renders correctly', () => {
  const div = document.createElement('div');
  const pathname = "/";  
  const html = renderToStaticMarkup(<Router initialEntries={[{ pathname }]}>
    <App />
  </Router>);
  expect(html).toContain(data[pathname]);
});

it('application/appid renders correctly', () => {
  const pathname = "/application/DFG-20394";
  const div = document.createElement('div');
  const html = renderToStaticMarkup(<Router initialEntries={[{ pathname }]}>
    <App />
  </Router>);

  expect(html).toContain(data[pathname]);
});

it('application/appid/notes Show application details and a list of notes', () => {
  const pathname = "/application/DFG-20394/notes";
  const div = document.createElement('div');
  const html = renderToStaticMarkup(<Router initialEntries={[{ pathname }]}>
    <App />
  </Router>);

  expect(html).toContain(data[pathname]);
});

it('application/appid/notes/12 Show a single note relating to this application', () => {
  const pathname = "/application/DFG-20394/notes/12";
  const div = document.createElement('div');
  const html = renderToStaticMarkup(<Router initialEntries={[{ pathname }]}>
    <App />
  </Router>);

  expect(html).toContain(data[pathname]);
});

it('application/appid/notes/45 Show a single note relating to this application', () => {
  const pathname = "/application/DFG-20394/notes/45";
  const div = document.createElement('div');
  const html = renderToStaticMarkup(<Router initialEntries={[{ pathname }]}>
    <App />
  </Router>);

  expect(html).toContain(data[pathname]);
});

it('application/appid/notes/99 Shows error that note was not found', () => {
  const pathname = "/application/DFG-20394/notes/99";
  const div = document.createElement('div');
  const html = renderToStaticMarkup(<Router initialEntries={[{ pathname }]}>
    <App />
  </Router>);

  expect(html).toContain(data[pathname]);
});