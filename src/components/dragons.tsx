import { AiFillWarning } from "react-icons/ai";

function AlphaWarn(){
    return (<><div className="inline-block self-center bg-surface2 rounded-md m-5 p-5 border-yellow border-[4px]">
    <div className="flex"><div className=" pr-5 self-center"><AiFillWarning size={25} className="text-yellow " /></div>
    <div className="font-bold text-subtext1">
    Here Be dragons
     <p>This is still in alpha so expect bugs, crashes.</p>
    </div>
     </div></div></>)
}
export {AlphaWarn}