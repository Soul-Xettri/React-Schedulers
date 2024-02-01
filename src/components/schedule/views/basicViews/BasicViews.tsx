import Scheduler, { SchedulerTypes } from "devextreme-react/scheduler";

import { data } from "./data.ts";
import { Text, Title } from "@mantine/core";

const currentDate = new Date(2021, 3, 29);
const views: SchedulerTypes.ViewType[] = ["day", "week", "workWeek", "month"];

const BasicViews = () => (
  <div className="pr-10 pl-10">
    <Title size={"40px"} pb={"10px"}>
      Basic Views
    </Title>
    <Text pb={"xs"}>
      This example demonstrates four Scheduler views: Day, Week, Work Week, and
      Month. You can use the View Switcher above the timetable to switch between
      them.
    </Text>
    <Text pb={"xs"}>
      To add these views to your Scheduler, list them in the{" "}
      <a
        style={{ color: "#09b5e1", textDecoration: "underline" }}
        href="https://js.devexpress.com/React/Documentation/ApiReference/UI_Components/dxScheduler/Configuration/views/"
        target="_blank"
      >
        views
      </a>{" "}
      array. If you do not declare this array, users can switch only between the
      Day and Week views. To activate a specific view at application startup,
      use the{" "}
      <a
        style={{ color: "#09b5e1", textDecoration: "underline" }}
        href="https://js.devexpress.com/React/Documentation/ApiReference/UI_Components/dxScheduler/Configuration/#currentView"
        target="_blank"
      >
        currentView
      </a>{" "}
      property.
    </Text>
    <Text pb={"xs"}>
      For more information about supported view types, refer to the following
      help topic:{" "}
      <a
        style={{ color: "#09b5e1", textDecoration: "underline" }}
        href="https://js.devexpress.com/React/Documentation/Guide/UI_Components/Scheduler/Views/View_Types/"
        target="_blank"
      >
        View Types
      </a>
      .
    </Text>

    <Scheduler
      timeZone="America/Los_Angeles"
      dataSource={data}
      views={views}
      defaultCurrentView="day"
      defaultCurrentDate={currentDate}
      height={730}
      startDayHour={9}
    />
  </div>
);

export default BasicViews;
