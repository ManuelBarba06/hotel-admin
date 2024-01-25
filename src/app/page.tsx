'use client'

import { Button, Input, user } from '@nextui-org/react'
import { useRouter } from 'next/navigation'

import styles from './page.module.css'

export default function Home() {
  
  const router = useRouter()
  
  return (
    <main className="min-h-screen grid grid-cols-2 gap-4">
        <div className={`${styles.container_left } h-full flex flex-col justify-center`}>
          <h1>Hotel</h1>
          <h1>Posada Real</h1>
        </div>
        <div className='h-1 p-60 flex flex-col justify-center'>
          <h2 className='text-center text-3xl font-semibold'>Iniciar Sesión</h2>
          <br/>
          <form
            action={() => {
              router.push("/dashboard")
            }}
          >
            <Input 
              type="email"
              label="Correo"
            />
            <br/>
            <Input
              type="password"
              label="Contraseña"
            />
            <br/>
            <Button
              className={`${styles.login} h-10 text-base`}
              type='submit'
            >
              Iniciar sesión
            </Button>
          </form>
        </div>
    </main>
  )
}
