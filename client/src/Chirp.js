import React, { Component } from 'react';
import './App.css';

class Chirp extends Component {

    constructor(props) {
      super(props);
      this.state = {
        items: [],
        isLoaded: false,
      }
    }
   
    componentDidMount() {
      fetch('/api/items')
        .then(res => res.json())
        .then(json => {
          this.setState({
            isLoaded: true,
            items: json,
          })
        })
    }
   
    render() {
   
      var { isLoaded, items } = this.state;
   
      if (!isLoaded) {
        return <div>Loading...</div>;
      }
      else {
        return (
   
          <div>
            {items.map(items => (
                <div className="chirp" key={items.id}>
                <p>{items.email}</p>
                </div>
            ))}
          </div>
   
        )
      }
    }
   }

export default Chirp;
