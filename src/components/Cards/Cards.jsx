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
      <Grid container spacing={7}>
        <CardComponent
          className={styles.confirmed}
          cardTitle="Confirmed"
          value={confirmed.value}
          cardSubtitle="Confirmed People Covid"
        />
        <CardComponent
          className={styles.recovered}
          cardTitle="Recovered"
          value={recovered.value}
          cardSubtitle="Recovered People Covid"
        />
        <CardComponent
          className={styles.deaths}
          cardTitle="Death"
          value={deaths.value}
          cardSubtitle="Death People Covid"
        />
      </Grid>
    </div>
  );
};

export default Cards;
