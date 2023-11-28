import HeadButton from './HeadButton';
import { FaTwitter } from 'react-icons/fa';

function Header() {
    return (
        <>
            <div>
                <HeadButton
                    icon={FaTwitter}
                    text='Home'
                />
            </div>
        </>
    )
}

export default Header