/** @format */

import React from 'react';

import 'bootstrap/dist/css/bootstrap.css';
import './Header.css';

export default class Header extends React.Component {
  constructor() {
    super();
  }
  render() {
    return (
      <div>
        <div>
          <h1 className='header-title bg-primary text-white p-4'>
            This is the Header component created by William
          </h1>
        </div>
        <div>
            <h2>Branch test</h2>
        </div>
      </div>
    );
  }
}
4;
