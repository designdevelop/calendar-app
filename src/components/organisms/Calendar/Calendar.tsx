import { Moment } from 'moment';

// Context API
import { useCalendarState } from './context';

// Types
import { CalendarContextStateType } from './context/types';
import { ScheduleType } from 'context/scheduleContext/type';

// Components
import CalendarNav from 'components/molecules/CalendarNav';
import MonthlyView from '../../molecules/MonthlyView';
import WeeklyView from '../../molecules/WeeklyView';

interface CalendarProps {
  onClick?: (e: React.MouseEvent<HTMLDivElement>, v: any) => void;
  scheduleList?: Array<ScheduleType>;
}

Calendar.defaultProps = {
  onClick: () => {},
  scheduleList: null,
};

function Calendar({ onClick, scheduleList }: CalendarProps) {
  const calendarState: CalendarContextStateType = useCalendarState();

  return (
    <div>
      <CalendarNav moveToToday={calendarState.moveToToday} />
      {calendarState.view === 'M' ? (
        <MonthlyView
          activeDate={calendarState.activeDate}
          onClick={onClick}
          scheduleList={scheduleList}
        />
      ) : (
        <WeeklyView />
      )}
    </div>
  );
}

export default Calendar;
