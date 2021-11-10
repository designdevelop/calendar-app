import React, { useReducer, useContext } from 'react';
import { popupReducer, initPopupState } from './def';

import { PopupProviderProps, PopupContextStateType } from './type';

export const PopupContext = React.createContext<PopupContextStateType | null>(
  null,
);

export const PopupContextProvider = ({ children }: PopupProviderProps) => {
  const [popupState, popupDispatch] = useReducer(popupReducer, initPopupState);

  const value: PopupContextStateType = {
    ...popupState,
    popupDispatch,
  };

  return (
    <PopupContext.Provider value={value}>{children}</PopupContext.Provider>
  );
};

export function usePopupState() {
  const state = useContext(PopupContext);
  if (!state) throw new Error('Cannot find PopupContextProvider');
  return state;
}
