import React, { useEffect, useState } from 'react';
import {
  Card,
  CardContent,
  Typography,
  Button,
  Chip,
  Divider,
  Box,
  Stack,
  Paper
} from '@mui/material';
import EventIcon from '@mui/icons-material/Event';
import HourglassEmptyIcon from '@mui/icons-material/HourglassEmpty';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../redux/store';
import { getQuiz } from '../redux/action/quizAction';
import { Quiz } from '../redux/type/anntype';
import moment from 'moment';

interface DueItemProps {
  type: 'quiz' | 'assignment';
  title: string;
  course: string;
  topic: string;
  dueDate: string;
  buttonText: string;
}

const DueItem: React.FC<DueItemProps> = ({
  type,
  title,
  course,
  topic,
  dueDate,
  buttonText,
}) => {
  return (
    <Box sx={{ mb: 4 }}>
      <Stack direction="row" alignItems="center" spacing={1} sx={{ mb: 1 }}>
        {type === 'quiz' ? (
          <Chip icon={<HourglassEmptyIcon sx={{ fontSize: 28 }} />} label="" size="medium" sx={{ px: 1.5 }} />
        ) : (
          <Chip icon={<MenuBookIcon sx={{ fontSize: 28 }} />} label="" size="medium" sx={{ px: 1.5 }} />
        )}
        <Typography variant="h6" fontWeight="bold">{title}</Typography>
      </Stack>

      <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'stretch', gap: 1.2, px: 2 }}>
        <Typography variant="body2" color="text.secondary">
          <strong>Course:</strong> {course}
        </Typography>

        <Typography variant="body2" color="text.secondary">
          <strong>Topic:</strong> {topic}
        </Typography>

        <Stack direction="row" alignItems="center" spacing={1}>
          <EventIcon fontSize="small" color="action" />
          <Typography variant="body2" color="text.secondary">
            <strong>Due to:</strong> {dueDate}
          </Typography>
        </Stack>

        <Button
          variant="outlined"
          size="large"
          sx={{ mt: 1, py: 1.5, borderRadius: 3, textTransform: 'none', fontSize: '1rem', mr: 1 }}
        >
          {buttonText}
        </Button>
      </Box>
    </Box>
  );
};

const WhatsDueCard: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { data: quizzes, loading } = useSelector((state: RootState) => state.quiz);
  const [showAll, setShowAll] = useState(false); // ⬅️ الحالة التي تتحكم بظهور الصندوق

  useEffect(() => {
    dispatch(getQuiz());
  }, [dispatch]);

  return (
    <Card sx={{ maxWidth: 600, borderRadius: 3, boxShadow: 3, '&:hover': { boxShadow: 5 } }}>
      <CardContent>
        {/* Header */}
        <Box display="flex" justifyContent="space-between" alignItems="center" mb={3}>
          <Typography variant="h5" component="h2" sx={{ fontWeight: 'bold' }}>
            What's Due
          </Typography>
          <Button
            variant="text"
            size="large"
            onClick={() => setShowAll(!showAll)} // ⬅️ تبديل العرض
            sx={{
              textTransform: 'none',
              borderRadius: 2,
              fontWeight: 'bold',
              color: 'primary.main',
              '&:hover': {
                backgroundColor: 'rgba(0, 0, 0, 0.04)',
              },
            }}
          >
            {showAll ? 'Hide' : 'All'}
          </Button>
        </Box>

        {loading && <Typography>Loading...</Typography>}

        {/* عرض أول Quiz فقط */}
        {!showAll && quizzes?.length > 0 && (
          <DueItem
            type="quiz"
            title={quizzes[0].quizName}
            course={quizzes[0].course}
            topic={quizzes[0].topic}
            dueDate={moment(quizzes[0].dueDate).format('DD MMM YYYY - hh:mm A')}
            buttonText="Start Quiz"
          />
        )}

        {/* الصندوق الإضافي لعرض الكل */}
        {showAll && (
          <Paper elevation={2} sx={{ mt: 3, p: 2, borderRadius: 3, backgroundColor: '#f9f9f9' }}>
            <Typography variant="h6" sx={{ mb: 2, fontWeight: 'bold' }}>
              All Quizzes
            </Typography>
            {quizzes.map((quiz: Quiz, index) => (
              <Box key={quiz._id || index}>
                <DueItem
                  type="quiz"
                  title={quiz.quizName}
                  course={quiz.course}
                  topic={quiz.topic}
                  dueDate={moment(quiz.dueDate).format('DD MMM YYYY - hh:mm A')}
                  buttonText="Start Quiz"
                />
                {index < quizzes.length - 1 && <Divider sx={{ my: 2 }} />}
              </Box>
            ))}
          </Paper>
        )}
      </CardContent>
    </Card>
  );
};

export default WhatsDueCard;
