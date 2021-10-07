import React from 'react';
import { BrowserRouter, StaticRouter } from "react-router-dom";
import Template from "./containers/Template";
import 'bootstrap/dist/css/bootstrap.css';
import 'react-image-lightbox/style.css';
import '@fontsource/roboto';
import './App.css';

export default function App(props) {
  return (props.server ?
    <StaticRouter location={props.location} context={{}}>
      <Template />
    </StaticRouter> :
    <BrowserRouter>
      <Template />
    </BrowserRouter>
  );
}