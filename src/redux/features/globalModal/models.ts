import { ReactNode } from "react";

export interface GlobalModalState {
  isOpen: boolean;
  isDone: boolean;
  title: string | null;
  content: ReactNode | null;
  left: string | null;
  right: string | null;
  leftAction: () => void;
  rightAction: () => void;
  modalStack: GlobalModalActionPayload[];
}

export const initialState: GlobalModalState = {
  isOpen: false,
  isDone: false,
  title: null,
  content: null,
  left: null,
  right: null,
  leftAction: () => {},
  rightAction: () => {},
  modalStack: [],
};

export interface GlobalModalActionPayload {
  title: string;
  content: ReactNode;
  left: string;
  right: string;
  leftAction: () => void;
  rightAction: () => void;
}
