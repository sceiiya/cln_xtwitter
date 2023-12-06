import HeadButton from './HeadButton'
import { FaTwitter } from 'react-icons/fa'
import { FaHouseChimney } from "react-icons/fa6"
import { IoSearch } from "react-icons/io5"
import { GoBell } from "react-icons/go"
import { FaRegRectangleList } from "react-icons/fa6"
import { IoPeopleOutline } from "react-icons/io5"
import { FiMail } from "react-icons/fi"
// import { BsPeople } from "react-icons/bs"
import { IoPersonOutline } from "react-icons/io5"
import { CgMoreO } from "react-icons/cg"

function Header() {
    return (
        <>
            <div>
                <HeadButton Icon={FaHouseChimney} text='Home' />
                <HeadButton Icon={IoSearch} text='Explore' />
                <HeadButton Icon={GoBell} text='Notifications' />
                <HeadButton Icon={FiMail} text='Messages' />
                <HeadButton Icon={FaRegRectangleList} text='Lists' />
                <HeadButton Icon={IoPeopleOutline} text='Communities' />
                <HeadButton Icon={IoPersonOutline} text='Profile' />
                <HeadButton Icon={CgMoreO} text='More' />
            </div>
        </>
    )
}

export default Header