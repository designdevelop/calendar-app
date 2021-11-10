export interface PopupProviderProps {
  children: React.ReactNode;
}

export interface PopupReducerStateType {
  isOpen: boolean;
  content: React.ReactNode;
}

export interface PopupActionType {
  type: 'CLOSE' | 'OPEN';
  payload?: React.ReactNode;
}

export interface PopupContextStateType extends PopupReducerStateType {
  popupDispatch: any;
}
