import React from "react";


export default class CountryDetail extends React.Component {
  constructor(props){
    super(props);
    this.props = props;
    //this.state = {country: props.country};
    console.log(this.props.country.borders);
  }


  render(){
    return(
      <div className="col-4">
        <div>
          <p><b>Name:</b> {this.props.country.name.common}</p>
          <hr/>
          <p><b>Capital City:</b> {this.props.country.capital}</p>
          <hr/>
          <p><b>Area:</b> {this.props.country.area}</p>
          <hr/>
          <h4><b>Borders:</b></h4>
          <ul>
            {this.props.country.borders.map((e)=>(<li>{e}</li>))}
          </ul>
          
          
        </div>
      </div>
    )
  }
  
}
//{this.setState({country: this.props.match.params.id})}