import 'devextreme/dist/css/dx.light.css';
import Overview from './components/schedule/overview/Overview';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

const App = () => (
  <Router>
    <Routes>
      <Route path="/">
      <Route index element={<Overview />} />
      </Route>
    </Routes>
  </Router>
);

export default App;
