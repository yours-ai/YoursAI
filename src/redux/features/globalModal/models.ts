import { ReactNode } from "react";

export interface GlobalModalState {
  isOpen: boolean;
  title: string | null;
  content: ReactNode | null;
  left: string | null;
  right: string | null;
}

export const initialState: GlobalModalState = {
  isOpen: false,
  title: null,
  content: null,
  left: null,
  right: null,
};

export interface GlobalModalActionPayload {
  title: string;
  content: ReactNode;
  left: string;
  right: string;
}
