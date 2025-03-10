import { useState } from 'react'
import { ImageUrl } from '../../assets'
import { NavbarStyle } from './style'
import { IoMenu } from 'react-icons/io5'
import { useNavigate } from 'react-router-dom'
import { listRoute } from '../../routes/listRoute'

export const Navbar = () => {
    const [showNavbar, setShowNavbar] = useState<boolean>(false)
    const navigate = useNavigate()

    const handleNavigation = (routhPath: string) => {
        console.log('routhP', routhPath)
        navigate(routhPath)
    }

    return (
        <div className="w-full flex justify-between p-8">
            <img
                src={ImageUrl.photoProfile}
                alt="avatar"
                className="inline-block object-cover object-center w-11 h-11 rounded-full"
            />

            <div className="flex items-center flex-col">
                <button
                    className="lg:hidden self-end"
                    onClick={() => {
                        setShowNavbar(!showNavbar)
                    }}
                >
                    <IoMenu size={24} color="#FFFFFF" />
                </button>
                <div
                    className={`${
                        showNavbar ? 'flex' : 'hidden'
                    } lg:flex flex-col lg:flex-row text-[#DADDE2] font-lato gap-4`}
                >
                    <div
                        className={NavbarStyle.itemContainer}
                        onClick={() => handleNavigation(listRoute.home.path)}
                    >
                        Home
                    </div>
                    <div
                        className={NavbarStyle.itemContainer}
                        onClick={() => handleNavigation(listRoute.projects.path)}
                    >
                        Projects
                    </div>
                    <div
                        className={NavbarStyle.itemContainer}
                        onClick={() => handleNavigation(listRoute.blog.path)}
                    >
                        Blog
                    </div>
                </div>
            </div>
        </div>
    )
}
