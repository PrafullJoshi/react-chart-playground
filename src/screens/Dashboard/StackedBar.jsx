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
  colors
} from '@material-ui/core';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import ArrowRightIcon from '@material-ui/icons/ArrowRight';

const useStyles = makeStyles(() => ({
  root: {},
}));

const StackedBar = ({ className, ...rest }) => {
  const classes = useStyles();
  const theme = useTheme();

  useEffect(() => {
    generateChart();
  }, []);

  const generateChart = () => {
    c3.generate({
      data: {
          x: 'x',
          columns: [
              ['x', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec', 'Jan', 'Feb', 'Mar'],
              ['data1', -30, 200, -50, 400, 300, 500, 700, 900, 905, 1000, 900, 800],
              ['data2', 0,0,0,0,0,0,0, 0, 0, 400, 500, 600],
          ],
          type: 'bar',
          groups: [
              ['data1', 'data2']
          ],
          order: null,
          colors: {
            data1: '#7DB09A',
            data2: '#E9A447',
          },
          color : function (color, d) {
            if (d.index && d.index === 9) {
              if (d.id === 'data1') {
                return '#4F7320';
              } else if (d.id === 'data2') {
                return '#EEA543';
              } else {
                return color;
              }
            } else {
              return color;
            }
          },
          labels: false
      },
      bindto: '#chart',
      axis: {
          x: {
              type: 'category' // this needed to load string x value
          }
      },
      grid: {
        y: {
          lines: [{value: 0}, {value: 1400}]
        }
      },
      bar: {
          width: {
              ratio: .95 // this makes bar width 50% of length between ticks
          }
          // or
          //width: 100 // this makes bar width 100px
      }
    });
    // c3.generate({
    //   data: {
    //       columns: [
    //           ['data1', -30, 200, 200, 400, -150, 250],
    //           ['data2', 130, 100, -100, 200, -150, 50],
    //           ['data3', -230, 200, 200, -300, 250, 250]
    //       ],
    //       type: 'bar',
    //       groups: [
    //           ['data1', 'data2', 'data3']
    //       ]
    //   },
    //   grid: {
    //       y: {
    //           lines: [{value:0}]
    //       }
    //   }
    // });
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
        title="Stacked Bar"
      />
      <Divider />
      <CardContent>
        <Box
          height={400}
          position="relative"
        >
          <div id="chart" />
        </Box>
      </CardContent>
      <Divider />
      <Box
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
      </Box>
    </Card>
  );
}

StackedBar.propTypes = {
  className: PropTypes.string
};
export default StackedBar;