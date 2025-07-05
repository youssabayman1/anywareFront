import React, { useEffect } from 'react';
import {
  Card,
  CardContent,
  Typography,
  Avatar,
  Divider,
  Box,
  useTheme,
} from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../redux/store';
import { getAllann } from '../redux/action/actionann';
import { Announcement } from '../redux/type/anntype';
import { useTranslation } from 'react-i18next'; // ✅ i18n hook

const AnnouncementCard = () => {
  const theme = useTheme();
  const dispatch = useDispatch<AppDispatch>();
  const { t } = useTranslation(); // ✅ translation hook

  const { data: announcements, loading, error } = useSelector(
    (state: RootState) => state.announcement
  );

  useEffect(() => {
    dispatch(getAllann());
  }, [dispatch]);

  return (
    <Card
      sx={{
        width: { xs: '100%', sm: '100%', md: 'calc(100% - 300px)' },
        marginLeft: { xs: 2, md: '240px' },
        borderRadius: 2,
        boxShadow: theme.shadows[2],
        px: { xs: 2, sm: 4 },
        '&:hover': {
          boxShadow: theme.shadows[4],
        },
      }}
    >
      <CardContent>
        <Typography
          variant="h4"
          component="h2"
          gutterBottom
          sx={{
            fontWeight: 'bold',
            color: theme.palette.primary.main,
            marginBottom: 4,
          }}
        >
          {t('announcements')} {/* ✅ Translated title */}
        </Typography>

        {loading && <Typography>{t('loading')}</Typography>} {/* ✅ Translated */}
        {error && <Typography color="error">{error}</Typography>}

        {Array.isArray(announcements) && announcements.length === 0 && !loading && (
  // ✅ Translated
  <Typography>{t('noAnnouncements')}</Typography>
)}
        {Array.isArray(announcements) &&
          announcements.map((ann: Announcement, index) => (
            <Box key={ann._id || index} sx={{ mb: 3 }}>
              {/* Avatar + Name + Course */}
              <Box sx={{ display: 'flex', gap: 2, alignItems: 'center', mb: 1 }}>
                <Avatar
                  alt={ann.senderName}
                  src={ann.image}
                  sx={{ width: 48, height: 48 }}
                >
                  {(!ann.image && ann.senderName) &&
                    ann.senderName
                      .split(' ')
                      .map(word => word[0])
                      .join('')
                      .slice(0, 2)
                      .toUpperCase()}
                </Avatar>
                <Box>
                  <Typography variant="subtitle1" fontWeight="bold">
                    {ann.senderName}
                  </Typography>
                  <Typography variant="caption" color="text.secondary">
                    {ann.course}
                  </Typography>
                </Box>
              </Box>

              {/* Description */}
              <Typography variant="body1" sx={{ mt: 1 }}>
                {ann.description}
              </Typography>

              {index < announcements.length - 1 && (
                <Divider sx={{ my: 2 }} />
              )}
            </Box>
          ))}
      </CardContent>
    </Card>
  );
};

export default AnnouncementCard;
