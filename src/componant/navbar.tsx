import React from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  Box,
  IconButton,
  Avatar,
  InputBase,
  Menu,
  MenuItem,
  Badge,
  useMediaQuery,
} from '@mui/material';
import NotificationsIcon from '@mui/icons-material/Notifications';
import MessageIcon from '@mui/icons-material/Message';
import SearchIcon from '@mui/icons-material/Search';
import MenuIcon from '@mui/icons-material/Menu';
import { useTheme } from '@mui/material/styles';
import { useNavigate } from 'react-router-dom';
interface NavbarProps {
  userName?: string;
}

const Navbar: React.FC<NavbarProps> = ({ userName = "Talia" }) => {
  const navigate = useNavigate(); // 
  const theme = useTheme(); // ✅ INSIDE the component
  const isMobile = useMediaQuery(theme.breakpoints.down('sm')); // ✅

  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

  const handleMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };
  const handleLogin = () => {
    navigate('/'); // 
  };

  return (
    <AppBar
      position="fixed"
      sx={{
        width: 'calc(100% - 240px)',
        ml: '240px',
        backgroundColor: 'white',
        color: '#333',
        boxShadow: 'none',
        borderBottom: '1px solid #e0e0e0',
        zIndex: (theme) => theme.zIndex.drawer + 1,
      }}
    >
      <Toolbar
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          flexWrap: 'wrap',
          px: 2,
          py: 1,
        }}
      >
        <Typography
          variant="h6"
          sx={{
            fontWeight: 'bold',
            fontSize: '18px',
            mb: { xs: 1, sm: 0 },
          }}
        >
          Welcome, {userName}
        </Typography>

        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            gap: 2,
            flexWrap: 'wrap',
          }}
        >
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              backgroundColor: '#f0f0f0',
              borderRadius: 2,
              px: 1,
              py: 0.5,
            }}
          >
            <SearchIcon sx={{ color: '#666' }} />
            <InputBase placeholder="Search..." sx={{ ml: 1, width: '150px' }} />
          </Box>

          <IconButton>
            <Badge badgeContent={3} color="error">
              <NotificationsIcon />
            </Badge>
          </IconButton>

          <IconButton>
            <Badge badgeContent={1} color="primary">
              <MessageIcon />
            </Badge>
          </IconButton>

          <IconButton onClick={handleMenuOpen} size="small">
            <Avatar sx={{ width: 32, height: 32 }}>
              {userName.charAt(0).toUpperCase()}
            </Avatar>
          </IconButton>

          <Menu
            anchorEl={anchorEl}
            open={Boolean(anchorEl)}
            onClose={handleMenuClose}
            anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
            transformOrigin={{ vertical: 'top', horizontal: 'right' }}
          >
      
            <MenuItem onClick={handleLogin}>Logout</MenuItem>
          </Menu>

          {isMobile && (
            <IconButton edge="start" color="inherit" sx={{ mr: 1 }}>
              <MenuIcon />
            </IconButton>
          )}
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
