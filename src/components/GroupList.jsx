import React from 'react';
import { CircularProgress, List, ListItem, ListItemText, Typography, Alert } from '@mui/material';
import useGroups from '../hooks/useGroups';

const GroupList = () => {
  const { groups, loading, error } = useGroups();

  if (loading) return <CircularProgress />;
  if (error) return <Alert severity="error">Error cargando los grupos</Alert>;

  return (
    <div>
      <Typography variant="h5" gutterBottom>Grupos</Typography>
      <List>
        {groups.map(group => (
          <ListItem key={group.id}>
            <ListItemText primary={group.name} secondary={group.type} />
          </ListItem>
        ))}
      </List>
    </div>
  );
};

export default GroupList;
