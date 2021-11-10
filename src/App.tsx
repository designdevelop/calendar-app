import CalendarContainer from 'containers/CalendarContainer';
import PopupContainer from 'containers/PopupContainer';
import { CalendarContextProvider } from 'components/organisms/Calendar/context';
import { PopupContextProvider } from 'components/molecules/Popup/context';
import { ScheduleContextProvider } from 'context/scheduleContext/context';

// CSS Module
import classNames from 'classnames/bind';
import style from './App.module.scss';
const cx = classNames.bind(style);

function App() {
  return (
    <div className={`App ${cx('app')}`} style={{ padding: '130px' }}>
      <PopupContextProvider>
        <ScheduleContextProvider>
          <CalendarContextProvider>
            <CalendarContainer />
          </CalendarContextProvider>
          <PopupContainer />
        </ScheduleContextProvider>
      </PopupContextProvider>
    </div>
  );
}

export default App;
