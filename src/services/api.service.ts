const baseUrl = "http://185.69.152.209/carsAPI/v1";
export const getCars = async () => {
  const response = await fetch(`${baseUrl}/cars`);
  return response.json();
};
