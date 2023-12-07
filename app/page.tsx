import Card, { LineCard, SingleLineCard } from '@/components/Card'
import P from '@/components/P'
import Image from 'next/image'

export default function Home() {
  return (
    <div className='background_image text-white px-4 md:pl-24 lg:l-32 lg:pr-0 pb-20'>

          <div className='relative z-10'>
            <div className='absolute left-[0px] -top-[200px] h-[400px] w-[400px]'>
              <div className=''>
                <img src="/../img/sphere_12.png" className='w-[400px] h-[400px]' />
              </div>
            </div>
          </div>
        
      <div className='relative'>
        <div className='absolute'>
          <div className='background_image'>
          </div>
        </div>
      </div>
      <div className='background_image'>
      <div className='block md:flex'>
        <div className='w-full md:w-1/2 pt-28 md:pt-40'>
          <div>
            <p className='text-[#EB3A4A] text-[10px] pb-7'>LOREM IPSUM DOLOR</p>
            <h2 className='text-[36px] md:text-[52px] font-bold leading-[3.2rem] text-[#E4E4E7] '>GAME-CHANGING INFRASTRUCTURE</h2>
          </div>
          <div>
            <P className='w-full md:w-[70%]' text="A  decentralised, non-custodial social graph, empowering players to take full ownership of their gaming identities and enabling developers to build next-gen applications." />
            <button className='bg-[#EB3A4A] text-white rounded-lg px-10 py-3 text-[14px] md:text-[16px]'>Join Discord</button>
          </div>
        </div>
        <div className='w-full md:w-1/2 pt-4 md:pt-4'>
          <div className='relative'>
              <div className='absolute -top-20'>
                  <img src="/../img/bg_1.png" />
              </div>
              <div className='absolute right-40 -top-20'>
                  <img src="/../img/bg_22.png" width={800} height={400} className='-pt-20' />
                <div className='relative'>
                  <div className='flex flex-col items-center'>
                    <div className='pb-5'>
                      <img src='/../icons/logo.png' alt='pic ' />
                      <div>
                        <span className='text-xs block text-center'>User id:</span>
                        <span className='text-lg block text-center'>XBorg001</span>
                      </div>
                    </div>
                    <div>
                      <div className='border-2 rounded-full p-3'>
                        <img src="/../icons/padlock.png" alt="padlock" />
                      </div>
                    </div>
                    <div>
                      <SingleLineCard title="Soulbound Launchpad" />
                    </div>
                    <div className='flex'>
                      <SingleLineCard title="Soulbound Launchpad" />
                      <SingleLineCard title="Soulbound Launchpad" />
                    </div>
                  </div>
                </div>
              </div>
              <div className='absolute right-40'>
              </div>
          </div>
        </div>
      </div>
      </div>

      <div className='flex flex-col items-center justify-center pt-28'>
        <span className='bg-gradient-to-r from-[#2B2B2B] via-[#EB3A4A] to-[#2B2B2B] inline-block text-transparent bg-clip-text'>Scroll down</span>
        <img src='/../icons/down.svg' alt="asd" />
      </div>


      <div className='flex flex-col justify-center items-center background_image'>
        <div className='text-center w-full md:w-[70%] flex flex-col items-center'>
          <h2 className='uppercase text-[36px] md:text-[52px] pt-40 font-bold leading-[3.2rem] text-[#E4E4E7]'>The value network of gaming</h2>
          <div className='relative '>
            <div className='absolute right-[640px] top-0 h-[100px] w-[100px]'>
              <div className=''>
                <img src="/../img/Spheres1.png" />
              </div>
            </div>
          </div>
          <P className='px-5 md:px-40' text="The fundamental protocol that allows anyone to create gaming applications built on top of player identities." />
          
          <div className='relative '>
            <div className='absolute right-[548px] top-0 h-[100px] w-[100px]'>
              <div className=''>
                <img src="/../img/spheres.png" />
              </div>
            </div>
          </div>
          {/* <P></P> */}
        </div>
        <div className='block md:flex '> 

        <Card title="Gaming social layer" text="Gamers take control of their data." imageText="card1" />
        <Card title="Gaming social layer" text="Gamers take control of their data." imageText="card2" />
      
        </div>
      </div>

      <div className='pt-8 md:pt-16'>
          <div className='block md:flex'>
            
            <div className='w-full md:w-[2/6]'>
              <h2 className='text-[#E4E4E7] text-[28px] md:text-[36px] font-bold mt-24 leading-[2.55rem]'>THE NEW <br /> GAMING WEB</h2>
              <P className='pr4 md:pr-32' text="At the core of the XBorg Data Graph Protocol lies a dynamic and interconnected network of gaming profiles. Each player's profile is represented as a unique ERC-721 NFT, complete with metadata unique to their gaming journey." />
            </div>


            <div className='w-full md:w-[4/6] pt-5 md:pt-16 relative z-20'>
              <div className='flex flex-wrap'>
                <LineCard title='MonkeyIslander872' imageText="logo1" />
                <LineCard title='MonkeyIslander872' imageText="logo2" />
                <LineCard title='MonkeyIslander872' imageText="logo3" />
                <LineCard title='MonkeyIslander872' imageText="logo4" />
                <LineCard title='MonkeyIslander872' imageText="logo5" />
                <LineCard title='MonkeyIslander872' imageText="logo6" />
              </div>
            </div>
          </div>
          
          <div className='relative z-10'>
            <div className='absolute right-[0px] -top-[400px] h-[600px] w-[600px]'>
              <div className=''>
                <img src="/../img/spheres4.png" className='w-[600px] h-[600px]' />
              </div>
            </div>
          </div>
          
      </div>

    </div>
  )
}
