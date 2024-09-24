export interface ModalState {
  isOpen: boolean;
  modalName: string | null;
}

export const initialState: ModalState = {
  isOpen: false,
  modalName: null,
};
