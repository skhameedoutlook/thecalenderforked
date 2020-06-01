import React from "react";

function Events(props) {
  function handleClick() {
    props.onDelete(props.id);
  }

  return (
    <div className="form">
      <h1> Event Details </h1>
      <form>
        <input type="text" name="title" placeholder="Event Name">
          Event Name
        </input>
        <input type="textarea" placeholder="Description">
          Description
        </input>

        <input type="datetime-local">Event Start(date and time):</input>
        <input type="datetime-local">Event End (date and time):</input>
      </form>
    </div>
  );
}

export default Events;
