// Context API
import { useCalendarState } from '../../organisms/Calendar/context';
import { CalendarContextStateType } from '../../organisms/Calendar/context/types';

// Icons
import ArrowLeft from './arrow-left-icon.svg';
import ArrowRight from './arrow-right-icon.svg';

// CSS Module
import classNames from 'classnames/bind';
import style from './CalendarNav.module.scss';
const cx = classNames.bind(style);

interface CalendarNavProps {
  moveToToday: () => void;
}

function CalendarNav({ moveToToday }: CalendarNavProps) {
  // Context API
  const calendarState: CalendarContextStateType = useCalendarState();

  const calendarHandler = (e: React.MouseEvent<HTMLButtonElement>) => {
    const target = e.target as HTMLButtonElement;
    const button = target.closest('button');
    const action = button?.getAttribute('data-target');
    if (action === 'L' || action === 'R') {
      calendarState.calendarNavHandler(action);
    }
  };

  return (
    <div className={cx('calendar-header')}>
      <button className={cx('today-btn')} onClick={moveToToday}>
        오늘
      </button>
      <div className={cx('calendar-controller')}>
        <button
          className={cx('change-btn')}
          onClick={calendarHandler}
          data-target='L'
        >
          <img src={ArrowLeft} alt='left icon' />
        </button>
        <span className={cx('loc')}>
          {calendarState.activeDate?.format(
            calendarState.view === 'M' ? 'YYYY년 MM월' : 'YYYY년 MM월 DD일',
          )}
        </span>
        <button
          className={cx('change-btn')}
          onClick={calendarHandler}
          data-target='R'
        >
          <img src={ArrowRight} alt='left icon' />
        </button>
      </div>
      <div>
        <label>
          월
          <input
            type='radio'
            value='M'
            name='view'
            onChange={calendarState.calendarViewTypeHandler}
            checked={calendarState.view === 'M'}
          />
        </label>
        <label>
          주
          <input
            type='radio'
            value='W'
            name='view'
            onChange={calendarState.calendarViewTypeHandler}
            checked={calendarState.view === 'W'}
          />
        </label>
      </div>
    </div>
  );
}

export default CalendarNav;
