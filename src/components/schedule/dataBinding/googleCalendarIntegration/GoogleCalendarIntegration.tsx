import "whatwg-fetch";
import React from "react";

import Scheduler, { SchedulerTypes } from "devextreme-react/scheduler";

import CustomStore from "devextreme/data/custom_store";
import { Text, Title } from "@mantine/core";

const getData = async (_: any, requestOptions: any) => {
  const GOOGLE_CALENDAR_URL =
    "https://www.googleapis.com/calendar/v3/calendars/";
  const CALENDAR_ID = "f7jnetm22dsjc3npc2lu3buvu4@group.calendar.google.com";
  const PUBLIC_KEY = "AIzaSyBnNAISIUKe6xdhq1_rjor2rxoI3UlMY7k";

  const dataUrl = [
    GOOGLE_CALENDAR_URL,
    CALENDAR_ID,
    "/events?key=",
    PUBLIC_KEY,
  ].join("");

  const response = await fetch(dataUrl, requestOptions);

  const data = await response.json();

  return data.items;
};

const dataSource = new CustomStore({
  load: (options) => getData(options, { showDeleted: false }),
});

const currentDate = new Date(2017, 4, 25);
const views: SchedulerTypes.ViewType[] = ["day", "workWeek", "month"];

const GoogleCalendarIntegration = () => (
  <React.Fragment>
    <div className="pr-10 pl-10">
      <Title size={"40px"} pb={"10px"}>
        SignalR Service
      </Title>
      <Text pb={"xs"}>
        To display appointments from Google Calendar in the Scheduler, follow
        the steps below:
      </Text>
      <ol>
        <li>
          <Text pb={"xs"}>
            <strong>Get Google API key</strong>
            <br />
            Follow the instructions from step 1 in the{" "}
            <a
              style={{ color: "#09b5e1", textDecoration: "underline" }}
              href="https://developers.google.com/calendar/api/quickstart/js"
              target="_blank"
            >
              Browser Quickstart
            </a>{" "}
            tutorial.
          </Text>
        </li>
        <li>
          <Text pb={"xs"}>
            <strong>Restrict the API key</strong>
            <br />
            Set{" "}
            <a
              style={{ color: "#09b5e1", textDecoration: "underline" }}
              href="https://developers.google.com/maps/api-security-best-practices#application-restriction"
              target="_blank"
            >
              application
            </a>{" "}
            and{" "}
            <a
              style={{ color: "#09b5e1", textDecoration: "underline" }}
              href="https://developers.google.com/maps/api-security-best-practices#api-restriction"
              target="_blank"
            >
              API restrictions
            </a>
            .
          </Text>
        </li>
        <li>
          <Text pb={"xs"}>
            <strong>Make your calendar public</strong>
            <br />
            Refer to the following help topic:{" "}
            <a
              style={{ color: "#09b5e1", textDecoration: "underline" }}
              href="https://support.google.com/calendar/answer/37083?hl=en"
              target="_blank"
            >
              Create &amp; manage a public Google calendar
            </a>
            .
          </Text>
        </li>
        <li>
          <Text pb={"xs"}>
            <strong>Get the calendar ID</strong>
            <br />
            Open Google Calendar settings, choose the calendar to be integrated,
            and copy its ID from the <strong>Integrate calendar</strong>{" "}
            section.
          </Text>
        </li>
        <li>
          <Text pb={"xs"}>
            <strong>Set up the Scheduler</strong>
            <br />
            Configure the{" "}
            <a
              style={{ color: "#09b5e1", textDecoration: "underline" }}
              href="https://js.devexpress.com/React/Documentation/ApiReference/Data_Layer/CustomStore/"
              target="_blank"
            >
              CustomStore
            </a>{" "}
            to load data from Google Calendar as shown in this demo. If a{" "}
            <a
              style={{ color: "#09b5e1", textDecoration: "underline" }}
              href="https://js.devexpress.com/React/Documentation/ApiReference/UI_Components/dxScheduler/Configuration/#timeZone"
              target="_blank"
            >
              timeZone
            </a>{" "}
            is specified in the Scheduler, ensure it is the same as in Google
            Calendar.
          </Text>
        </li>
      </ol>
      <div className="long-title">
        <h3>Tasks for Employees (USA Office)</h3>
      </div>
      <Scheduler
        dataSource={dataSource}
        views={views}
        defaultCurrentView="workWeek"
        defaultCurrentDate={currentDate}
        height={500}
        startDayHour={7}
        editing={false}
        showAllDayPanel={false}
        startDateExpr="start.dateTime"
        endDateExpr="end.dateTime"
        textExpr="summary"
        timeZone="America/Los_Angeles"
      />
    </div>
  </React.Fragment>
);

export default GoogleCalendarIntegration;
