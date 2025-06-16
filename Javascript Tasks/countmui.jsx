import React, { useState } from 'react';
import { Box, Typography, Button } from '@mui/material';
const CounterApp = () => {
  const [count, setCount] = useState(0);
  return (
    <Box
      sx={{
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        bgcolor: '#f5f5f5',
      }}
    >
      <Typography variant="h3" gutterBottom>
        MUI Counter App
      </Typography>
      <Typography variant="h4" color="primary" sx={{ mb: 4 }}>
        Count: {count}
      </Typography>
      <Box sx={{ display: 'flex', gap: 2 }}>
        <Button
          variant="contained"
          color="primary"
          onClick={() => setCount(count + 1)}
        >
          Increment
        </Button>
        <Button
          variant="outlined"
          color="secondary"
          onClick={() => setCount(count - 1)}
        >
          Decrement
        </Button>
        <Button
          variant="text"
          onClick={() => setCount(0)}
        >
          Reset
        </Button>
      </Box>
    </Box>
  );
};
export default CounterApp;



    

 
