import * as React from 'react';
import Typography from '@mui/material/Typography';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import { Card, Grid } from '@mui/material';
import { useDispatch } from 'react-redux';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { getAllPerson } from '../../store/modules/PersonSlice';

const Home: React.FC = () => {
  const [page, setPage] = React.useState(1);
  const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
    setPage(value);
  };
  const peopleRedux = useAppSelector((state) => state.person.people);
  const dispatch = useAppDispatch();

  React.useEffect(() => {
    dispatch(getAllPerson(page));
    console.log('Alterou', page);
  }, [page]);

  return (
    <Grid container>
      <Grid item container>
        <Grid
          item
          sx={{
            width: '100%',
            display: 'flex',
            flexWrap: 'wrap',
            gap: '8px',
          }}
        >
          {peopleRedux.map((person) => (
            <Card key={person.name}>
              <Typography>{person.name}</Typography>
              <Typography>{person.height}</Typography>
              <Typography>{person.mass}</Typography>
            </Card>
          ))}
        </Grid>
      </Grid>
      <Grid item>
        <Stack spacing={2}>
          <Typography>Page: {page}</Typography>
          <Pagination count={10} page={page} onChange={handleChange} />
        </Stack>
      </Grid>
    </Grid>
  );
};

export default Home;
