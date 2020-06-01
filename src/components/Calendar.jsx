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
import Cell from "./Cell";

function Calendar() {
  const [state, setState] = useState({
    currentMonth: new Date(),
    selectedDate: new Date()
  });

  function renderHeader() {
    const dateFormat = "MMMM yyyy";

    return (
      <div className="header_class row flex-middle">
        <div className="col col-start">
          <div className="icon" onClick={prevMonth}>
            <ArrowBackIosIcon />
          </div>
        </div>

        <div className="col col-center">
          <span>{format(state.currentMonth, dateFormat)}</span>
        </div>

        <div className="col col-end">
          <div className="icon" onClick={nextMonth}>
            <ArrowForwardIosIcon />
          </div>
        </div>
      </div>
    );
  }

  function renderDays() {
    const dateFormat = "eee";
    const days = [];

    let startDate = startOfWeek(state.currentMonth);
    for (let i = 0; i < 7; i++) {
      days.push(
        <div className="col col-center" key={i}>
          {format(addDays(startDate, i), dateFormat)}
        </div>
      );
    }
    return <div className="days row"> {days} </div>;
  }

  function renderCells() {
    const { currentMonth, selectedDate } = state;
    const monthStart = startOfMonth(currentMonth);
    const monthEnd = endOfMonth(monthStart);
    const startDate = startOfWeek(monthStart);
    const endDate = endOfWeek(monthEnd);

    const dateFormat = "d";
    const rows = [];

    let days = [];
    let day = startDate;
    let formattedDate = "";
    console.log(day);
    while (day <= endDate) {
      for (let i = 0; i < 7; i++) {
        formattedDate = format(day, dateFormat);
        days.push(
          <Cell
            day={day}
            monthStart={monthStart}
            selectedDate={selectedDate}
            formattedDate={formattedDate}
            key={day}
            className={`col cell ${
              !isSameMonth(day, monthStart)
                ? "disabled"
                : isSameDay(day, selectedDate)
                ? "selected"
                : ""
            }`}
            onClick={onDateClick}
          />
          // <div
          // className={`col cell ${
          //   !isSameMonth(day, monthStart)
          //     ? "disabled"
          //     : isSameDay(day, selectedDate)
          //     ? "selected"
          //     : ""
          // }`}
          //   key={day}
          //   id={day}
          //   onClick={() => onDateClick(selectedDate)}
          // >
          //   <span className="number">{formattedDate}</span>
          //   <span className="bg">{formattedDate}</span>
          // </div>
        );
        day = addDays(day, 1);
      }
      rows.push(
        <div className="row" key={day}>
          {days}
        </div>
      );
      days = [];
    }
    return <div className="body_class">{rows}</div>;
  }

  function nextMonth() {
    setState({
      currentMonth: addMonths(state.currentMonth, 1)
    });
  }

  function prevMonth() {
    setState({
      currentMonth: subMonths(state.currentMonth, 1)
    });
  }

  function onDateClick(temp) {
    alert("test: " + temp);
  }

  return (
    <div className="calendar">
      {renderHeader()}
      {renderDays()}
      {renderCells()}
    </div>
  );
}

export default Calendar;
