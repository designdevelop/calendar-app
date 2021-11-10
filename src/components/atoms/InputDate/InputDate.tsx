// CSS Module
import classNames from 'classnames/bind';
import style from './InputDate.module.scss';
const cx = classNames.bind(style);

interface InputDateProps {
  id: string;
  label?: string;
  min?: string;
  value: any;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

InputDate.defaultProps = {
  label: null,
  min: null,
};

function InputDate({ id, label, value, min, onChange }: InputDateProps) {
  return (
    <div className={cx('input-wrap')}>
      {label && (
        <label className={cx('label')} htmlFor={id}>
          {label}
        </label>
      )}
      <input
        className={cx('input')}
        id={id}
        type='date'
        value={value}
        onChange={onChange}
        min={min}
      />
    </div>
  );
}

export default InputDate;
