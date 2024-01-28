import Scheduler, {
  Resource,
  SchedulerTypes,
} from "devextreme-react/cjs/scheduler";
import { data, employees } from "./data.ts";
import ResourceCell from "./ResourceCell.tsx";
import DataCell from "./DataCell.tsx";
import { Text, Title } from "@mantine/core";

const currentDate = new Date();
const groups = ["employeeID"];
const views: SchedulerTypes.ViewType[] = [
  "agenda",
  "day",
  "month",
  "timelineDay",
  "timelineMonth",
  "timelineWeek",
  "timelineWorkWeek",
  "week",
  "workWeek",
];

export default function Overview() {
  return (
    <div className="pr-10 pl-10">
      <Title size={"40px"} pb={"10px"}>
        Overview
      </Title>
          <Text pb={"xs"}>
            DevExtreme React Scheduler is a UI component for scheduling. It
            implements all the features necessary for its purpose: flexible data
            binding, easy appointment editing, multiple calendar views, time
            zones support, and more.{" "}
            <a style={{ color: "#09b5e1", textDecoration: "underline"}} 
              href="https://js.devexpress.com/React/Documentation/Guide/React_Components/DevExtreme_React_Components/"
              target="_blank"
            >
              Learn more about DevExtreme React components
            </a>
            .
          </Text>
          <Text pb={"xs"}>
            To get started with the DevExtreme Scheduler component, refer to the
            following tutorial for step-by-step instructions:{" "}
            <a style={{ color: "#09b5e1", textDecoration: "underline"}} 
              href="https://js.devexpress.com/React/Documentation/Guide/UI_Components/Scheduler/Getting_Started_with_Scheduler/"
              target="_blank"
            >
              Getting Started with Scheduler
            </a>
            .
          </Text>
      <Scheduler
        timeZone="America/Los_Angeles"
        dataSource={data}
        dataCellComponent={DataCell}
        resourceCellComponent={ResourceCell}
        groups={groups}
        views={views}
        defaultCurrentView="month"
        defaultCurrentDate={currentDate}
        height={600}
        showAllDayPanel={true}
        firstDayOfWeek={0}
        startDayHour={0}
        endDayHour={24}
        editing={false}
      >
        <Resource
          label="Employee"
          fieldExpr="employeeID"
          dataSource={employees}
          allowMultiple={false}
        />
      </Scheduler>
    </div>
  );
}
