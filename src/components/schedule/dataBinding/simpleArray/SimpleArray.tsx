import Scheduler, { SchedulerTypes } from "devextreme-react/scheduler";

import { data } from "./data.ts";
import { Text, Title } from "@mantine/core";

const currentDate = new Date(2021, 2, 28);
const views: SchedulerTypes.ViewType[] = ["week", "month"];

const SimpleArray = () => (
  <div className="pr-10 pl-10">
    <Title size={"40px"} pb={"10px"}>
      Simple Array
    </Title>
    <Text pb={"xs"}>
      You can use the Scheduler component to display and edit appointments from
      a local array. Use the{" "}
      <a
        style={{ color: "#09b5e1", textDecoration: "underline" }}
        href="https://js.devexpress.com/React/Documentation/ApiReference/UI_Components/dxScheduler/Configuration/#dataSource"
        target="_blank"
      >
        dataSource
      </a>{" "}
      property to bind the Scheduler to the array.
    </Text>

    <Text pb={"xs"}>
      The Scheduler automatically displays appointments if source object field
      names match the names listed in the{" "}
      <a
        style={{ color: "#09b5e1", textDecoration: "underline" }}
        href="https://js.devexpress.com/React/Documentation/ApiReference/Common/Object_Structures/dxSchedulerAppointment/"
        target="_blank"
      >
        dxSchedulerAppointment
      </a>{" "}
      help section. In this demo, the following fields illustrate this point:{" "}
      <a
        style={{ color: "#09b5e1", textDecoration: "underline" }}
        href="https://js.devexpress.com/React/Documentation/ApiReference/Common/Object_Structures/dxSchedulerAppointment/#text"
        target="_blank"
      >
        text
      </a>
      ,{" "}
      <a
        style={{ color: "#09b5e1", textDecoration: "underline" }}
        href="https://js.devexpress.com/React/Documentation/ApiReference/Common/Object_Structures/dxSchedulerAppointment/#startDate"
        target="_blank"
      >
        startDate
      </a>
      ,{" "}
      <a
        style={{ color: "#09b5e1", textDecoration: "underline" }}
        href="https://js.devexpress.com/React/Documentation/ApiReference/Common/Object_Structures/dxSchedulerAppointment/#endDate"
        target="_blank"
      >
        endDate
      </a>
      , and{" "}
      <a
        style={{ color: "#09b5e1", textDecoration: "underline" }}
        href="https://js.devexpress.com/React/Documentation/ApiReference/Common/Object_Structures/dxSchedulerAppointment/#allDay"
        target="_blank"
      >
        allDay
      </a>
      . If field names in your data source differ, specify them in{" "}
      <strong>...Expr</strong> properties (
      <a
        style={{ color: "#09b5e1", textDecoration: "underline" }}
        href="https://js.devexpress.com/React/Documentation/ApiReference/UI_Components/dxScheduler/Configuration/#textExpr"
        target="_blank"
      >
        textExpr
      </a>
      ,{" "}
      <a
        style={{ color: "#09b5e1", textDecoration: "underline" }}
        href="https://js.devexpress.com/React/Documentation/ApiReference/UI_Components/dxScheduler/Configuration/#startDateExpr"
        target="_blank"
      >
        startDateExpr
      </a>
      ,{" "}
      <a
        style={{ color: "#09b5e1", textDecoration: "underline" }}
        href="https://js.devexpress.com/React/Documentation/ApiReference/UI_Components/dxScheduler/Configuration/#endDateExpr"
        target="_blank"
      >
        endDateExpr
      </a>
      ,{" "}
      <a
        style={{ color: "#09b5e1", textDecoration: "underline" }}
        href="https://js.devexpress.com/React/Documentation/ApiReference/UI_Components/dxScheduler/Configuration/#allDayExpr"
        target="_blank"
      >
        allDayExpr
      </a>
      , and so on).
    </Text>

    <Text pb={"xs"}>
      For more information about binding to an array, refer to the following
      help topic:{" "}
      <a
        style={{ color: "#09b5e1", textDecoration: "underline" }}
        href="https://js.devexpress.com/React/Documentation/Guide/Data_Binding/Specify_a_Data_Source/Local_Array/"
        target="_blank"
      >
        Local Array
      </a>
      .
    </Text>

    <Scheduler
      timeZone="America/Los_Angeles"
      dataSource={data}
      views={views}
      defaultCurrentView="week"
      defaultCurrentDate={currentDate}
      height={730}
      startDayHour={9}
    />
  </div>
);

export default SimpleArray;
