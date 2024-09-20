import { useEffect, useState } from "react";

export const useImgBlob = (img?: Blob) => {
  const [imgURL, setImgURL] = useState<string | null>(() =>
    img ? URL.createObjectURL(img) : null,
  );

  useEffect(() => {
    if (img) {
      const objectURL = URL.createObjectURL(img);
      setImgURL(objectURL);
      return () => {
        URL.revokeObjectURL(objectURL);
      };
    } else {
      setImgURL(null); // img가 없으면 imgURL을 null로 설정
    }
  }, [img]);

  return imgURL;
};
