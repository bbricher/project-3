import React, { Component } from "react";
import AvailableTimes from "react-available-times";
import axios from "axios";

class Weekly extends Component {
  render() {
    const renderEvents = () => {
      let userId = localStorage.getItem(('userId').value);
      axios({
          url:`/${userId}/events`,
          method: "GET",
      })
      .then(response => {
          console.log(response);
      })
    }
    
    return (
      <div className="container">
      <AvailableTimes
        weekStartsOn="monday"
        calendars={[
          {
            id: "work",
            title: "Work",
            foregroundColor: "#ff00ff",
            backgroundColor: "#f0f0f0",
            selected: true
          }
        ]}
        // onChange={selections => {
        //   // selections.forEach(({ start, end }) => {
        //   // console.log('Start:', start, 'End:', end);
        //   // })
        //   prompt("Are you adding a new class?", "Yes")
        //   console.log("on change", selections);
        // }}
        onEventsRequested={({ calendarId, start, end, callback }) => {
            // console.log(calendarId, start, end)
        //   briesApiCall(calendarId, start, end).then(callback);
          renderEvents();
          callback([
            {
              calendarId: "work",
              allDay: true,
              start: new Date(2019, 10, 13, 1, 1, 1, 1),
              end: new Date(2019, 10, 16, 1, 1, 1, 1),
              title: "Something cool"
            }
          ]);
          // console.log(calendarId,start, end)
        }}
        // initialSelections={[
        //     { start: aDateObject, end: anotherDateObject }
        // ]}
        // height={400}
        // recurring={true}
        availableDays={['monday', 'tuesday', 'wednesday', 'thursday', 'friday']}
        availableHourRange={{ start: 7, end: 16 }}
      />
      </div>
    );
  }
}

export default Weekly;
