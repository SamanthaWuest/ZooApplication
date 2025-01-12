import React, { useEffect, useState } from "react";
import {
  DayPilot,
  DayPilotCalendar,
  DayPilotMonth,
  DayPilotNavigator,
} from "@daypilot/daypilot-lite-react";
import { postEvent } from "../services/postEvent";
import "./Calendar.css";

const Calendar = () => {
  const [view, setView] = useState("Week");
  const [startDate, setStartDate] = useState(DayPilot.Date.today());
  const [events, setEvents] = useState([]);

  const [dayView, setDayView] = useState();
  const [weekView, setWeekView] = useState();
  const [monthView, setMonthView] = useState();

  const config = {
    workingTime: {
      start: "09:00",
      end: "17:00",
      days: [1, 2, 3, 4, 5, 6, 7],
    },
  };

  const onTimeRangeSelected = async (args) => {
    const dp = args.control;
    const selectedStart = args.start;
    const selectedEnd = args.end;

    const workingTimeStart = new Date(selectedStart);
    const workingTimeEnd = new Date(selectedEnd);
    const allowedStartHour = 9; // 9:00 Uhr
    const allowedEndHour = 17; // 17:00 Uhr

    if (
      workingTimeStart.getHours() < allowedStartHour ||
      workingTimeEnd.getHours() > allowedEndHour
    ) {
      alert("Die Buchung muss zwischen 9:00 Uhr und 17:00 Uhr liegen.");
      return;
    }
    const modal = await DayPilot.Modal.prompt(
      "Erstelle eine neue Reservation:",
      "Audioguides"
    );
    dp.clearSelection();
    if (modal.canceled) {
      return;
    }

    const newEvent = {
      start: args.start,
      end: args.end,
      text: modal.result,
    };

    console.log("Event created:", newEvent);

    // Send the new event to the backend
    await postEvent(newEvent);

    setEvents([...events, newEvent]);
  };

  useEffect(() => {
    const data = [
      {
        id: 1,
        text: "Audioguides",
        start: DayPilot.Date.today().addHours(10),
        end: DayPilot.Date.today().addHours(12),
        backColor: "#93c47d",
        borderColor: "darker",
      },
      {
        id: 3,
        text: "Event 3",
        start: DayPilot.Date.today().addDays(1).addHours(9),
        end: DayPilot.Date.today().addDays(1).addHours(11),
        backColor: "#ffd966", // Yellow background
        borderColor: "darker",
      },
      {
        id: 4,
        text: "Event 4",
        start: DayPilot.Date.today().addDays(1).addHours(11).addMinutes(30),
        end: DayPilot.Date.today().addDays(1).addHours(13).addMinutes(30),
        backColor: "#f6b26b", // Orange background
        borderColor: "darker",
      },
      {
        id: 7,
        text: "Event 7",
        start: DayPilot.Date.today().addDays(1).addHours(14),
        end: DayPilot.Date.today().addDays(1).addHours(16),
        backColor: "#e691b8", // Pink background
        borderColor: "darker",
      },
      {
        id: 5,
        text: "Event 5",
        start: DayPilot.Date.today().addDays(4).addHours(9),
        end: DayPilot.Date.today().addDays(4).addHours(11),
        backColor: "#8e7cc3", // Purple background
        borderColor: "darker",
      },
      {
        id: 6,
        text: "Event 6",
        start: DayPilot.Date.today().addDays(4).addHours(13),
        end: DayPilot.Date.today().addDays(4).addHours(15),
        backColor: "#6fa8dc", // Light Blue background
        borderColor: "darker",
      },

      {
        id: 8,
        text: "Event 8",
        start: DayPilot.Date.today().addDays(5).addHours(13),
        end: DayPilot.Date.today().addDays(5).addHours(15),
        backColor: "#b6d7a8", // Light Green background
        borderColor: "darker",
      },
    ];
    setEvents(data);
  }, []);

  const handleInputChangeEvent = (event) => {
    setEvents(event.target.value);
  };

  return (
    <div className={"container"}>
      <div className={"navigator"}>
        <DayPilotNavigator
          locale="de-ch"
          weekStarts={1}
          selectMode={view}
          showMonths={3}
          skipMonths={3}
          onTimeRangeSelected={(args) => setStartDate(args.day)}
          events={events}
        />
      </div>
      <div className={"content"}>
        <div className={"toolbar"}>
          <div className={"toolbar-group"}>
            <button
              onClick={() => setView("Day")}
              className={view === "Day" ? "selected" : ""}
            >
              Day
            </button>
            <button
              onClick={() => setView("Week")}
              className={view === "Week" ? "selected" : ""}
            >
              Week
            </button>
            <button
              onClick={() => setView("Month")}
              className={view === "Month" ? "selected" : ""}
            >
              Month
            </button>
          </div>
          <button
            onClick={() => setStartDate(DayPilot.Date.today())}
            className={"standalone"}
          >
            Today
          </button>
        </div>

        <DayPilotCalendar
          viewType={"Day"}
          startDate={startDate}
          events={events}
          visible={view === "Day"}
          durationBarVisible={false}
          onTimeRangeSelected={onTimeRangeSelected}
          locale="de-ch"
          controlRef={setDayView}
        />

        <DayPilotCalendar
          viewType={"Week"}
          startDate={startDate}
          events={events}
          visible={view === "Week"}
          durationBarVisible={false}
          onTimeRangeSelected={onTimeRangeSelected}
          locale="de-ch"
          weekStarts={1}
          controlRef={setWeekView}
        />

        <DayPilotMonth
          viewType={"Month"}
          startDate={startDate}
          events={events}
          visible={view === "Month"}
          eventBarVisible={false}
          onTimeRangeSelected={onTimeRangeSelected}
          locale="de-ch"
          weekStarts={1}
          controlRef={setMonthView}
        />
      </div>
    </div>
  );
};
export default Calendar;
