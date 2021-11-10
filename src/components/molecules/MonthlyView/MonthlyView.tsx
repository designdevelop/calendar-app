import { useMemo } from 'react';
import { Moment } from 'moment';

// Components
import Row from './Row';

// Types
import { ScheduleType } from 'context/scheduleContext/type';

// Utils
import { getMonthlyData } from '../../../utils/utils';

// CSS Module
import classNames from 'classnames/bind';
import style from './MonthlyView.module.scss';
const cx = classNames.bind(style);

interface MonthlyViewProps {
  activeDate: Moment;
  scheduleList?: Array<ScheduleType>;
  onClick?: (e: React.MouseEvent<HTMLDivElement>, v: any) => void;
}

MonthlyView.defaultProps = {
  onClick: () => {},
  scheduleList: null,
};

function MonthlyView({ activeDate, onClick, scheduleList }: MonthlyViewProps) {
  const renderData: Array<any> = useMemo(
    () => getMonthlyData(activeDate),
    [activeDate],
  );

  const rowHeader = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
  ];

  return (
    <div className={cx('monthly-view')}>
      <div className={cx('row-header')}>
        {rowHeader.map((dow, key) => (
          <div
            className={cx(
              'cell',
              dow === 'Sunday' && 'sun',
              dow === 'Saturday' && 'sat',
            )}
            key={key}
          >
            {dow}
          </div>
        ))}
      </div>
      {renderData.map((weekData, key) => (
        <Row
          key={key}
          weekData={weekData}
          onClick={onClick}
          scheduleList={scheduleList}
        />
      ))}
    </div>
  );
}

export default MonthlyView;
