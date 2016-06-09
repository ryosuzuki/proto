import React, { Component } from 'react';
import Designer from '../../src/Designer';

export default class extends Component {
  state = {
    objects: [{
      "width": 163,
      "height": 84,
      "rotate": 0,
      "strokeWidth": 0,
      "fill": "rgba(0, 123, 255, 1)",
      "radius": "0",
      "blendMode": "normal",
      "type": "rectangle",
      "x": 17,
      "y": 15
    }]
  };

  handleUpdate(objects) {
    this.setState({objects});
  }

  render() {
    return (
      <Designer
        width={650} height={400}
        objects={this.state.objects}
        onUpdate={this.handleUpdate.bind(this)}/>
    );
  }
}