import { clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs) {
    return twMerge(clsx(inputs))
}

export const toCapitalize = (str) => {
    return str.charAt(0).toUpperCase() + str.slice(1);
};

export function generateUUID() {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
        const r = Math.random() * 16 | 0,
            v = c === 'x' ? r : (r & 0x3 | 0x8);
        return v.toString(16);
    });
}


   export  const convertDate = (isoDate) => {
        const date = new Date(isoDate);

        const year = date.getUTCFullYear();
        const month = String(date.getUTCMonth() + 1).padStart(2, '0');
        const day = String(date.getUTCDate()).padStart(2, '0');

        return `${year}-${month}-${day}`;
    };

export function isMoreThanOneDayFromNow(inputDate) {
    const oneDayInMillis = 24 * 60 * 60 * 1000 * 7; // 1 ngày tính bằng milliseconds
    const currentDate = Date.now(); // thời gian hiện tại (milliseconds)

    const targetDate = new Date(inputDate).getTime(); // thời gian của ngày cần kiểm tra (milliseconds)

    return (targetDate - currentDate) >= oneDayInMillis;
}
