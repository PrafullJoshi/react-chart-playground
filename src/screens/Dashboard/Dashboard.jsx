import React from 'react';
import {
  Container,
  Grid,
  makeStyles
} from '@material-ui/core';

import Page from '../../components/Page'
import StackedBar from './StackedBar';
import Donut from './Donut';
import FiscalYear from './FiscalYear';

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.dark,
    minHeight: '100%',
    paddingBottom: theme.spacing(3),
    paddingTop: theme.spacing(3)
  }
}));

const Dashboard = () => {
  const classes = useStyles();

  return (
    <Page
      className={classes.root}
      title="Navis Dashboard"
    >
      <Container maxWidth={false}>
        <Grid container spacing={3} >
          <Grid  item lg={12} md={12} xl={12} xs={12} >
            <FiscalYear />
          </Grid>
          <Grid item lg={6} sm={12}  xl={6} xs={12} >
            <Donut />
          </Grid>
          <Grid item lg={3} sm={6} xl={3} xs={12} >
            {/* <TotalCustomers /> */}
          </Grid>
          <Grid item lg={3} sm={6} xl={3} xs={12} >
            {/* <TasksProgress /> */}
          </Grid>
          <Grid item lg={3} sm={6} xl={3} xs={12} >
            {/* <TotalProfit /> */}
          </Grid>
          <Grid  item lg={12} md={12} xl={12} xs={12} >
            <StackedBar />
          </Grid>
          <Grid
            item
            lg={8}
            md={12}
            xl={9}
            xs={12}
          >
            {/* <Sales /> */}
          </Grid>
          <Grid
            item
            lg={4}
            md={6}
            xl={3}
            xs={12}
          >
            {/* <TrafficByDevice /> */}
          </Grid>
          <Grid
            item
            lg={4}
            md={6}
            xl={3}
            xs={12}
          >
            {/* <LatestProducts /> */}
          </Grid>
          <Grid
            item
            lg={8}
            md={12}
            xl={9}
            xs={12}
          >
            {/* <LatestOrders /> */}
          </Grid>
        </Grid>
      </Container>
    </Page>
  );
};


export default Dashboard;