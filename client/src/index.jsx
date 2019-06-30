import React from 'react';
import ReactDOM from 'react-dom';
import yelp from '../../yelp.js';
import Restaurant from './components/restaurant.jsx';
import googleKey from '../../google.js';

const clientID = yelp.clientID;
const apiKey  = yelp.apiKey;

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      restaurants: []
    }
    this.getLocation = this.getLocation.bind(this);
    this.useLocation = this.useLocation.bind(this);
  }

  useLocation() {
    var address = document.getElementById('location-input').value;
    var addressArray = address.split(' ');
    var addressStr = '';
    for (var i = 0; i < addressArray.length - 1; i++) {
      addressStr = addressStr + addressArray[i] + "+";
    }
    addressStr = addressStr + addressArray[addressArray.length - 1];
    console.log(addressStr);
    var googleUrl = `https://maps.googleapis.com/maps/api/geocode/json?address=${addressStr}&key=${googleKey}`;
    fetch (googleUrl)
    .then(location => location.json())
    .then(results => {
      var latitude =  results.results[0].geometry.location.lat;
      var longitude = results.results[0].geometry.location.lng;
      var url = `https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=ramen&sort_by=distance&latitude=${latitude}&longitude=${longitude}`;
      fetch(url, {
        headers: {
        'Authorization': `Bearer ${apiKey}`
        }
      })
    .then(results => results.json())
    .then(restaurants => this.setState({restaurants: restaurants.businesses}))
    .catch(() => console.log("something is wrong here"));
    });
  }

  getLocation() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        var latitude = position.coords.latitude;
        var longitude = position.coords.longitude;
        console.log(latitude, longitude);
        var url = `https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=ramen&sort_by=distance&latitude=${latitude}&longitude=${longitude}`;
        fetch(url, {
          headers: {
            'Authorization': `Bearer ${apiKey}`
          }
        })
        .then(results => results.json())
        .then(restaurants => this.setState({restaurants: restaurants.businesses}))
        .catch(() => console.log("Can’t access " + url + " response. Blocked by browser?"));
      });
    } else {
      document.getElementById('error-get-location').innerHTML('Geolocation is not supported by this browser');
    }

  }

  render() {
    return (
      <div>
        <h1>Ramen Spot</h1>
        <div id='location-input-div'>
        <button onClick={this.getLocation}>Use Current Location!</button>
        <div id="error-get-location"></div>
        <br></br>
        <div id="or">OR</div>
        <br></br>
        <input type="text" placeholder="Enter Your Location!" id="location-input" size="50"></input>
        <button onClick={this.useLocation}>Get Some Ramen!</button> 
        </div>
        <div id="ramen-table">
        <table id="restaurants">
          <tr>
            <th>Name</th>
            <th>Address</th>
            <th>Phone</th>
            <th>Price</th>
            <th>Rating</th>
            <th>Review Count</th>
            <th>Open Now?</th>
          </tr>
          {this.state.restaurants.map(restaurant => <Restaurant count={restaurant.review_count} price={restaurant.price} rating={restaurant.rating} address={restaurant.location.display_address} name={restaurant.name} phone={restaurant.display_phone} photo={restaurant.image_url} closed={restaurant.is_closed}/>)}
        </table>
        </div>
      </div>
    )
  }
}

ReactDOM.render(<App />,  document.getElementById('root'));