import { I_HeadButton } from '../types/Interfaces'
import { useNavigate } from 'react-router-dom'

function HeadButton({Icon, text, navigateTo}: I_HeadButton) {
    const navigate = useNavigate()
    return (
        <>
            <div className="flex p-4 m-2 hover:bg-slate-300 rounded-full hover:ease-in-out"
                onClick={() => navigate(navigateTo)}
            >
                <div className='p-1'>{<Icon />}</div>
                {text}
            </div>
        </>
    )
}

export default HeadButton