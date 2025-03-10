import { ReactNode, useEffect } from 'react'
import { Navbar } from '../../components/navbar'

interface IPageWrapper {
    children: ReactNode
}

export const PageWrapper = (props: IPageWrapper) => {
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    return (
        <div className="p-0 m-0 bg-[#0e141b] overflow-hidden h-screen">
            <Navbar />
            <div className="flex flex-col w-full h-screen">{props.children}</div>
        </div>
    )
}
