// CSS Module
import classNames from 'classnames/bind';
import style from './InputSelect.module.scss';
const cx = classNames.bind(style);

interface InputSelectProps {
  id: string;
  label?: string;
  options: Array<{ label: string; value: any; disabled?: boolean }>;
  value: any;
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
}

InputSelect.defaultProps = {
  label: null,
};
function InputSelect({
  id,
  label,
  options,
  value,
  onChange,
}: InputSelectProps) {
  return (
    <div className={cx('input-wrap')}>
      {label && (
        <label className={cx('label')} htmlFor={id}>
          {label}
        </label>
      )}
      <select id={id} className={cx('input')} onChange={onChange} value={value}>
        <option value=''>{label}</option>
        {options.map(({ label, value: v, disabled }, key) => (
          <option key={key} value={v} disabled={disabled}>
            {label}
          </option>
        ))}
      </select>
    </div>
  );
}

export default InputSelect;
