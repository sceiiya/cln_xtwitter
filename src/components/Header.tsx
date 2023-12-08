import HeadButton from './HeadButton'
// import { FaTwitter } from 'react-icons/fa'
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
                <HeadButton Icon={FaHouseChimney} text='Home' navigateTo='/home' />
                <HeadButton Icon={IoSearch} text='Explore' navigateTo='/explore' />
                <HeadButton Icon={GoBell} text='Notifications' navigateTo='/notifications' />
                <HeadButton Icon={FiMail} text='Messages' navigateTo='/messages' />
                <HeadButton Icon={FaRegRectangleList} text='Lists' navigateTo='/lists' />
                <HeadButton Icon={IoPeopleOutline} text='Communities' navigateTo='/communities' />
                <HeadButton Icon={IoPersonOutline} text='Profile' navigateTo='/profile' />
                <HeadButton Icon={CgMoreO} text='More' navigateTo='/more' />
            </div>
        </>
    )
}

export default Header