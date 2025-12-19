import { Copy, Copyright } from 'lucide-react'

export default function Footer({lang}:{lang:string}) {
  return (
    <footer className='min-h-[15vh] pb-4 text-center text-white capitalize bg-[#363659]'>
        <div className='w-[70%] border-b mx-auto py-3 my-2'>{lang==="en"?"a portfolio for mohammad saber":"محفظة اعمال لمحمد صابر"}</div>
      <span className='text-gray-500'>{lang==="ar"&&<Copyright className='inline'/>} {lang==="en"?"all rights reserved":"جميع الحقوق محفوظة"} {lang==="en"&&<Copyright className='inline'/>}</span>
    </footer>
  )
}
