import React from 'react';
import NavBar from './NavBar';
import SwapInterface from '../swap/SwapInterface';

export default function Layout() {

    return(
    <>
      <header>
          <NavBar />
      </header>

      <main>
        <SwapInterface></SwapInterface>
      </main>
      
  </>

    );
}
