import type {ClassValue} from 'clsx'
import clsx from 'clsx'
import {twMerge} from "tailwind-merge";


// creating the cn function using twMerge and clsx
// cn takes in ...inputs of type ClassValue[]
const cn = (...inputs: ClassValue[]) => {
    return twMerge(clsx(inputs));
}


// Generates a number between 1-20 which in turn using a switch statement generates the corresponding answer
const numberGenerator = (): number | string => {
    const generatedNumber = Math.floor(Math.random() * 20 + 1);
    let result: number | string = 1;

    switch (generatedNumber) {
        case 1:
            result = 1;
            break;
        case 2:
            result = 2;
            break;
        case 3:
            result = 3;
            break;
        case 4:
            result = 4;
            break;
        case 5:
            result = 5;
            break;
        case 6:
            result = 6;
            break;
        case 7:
            result = 7;
            break;
        case 8:
            result = 8;
            break;
        case 9:
            result = 9;
            break;
        case 10:
            result = 'GROAPA!!!';
            break;
        case 11:
            result = 10;
            break;
        case 12:
            result = 1;
            break;
        case 13:
            result = 2;
            break;
        case 14:
            result = 3;
            break;
        case 15:
            result = 4;
            break;
        case 16:
            result = 5;
            break;
        case 17:
            result = 6;
            break;
        case 18:
            result = 7;
            break;
        case 19:
            result = 8;
            break;
        case 20:
            result = 'GROAPA!!!';
            break;
        default:
            result = 5
            break;
    }

    return result
}


export {
    cn,
    numberGenerator
}