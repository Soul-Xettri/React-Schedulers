import "devextreme/dist/css/dx.light.css";
import "@mantine/core/styles.css";
import Overview from "./components/schedule/overview/Overview";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import SimpleArray from "./components/schedule/dataBinding/simpleArray/SimpleArray";
import { MantineProvider } from "@mantine/core";
import { HeaderMegaMenu } from "./components/navbar/HeaderMegaMenu";
import { NotFoundTitle } from "./pages/errorPages/NotFoundTitle";

const App = () => (
  <MantineProvider>
    <Router>
        <HeaderMegaMenu/>
      <Routes>
        <Route path="/">
          <Route index element={<Overview />} />
          <Route path="simple-array" element={<SimpleArray />} />
          <Route path="*" element={<NotFoundTitle/>}/>
        </Route>
      </Routes>
    </Router>
  </MantineProvider>
);

export default App;
