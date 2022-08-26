

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
    
    // Get short mounth
    const getMonthShort = (num: number): string => shortMonths[num];
    // Get short days
    const getDay = (num: number): string => days[num];
    
    return { getMonthShort, getDay } as const;

}

export default getDates;