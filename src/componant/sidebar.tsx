import React from 'react';
import {
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Divider,
  Typography,
  Box,
  useMediaQuery,
  useTheme,
  IconButton,
} from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import ScheduleIcon from '@mui/icons-material/CalendarToday';
import CoursesIcon from '@mui/icons-material/MenuBook';
import SchoolIcon from '@mui/icons-material/School';
import ShowChartIcon from '@mui/icons-material/ShowChart';
import AnnouncementIcon from '@mui/icons-material/Announcement';
import MenuIcon from '@mui/icons-material/Menu';
import { useNavigate } from 'react-router-dom';

interface MenuItem {
  text: string;
  icon: React.ReactNode;
  completed: boolean;
  path: string;
}

const drawerWidth = 240;

const Sidebar: React.FC = () => {
  const navigate = useNavigate();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => setMobileOpen(!mobileOpen);

  const menuItems: MenuItem[] = [
    { text: 'Dashboard', icon: <HomeIcon />, completed: false, path: '/' },
    { text: 'Schedule', icon: <ScheduleIcon />, completed: false, path: '/' },
    { text: 'Courses', icon: <CoursesIcon />, completed: false, path: '/' },
    { text: 'Gradebook', icon: <SchoolIcon />, completed: false, path: '/' },
    { text: 'Performance', icon: <ShowChartIcon />, completed: false, path: '/' },
    { text: 'Announcement', icon: <AnnouncementIcon />, completed: false, path: '/' },
  ];

  const drawerContent = (
    <Box>
      <Box sx={{ p: 3, display: 'flex', justifyContent: 'center' }}>
        <Typography variant="h5" fontWeight="bold" color="white">
          Coligo
        </Typography>
      </Box>
      <Divider sx={{ borderColor: 'white' }} />
      <List>
        {menuItems.map((item) => (
        <ListItem
        key={item.text}
        onClick={() => {
          navigate(item.path);
          if (isMobile) setMobileOpen(false);
        }}
        sx={{
          px: 3,
          py: 1,
          textAlign: 'left',
          color: 'white',
          transition: 'background-color 0.3s, color 0.3s',
          '&:hover': {
            backgroundColor: 'white',
            color: '#207f9e',
            '& .MuiListItemIcon-root': {
              color: '#207f9e',
            },
            '& .MuiTypography-root': {
              color: '#207f9e',
            },
          },
        }}
      >
            <ListItemIcon sx={{ minWidth: 32, color: 'white' }}>{item.icon}</ListItemIcon>
            <ListItemText primary={item.text} />
            {item.completed && (
              <Box
                sx={{
                  width: 8,
                  height: 8,
                  borderRadius: '50%',
                  backgroundColor: '#4caf50',
                  ml: 'auto',
                }}
              />
            )}
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <>
      {/* Show hamburger menu icon on mobile */}
      {isMobile && (
        <IconButton
          color="inherit"
          aria-label="open drawer"
          edge="start"
          onClick={handleDrawerToggle}
          sx={{ position: 'fixed', top: 16, left: 16, zIndex: 1301 }}
        >
          <MenuIcon />
        </IconButton>
      )}

      <Drawer
        variant={isMobile ? 'temporary' : 'permanent'}
        open={isMobile ? mobileOpen : true}
        onClose={handleDrawerToggle}
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          zIndex: isMobile ? 1301 : 1200,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            boxSizing: 'border-box',
            backgroundColor: '#207f9e',
            color: 'white',
          },
        }}
      >
        {drawerContent}
      </Drawer>
    </>
  );
};

export default Sidebar;
