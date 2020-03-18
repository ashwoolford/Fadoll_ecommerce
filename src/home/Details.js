import React, { Component } from 'react'

export default class Details extends Component {

  state = {
    id: null,
  }

  componentDidMount (){

    const data = this.props.location.state.element_id
    this.setState({id: data});

    console.log(data);

  }
  render() {



    return (
      <div>
        <h1>{this.state.id}</h1>
      </div>
    )
  }
}
