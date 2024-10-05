export interface CharacterCardState {
  name: string;
  description: string;
  imageLink: string;
}

export const initialCharacterCardState: CharacterCardState = {
  name: "",
  description: "",
  imageLink: "",
};

export interface CharacterCardActionPayload {
  name: string;
  description: string;
  imageLink: string;
}
