import React from 'react';
import './Layout.module.css';
import ExploreButton from './ExploreButton';

function Layout() {
  return (
    <div className="container">
      <div className="left">
        <p>Model: ChatGPT-4</p>
        {/* Your left content goes here */}
      </div>
      <div className="right">
        <p>Knowledge Cloud</p>
        {/* <ExploreButton /> */}
        {/* Your right content goes here */}
      </div>
    </div>
  );
}

export default Layout;
