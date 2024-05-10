export const getDateFromEpoch = (epoch: number) => {
  if (!epoch) return;
  const date = new Date(epoch * 1000);
  const dayNumeric = date.getDate();
  const month = date.toLocaleString("default", { month: "long" });
  return `${dayNumeric} ${month} ${date.getFullYear()}`;
};

export const getFormattedDateText = (epoch: number) => {
  if (!epoch) return;
  const date = new Date(epoch * 1000);
  const day = date.toLocaleDateString("en", {
    weekday: "long",
  });
  let hours = date.getHours();
  const minutes = date.getMinutes();
  const isAm = hours >= 12 ? "PM" : "AM";
  hours = hours % 12;
  hours = hours ? hours : 12; // Handle midnight (0 hours)

  const formattedTime = `${hours}:${
    minutes < 10 ? "0" + minutes : minutes
  } ${isAm}`;

  return `${day.toString()}, ${formattedTime}`;
};
