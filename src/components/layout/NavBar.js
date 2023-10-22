// import React, { useState } from "react";
import React from 'react';
import { ThirdwebProvider } from "@thirdweb-dev/react";
import { Web3Button } from "@thirdweb-dev/react";

import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';

import NetworkDropDown from "../swap/NetworkDropDown";

function NavBar() {
  
  return (
     <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Cartesi Bridge
          </Typography>
          <ThirdwebProvider activeChain="ethereum" clientId="24b3bf68e3ac0c8b37c6025ca1910ce2">
          <Web3Button
            contractAddress="{{contract_address}}"
            action={async (contract) => contract.call("myFunctionName")}
          >
            Call myFunctionName from the connected wallet
          </Web3Button>
          </ThirdwebProvider>
          </Toolbar>
        </AppBar>
      </Box>
  );
}

export default NavBar;