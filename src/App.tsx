import "devextreme/dist/css/dx.light.css";
import "@mantine/core/styles.css";
import Overview from "./components/schedule/overview/Overview";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import SimpleArray from "./components/schedule/dataBinding/simpleArray/SimpleArray";
import { MantineProvider } from "@mantine/core";
import { HeaderMegaMenu } from "./components/navbar/HeaderMegaMenu";
import { NotFoundTitle } from "./pages/errorPages/NotFoundTitle";
import WebAPIService from "./components/schedule/dataBinding/webApiService/WebApiService";
import SignalRService from "./components/schedule/dataBinding/signalRService/SignalRService";
import GoogleCalendarIntegration from "./components/schedule/dataBinding/googleCalendarIntegration/GoogleCalendarIntegration";
import BasicViews from "./components/schedule/views/basicViews/BasicViews";
import TimeLines  from "./components/schedule/views/timelines/TimeLines";
import Agenda from "./components/schedule/views/agenda/Agenda";
import CurrentTimeIndicator from "./components/schedule/features/currentTimeIndicator/CurrentTimeIndicator";
import TimeZoneSupport from "./components/schedule/features/timeZoneSupport/TimeZoneSupport";
import WorkShifts from "./components/schedule/features/WorkShifts/WorkShifts";

const App = () => (
  <MantineProvider>
    <Router>
      <HeaderMegaMenu />
      <Routes>
        <Route path="/">
          <Route index element={<Overview />} />
          <Route path="data-binding/simple-array" element={<SimpleArray />} />
          <Route
            path="data-binding/web-api-service"
            element={<WebAPIService />}
          />
           <Route
            path="data-binding/signalr-service"
            element={<SignalRService />}
          />
          <Route
            path="data-binding/google-calendar-integration"
            element={<GoogleCalendarIntegration />}
          />
          <Route
            path="views/basic-views"
            element={<BasicViews />}
          />
           <Route
            path="views/timelines"
            element={<TimeLines />}
          />
           <Route
            path="views/agenda"
            element={<Agenda />}
          />
          <Route
            path="features/current-time-indicator"
            element={<CurrentTimeIndicator />}
          />
          <Route
            path="features/time-zone-support"
            element={<TimeZoneSupport />}
          />
             <Route
            path="features/work-shifts"
            element={<WorkShifts />}
          />
          <Route path="*" element={<NotFoundTitle />} />
        </Route>
      </Routes>
    </Router>
  </MantineProvider>
);

export default App;
