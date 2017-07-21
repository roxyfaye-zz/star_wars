import React, {Component} from 'react'

class Vehicle extends Component {
render() {
    const vehicle = this.props.vehicle;
    console.log(this.props);
    return (
  <div className="col-sm-4" key={vehicle.url}>
    <div class="card">
      <div class="card-block">
        <h4 class="card-title">
          {vehicle.name}</h4>
        <h6 class="card-subtitle mb-2 text-muted">
          The Vehicles of Star Wars</h6>
      </div>
    </div>
  </div>
);
}
}

export default Vehicle;
