import React, { Component } from 'react';

class GuestModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      rooms: props.rooms,
      adults: props.adults,
      children: props.children,
      modalOpen: false,
    };
    this.increaseRooms = this.increaseRooms.bind(this);
    this.decreaseRooms = this.decreaseRooms.bind(this);
    this.increaseAdults = this.increaseAdults.bind(this);
    this.decreaseAdults = this.decreaseAdults.bind(this);
    this.increaseChildren = this.increaseChildren.bind(this);
    this.decreaseChildren = this.decreaseChildren.bind(this);
  }

  increaseRooms() {
    this.setState({
      rooms: this.state.rooms + 1,
    });
  }

  decreaseRooms() {
    this.setState({
      rooms: this.state.rooms - 1,
    });
  }

  increaseAdults() {
    this.setState({
      adults: this.state.adults + 1,
    });
  }

  decreaseAdults() {
    this.setState({
      adults: this.state.adults - 1,
    });
  }

  increaseChildren() {
    this.setState({
      children: this.state.children + 1,
    });
  }

  decreaseChildren() {
    this.setState({
      children: this.state.children - 1,
    });
  }


  render() {
    return (
      <div>
        <div>
          <p>Rooms</p>
          <button type="button" onClick={this.decreaseRooms}>-</button>
          {this.state.rooms}
          <button type="button" onClick={this.increaseRooms}>+</button>
        </div>
        <div>
          <p>Adults</p>
          <button type="button" onClick={this.decreaseAdults}>-</button>
          {this.state.adults}
          <button type="button" onClick={this.increaseAdults}>+</button>
        </div>
        <div>
          <p>Children</p>
          <button type="button" onClick={this.decreaseChildren}>-</button>
          {this.state.children}
          <button type="button" onClick={this.increaseChildren}>+</button>
        </div>
        <div>
          <button type="button" onClick={() => this.props.handleUpdate(this.state)}>Update</button>
        </div>
      </div>
    );
  }
}

export default GuestModal;