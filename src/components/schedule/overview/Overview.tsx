import Scheduler, { Resource, SchedulerTypes } from "devextreme-react/cjs/scheduler";
import { data, employees } from "./data";
import ResourceCell from "./ResourceCell";
import DataCell from "./DataCell";

const currentDate = new Date(2024,5,2,11,30);
const groups = ['employeeID'];
const views: SchedulerTypes.ViewType[]=['month']

export default function Overview() {
  return (
    <Scheduler
    timeZone="America/Los_Angeles"
    dataSource={data}
    dataCellComponent={DataCell}
    resourceCellComponent={ResourceCell}
    groups={groups}
    views={views}
    defaultCurrentDate={currentDate}
    defaultCurrentView="month"
    height={600}
    showAllDayPanel={true}
    firstDayOfWeek={1}
    startDayHour={8}
    endDayHour={18}
    >
        <Resource
            label="Employee"
            fieldExpr="employeeID"
            dataSource={employees}
            allowMultiple={false}
        />
    </Scheduler>
  )
}
