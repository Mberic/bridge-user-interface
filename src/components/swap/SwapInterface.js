import React from 'react';
import { 
  Button,
  Container,
  Paper,
  TextField,
  MenuItem,
  Typography,
  Divider
} from '@mui/material';

import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';

const SwapInterface = () => {
  const [fromToken, setFromToken] = React.useState('');
  const [toToken, setToToken] = React.useState('');
  const [amount, setAmount] = React.useState('');

  const tokens = [
    { value: 'ETH', label: 'Ethereum' },
    { value: 'USDT', label: 'USDT' },
    { value: 'DAI', label: 'DAI' },
    // ... add more tokens as needed
  ];

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
        <TextField
          fullWidth
          select
          label="From (token)"
          value={fromToken}
          onChange={(e) => setFromToken(e.target.value)}
          variant="outlined"
          style={{ marginBottom: '1rem' }}
        >
          {tokens.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>
        <Typography align="center" style={{ marginBottom: '1rem' }}>
          ↓
        </Typography>
        <TextField
          fullWidth
          select
          label="To (token)"
          value={toToken}
          onChange={(e) => setToToken(e.target.value)}
          variant="outlined"
          style={{ marginBottom: '1rem' }}
        >
          {tokens.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>
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
