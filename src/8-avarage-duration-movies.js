export function getAvarageDurationMovies(movies) {
  if (!movies) {
    return {};
  }

  const totalRuntime = movies.reduce(
    (acc, { Runtime }) => {
      acc["total"] += Runtime;
      acc["count"] += 1;
      return acc;
    },
    { total: 0, count: 0 }
  );

  const { total, count } = totalRuntime;
  const avarageRuntime = total / count;
  return `${(avarageRuntime / 60).toFixed(0)}h-${(avarageRuntime % 60).toFixed(
    0
  )}m`;
}
