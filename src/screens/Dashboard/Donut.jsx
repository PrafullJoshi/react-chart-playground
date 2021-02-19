import React, { useEffect } from 'react';
import c3 from "c3";
import 'c3/c3.css'
import clsx from 'clsx';
import PropTypes from 'prop-types';
import {
  Box,
  Button,
  Card,
  CardContent,
  CardHeader,
  Divider,
  useTheme,
  makeStyles,
  colors,
  Grid,
  Paper
} from '@material-ui/core';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import ArrowRightIcon from '@material-ui/icons/ArrowRight';

const useStyles = makeStyles(() => ({
  root: {
    flexGrow: 1,
  },
  donuts: {
    display: 'flex', 
    flexDirection: 'row',

  }
}));

const Donut = ({ className, ...rest }) => {
  const classes = useStyles();
  const theme = useTheme();

  useEffect(() => {
    generateChart();
  }, []);

  const generateChart = () => {
    c3.generate({
      data: {
        columns: [
            ['data1', 30],
            ['data2', 120],
        ],
        type : 'donut',
        onclick: function (d, i) { console.log("onclick", d, i); },
        onmouseover: function (d, i) { console.log("onmouseover", d, i); },
        onmouseout: function (d, i) { console.log("onmouseout", d, i); }
      },
      donut: {
          title: "82%"
      },
      bindto: '#chart-donut',
    });

    c3.generate({
      data: {
        columns: [
            ['data1', 30],
            ['data2', 70],
        ],
        type : 'donut',
        onclick: function (d, i) { console.log("onclick", d, i); },
        onmouseover: function (d, i) { console.log("onmouseover", d, i); },
        onmouseout: function (d, i) { console.log("onmouseout", d, i); }
      },
      donut: {
          title: "75%",
          expand: { duration: 10},

      },
      bindto: '#chart-donut-2',
    });
  }
  
  function FormRow() {
    return (
      <React.Fragment>
        <Grid item xs={8}>
          <div id="chart-donut" />
        </Grid>
        <Grid item xs={4}>
          <div id="chart-donut-2" />
        </Grid>
      </React.Fragment>
    );
  }
  
  return (
    <Card
      className={clsx(classes.root, className)}
      {...rest}
    >
      <CardHeader
        action={(
          <Button
            endIcon={<ArrowDropDownIcon />}
            size="small"
            variant="text"
          >
            Last 7 days
          </Button>
        )}
        title="Donut"
      />
      <Divider />
      <CardContent >
        <div className={classes.root}>
          <Grid container spacing={1}>
            <Grid container item  lg={12}  xs={12} spacing={1}>
              <FormRow />
            </Grid>
          </Grid>
        </div>
      </CardContent>
      <Divider />
      {/* <Box
        display="flex"
        justifyContent="flex-end"
        p={2}
      >
        <Button
          color="primary"
          endIcon={<ArrowRightIcon />}
          size="small"
          variant="text"
        >
          Overview
        </Button>
      </Box> */}
    </Card>
  );
}

Donut.propTypes = {
  className: PropTypes.string
};
export default Donut;