// Container
import CreateScheduleContainer from './CreateScheduleContainer';

// Components
import Calendar from '../components/organisms/Calendar';

// Types
import { ItemType } from '../components/organisms/Calendar/context/types';

// Context
import { usePopupState } from '../components/molecules/Popup/context';
import { useScheduleState } from '../context/scheduleContext/context';
import React from 'react';

function CalendarContainer() {
  const { popupDispatch } = usePopupState();
  const { scheduleList } = useScheduleState();

  const openCreateScheduleModal = (
    e: React.MouseEvent<HTMLDivElement>,
    v: ItemType,
  ) => {
    const target = e.target as HTMLTextAreaElement;

    if (!target.classList.contains('schedule-item')) {
      popupDispatch({
        type: 'OPEN',
        payload: <CreateScheduleContainer time={v.time} />,
      });
    } else {
      const index = Number(target.getAttribute('data-idx'));
      popupDispatch({
        type: 'OPEN',
        payload: (
          <CreateScheduleContainer
            time={v.time}
            schedule={{ ...scheduleList[index], index }}
          />
        ),
      });
    }
  };

  return (
    <Calendar onClick={openCreateScheduleModal} scheduleList={scheduleList} />
  );
}

export default CalendarContainer;
