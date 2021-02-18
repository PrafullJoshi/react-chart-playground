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
  root: {}
}));

const Line = ({ className, ...rest }) => {
  const classes = useStyles();
  const theme = useTheme();

  useEffect(() => {
    generateChart();
  }, []);

  const generateChart = () => {
    c3.generate({
      bindto: "#chart",
      data: {
        columns: [
          ["data1", 30, 200, 100, 400, 150, 250],
          ["data2", 50, 20, 10, 40, 15, 25],
        ],
        type: "line",
      },
    });
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

Line.propTypes = {
  className: PropTypes.string
};
export default Line;