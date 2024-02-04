import { SchedulerTypes } from 'devextreme-react/scheduler';

type Appointment = SchedulerTypes.Appointment & { movieId: number };

type Resource = {
  id: number;
  text: string;
  image: string;
};

export const today = new Date();
today.setHours(0, 0, 0, 0);
today.setDate(today.getDate() - today.getDay() + 3);

export const data: Appointment[] = [
  {
    movieId: 1,
    startDate: new Date(today.getTime() - 113.5 * 3600000),
    endDate: new Date(today.getTime() - 111.5 * 3600000),
    recurrenceRule: 'FREQ=HOURLY;INTERVAL=15;COUNT=15',
  }, {
    movieId: 2,
    startDate: new Date(today.getTime() - 110.5 * 3600000),
    endDate: new Date(today.getTime() - 108.5 * 3600000),
    recurrenceRule: 'FREQ=HOURLY;INTERVAL=15;COUNT=15',
  }, {
    movieId: 3,
    startDate: new Date(today.getTime() - 106.5 * 3600000),
    endDate: new Date(today.getTime() - 104.5 * 3600000),
    recurrenceRule: 'FREQ=HOURLY;INTERVAL=15;COUNT=15',
  }, {
    movieId: 4,
    startDate: new Date(today.getTime() - 104 * 3600000),
    endDate: new Date(today.getTime() - 102 * 3600000),
    recurrenceRule: 'FREQ=HOURLY;INTERVAL=15;COUNT=15',
  }, {
    movieId: 5,
    startDate: new Date(today.getTime() - 101 * 3600000),
    endDate: new Date(today.getTime() - 99 * 3600000),
    recurrenceRule: 'FREQ=HOURLY;INTERVAL=15;COUNT=15',
  },
];

export const moviesData: Resource[] = [{
  id: 1,
  text: 'His Girl Friday',
  image: '/HisGirlFriday.jpg',
}, {
  id: 2,
  text: 'Royal Wedding',
  image: '/RoyalWedding.jpg',
}, {
  id: 3,
  text: 'A Star Is Born',
  image: '/AStartIsBorn.jpg',
}, {
  id: 4,
  text: 'The Screaming Skull',
  image: '/ScreamingSkull.jpg',
}, {
  id: 5,
  text: 'It\'s a Wonderful Life',
  image: '/ItsAWonderfulLife.jpg',
}];
