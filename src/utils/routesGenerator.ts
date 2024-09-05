import { TRoute, TUserPaths } from "../types";

// routes generator
const routesGenerator = (paths: TUserPaths[]) => {
  const result = paths.reduce((acc: TRoute[], item) => {
    if (item.name && item.path) {
      acc.push({
        path: item.path,
        element: item.element,
      });
    } else if (item.children) {
      item.children.forEach((child) =>
        acc.push({
          path: child.path as string,
          element: child.element,
        })
      );
    }
    return acc;
  }, []);

  return result;
};

export default routesGenerator;
