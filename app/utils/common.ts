export const extractId = (path: string): string => {
  const parts = path.split("/");
  return parts[parts.length - 1] || '';
};

export const extractSectionName = (path: string): string => {
  const parts = path.split("/");
  return parts[parts.length - 2] || '';
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
  console.log("🚀 ~ getURL ~ sectionName:", sectionName)
  switch (sectionName) {
    case 'productions':
      return "/api/productions"
    case 'tv_Commercials':
      return "/api/tvCommercials"
    case 'documentaries':
      return "/api/documentaries"
    default:
      return "";
  }
};
