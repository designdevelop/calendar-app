import { ItemType } from '../../../organisms/Calendar/context/types';

// Components
import Cell from './Cell';

// Types
import { ScheduleType } from 'context/scheduleContext/type';

// CSS Module
import classNames from 'classnames/bind';
import style from './Row.module.scss';
const cx = classNames.bind(style);

interface RowProps {
  weekData: Array<ItemType>;
  scheduleList?: Array<ScheduleType>;
  onClick?: (e: React.MouseEvent<HTMLDivElement>, v: any) => void;
}

Row.defaultProps = {
  onClick: () => {},
  scheduleList: null,
};

function Row({ weekData, scheduleList, onClick }: RowProps) {
  return (
    <div className={cx('row')}>
      {weekData.map((dayData, key) => (
        <Cell
          key={key}
          dayData={dayData}
          onClick={onClick}
          scheduleList={scheduleList}
        />
      ))}
    </div>
  );
}

export default Row;
