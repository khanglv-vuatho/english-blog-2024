'use client'

import { IconButton } from '@/components/Buttons'
import { Avatar, Button, Popover, PopoverContent, PopoverTrigger } from '@nextui-org/react'
import { Setting4 } from 'iconsax-react'
import { googleLogout, useGoogleLogin } from '@react-oauth/google'
import { ToastComponent } from '@/components/ToastComponent'
import Cookies from 'js-cookie'
import instance from '@/services/axiosConfig'
import useUserStore from '@/stores'
import { useEffect, useState } from 'react'
import ImageCustom from '@/components/ImageCustom'

const Login = () => {
  // get cookie access_token
  const access_token = Cookies.get('access_token')
  const { user, setUser } = useUserStore()
  const [isLoginSuccess, setIsLoginSuccess] = useState(false)

  // handle get user info
  const handleFetchingUser = async (accessTokenProp: string) => {
    try {
      const dataUser: any = await instance.get(`https://www.googleapis.com/oauth2/v1/userinfo?access_token=${accessTokenProp}`)

      setUser(dataUser)
      setIsLoginSuccess(true)

      // if (!whitelist.includes(dataUser.email)) {
      //   ToastComponent({ message: 'You are not authorized', type: 'error' })
      //   localStorage.removeItem('access_token')
      //   //clear cookie
      //   destroyCookie(null, 'access_token', { path: '/' })
      //   router.push('/login')

      //   return
      // } else {
      //   useStoreUserLogin.setState({ userLogin: dataUser })
      //   setInfoUser(dataUser)
      //   localStorage.setItem('access_token', token)
      //   //set cookie
      //   setCookie(null, 'access_token', token, {
      //     maxAge: 86400,
      //     path: '/'
      //   })
      // }
    } catch (error) {
      ToastComponent({ message: 'Login Failed', type: 'error' })

      localStorage.removeItem('access_token')
      Cookies.remove('access_token')
      console.log(error)
    }
  }

  const handleLogout = () => {
    googleLogout()
    Cookies.remove('access_token')
    localStorage.removeItem('access_token')
    setIsLoginSuccess(false)
    setUser({
      name: '',
      email: '',
      picture: '',
      given_name: ''
    })
  }

  const handleLogin = useGoogleLogin({
    onSuccess: async (tokenResponse) => {
      if (tokenResponse) {
        await handleFetchingUser(tokenResponse.access_token)
        localStorage.setItem('access_token', tokenResponse.access_token)
        // set cookie
        Cookies.set('access_token', tokenResponse.access_token)
        setIsLoginSuccess(true)
        ToastComponent({
          message: 'Login Successful',
          type: 'success'
        })
      }
    },
    onError: () => {
      ToastComponent({
        message: 'Login Failed',
        type: 'error'
      })
    }
  })

  // login with google

  return (
    <div className='flex w-full justify-end gap-2'>
      {/* <IconButton className='size-8 max-h-8 min-w-min max-w-8 md:hidden md:max-h-none md:max-w-none'>
        <Setting4 />
      </IconButton> */}
      {isLoginSuccess || !!access_token ? (
        <Popover placement='bottom' showArrow={true}>
          <PopoverTrigger>
            <Avatar size='md' className='shrink-0' src={user?.picture as string} />
          </PopoverTrigger>
          <PopoverContent className='p-0'>
            <div className='flex min-w-[200px] flex-col gap-3 p-4'>
              <div className='flex items-center gap-2'>
                <ImageCustom src={user?.picture as string} className='h-8 w-8 rounded-full' height={32} width={32} alt={user?.given_name as string} />
                <div className='flex flex-col'>
                  <p>{user?.given_name}</p>
                  <p>{user?.email}</p>
                </div>
              </div>
              <Button onPress={handleLogout} className='w-full bg-primary-blue py-2 text-white'>
                Logout
              </Button>
            </div>
          </PopoverContent>
        </Popover>
      ) : (
        <Button onClick={() => handleLogin()}>Login With Google</Button>
      )}
    </div>
  )
}

export default Login
