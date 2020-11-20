import React from "react";
import styles from "./Cards.module.css";
import { Grid } from "@material-ui/core";
import CardComponent from "./Card/Card";

const Cards = ({ data: { confirmed, recovered, deaths } }) => {
  if (!confirmed) {
    return "Loading...";
  }

  return (
    <div className={styles.container}>
      <Grid container spacing={3} justify="center">
        <CardComponent
          className={styles.confirmed}
          cardTitle="Confirmed"
          value={confirmed.value}
          cardSubtitle="Number of active cases from COVID-19."
        />
        <CardComponent
          className={styles.recovered}
          cardTitle="Recovered"
          value={recovered.value}
          cardSubtitle="Number of recoveries from COVID-19."
        />
        <CardComponent
          className={styles.deaths}
          cardTitle="Death"
          value={deaths.value}
          cardSubtitle="Number of deaths caused by COVID-19."
        />
      </Grid>
    </div>
  );
};

export default Cards;
