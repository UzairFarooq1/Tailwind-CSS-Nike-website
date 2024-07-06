import {headerLogo} from '../assets/images';
import {hamburger} from '../assets/icons'
import { navLinks } from '../constants';



const nav = () => {
  return (
    <header className='padding-x py-8 absolute z-10 w-full '>
        <nav className='flex justify-between items-center max-container'>
            <a href="/">
            <img src={headerLogo} alt="Logo" width={100} height={20}/>
            </a>
        <ul className='flex-1 flex justify-center items-right gap-16 max-lg:hidden'>
            {navLinks.map((item) => (
                <li key={item.label}>
                    <a href={item.href} className='font-montserrat leading-normal text-lg text-slate-grey'>
                        {item.label}
                    </a>
                </li>
            ))}
        </ul>
        </nav>
    </header>
  )
}

export default nav