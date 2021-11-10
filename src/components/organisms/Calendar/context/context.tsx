import React, { useState, useContext, useCallback } from 'react';
import moment, { Moment } from 'moment';

// Utils
import { getStartOfMonth } from '../../../../utils/utils';

import { CalendarContextStateType } from './types';

interface Props {
  children: React.ReactNode;
}

export const CalendarContext =
  React.createContext<CalendarContextStateType | null>(null);

export const CalendarContextProvider = ({ children }: Props) => {
  const [activeDate, setActivDate] = useState<Moment>(
    getStartOfMonth(moment()),
  );
  const [view, setView] = useState<'M' | 'W'>('M');

  // 달력 네비게이터 이벤트
  const calendarNavHandler = useCallback(
    (action?: 'L' | 'R') => {
      if (action === 'R') {
        setActivDate((prev: Moment) =>
          prev.clone().add(1, view === 'M' ? 'M' : 'w'),
        );
      } else {
        setActivDate((prev: Moment) =>
          prev.clone().subtract(1, view === 'M' ? 'M' : 'w'),
        );
      }
    },
    [view],
  );

  const moveToToday = useCallback(() => {
    setActivDate(getStartOfMonth(moment()));
  }, []);

  // 달력 뷰타입 핸들러
  const calendarViewTypeHandler = useCallback(
    (e?: React.ChangeEvent<HTMLInputElement>) => {
      const value: string | undefined = e?.target.value;
      if (value === 'M' || value === 'W') setView(value);
    },
    [],
  );

  const value: CalendarContextStateType = {
    view,
    activeDate,
    calendarNavHandler,
    calendarViewTypeHandler,
    moveToToday,
  };

  return (
    <CalendarContext.Provider value={value}>
      {children}
    </CalendarContext.Provider>
  );
};

export function useCalendarState() {
  const state = useContext(CalendarContext);
  if (!state) throw new Error('Cannot find SampleProvider');
  return state;
}
