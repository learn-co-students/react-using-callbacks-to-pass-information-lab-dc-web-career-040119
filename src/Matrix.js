import React, { Component } from 'react';
import chromeBoi from './data.js'
import Cell from './Cell.js'
import ColorSelector from './ColorSelector.js'

export default class Matrix extends Component {

  constructor() {
    super()
    this.state = {
      colorPicked : ""
    }
  }


  handleClicked = (event) => {
    this.setState({
      colorPicked: event.target.style.backgroundColor
    })
  }

  handleCellPaint = (event) => {
    event.target.style.backgroundColor = this.state.colorPicked
  }

  genRow = (vals) => (
    vals.map((val, idx) => <Cell key={idx} color={val} handleChangeColor={this.handleCellPaint}/>)
  )

  genMatrix = () => (
    this.props.values.map((rowVals, idx) => <div key={idx} className="row">{this.genRow(rowVals)}</div>)
  )


  render() {
    return (
      <div id="app">
        <ColorSelector  handleSelectedColor = {this.handleClicked}/>
        <div id="matrix">
          {this.genMatrix()}
        </div>
      </div>
    )
  }

}

Matrix.defaultProps = {
  values: chromeBoi
}
