import { Container, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';

import { useAppContext } from 'src/hooks/useAppContext';

export default function Dashboard() {
  const classes = useStyles();
  const { appListData } = useAppContext();
  console.log('file: Dashboard.tsx ~ line 9 ~ Dashboard ~ appListData', appListData);

  return (
    <Container className={classes.root} maxWidth="lg" component="main">
      <Typography component="h1" variant="h2" align="center" color="text.primary" gutterBottom>
        Dashboard Monitor
      </Typography>
      <Typography variant="h5" align="center" color="text.secondary" component="p">
        Select apps and keep eye on them!
      </Typography>
    </Container>
  );
}

const useStyles = makeStyles(() => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: 40
  }
}));
