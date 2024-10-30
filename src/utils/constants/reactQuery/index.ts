const fiveMinutesInMileSeconds: number = 5 * 60 * 1000;

export const reactQueryOptions = {
  staleTime: {
    fiveMinutes: fiveMinutesInMileSeconds as typeof fiveMinutesInMileSeconds,
  },
} as const;
