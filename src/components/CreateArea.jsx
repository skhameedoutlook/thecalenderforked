import React, { useState } from "react";
import DateRangeIcon from "@material-ui/icons/DateRange";
import EventAvailableIcon from "@material-ui/icons/EventAvailable";
import EventNoteIcon from "@material-ui/icons/EventNote";
import TodayIcon from "@material-ui/icons/Today";

import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";

import Calendar from "./Calendar";
import CalendarWeek from "./CalendarWeek";

// // This function will render the whole calendar again.
// function RenderApp() {
//   return <Calendar />;
// }

function CreateArea() {
  const [isExpanded, setExpanded] = useState(false);

  // This will render the week
  function RenderWeek(event) {
    return <CalendarWeek />;
    // console.log("Week function");
  }

  function expand() {
    setExpanded(!isExpanded);
  }

  const useStyles = makeStyles(theme => ({
    root: {
      flexGrow: 1
    },
    button: {
      margin: theme.spacing(1)
    }
  }));

  const classes = useStyles();
  return (
    <div>
      <form>
        <Button
          variant="contained"
          color="secondary"
          className={classes.button}
          startIcon={<DateRangeIcon />}
          onClick={expand}
        />
      </form>
      {isExpanded && (
        <div className={classes.root}>
          <Grid
            container
            spacing={3}
            direction="row"
            justify="space-evenly"
            alignItems="baseline"
          >
            <Grid item xs={3}>
              <Button
                variant="contained"
                color="secondary"
                className={classes.button}
                startIcon={<DateRangeIcon />}
                // onClick={RenderApp}
              >
                Month
              </Button>
            </Grid>

            <Grid item xs={3}>
              <Button
                variant="contained"
                color="secondary"
                className={classes.button}
                startIcon={<EventNoteIcon />}
                onClick={RenderWeek}
              >
                Week
              </Button>
            </Grid>
            <Grid item xs={3}>
              <Button
                variant="contained"
                color="secondary"
                className={classes.button}
                startIcon={<TodayIcon />}
              >
                Day
              </Button>
            </Grid>
            <Grid item xs={3}>
              <Button
                variant="contained"
                color="secondary"
                className={classes.button}
                startIcon={<EventAvailableIcon />}
              >
                Events
              </Button>
            </Grid>
          </Grid>
        </div>
      )}
    </div>
  );
}

export default CreateArea;
