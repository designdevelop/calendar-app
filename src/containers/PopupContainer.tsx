import Popup from '../components/molecules/Popup';
import { usePopupState } from '../components/molecules/Popup/context';

function PopupContainer() {
  const popupState = usePopupState();
  return popupState.isOpen ? <Popup>{popupState.content}</Popup> : null;
}

export default PopupContainer;
