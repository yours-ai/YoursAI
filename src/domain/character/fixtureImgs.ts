import jiaProfile from "./fixtures/jia.png";
import senaProfile from "./fixtures/sena.png";
import senaBackground from "./fixtures/sena-background.jpg";
import { fetchImageAsBlob } from "@/utils.ts";

export const fetchFixtureImgs = async () => {
  return {
    sena: {
      profile: await fetchImageAsBlob(senaProfile),
      background: await fetchImageAsBlob(senaBackground),
    },
    jia: {
      profile: await fetchImageAsBlob(jiaProfile),
    },
  };
};
