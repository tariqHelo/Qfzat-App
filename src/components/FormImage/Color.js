import React from "react";
import reactCSS from "reactcss";

import { SketchPicker } from "react-color";

class Color extends React.Component {
  state = {
    displayColorPicker: false,
    color: {
      r: "250",
      g: "0",
      b: "0",
      a: "1",
    },
  };

  // changePerantState = (_) => {
  //   this.props.changeColor(this.state.color);
  // };

  handleClick = () => {
    this.setState({ displayColorPicker: !this.state.displayColorPicker });
  };

  handleClose = () => {
    this.setState({ displayColorPicker: false });
  };

  handleChange = (color) => {
    this.props.changeColor(color.hex);
    this.setState({ color: color.rgb });
  };

  render() {
    const styles = reactCSS({
      default: {
        color: {
          width: "450px",
          height: "30px",
          borderRadius: "2px",
          background: `rgba(${this.state.color.r}, ${this.state.color.g}, ${this.state.color.b}, ${this.state.color.a})`,
        },
        swatch: {
          padding: "5px",
          background: "#fff",
          borderRadius: "1px",
          boxShadow: "0 0 0 1px rgba(0,0,0,.1)",
          display: "inline-block",
          cursor: "pointer",
        },
        popover: {
          position: "absolute",
          zIndex: "2",
        },
        cover: {
          position: "fixed",
          top: "0px",
          right: "0px",
          bottom: "0px",
          left: "0px",
        },
      },
    });
    // =........> Change Perant Color

    // this.props.changeColor = () => {
    //   this.props.changeColor(this.state.color);

    // };

    return (
      <div>
        {/* <button onClick={this.changePerantState}>ChangeColor</button> */}
        <div style={styles.swatch} onClick={this.handleClick}>
          <div style={styles.color} />
        </div>
        {this.state.displayColorPicker ? (
          <div style={styles.popover}>
            <div style={styles.cover} onClick={this.handleClose} />
            <SketchPicker
              onChange={this.handleChange}
              color={this.state.color}
            />
          </div>
        ) : null}
      </div>
    );
  }
}
export default Color;
