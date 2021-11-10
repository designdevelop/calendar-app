import { ScheduleReducerStateType, ScheduleActionType } from './type';

export const initSchedultState: ScheduleReducerStateType = {
  scheduleList: [],
};

export function scheduleReducer(
  state: ScheduleReducerStateType,
  action: ScheduleActionType,
): ScheduleReducerStateType {
  const { type, payload } = action;
  const { schedule, index } = payload;
  switch (type) {
    case 'ADD_SCHEDULE': {
      if (schedule) {
        return {
          scheduleList: [...state.scheduleList, schedule],
        };
      }
      return state;
    }
    case 'REMOVE_SCHEDULE': {
      if (index !== undefined) {
        return {
          scheduleList: [
            ...state.scheduleList.slice(0, index),
            ...state.scheduleList.slice(index + 1, state.scheduleList.length),
          ],
        };
      }
      return state;
    }
    case 'EDIT_SCHEDULE': {
      if (index !== undefined && schedule) {
        const newScheduleList = [...state.scheduleList];
        newScheduleList[index] = schedule;
        return {
          scheduleList: newScheduleList,
        };
      }
      return state;
    }
    default: {
      return state;
    }
  }
}
