const isPageAccessedByReload = () => {
  let accessedByReload = false;

  try {
    accessedByReload = performance
      .getEntriesByType("navigation")
      .map((nav) => (nav as PerformanceNavigationTiming).type)
      .includes("reload");
  } finally {
    return accessedByReload;
  }
};

export default isPageAccessedByReload;
