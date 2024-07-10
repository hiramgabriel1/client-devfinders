import dayjs from "dayjs";
import toast from "svelte-french-toast";

export const FormatDates = (
    date: Date | string | number
) => {
    if(date === " ") return toast.error('error')
        
    return dayjs(date).format("DD-MM-YY");
};
