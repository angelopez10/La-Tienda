import React, { Component } from 'react';


class CascadingList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      list: ['iPhone', 'Google Pixel', 'Xbox One'],
    };
  }

  render() {
    let { list } = this.state;

    let animeProps = {
      opacity: [0, 1],
      translateY: [-64, 0],
      delay: (el, i) => i * 200
    };

    return (
      <div></div>
    );
  }
}

export default CascadingList;