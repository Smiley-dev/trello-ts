export const filterResponse = (
      data: object[],
      filterValues: string[],
): object[] => {
      const filteredResponse = data.map((toFilter: any) => {
            return Object.keys(toFilter)
                  .filter((key) => filterValues.includes(key))
                  .reduce((obj: any, key: string) => {
                        obj[key] = toFilter[key];
                        return obj;
                  }, {});
      });
      return filteredResponse;
};
