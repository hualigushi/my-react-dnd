import React from 'react';
import ReactDOM from 'react-dom';
// import {DndProvider} from 'react-dnd'
// import {HTML5Backend} from 'react-dnd-html5-backend'
import {DndProvider} from './react-dnd'
import {HTML5Backend} from './react-dnd-html5-backend'
import Container from './Container'

ReactDOM.render(
  <DndProvider backend={HTML5Backend}>
    <Container />
  </DndProvider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals