import React from 'react';

import '../../styles/App.css';
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
      
      <footer className="fixed left-0 flex flex-row w-full bottom-1">
        <div className="ml-2 text-xs text-slate-500">
          {/* App version: {version} */}
        </div>
      </footer>
  </>

    );
}
