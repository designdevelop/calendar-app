import { useEffect } from 'react';

import { usePopupState } from './context';
import { PopupContextStateType } from './context/type';

// CSS Module
import classNames from 'classnames/bind';
import style from './Popup.module.scss';
const cx = classNames.bind(style);

interface PopupProps {
  children?: React.ReactNode;
}

Popup.defaultProps = {
  children: '',
};

function Popup({ children }: PopupProps) {
  const { popupDispatch }: PopupContextStateType = usePopupState();

  const onClose = () => {
    popupDispatch({ type: 'CLOSE' });
  };

  useEffect(() => {
    document.body.style.cssText = `
      position: fixed; 
      top: -${window.scrollY}px;
      overflow-y: scroll;
      width: 100%;`;
    return () => {
      const scrollY = document.body.style.top;
      document.body.style.cssText = '';
      window.scrollTo(0, parseInt(scrollY || '0', 10) * -1);
    };
  }, []);

  return (
    <div className={cx('shadow')}>
      <div className={cx('popup')}>
        <button className={cx('close-btn')} onClick={onClose}>
          x
        </button>
        {children}
      </div>
    </div>
  );
}

export default Popup;
