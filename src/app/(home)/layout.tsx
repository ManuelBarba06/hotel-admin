import { Avatar, Link, Navbar, NavbarContent} from '@nextui-org/react'

import { menuItems } from '@/data/menuItems'

import styles from './layout.module.css'

const layout = ({children}: {children: React.ReactNode}) => {
  return (
    <div className='min-h-screen flex flex-col'>
        <div className={`flex flex-col md:flex-row flex-1`}>
            <aside className={`${styles.side_menu_container} md:w-60 p-1`}>
                <div className='h-20 flex justify-center items-center border-b-2 '>
                    <h1 className='font-bold text-white text-2xl'>Posada Real</h1>
                </div>
                <nav>
                    <ul>
                        {menuItems.map(({href,title}) => (
                            <li
                                className='m-2' key={title}
                            >
                              <Link 
                                href={href}
                                className={`flex p-2 rounded cursor-pointer mb-1 h-16 text-white font-medium`}
                               >
                                    {title}
                              </Link>
                            </li>
                        ))
                        }
                    </ul>
                </nav>
            </aside>
            <div className='w-full'>
                <Navbar isBordered maxWidth='full'>
                    <NavbarContent as={"div"} className='items-center' justify='end'>
                        <Avatar
                            isBordered
                            as={"button"}
                            className='transition-transform'
                            color='primary'
                            size='sm'
                            src='https://res.cloudinary.com/dnesdnfxy/image/upload/v1701377400/hotel/profile/j2ibf8bk8qn3g1kb1wdb.png'
                        />
                    </NavbarContent>
                </Navbar>
                {children}
            </div>
        </div>
    </div>
  )
}

export default layout