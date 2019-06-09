import React, { Component } from 'react';

export default class ColorSelector extends Component {

  makeColorSwatches = () => (
    ["#F00", "#F80", "#FF0", "#0F0", "#00F", "#508", "#90D", "#FFF", "#000"].map((str, idx) => {
      return <div key={idx} className="color-swatch"  style={{backgroundColor: str}}/>
    })
  )

  render() {
    // console.log(this.props.handleSelectedColor)
    return (
      <div id="colorSelector" onClick={this.props.handleSelectedColor}>
        {this.makeColorSwatches()}
      </div>
    )
  }

}
