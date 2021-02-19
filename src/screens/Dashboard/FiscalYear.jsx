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
  Typography,
  Grid
} from '@material-ui/core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretUp, faCaretDown } from '@fortawesome/free-solid-svg-icons'
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import ArrowRightIcon from '@material-ui/icons/ArrowRight';

const useStyles = makeStyles(() => ({
  root: {},
  fiscal_right: {
    alignItems: 'right'
  },
}));
const CaretUp = <FontAwesomeIcon icon={faCaretUp} color="#44E544"/>
const CaretDown = <FontAwesomeIcon icon={faCaretDown} color="#f04141"/>

const FiscalYear = ({ className, ...rest }) => {
  const classes = useStyles();
  const theme = useTheme();

  useEffect(() => {

  }, []);
  
  return (
    <Card
      className={clsx(classes.root, className)}
      {...rest}
    >
      <CardHeader title="Fiscal Year" />
      <Divider />
      <CardContent>
        <Grid container spacing={9} >
          <Grid container item lg={3} md={3} xl={3} xs={12} justify="flex-start">
              <Box mb={3}>
                <Typography  color="textPrimary" variant="h2" >
                  Cumulative return
                </Typography>
                <Typography color="textSecondary" gutterBottom variant="body2" >
                  Target cumulative return
                </Typography>
              </Box>
          </Grid>
          <Grid container item lg={3} md={3} xl={3} xs={12} justify='flex-end'>
              <Box mb={3}>
                <Typography
                  color="textPrimary"
                  variant="h2">
                  {CaretUp}  2.25%
                </Typography>
                <Typography
                  color="textSecondary"
                  gutterBottom
                  variant="body2">
                  4.00%
                </Typography>
              </Box>
          </Grid>

          <Grid container item lg={3} md={3} xl={3} xs={12} justify="flex-start">
              <Box mb={3}>
                <Typography
                  color="textPrimary"
                  variant="h2"
                >
                  Required return
                </Typography>
                <Typography
                  color="textSecondary"
                  gutterBottom
                  variant="body2"
                >
                  Previous period
                </Typography>
              </Box>
          </Grid>
          <Grid container item lg={3} md={3} xl={3} xs={12} justify='flex-end'>
              <Box mb={3}>
                <Typography
                  color="textPrimary"
                  variant="h2">
                  {CaretDown} 2.25%
                </Typography>
                <Typography
                  color="textSecondary"
                  gutterBottom
                  variant="body2">
                  4.00%
                </Typography>
              </Box>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
}

FiscalYear.propTypes = {
  className: PropTypes.string
};
export default FiscalYear;