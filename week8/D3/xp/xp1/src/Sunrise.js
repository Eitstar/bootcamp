import React from 'react';

class Sunrise extends React.Component {
    constructor(props) {
        console.log(1)
        super(props);
        this.state = {
            country: "Israel",
            city: "Tel Aviv",
        };
    }

    componentDidMount() {
        console.log(2)
        fetch("https://api.sunrise-sunset.org/json?lat=32.0853&lng=34.7818")
            .then((resp) => resp.json()) //return a promise
            .then((resp) =>
                this.setState({ hourSunrise: resp.results.sunrise }) //add a new attribute to the state
            )
            .catch(function(error) {
                console.log(`We got the error ${error}`)
            });
    }

    render() {
        console.log(3)
        let { country, city, hourSunrise } = this.state
        return ( <
            div >
            <
            h1 > In { country } < /h1> <
            p >
            The hour of the sunrise in { city }
            is { hourSunrise } <
            /p> < /
            div >
        );
    }
}

// export default Sunrise;