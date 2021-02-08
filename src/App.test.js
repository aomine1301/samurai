import React from 'react';
import ReactDOM from 'react-dom'
import SamuraiJSApp from "./App";

it('renders learn react link', () => {
  const div = document.createElement('div')
  ReactDOM.render(<SamuraiJSApp/>,div)
  ReactDOM.unmountComponentAtNode(div)
});
