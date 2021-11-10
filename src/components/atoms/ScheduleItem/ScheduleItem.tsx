import React, { useMemo } from 'react';

// Utils
import { getRandomColor } from '../../../utils/utils';

// CSS Module
import classNames from 'classnames/bind';
import style from './ScheduleItem.module.scss';
const cx = classNames.bind(style);

// Types
interface ScheduleItemProps {
  content: string;
  index: number;
}

function ScheduleItem({ content, index }: ScheduleItemProps) {
  const bgColor = useMemo(() => getRandomColor(), []);
  return (
    <li
      className={`${cx('schedule-item')} schedule-item`}
      data-idx={index}
      style={{ backgroundColor: bgColor }}
    >
      {content}
    </li>
  );
}

export default ScheduleItem;
