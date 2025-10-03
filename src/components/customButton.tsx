import {cva, type VariantProps} from 'class-variance-authority'
import {cn} from "../utils/lib.ts";
import type {ButtonHTMLAttributes, ReactNode} from "react";

// TCustomButton : children ReactNode - to pass different texts or icons to the button
//                 extends ButtonHTMLAttributes<HTMLButtonElement> so you can pass all the button attributes via ...props


// cva : it takes 2 props, a string which defines the common styling for all the components derived from this one and an object defining the variants of the object
//       you can create any type of variant for your component


// we  also extend the type with "VariantProps<typeof 'variants'>" so it will automatically get al attributes

type TCustomButton = ButtonHTMLAttributes<HTMLButtonElement>
    & VariantProps<typeof btnVariants>
    & {
    children: ReactNode;
}


const btnVariants = cva('rounded-md font-semibold cursor-pointer', {
    variants: {
        variant: {
            primary: 'bg-amber-300',
            secondary: 'bg-amber-100 text-black',
            danger: 'bg-red-400 text-white ',
        },
        size: {
            lg: 'px-6 py-2 text-xl min-w-20',
        },
    },
    defaultVariants: {
        variant: 'primary',
        size: 'lg'
    },
})


const CustomButton = ({children, className, variant, size, ...props}: TCustomButton) => {
    return (
        <button className={cn(btnVariants({variant, size, className}))} {...props}>{children}</button>
    )
}
export default CustomButton
