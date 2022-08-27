const getDates = () => {
  // Months
  const shortMonths: string[] = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  // Days
  const days: string[] = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Satuerday",
  ];
  // Short days
  const shortDays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

  // Get short mounth
  const getMonthShort = (num: number): string => shortMonths[num];
  // Get days
  const getDay = (num: number): string => days[num];
  // Get short days
  const getShortDay = (num: number): string => shortDays[num];

  return { getMonthShort, getDay, getShortDay } as const;
};

export default getDates;
