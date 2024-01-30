import Scheduler, { SchedulerTypes } from "devextreme-react/scheduler";

import * as AspNetData from "devextreme-aspnet-data-nojquery";
import { Text, Title } from "@mantine/core";

const url = "https://js.devexpress.com/Demos/Mvc/api/SchedulerData";
const dataSource = AspNetData.createStore({
  key: "AppointmentId",
  loadUrl: `${url}/Get`,
  insertUrl: `${url}/Post`,
  updateUrl: `${url}/Put`,
  deleteUrl: `${url}/Delete`,
  onBeforeSend(_, ajaxOptions) {
    ajaxOptions.xhrFields = { withCredentials: true };
  },
});

const currentDate = new Date(2021, 3, 27);
const views: SchedulerTypes.ViewType[] = ["day", "workWeek", "month"];

const WebAPIService = () => (
  <div className="pr-10 pl-10">
    <Title size={"40px"} pb={"10px"}>
      Web Api Service
    </Title>
    <Text pb={"xs"}>
      To access a Web API service from the client, use the{" "}
      <a
        style={{ color: "#09b5e1", textDecoration: "underline" }}
        href="https://github.com/DevExpress/DevExtreme.AspNet.Data/blob/master/docs/client-side-with-jquery.md#api-reference"
        target="_blank"
      >
        createStore
      </a>{" "}
      method which is part of the{" "}
      <a
        style={{ color: "#09b5e1", textDecoration: "underline" }}
        href="https://github.com/DevExpress/DevExtreme.AspNet.Data#devextreme-aspnet-data"
        target="_blank"
      >
        DevExtreme.AspNet.Data
      </a>{" "}
      extension. This extension also allows you to process data for DevExtreme
      components{" "}
      <a
        style={{ color: "#09b5e1", textDecoration: "underline" }}
        href="https://github.com/DevExpress/DevExtreme.AspNet.Data/blob/master/docs/server-side-configuration.md"
        target="_blank"
      >
        on the server
      </a>
      . The server-side implementation is available under the{" "}
      <code>SchedulerDataController.cs</code> tab in the{" "}
      <a
        style={{ color: "#09b5e1", textDecoration: "underline" }}
        href="/Demos/WidgetsGallery/Demo/Scheduler/WebAPIService/Mvc/Light/"
      >
        ASP.NET MVC version of this demo
      </a>
      .
    </Text>
    <h3>
      A 1-Click Solution for CRUD Web API Services with Role-based Access
      Control via EF Core
    </h3>
    <Text pb={"xs"}>
      If you target .NET for your backend API, be sure to check out{" "}
      <a
        style={{ color: "#09b5e1", textDecoration: "underline" }}
        href="https://docs.devexpress.com/eXpressAppFramework/403394/backend-web-api-service?utm_source=js.devexpress.com&amp;utm_medium=referral&amp;utm_campaign=xaf&amp;utm_content=data-layer-odatastore"
        target="_blank"
      >
        Web API Service
      </a>{" "}
      and register your{" "}
      <a
        style={{ color: "#09b5e1", textDecoration: "underline" }}
        href="https://www.devexpress.com/security-api-free?utm_source=js.devexpress.com&amp;utm_medium=referral&amp;utm_campaign=xaf&amp;utm_content=data-layer-odatastore"
        target="_blank"
      >
        free copy today
      </a>
      . The Solution Wizard scaffolds an OData v4 Web API Service (.NET 6+) with
      integrated authorization &amp; CRUD operations powered by EF Core ORM. You
      can use OAuth2, JWT or custom authentication strategies alongside tools
      like Postman or Swagger (OpenAPI) for API testing. The built-in Web API
      Service also filters out secured server data based on permissions granted
      to users. Advanced/enterprise functions include audit trail, endpoints to
      download reports, file attachments, check validation, obtain localized
      captions, etc.
    </Text>
    <Text pb={"xs"}>
      To use the free Solution Wizard (which creates the Web API Service), run
      the Universal Component Installer from the{" "}
      <a
        style={{ color: "#09b5e1", textDecoration: "underline" }}
        href="https://www.devexpress.com/ClientCenter/DownloadManager/?utm_source=js.devexpress.com&amp;utm_medium=referral&amp;utm_campaign=xaf&amp;utm_content=data-layer-odatastore"
        target="_blank"
      >
        DevExpress Download Manager
      </a>{" "}
      and use our predefined template in Visual Studio 2022+.
    </Text>
    <Text pb={"xs"}>
      <a
        style={{ color: "#09b5e1", textDecoration: "underline" }}
        href="https://docs.devexpress.com/eXpressAppFramework/404449/backend-web-api-service/get-started-with-web-api-service"
        target="_blank"
      >
        Read Tutorial
      </a>{" "}
      | View Examples:{" "}
      <a
        style={{ color: "#09b5e1", textDecoration: "underline" }}
        href="https://go.devexpress.com/XAF_Security_NonXAF_DevExtreme_OData.aspx"
        target="_blank"
      >
        JavaScript (DevExtreme)
      </a>{" "}
      &amp;{" "}
      <a
        style={{ color: "#09b5e1", textDecoration: "underline" }}
        href="https://github.com/oliversturm/demo-dx-webapi-js/tree/stage-6"
        target="_blank"
      >
        JavaScript (Svelte)
      </a>{" "}
      |{" "}
      <a
        style={{ color: "#09b5e1", textDecoration: "underline" }}
        href="https://www.youtube.com/watch?v=T7y4gwc1n4w&amp;list=PL8h4jt35t1wiM1IOux04-8DiofuMEB33G"
        target="_blank"
      >
        Watch Videos
      </a>
    </Text>
    <Scheduler
      timeZone="America/Los_Angeles"
      dataSource={dataSource}
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
);

export default WebAPIService;
