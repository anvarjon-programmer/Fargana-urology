import { memo } from "react"

const Wrapper = ({children}) => {
    return (
        <div className="max-w-[1280px] px-[10px] lg:px-0 mx-auto">
            {children}
        </div>
    )
}

export default memo(Wrapper)