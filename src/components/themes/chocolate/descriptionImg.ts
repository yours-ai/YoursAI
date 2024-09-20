import descriptionImgUrl from "./kakaotalk.webp";
import { fetchImageAsBlob } from "@/utils.ts";

export const fetchDescriptionImgBlob = () =>
  fetchImageAsBlob(descriptionImgUrl);
