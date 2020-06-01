import React, { useState } from "react";
import {
  format,
  startOfWeek,
  endOfWeek,
  startOfMonth,
  endOfMonth
} from "date-fns";
import {
  isSameDay,
  isSameMonth,
  addMonths,
  subMonths,
  parse,
  addDays,
  toDate
} from "date-fns";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";

class Cell extends React.Component {
  constructor(props) {
    super(props);
    this.state = props;
    // console.log(props);
  }

  // handleClick(i) {
  //   this.state.handleClick(this.state.selectedState);
  // }

  render() {
    return (
      <div
        className={this.state.className}
        onClick={() => this.state.onClick(this.state.day)}
      >
        <span className="number">{this.state.formattedDate}</span>
        <span className="bg">{this.state.formattedDate}</span>
      </div>
    );
  }
}

export default Cell;
