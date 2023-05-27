import { NextPage } from 'next'
import { useSession } from 'next-auth/react'
import QRCode from 'qrcode'
import { useState } from 'react'
import { LoadingPage } from '~/components/loading'
interface Props {}
 
const Pay: NextPage<Props> = ({}) => {
    let session = useSession()
    const [src,setSrc] = useState<string>('')
    if(session.status==='loading'){
        return (<LoadingPage></LoadingPage>)
    }
    if(session.status==='authenticated'){
        
    
    QRCode.toDataURL("OK").then(setSrc)
    
  return <div className='flex flex-col justify-center items-center'>
    <div className='bg-overlay0 rounded-sm shadow-sm p-3 text-text text-xl'>Scan to pay</div>
    <img src={src}></img>
  </div>
    }
    return (<div className="flex flex-col justify-center items-center text-2xl">Please Sign-in</div>)
    
}

export default Pay