// CSS Module
import classNames from 'classnames/bind';
import style from './Button.module.scss';
const cx = classNames.bind(style);

interface ButtonProps {
  type?: string;
  children?: any;
  disabled?: boolean;
  readonly onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

Button.defaultProps = {
  type: null,
  children: '',
  disabled: null,
  onClick: () => {},
};

function Button({ children, disabled, onClick, type }: ButtonProps) {
  return (
    <button className={cx('btn', type)} onClick={onClick} disabled={disabled}>
      {children}
    </button>
  );
}

export default Button;
