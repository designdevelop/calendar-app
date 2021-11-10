// Components
import ScheduleItem from 'components/atoms/ScheduleItem';

// Types
import { ItemType } from '../../../../organisms/Calendar/context/types';
import { ScheduleType } from 'context/scheduleContext/type';

// CSS Module
import classNames from 'classnames/bind';
import style from './Cell.module.scss';
const cx = classNames.bind(style);

interface CellProps {
  dayData: ItemType;
  scheduleList?: Array<ScheduleType>;
  onClick?: (e: React.MouseEvent<HTMLDivElement>, v: any) => void;
}

Cell.defaultProps = {
  onClick: () => {},
  scheduleList: null,
};

function Cell({ dayData, onClick, scheduleList = [] }: CellProps) {
  const { y, m, d, isToday } = dayData;
  const sList = scheduleList
    .map((s, i) => ({ ...s, i }))
    .filter(({ date: [s] }) => {
      return s.year() === y && s.month() + 1 === m && s.date() === d;
    });

  return (
    <div
      className={cx('cell', dayData.disable && 'disable')}
      onClick={(e) => {
        if (onClick) onClick(e, dayData);
      }}
    >
      <div className={cx('day')}>
        {dayData.d}
        {isToday && <span className={cx('today')}>{dayData.d}</span>}
      </div>
      <ul className={cx('schedule-list')}>
        {sList.map(({ content, i }, key) => (
          <ScheduleItem content={content} key={key} index={i} />
        ))}
      </ul>
    </div>
  );
}

export default Cell;
