export const extractId = (path: string): string => {
  const parts = path.split("/");
  return parts[parts.length - 1];
};

export const extractSectionName = (path: string): string => {
  const parts = path.split("/");
  return parts[parts.length - 2];
};

export const filterDataById = (
  data: any[],
  objectKey: string,
  filterValue: string
): any | null => {
  const filteredItem = data.find((item) => item[objectKey] === filterValue);
  return filteredItem || null;
};

export const getURL = (sectionName: string): string => {
  switch (sectionName) {
    case 'productions':
      return "https://racreativesjo.com/api/productions"
    case 'tv_Commercials':
      return "https://racreativesjo.com/api/tvCommercials"
    case 'documentaries':
      return "https://racreativesjo.com/api/documentaries"
    default:
      return "";
  }
};
