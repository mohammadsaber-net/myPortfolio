import Link from 'next/link'
import { useApp } from '../context/AppContext'
import { NavItem } from '@/interface'
export default function MainNav() {
  const app = useApp() as { Nav?: NavItem[] } | null;
  const Nav = app?.Nav ?? [];
  return (
    <div className='hidden md:flex px-2 gap-4 rounded-full'>
      {Nav.map((navLink)=>(
        <Link className='transition relative hover:scale-105
        p-1 transition-all duration-200 rounded-md 
         hover:text-blue-600' href={navLink.url} key={navLink.id}>
        {navLink.label}
        </Link>
      ))}
    </div>
  )
}
