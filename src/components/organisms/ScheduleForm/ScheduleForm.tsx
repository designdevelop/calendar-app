// Types
import { Moment } from 'moment';

// Components
import InputText from 'components/atoms/InputText';
import InputDate from 'components/atoms/InputDate';
import InputSelect from 'components/atoms/InputSelect';
import Button from 'components/atoms/Button';

// CSS Module
import classNames from 'classnames/bind';
import style from './ScheduleForm.module.scss';
const cx = classNames.bind(style);

interface ScheduleFormProps {
  isEdit: boolean;
  content: string;
  date: string;
  startTime: string;
  endTime: string;
  sTimeOptions: Array<{
    label: string;
    value: string;
    m: Moment;
    disabled?: boolean;
  }>;
  eTimeOptions: Array<{
    label: string;
    value: string;
    m: Moment;
    disabled?: boolean;
  }>;
  validate: boolean;
  textInputHandler: (e: React.ChangeEvent<HTMLInputElement>) => void;
  dateInputHandler: (e: React.ChangeEvent<HTMLInputElement>) => void;
  timeInputHandler: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  onClose: () => void;
  onSubmit: () => void;
  onDelete: () => void;
}

function ScheduleForm({
  isEdit,
  content,
  date,
  startTime,
  endTime,
  sTimeOptions,
  eTimeOptions,
  validate,
  textInputHandler,
  dateInputHandler,
  timeInputHandler,
  onClose,
  onSubmit,
  onDelete,
}: ScheduleFormProps) {
  return (
    <div>
      <p className={cx('title')}>{isEdit ? '일정 수정하기' : '일정 만들기'}</p>
      <div className={cx('form-wrap')}>
        <InputText
          id='schedule_content'
          label='일정 제목을 입력하세요'
          value={content}
          onChange={textInputHandler}
        />
        <div className={cx('date-wrap')}>
          <InputDate
            id='start-date-input'
            label='시작 날짜'
            value={date}
            onChange={dateInputHandler}
          />
          <InputSelect
            id='start-time-input'
            label='시작 시간'
            options={sTimeOptions}
            value={startTime}
            onChange={timeInputHandler}
          />
        </div>
        <div className={cx('date-wrap')}>
          <InputDate
            id='end-date-input'
            label='종료 날짜'
            value={date}
            onChange={dateInputHandler}
          />
          <InputSelect
            id='end-time-input'
            label='종료 시간'
            options={eTimeOptions}
            value={endTime}
            onChange={timeInputHandler}
          />
        </div>
      </div>
      <div className={cx('btn-wrap')}>
        <Button onClick={onClose}>취소</Button>
        {isEdit && <Button onClick={onDelete}>삭제</Button>}
        <Button onClick={onSubmit} type='primary' disabled={!validate}>
          {isEdit ? '저장' : '생성'}
        </Button>
      </div>
    </div>
  );
}

export default ScheduleForm;
