// CSS Module
import classNames from 'classnames/bind';
import style from './InputText.module.scss';
const cx = classNames.bind(style);

interface InputTextProps {
  id: string;
  label?: string;
  value: any;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

InputText.defaultProps = {
  label: null,
};

function InputText({ id, label, value, onChange }: InputTextProps) {
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
        type='text'
        value={value}
        onChange={onChange}
      />
    </div>
  );
}

export default InputText;
