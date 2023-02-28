import { find } from 'lodash';

type weekDayTableItem = {
  text: string;
  weekDay: number;
};

const emptyWeekDayTableItem: weekDayTableItem = {
  text: '',
  weekDay: 0,
};

const weekDayTable = [
  {
    text: '週一',
    weekDay: 1,
  },
  {
    text: '週二',
    weekDay: 2,
  },
  {
    text: '週三',
    weekDay: 3,
  },
  {
    text: '週四',
    weekDay: 4,
  },
  {
    text: '週五',
    weekDay: 5,
  },
  {
    text: '週六',
    weekDay: 6,
  },
  {
    text: '週日',
    weekDay: 7,
  },
];

export const checkWeekDay = (currentWeekDay: Number, targetDate: string) => {
  if (targetDate === '每天') return true;
  const tDay: weekDayTableItem =
    find(weekDayTable, (item) => item.text === targetDate) ||
    (emptyWeekDayTableItem as weekDayTableItem);
  if (tDay.weekDay === currentWeekDay) return true;
  return false;
};
