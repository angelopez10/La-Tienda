import React, { Component } from 'react';
import Anime from 'react-anime';

class ShesIntoYou extends Component {
  constructor(props) {
    super(props);

    this.state = {
      mounted: false,
    };
  }

  dismount = () => 
    this.setState(({ mounted }) => ({ mounted: !mounted }));

  render() {
    let { mounted } = this.state;

    let animeProps = {
      opacity: [0, 1],
      translateY: [-64, 0],
      delay: (el, i) => i * 200
    };

    return (
      <Anime {...animeProps}>
        {mounted ? <h1 onClick={this.dismount}>Heyyyyyyyy</h1> : null}
      </Anime>
    );
  }
}


export default ShesIntoYou;