export const fetchImageAsBlob = async (imageUrl: string): Promise<Blob> => {
  const response = await fetch(imageUrl);
  return await response.blob();
};
