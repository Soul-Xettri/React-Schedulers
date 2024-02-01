import Scheduler, { SchedulerTypes } from "devextreme-react/scheduler";

import * as AspNetData from "devextreme-aspnet-data-nojquery";

import { HubConnectionBuilder, HttpTransportType } from "@aspnet/signalr";
import { Text, Title } from "@mantine/core";

const BASE_PATH = "https://js.devexpress.com/Demos/NetCore/";
const url = `${BASE_PATH}api/SchedulerSignalR`;

const createStore = () =>
  AspNetData.createStore({
    key: "AppointmentId",
    loadUrl: url,
    insertUrl: url,
    updateUrl: url,
    deleteUrl: url,
    onBeforeSend(method, ajaxOptions) {
      ajaxOptions.xhrFields = { withCredentials: true };
    },
  });

const store1 = createStore();
const store2 = createStore();
const currentDate = new Date(2021, 3, 27);
const views: SchedulerTypes.ViewType[] = ["day", "workWeek"];

const connection = new HubConnectionBuilder()
  .withUrl(`${BASE_PATH}schedulerSignalRHub`, {
    skipNegotiation: true,
    transport: HttpTransportType.WebSockets,
  })
  .build();

connection.start().then(() => {
  connection.on("update", (key, data) => {
    store1.push([{ type: "update", key, data }]);
    store2.push([{ type: "update", key, data }]);
  });

  connection.on("insert", (data) => {
    store1.push([{ type: "insert", data }]);
    store2.push([{ type: "insert", data }]);
  });

  connection.on("remove", (key) => {
    store1.push([{ type: "remove", key }]);
    store2.push([{ type: "remove", key }]);
  });
});

const SignalRService = () => (
  <div className="pr-10 pl-10">
    <Title size={"40px"} pb={"10px"}>
      SignalR Service
    </Title>
    <Text pb={"xs"}>
      This demo shows how you can use a{" "}
      <a
        style={{ color: "#09b5e1", textDecoration: "underline" }}
        href="https://dotnet.microsoft.com/en-us/apps/aspnet/signalr"
        target="blank"
      >
        SignalR
      </a>{" "}
      service to synchronize appointments across different devices. To emulate
      such a setup, each Scheduler on this page reads data from its own separate
      data store. Changes made in one control are repeated in the other and
      persist until the browser session has expired.
    </Text>
    <Text pb={"xs"}>
      Follow the steps below to implement this functionality. Note again that
      this demo repeats all steps twice for the two Schedulers. Your project
      will have a single control and a single store.
    </Text>
    <ol>
      <li>
        <Text pb={"xs"}>
          Configure a{" "}
          <a
            style={{ color: "#09b5e1", textDecoration: "underline" }}
            href="https://js.devexpress.com/React/Documentation/ApiReference/Data_Layer/CustomStore/"
            target="_blank"
          >
            CustomStore
          </a>
          . In this demo, we use the{" "}
          <a
            style={{ color: "#09b5e1", textDecoration: "underline" }}
            href="https://github.com/DevExpress/DevExtreme.AspNet.Data/blob/master/docs/client-side-with-jquery.md#api-reference"
            target="_blank"
          >
            createStore
          </a>{" "}
          method (part of the{" "}
          <a
            style={{ color: "#09b5e1", textDecoration: "underline" }}
            href="https://github.com/DevExpress/DevExtreme.AspNet.Data"
            target="_blank"
          >
            DevExtreme.AspNet.data
          </a>{" "}
          extension).
        </Text>
      </li>
      <li>
        <Text pb={"xs"}>
          Create the Scheduler and use its{" "}
          <a
            style={{ color: "#09b5e1", textDecoration: "underline" }}
            href="https://js.devexpress.com/React/Documentation/ApiReference/UI_Components/dxScheduler/Configuration/#dataSource"
            target="_blank"
          >
            dataSource
          </a>{" "}
          property to bind it to the store instance.
        </Text>
      </li>
      <li>
        <Text pb={"xs"}>
          When a push notification is received, call the store's{" "}
          <a
            style={{ color: "#09b5e1", textDecoration: "underline" }}
            href="https://js.devexpress.com/React/Documentation/ApiReference/Data_Layer/CustomStore/Methods/#pushchanges"
            target="_blank"
          >
            push(changes)
          </a>{" "}
          method to update the store's data (see the <code>connection.on</code>{" "}
          event handlers).
        </Text>
      </li>
    </ol>
    <Text pb={"xs"}>
      For server-side configuration, refer to the{" "}
      <a
        style={{ color: "#09b5e1", textDecoration: "underline" }}
        href="/Demos/WidgetsGallery/Demo/Scheduler/SignalRService/Mvc/Light/"
      >
        ASP.NET MVC version of this demo
      </a>
      .
    </Text>
    <Text pb={"xs"}>
      For more information about integration with push services, refer to the
      following help topic:{" "}
      <a
        style={{ color: "#09b5e1", textDecoration: "underline" }}
        href="https://js.devexpress.com/React/Documentation/Guide/Data_Binding/Data_Layer/#Data_Modification/Integration_with_Push_Services"
        target="_blank"
      >
        Integration with Push Services
      </a>
      .
    </Text>
    <div className="schedulers">
      <div className="column-1">
        <Scheduler
          timeZone="America/Los_Angeles"
          dataSource={store1}
          views={views}
          defaultCurrentView="day"
          defaultCurrentDate={currentDate}
          height={600}
          startDayHour={9}
          endDayHour={19}
          remoteFiltering={true}
          dateSerializationFormat="yyyy-MM-ddTHH:mm:ssZ"
          textExpr="Text"
          startDateExpr="StartDate"
          descriptionExpr="Description"
          endDateExpr="EndDate"
          allDayExpr="AllDay"
        />
      </div>
      <div className="column-2">
        <Scheduler
          timeZone="America/Los_Angeles"
          dataSource={store2}
          views={views}
          defaultCurrentView="day"
          defaultCurrentDate={currentDate}
          height={600}
          startDayHour={9}
          endDayHour={19}
          remoteFiltering={true}
          dateSerializationFormat="yyyy-MM-ddTHH:mm:ssZ"
          textExpr="Text"
          startDateExpr="StartDate"
          endDateExpr="EndDate"
          allDayExpr="AllDay"
        />
      </div>
    </div>
  </div>
);

export default SignalRService;
