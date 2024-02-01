import Scheduler, {
  Resource,
  SchedulerTypes,
} from "devextreme-react/scheduler";
import { assignees, data, priorities } from "./data.ts";
import { Text, Title } from "@mantine/core";

const currentDate = new Date(2021, 4, 11);
const views: SchedulerTypes.ViewType[] = ["agenda"];

const Agenda = () => (
  <div className="pr-10 pl-10">
    <Title size={"40px"} pb={"10px"}>
      Agenda
    </Title>
    <Text pb={"xs"}>
      The Agenda view shows appointments as a simple list. This is the most
      compact display style because it doesn't render a time scale. Appointments
      follow each other without empty spaces and their sizes do not depend on
      event duration.
    </Text>
    <Text pb={"xs"}>
      To add the Agenda view to your Scheduler, declare it in the{" "}
      <a
        style={{ color: "#09b5e1", textDecoration: "underline" }}
        href="https://js.devexpress.com/React/Documentation/ApiReference/UI_Components/dxScheduler/Configuration/views/"
        target="_blank"
      >
        views
      </a>{" "}
      array.
    </Text>
    <div style={{background:"red"}}>
      <div className="note-header">NOTE</div>
      <div className="note-text">
        <Text pb={"xs"}>
          The Agenda view does not allow a user to add appointments or modify
          them by dragging.
        </Text>
      </div>
    </div>
    <Text pb={"xs"}>
      For more information about Agenda and other supported views, refer to the
      following help topic:{" "}
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
      currentView="agenda"
      defaultCurrentDate={currentDate}
      height={600}
      startDayHour={9}
    >
      <Resource
        dataSource={assignees}
        allowMultiple={true}
        fieldExpr="assigneeId"
        label="Assignee"
        useColorAsDefault={true}
      />
      <Resource
        dataSource={priorities}
        fieldExpr="priorityId"
        label="Priority"
      />
    </Scheduler>
  </div>
);

export default Agenda;
