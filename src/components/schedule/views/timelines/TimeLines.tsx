import Scheduler, {
  Resource,
  SchedulerTypes,
} from "devextreme-react/scheduler";

import { data, resourcesData, priorityData } from "./data.ts";
import { Text, Title } from "@mantine/core";

const currentDate = new Date(2021, 1, 2);
const views: SchedulerTypes.ViewType[] = [
  "timelineDay",
  "timelineWeek",
  "timelineWorkWeek",
  "timelineMonth",
];
const groups = ["priority"];

const TimeLines = () => (
  <div className="pr-10 pl-10">
    <Title size={"40px"} pb={"10px"}>
      TimeLines
    </Title>
    <Text pb={"xs"}>
      Timeline views display appointments as a sequence of events on a
      horizontal timeline, as opposed to basic views that display appointments
      in a calendar format. You can use the View Switcher above the timetable to
      switch between the views.
    </Text>
    <Text pb={"xs"}>
      List timeline views in the{" "}
      <a
        style={{ color: "#09b5e1", textDecoration: "underline" }}
        href="https://js.devexpress.com/React/Documentation/ApiReference/UI_Components/dxScheduler/Configuration/views/"
        target="_blank"
      >
        views
      </a>{" "}
      array to add them to your Scheduler. To activate a specific view at
      application startup, use the{" "}
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
      For information about all supported view types, refer to the following
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
    <Text pb={"xs"}>
      This demo shows multiple calendars side-by-side (with data grouped by
      resources). For information on how to configure such a display, see the
      following demos:
    </Text>
    <ul>
      <li>
        {" "}
        <a
          style={{ color: "#09b5e1", textDecoration: "underline" }}
          href="/Demos/WidgetsGallery/Demo/Scheduler/Resources/"
        >
          Resources
        </a>
      </li>
      <li>
        {" "}
        <a
          style={{ color: "#09b5e1", textDecoration: "underline" }}
          href="/Demos/WidgetsGallery/Demo/Scheduler/GroupOrientation/"
        >
          Group Orientation
        </a>
      </li>
    </ul>

    <Scheduler
      timeZone="America/Los_Angeles"
      dataSource={data}
      views={views}
      defaultCurrentView="timelineMonth"
      defaultCurrentDate={currentDate}
      height={580}
      groups={groups}
      cellDuration={60}
      firstDayOfWeek={0}
      startDayHour={8}
      endDayHour={20}
    >
      <Resource
        fieldExpr="ownerId"
        allowMultiple={true}
        dataSource={resourcesData}
        label="Owner"
        useColorAsDefault={true}
      />
      <Resource
        fieldExpr="priority"
        allowMultiple={false}
        dataSource={priorityData}
        label="Priority"
      />
    </Scheduler>
  </div>
);

export default TimeLines;
