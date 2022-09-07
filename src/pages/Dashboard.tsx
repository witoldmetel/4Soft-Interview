import { Container, Typography, Autocomplete, TextField, CircularProgress } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { useState } from 'react';

import { useAppContext } from 'src/hooks/useAppContext';

export default function Dashboard() {
  const classes = useStyles();
  const { data, isLoading } = useAppContext();
  console.log('file: Dashboard.tsx ~ line 9 ~ Dashboard ~ appListData', data);

  // @todo: Add proper type here
  const [observaleData, setObservableData] = useState([]) as any;

  // @todo: Add proper type here
  const onChange = (newData: any) => {
    if (newData) {
      setObservableData((prevData: any) => [...prevData, newData]);
    }
  };

  if (!data && isLoading) return <CircularProgress />;

  return (
    <Container className={classes.root} maxWidth="lg" component="main">
      <Typography component="h1" variant="h2" align="center" color="text.primary" gutterBottom>
        Dashboard Monitor
      </Typography>
      <Typography variant="h5" align="center" color="text.secondary" component="p">
        Select apps and keep eye on them!
      </Typography>
      <Autocomplete
        id="autocomplete-app"
        onChange={(event: any, newApp: any) => onChange(newApp)}
        options={data}
        getOptionLabel={(option) => option.name}
        sx={{ width: 300, marginTop: 2 }}
        renderInput={(params) => <TextField {...params} label="App" />}
      />
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
