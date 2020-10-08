import React from "react";
import { Grid, Card, CardContent, Typography } from "@material-ui/core";
import CountUp from "react-countup";
import cn from "classnames";
import styles from "./Card.module.css";

const CardComponent = ({ className, cardTitle, value, cardSubtitle }) => {
  return (
    <Grid
      item
      xs={12}
      md={4}
      lg={4}
      component={Card}
      className={cn(styles.card, className)}
      spacing={10}
    >
      <CardContent>
        <Typography color="textSecondary" gutterBottom>
          {cardTitle}
        </Typography>
        <Typography variant="h5">
          <CountUp start={0} end={value} duration={3} separator="." />
        </Typography>
        <Typography color="textSecondary">People</Typography>
        <Typography variant="body1" component="p">
          {cardSubtitle}
        </Typography>
      </CardContent>
    </Grid>
  );
};

export default CardComponent;
