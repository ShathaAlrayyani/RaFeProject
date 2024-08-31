export const extractId = (path: string): string => {
  const parts = path.split("/");
  return parts[parts.length - 1];
};

export const extractSectionName = (path: string): string => {
  const parts = path.split("/");
  console.log("parts: " + parts);
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
      return "https://ra-fe-project.vercel.app/api/productions"
    case 'tv_Commercials':
      return "https://ra-fe-project.vercel.app/api/tvCommercials"
    case 'documentaries':
      return "https://ra-fe-project.vercel.app/api/documentaries"
    default:
      return "";
  }
};
