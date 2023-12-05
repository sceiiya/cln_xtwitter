import { I_HeadButton } from '../types/Interfaces';

function HeadButton({Icon, text}: I_HeadButton) {
    return (
        <>
            <div className="flex p-4 m-2 hover:bg-slate-300 rounded-xl hover:ease-in-out">
                <div className='p-1'>{<Icon />}</div>
                {text}
            </div>
        </>
    )
}

export default HeadButton