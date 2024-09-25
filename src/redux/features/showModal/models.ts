import { ReactNode } from "react";

export interface ModalState {
  isOpen: boolean;
  title: string | null;
  content: ReactNode | null;
}

export const initialState: ModalState = {
  isOpen: false,
  title: null,
  content: null,
};

export interface ModalActionPayload {
  // modalName: string;
  title: string;
  content: ReactNode;
}
