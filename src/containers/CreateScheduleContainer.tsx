import React, { useState, useCallback, useMemo } from 'react';
import moment, { Moment } from 'moment';

// Context
import { usePopupState } from '../components/molecules/Popup/context';
import { useScheduleState } from '../context/scheduleContext/context';

// Types
import { ScheduleType } from '../context/scheduleContext/type';

// Components
import ScheduleForm from '../components/organisms/ScheduleForm';

// Utils
import { makeTimeOptions } from '../utils/utils';

interface EditScheduleType extends ScheduleType {
  index: number;
}

interface CreateScheduleContainerProps {
  time: Moment;
  schedule?: EditScheduleType;
}

CreateScheduleContainer.defaultProps = {
  schedule: null,
};

function CreateScheduleContainer({
  time,
  schedule,
}: CreateScheduleContainerProps) {
  const isEdit = schedule !== null;

  // Context API
  const { popupDispatch } = usePopupState();
  const { scheduleDispatch, scheduleList } = useScheduleState();

  // Component State
  const [content, setContent] = useState(
    isEdit && schedule ? schedule.content : '',
  );
  const [date, setDate] = useState(
    isEdit && schedule
      ? schedule.date[0].format('YYYY-MM-DD')
      : time.format('YYYY-MM-DD'),
  );
  const [startTime, setStartTime] = useState(
    isEdit && schedule ? schedule.date[0].format('HH:mm') : '',
  );
  const [endTime, setEndTime] = useState(
    isEdit && schedule ? schedule.date[1].format('HH:mm') : '',
  );

  const sTimeOptions = useMemo(() => {
    return makeTimeOptions().map((opt) => {
      const target = moment(`${date} ${opt.value}`);
      const disabledItem = scheduleList.find((s) => {
        const { date: d } = s;
        const [start, end] = d;
        if (
          (target.isAfter(start) && target.isBefore(end)) ||
          target.isSame(start)
        )
          return true;
        return false;
      });

      return { ...opt, disabled: disabledItem !== undefined };
    });
  }, [date, scheduleList]);
  const eTimeOptions = useMemo(() => {
    const start = moment(`${date} ${startTime}`);
    let flag = 0;
    return [...sTimeOptions].map((opt: any) => {
      const { value, disabled: prevDisabled } = opt;
      const target = moment(`${date} ${value}`);
      let disabled = prevDisabled;
      if (target.isBefore(start)) {
        disabled = true;
      } else if (target.isSame(start)) {
        disabled = true;
        flag = 1;
      } else if (flag === 1 && prevDisabled) {
        disabled = false;
        flag = 2;
      } else if (flag === 1 && !prevDisabled) {
        disabled = false;
      } else {
        disabled = true;
      }
      return {
        ...opt,
        disabled,
      };
    });
  }, [date, sTimeOptions, startTime]);

  const textInputHandler = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setContent(e.target.value);
    },
    [],
  );

  const dateInputHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setDate(e.target.value);
  };

  const timeInputHandler = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const [target] = e.target.id.split('-');

    const { value } = e.target;

    if (target === 'start') {
      const s = moment(`${date} ${value}`);
      const e = moment(`${date} ${endTime}`).subtract(1, 'minutes');

      if (s.isAfter(e) && endTime !== '') {
        setEndTime(s.clone().add(30, 'minutes').format('HH:mm'));
      }
      setStartTime(value);
    } else {
      setEndTime(value);
    }
  };

  const onClose = () => {
    popupDispatch({ type: 'CLOSE', content: '' });
  };

  const onSubmit = () => {
    const scheduleItem = {
      content,
      date: [moment(`${date} ${startTime}`), moment(`${date} ${endTime}`)],
    };

    scheduleDispatch({
      type: isEdit ? 'EDIT_SCHEDULE' : 'ADD_SCHEDULE',
      payload: { schedule: scheduleItem, index: schedule?.index },
    });
    popupDispatch({ type: 'CLOSE', content: '' });
  };

  const onDelete = () => {
    scheduleDispatch({
      type: 'REMOVE_SCHEDULE',
      payload: {
        index: schedule?.index,
      },
    });
    popupDispatch({ type: 'CLOSE', content: '' });
  };

  const blankPattern = /^\s+|\s+$/g;
  const validate =
    !(content.replace(blankPattern, '') === '') &&
    startTime !== '' &&
    endTime !== '';

  return (
    <ScheduleForm
      isEdit={isEdit}
      content={content}
      date={date}
      startTime={startTime}
      endTime={endTime}
      sTimeOptions={sTimeOptions}
      eTimeOptions={eTimeOptions}
      textInputHandler={textInputHandler}
      dateInputHandler={dateInputHandler}
      timeInputHandler={timeInputHandler}
      onClose={onClose}
      onSubmit={onSubmit}
      onDelete={onDelete}
      validate={validate}
    />
  );
}

export default CreateScheduleContainer;
