import { Moment } from 'moment';

export interface ScheduleContextProviderType {
  children?: React.ReactNode;
}

export interface ScheduleType {
  date: [Moment, Moment];
  content: string;
}

export interface ScheduleReducerStateType {
  scheduleList: Array<ScheduleType>;
}

export interface ScheduleActionType {
  type: 'ADD_SCHEDULE' | 'REMOVE_SCHEDULE' | 'EDIT_SCHEDULE';
  payload: {
    schedule?: ScheduleType;
    index?: number;
  };
}

export interface ScheduleContextStateType {
  scheduleList: Array<ScheduleType>;
  scheduleDispatch: any;
}
