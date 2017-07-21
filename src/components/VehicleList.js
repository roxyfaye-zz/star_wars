import React, { Component } from 'react'
import Vehicle from './Vehicles'

class VehicleList extends Component {
  constructor(props) {
    super(props)
    this.state = {
      vehicles: []
    }
  }

  async componentDidMount() {
     const vehicleData = await fetch(' https://swapi.co/api/vehicles/')
       .then(data => data.json())
       .catch(err => console.log(err))
       console.log('data from vehicle', vehicleData);
       const vehicles = vehicleData.results.map(items => {
         return items
       })
       console.log(vehicles);

       this.setState({vehicles})
  }
  render() {
     return (
       <section>
         {this.state.vehicles && this.state.vehicles.map(vehicle => {
           return <Vehicle vehicle={vehicle}/>
         })}
       </section>
      );
  }

}


export default VehicleList;
