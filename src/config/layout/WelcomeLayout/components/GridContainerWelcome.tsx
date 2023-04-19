import { Grid } from '@mui/material';
import { styled } from '@mui/material/styles';
import bg from '../../../../../public/assets/images/star-wars.PNG';

const GridContainerWelcome = styled(Grid)({
  height: '100vh',
  background: `url(${bg}) center top / contain repeat-x`,
});

export default GridContainerWelcome;
