export const getDateFromEpoch = (epoch: number) => {
  if (!epoch) return;
  const date = new Date(epoch * 1000);
  const dayNumeric = date.getDate();
  const month = date.toLocaleString("default", { month: "long" });
  return `${dayNumeric} ${month} ${date.getFullYear()}`;
};
