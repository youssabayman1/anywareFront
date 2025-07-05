import React from 'react';
import {
  Card,
  CardContent,
  Typography,
  Button,
  Box,
  styled,
  useTheme
} from '@mui/material';

const StyledCard = styled(Card)(({ theme }) => ({
    width: 'calc(100% - 240px)',
    marginLeft: '240px',
    marginTop: '120px',
   
    borderRadius: 5,
    boxShadow: theme.shadows[4],
    background: theme.palette.background.paper,
    transition: 'transform 0.3s ease-in-out',
    '&:hover': {
      transform: 'translateY(-5px)',
      boxShadow: theme.shadows[8],
    },
  }));

const QuoteText = styled(Typography)(({ theme }) => ({
  fontStyle: 'italic',
  margin: `${theme.spacing(2)} 0`,
  paddingLeft: theme.spacing(2),
  borderLeft: `4px solid ${theme.palette.primary.main}`,
}));

const ExamsCard: React.FC = () => {
  const theme = useTheme();

  return (
    <StyledCard>
      <CardContent>
        <Typography
          variant="h4"
          component="h2"
          gutterBottom
          sx={{
            fontWeight: 'bold',
            color: theme.palette.primary.main,
          }}
        >
          EXAMS TIME
        </Typography>
        
        <Typography variant="body1" paragraph>
          Here we are. Are you ready to fight? Don't worry, we prepared some tips to
          be ready for your exams.
        </Typography>
        
        <QuoteText variant="body1" color="text.secondary">
          "Nothing happens until something moves" - Albert Einstein
        </QuoteText>
        
        <Box sx={{ display: 'flex', justifyContent: 'flex-start' , mt:2}}>
          <Button
            variant="contained"
            color="inherit"
            size="large"
            sx={{
              borderRadius: 16,
              padding: `${theme.spacing(1)} ${theme.spacing(3)}`,
              fontWeight: 'bold',
            }}
          >
            View exams tips
          </Button>
        </Box>
      </CardContent>
    </StyledCard>
  );
};

export default ExamsCard;