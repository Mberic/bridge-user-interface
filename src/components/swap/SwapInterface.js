import React from 'react';
import { 
  Button,
  Container,
  Paper,
  TextField,
  Typography,
  Autocomplete,
  Divider
} from '@mui/material';

import tokenlist from '../../constants/tokenlist.json';

import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';

let tokens = tokenlist.tokens;

const SwapInterface = () => {
  const [fromToken, setFromToken] = React.useState('');
  const [toToken, setToToken] = React.useState('');
  const [amount, setAmount] = React.useState('');

  return (
    <Container maxWidth="sm" style={{ marginTop: '3rem' }}>
      <Paper elevation={3} style={{ padding: '2rem' }}>
        <Typography variant="h5" align="center">
          Teleport
        </Typography>
        <Divider style={{ margin: '1rem 0' }} />
        <TextField
          fullWidth
          label="From (amount)"
          type="number"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          variant="outlined"
          style={{ marginBottom: '1rem' }}
        />
        <Autocomplete
          disablePortal
          id="combo-box-demo"
          options={tokens}
          fullWidth
          renderInput={(params) => <TextField {...params} label="From (token)" />}
        />
        <Typography align="center" style={{ marginBottom: '1rem' }}>
          ↓
        </Typography>
        <Autocomplete
          disablePortal
          id="combo-box-demo"
          options={tokens}
          fullWidth
          renderInput={(params) => <TextField {...params} label="To (token)" />}
        />
        <Button 
          fullWidth 
          variant="contained" 
          color="primary"
        >
          Send
        </Button>
      </Paper>
    </Container>
  );
}

export default SwapInterface;
