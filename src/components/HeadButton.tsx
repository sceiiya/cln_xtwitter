import { I_HeadButton } from '../types/Interfaces';

function HeadButton({icon, text}: I_HeadButton) {
    return (
        <>
            <div className="">
                <div>{icon}</div>
                {text}
            </div>
        </>
    )
}

export default HeadButton