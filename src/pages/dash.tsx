import React from 'react';
import Sidebar from '../componant/sidebar';
import Navbar from '../componant/navbar';
import ExamCard from '../componant/examCard';
import AnniCard from '../componant/anniCard';
import WhatsDueCard from '../componant/dueCard';
import { Box } from '@mui/material';

const drawerWidth = 0;

const Dash: React.FC = () => {
  return (
    <>
      <Sidebar />

      <Box
        sx={{
            display:'flex',
          ml: `${drawerWidth}px`,
          backgroundColor: 'whitesmoke',
          minHeight: '100vh',
        }}
      >
        <Navbar userName="Youssab" />

        <Box sx={{ mt: 0, px: 3 }}>
          {/* Full-width ExamCard */}
          <ExamCard />

          {/* Grid layout for AnniCard and WhatsDueCard */}
          <Box
  sx={{
    display: 'grid',
    gridTemplateColumns: {
      xs: '1fr',
      md: '3fr 1fr',
    },
    gap: 2,
    mt: 3,
    alignItems: 'stretch', // <-- key line to equalize height
  }}
>
  <Box sx={{ height: '100%' }}>
    <AnniCard />
  </Box>

  <Box sx={{ height: '100%',
    width:'100%'
   }}>
    <WhatsDueCard />
  </Box>
</Box>

        </Box>
      </Box>
    </>
  );
};

export default Dash;
