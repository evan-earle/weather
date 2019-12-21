import React from "react";
import Spinner from "./Spinner";
import Weather from "./Weather";

class App extends React.Component {
  state = {
    lat: null,
    lon: null,
    errorMessage: "",
    city: undefined,
    temperature: undefined,
    humidity: undefined,
    description: undefined,
    condition: undefined
  };

  componentDidMount() {
    window.navigator.geolocation.getCurrentPosition(
      position => {
        this.setState({
          lat: position.coords.latitude,
          lon: position.coords.longitude
        });
      },
      err => this.setState({ errorMessage: err.message })
    );
  }

  componentDidUpdate = async e => {
    const KEY = "bb8e6e0b5b2c5fe4f165e455e9e53400";
    const apiCall = await fetch(
      `http://api.openweathermap.org/data/2.5/weather?lat=${this.state.lat}&lon=${this.state.lon}&appid=${KEY}&units=metric`
    );
    const data = await apiCall.json();
    console.log(data);

    if (this.state.city === undefined && !this.state.errorMessage) {
      this.setState({
        city: data.name,
        temperature: data.main.temp,
        high: data.main.temp_max,
        low: data.main.temp_min,
        feels: data.main.feels_like,
        description: data.weather[0].description,
        condition: data.weather[0].main
      });
    }
  };

  renderContent() {
    if (this.state.errorMessage && !this.state.lat && !this.state.lon) {
      return <div>Error: {this.state.errorMessage}</div>;
    }

    if (!this.state.errorMessage && this.state.lat && this.state.lon) {
      return (
        <div>
          <Weather
            city={this.state.city}
            temperature={this.state.temperature}
            high={this.state.high}
            low={this.state.low}
            feels={this.state.feels}
            description={this.state.description}
            condition={this.state.condition}
          />
        </div>
      );
    }

    return (
      <div>
        <Spinner message="Please accept location request" />
      </div>
    );
  }

  render() {
    return <div>{this.renderContent()}</div>;
  }
}

export default App;
