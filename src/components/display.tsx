import type {ReactNode} from "react";

const Display = ({children}: { children: ReactNode }) => {
    return (
        <div
            className={'display flex flex-col items-center py-20 px-10 gap-20 text-center'}>
            {children}
        </div>
    )
}
export default Display
