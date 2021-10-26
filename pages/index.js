import Head from 'next/head'
import Image from 'next/image'
import Avatar from '../components/Avatar'
import { MicrophoneIcon, ViewGridIcon} from '@heroicons/react/solid'
import { SearchIcon} from '@heroicons/react/outline'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Google v2.0</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Header */} 
      <header className="flex w-full p-5 justify-between text-sm text-gray-700">
        {/* Left */} 
        <div className="flex space-x-4 items-center">
          <p className="link">About</p>
          <p className="link">Store</p>
        </div>
        {/* Right */} 
        <div className="flex space-x-4 items-center">
          <p className="link">Gmail</p>
          <p className="link">Images</p>
          <ViewGridIcon className="h-10 w-10 p-2 rounded-full hover:bg-gray-100 cursor-pointer" />
          <Avatar url="https://media-exp1.licdn.com/dms/image/C5103AQGYKpOql95-Sw/profile-displayphoto-shrink_200_200/0/1517339551606?e=1640822400&v=beta&t=0BRLWGBlDGczdAC_vFjU4GUmuJQzg77R-MnQd7E8t84"/>
        </div>
      </header>

      {/* Body */}
      <form>
        <Image 
          src="https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png" 
          height={100} 
          width={300}  
        />
        <SearchIcon className="h-5 mr-3 text-gray-500" />
        <input type="text" className="focus:outline-none"/>
        <MicrophoneIcon className="h-5"/>
      </form> 


      {/* Footer */} 
    </div>
  )
}
