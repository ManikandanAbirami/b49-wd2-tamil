// eslint-disable-next-line no-unused-vars
import React from 'react'
import './Price.css'

function Price() {
  return React.createElement('div',{className: 'price-card'},'Hello, this is a React Component!', 
  React.createElement('div', null, 'Hi, i m child element!!', React.createElement('span',null,'name')), 
  React.createElement('span',null,'age'));
}

export default Price