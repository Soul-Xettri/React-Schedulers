import { SchedulerTypes } from 'devextreme-react/scheduler';

type Appointment = SchedulerTypes.Appointment & { employeeID: number };

type Resource = {
  text: string;
  id: number;
  color: string;
  avatar: string;
  age: number;
  discipline: string;
};

export const data: Appointment[] = [
  {
    text: 'Helen',
    employeeID: 2,
    startDate: new Date('2024-02-01T16:30:00.000Z'),
    endDate: new Date('2024-02-01T18:30:00.000Z'),
  }, {
    text: 'Helen',
    employeeID: 2,
    startDate: new Date('2024-02-10T16:30:00.000Z'),
    endDate: new Date('2024-02-11T18:30:00.000Z'),
  }, {
    text: 'Alex',
    employeeID: 1,
    startDate: new Date('2024-02-02T16:30:00.000Z'),
    endDate: new Date('2024-02-02T18:30:00.000Z'),
  }, {
    text: 'Alex',
    employeeID: 1,
    startDate: new Date('2024-02-11T19:00:00.000Z'),
    endDate: new Date('2024-02-11T20:00:00.000Z'),
  }, {
    text: 'Alex',
    employeeID: 2,
    startDate: new Date('2024-02-16T16:30:00.000Z'),
    endDate: new Date('2024-02-16T18:30:00.000Z'),
  }, {
    text: 'Stan',
    employeeID: 1,
    startDate: new Date('2024-02-07T16:30:00.000Z'),
    endDate: new Date('2024-02-07T18:30:00.000Z'),
  }, {
    text: 'Stan',
    employeeID: 1,
    startDate: new Date('2024-02-28T16:30:00.000Z'),
    endDate: new Date('2024-02-28T18:30:00.000Z'),
  }, {
    text: 'Stan',
    employeeID: 1,
    startDate: new Date('2024-02-30T16:30:00.000Z'),
    endDate: new Date('2024-02-30T18:30:00.000Z'),
  }, {
    text: 'Rachel',
    employeeID: 2,
    startDate: new Date('2024-02-04T16:30:00.000Z'),
    endDate: new Date('2024-02-04T18:30:00.000Z'),
  }, {
    text: 'Rachel',
    employeeID: 2,
    startDate: new Date('2024-02-07T16:30:00.000Z'),
    endDate: new Date('2024-02-07T18:30:00.000Z'),
  }, {
    text: 'Rachel',
    employeeID: 1,
    startDate: new Date('2024-02-21T16:30:00.000Z'),
    endDate: new Date('2024-02-21T18:30:00.000Z'),
  }, {
    text: 'Kelly',
    employeeID: 2,
    startDate: new Date('2024-02-15T16:30:00.000Z'),
    endDate: new Date('2024-02-15T18:30:00.000Z'),
  }, {
    text: 'Kelly',
    employeeID: 2,
    startDate: new Date('2024-02-29T16:30:00.000Z'),
    endDate: new Date('2024-02-29T18:30:00.000Z'),
  }];

export const employees: Resource[] = [{
  text: 'John Heart',
  id: 1,
  color: '#56ca85',
  avatar: '/coach-man.png',
  age: 27,
  discipline: 'ABS, Fitball, StepFit',
}, {
  text: 'Sandra Johnson',
  id: 2,
  color: '#ff9747',
  avatar: '/coach-woman.png',
  age: 25,
  discipline: 'ABS, Fitball, StepFit',
}];
