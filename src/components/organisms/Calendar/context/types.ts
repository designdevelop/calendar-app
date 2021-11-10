import { Moment } from 'moment';

export interface CalendarContextStateType {
  view: 'M' | 'W';
  activeDate: Moment;
  calendarNavHandler: (action?: 'L' | 'R') => void;
  calendarViewTypeHandler: (e?: React.ChangeEvent<HTMLInputElement>) => void;
  moveToToday: () => void;
}

export interface ItemType {
  y: number;
  m: number;
  d: number;
  disable: boolean;
  isToday: boolean;
  time: Moment;
}
