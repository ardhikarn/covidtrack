import React from "react";
import axios from "axios";
import imageHeader from "../../images/covidweb.png";
import styles from "./Home.module.css";
import Typography from "@material-ui/core/Typography";
import { Cards, OptionCountry, Chart } from "../../components";

class Home extends React.Component {
  state = {
    country: "",
    data: {},
  };

  componentDidMount() {
    this.getData();
    console.log(this.state.data);
  }

  getData = (country) => {
    let setUrl = "https://covid.mathdro.id/api";
    setUrl = country ? `${setUrl}/countries/${country}` : setUrl;
    axios
      .get(setUrl)
      .then((response) => {
        this.setState({
          data: response.data,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  handleChange = (event) => {
    this.setState({
      country: event.target.value,
    });
  };

  handleCountryChange = (event) => {
    let country = event.target.value;
    this.getData(country);
    const setCountry = country ? country : "Global";
    this.props.history.push({
      search: "?country=" + setCountry,
    });
  };

  render() {
    const { data, country } = this.state;
    const lastUpdate = new Date(data.lastUpdate).toDateString();
    return (
      <div className={styles.container}>
        <img className={styles.image} src={imageHeader} alt="covid-19" />
        <Typography variant="subtitle2" gutterBottom color="textSecondary">
          Last Updated : {lastUpdate}
        </Typography>
        <OptionCountry handleCountryChange={this.handleCountryChange} />
        <Cards data={data} />
        <Chart data={data} country={country} />
      </div>
    );
  }
}

export default Home;
