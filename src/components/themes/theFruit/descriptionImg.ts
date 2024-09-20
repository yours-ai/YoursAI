import descriptionImgUrl from "./imessage.png";
import { fetchImageAsBlob } from "@/utils.ts";

export const fetchDescriptionImgBlob = () =>
  fetchImageAsBlob(descriptionImgUrl);
