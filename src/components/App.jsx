import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";
import Calendar from "./Calendar";
import CalendarWeek from "./CalendarWeek";
import Cell from "./Cell";

function App() {
  return (
    <div>
      <Header />
      <CreateArea />
      <Calendar />
      <Footer />
    </div>
  );
}

export default App;
