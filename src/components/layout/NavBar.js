import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { CodeIcon, HamburgetMenuClose, HamburgetMenuOpen } from "./Icons";
import { ThirdwebProvider } from "@thirdweb-dev/react";
import { Web3Button } from "@thirdweb-dev/react";

import "../../styles/NavBar.css";
import NetworkDropDown from "../swap/NetworkDropDown";

function NavBar() {
  
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  return (
    <>
    <ThirdwebProvider activeChain="ethereum" clientId="24b3bf68e3ac0c8b37c6025ca1910ce2">
      <nav className="navbar">
        <div className="nav-container">
          <NavLink exact to="/" className="nav-logo">
            <span>Cartesi Bridge</span>
          </NavLink>

          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li>

            </li>
            <li className="nav-item">
            <Web3Button
            contractAddress="{{contract_address}}"
            action={async (contract) => contract.call("myFunctionName")}
            >
            Call myFunctionName from the connected wallet
            </Web3Button>
            </li>
          </ul>
        </div>
      </nav>
    </ThirdwebProvider>
    {/* <NetworkDropDown></NetworkDropDown> */}
    </>
  );
}

export default NavBar;