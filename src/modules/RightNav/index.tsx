'use client'

import { IconButton } from '@/components/Buttons'
import { Avatar } from '@nextui-org/react'
import { Setting4 } from 'iconsax-react'

const Login = () => {
  // const login = useGoogleLogin({
  //   onSuccess: async (tokenResponse) => {
  //     if (tokenResponse) {
  //       console.log(tokenResponse)
  //       localStorage.setItem('access_token', tokenResponse.access_token)

  //       ToastComponent({
  //         message: 'Login Successful',
  //         type: 'success'
  //       })

  //       router.push('/')
  //     }
  //   },
  //   onError: () => {
  //     ToastComponent({
  //       message: 'Login Failed',
  //       type: 'error'
  //     })
  //   }
  // })

  // // login with google
  // const handleLogin = () => login()

  return (
    <div className='flex w-full justify-end gap-2'>
      <IconButton className='size-8 max-h-8 min-w-min max-w-8 md:hidden md:max-h-none md:max-w-none'>
        <Setting4 />
      </IconButton>
      {/* <Button onClick={handleLogin}>Login With Google</Button> */}
      <Avatar className='size-8 max-h-8 max-w-8 md:size-10 md:max-h-none md:max-w-none' radius='sm' />
    </div>
  )
}

export default Login
