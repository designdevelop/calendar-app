import { PopupReducerStateType, PopupActionType } from './type';

export const initPopupState: PopupReducerStateType = {
  isOpen: false,
  content: '',
};

export function popupReducer(
  state: PopupReducerStateType,
  action: PopupActionType,
): PopupReducerStateType {
  switch (action.type) {
    case 'OPEN': {
      return {
        content: action.payload,
        isOpen: true,
      };
    }
    case 'CLOSE': {
      return {
        ...state,
        isOpen: false,
      };
    }
    default: {
      return { ...state, isOpen: false };
    }
  }
}
