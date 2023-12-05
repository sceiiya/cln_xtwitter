import HeadButton from './HeadButton';
import { FaTwitter } from 'react-icons/fa';

function Header() {
    return (
        <>
            <div>
                <HeadButton Icon={FaTwitter} text='Home' />
                <HeadButton Icon={FaTwitter} text='Explore' />
                <HeadButton Icon={FaTwitter} text='Notifications' />
                <HeadButton Icon={FaTwitter} text='Messages' />
                <HeadButton Icon={FaTwitter} text='Lists' />
                <HeadButton Icon={FaTwitter} text='Communities' />
                <HeadButton Icon={FaTwitter} text='Profile' />
                <HeadButton Icon={FaTwitter} text='More' />
            </div>
        </>
    )
}

export default Header