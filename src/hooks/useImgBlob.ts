import { useEffect, useState } from "react";

export const useImgBlob = (img?: Blob) => {
  const [imgURL, setImgURL] = useState<string | null>(() =>
    img ? URL.createObjectURL(img) : null,
  );

  useEffect(() => {
    if (img) {
      setImgURL(URL.createObjectURL(img));
    }
    return () => {
      if (imgURL) {
        URL.revokeObjectURL(imgURL);
      }
    };
  }, [imgURL, img]);

  return imgURL;
};
