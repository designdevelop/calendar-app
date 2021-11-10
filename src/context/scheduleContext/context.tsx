import React, { useReducer, useContext } from 'react';
import { scheduleReducer, initSchedultState } from './def';

import { ScheduleContextProviderType, ScheduleContextStateType } from './type';

export const ScheduleContext =
  React.createContext<ScheduleContextStateType | null>(null);

export const ScheduleContextProvider = ({
  children,
}: ScheduleContextProviderType) => {
  const [scheduleState, scheduleDispatch] = useReducer(
    scheduleReducer,
    initSchedultState,
  );

  const value: ScheduleContextStateType = {
    ...scheduleState,
    scheduleDispatch,
  };

  return (
    <ScheduleContext.Provider value={value}>
      {children}
    </ScheduleContext.Provider>
  );
};

export function useScheduleState() {
  const state = useContext(ScheduleContext);
  if (!state) throw new Error('Cannot find ScheduleContextProvider');
  return state;
}
