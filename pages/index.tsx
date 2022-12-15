import Head from 'next/head'
import Image from 'next/image'
import SkillComponent from '../components/SkillComponent'
import { FaBriefcase,FaCircle,FaGraduationCap,FaUserAlt,FaSmileWink } from "react-icons/fa"

export default function Home() {
  return (
    <div>
      <Head>
        <title>Andy Khu</title>
        <meta name="description" content="web portofolio Andy Khu" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
        <header className='h-12 flex items-center px-2 border-b-2 border-b-emerald-400 bg-gray-800 font-bold text-white'>
          <FaSmileWink className='mr-2'/>
          Hello!
        </header>
        <div className='p-4'>
          <div className='flex items-center font-bold text-emerald-800 border-b border-b-emerald-600'>
            <FaBriefcase className='mr-2'/>
              About Me
          </div>
          <div className='flex flex-wrap p-2'>
            <div className='flex px-2 sm:px-6 w-full sm:w-1/2 flex-col justify-center items-center pt-4'>
              <Image src="/user.png" width={200} height={200} alt="profile_picture"></Image>
              <span className='py-2 text-emerald-800 text-xl font-bold'>Andy Khu</span>
              <span className='text-emerald-900 text-xs text-center'>Forward-thinking
                <span className='text-blue-700 px-1 font-bold'>
                Software Engineer 
                </span>
                with background working productively in dynamic environments. Fluent in Javascript programming languages used to develop software. Proud team player focused on achieving project objectives with speed and accuracy.</span>
            </div>
            <div className='p-2 w-full sm:w-1/2'>
              <SkillComponent name='CSS' value={90} class="w-[90%]"></SkillComponent>
              <SkillComponent name='HTML' value={90}  class="w-[90%]"></SkillComponent>
              <SkillComponent name='Javascript' value={80}  class="w-[80%]"></SkillComponent>
              <SkillComponent name='Java' value={60}  class="w-[60%]"></SkillComponent>
              <SkillComponent name='React' value={70} class="w-[70%]"></SkillComponent>
              <SkillComponent name='NextJs' value={70} class="w-[70%]"></SkillComponent>
              <SkillComponent name='NodeJs' value={50} class="w-[50%]"></SkillComponent>
              <SkillComponent name='Vue' value={60} class="w-[60%]"></SkillComponent>
            </div>
          </div>
        </div>
        <div className='flex flex-wrap'>
            <div className='w-full sm:w-1/2 lg:w-1/3 p-4'>
              <div className='w-full h-full p-2 relative shadow-md bg-emerald-50'>
                <div className='absolute w-3 h-2 top-0 left-0 border-t-2 border-l-2 border-emerald-600'></div>
                <div className='absolute w-3 h-2 top-0 right-0 border-t-2 border-r-2 border-emerald-600'></div>
                <div className='absolute w-3 h-2 bottom-0 left-0 border-b-2 border-l-2 border-emerald-600'></div>
                <div className='absolute w-3 h-2 bottom-0 right-0 border-b-2 border-r-2 border-emerald-600'></div>
                <div className='flex items-center font-bold text-emerald-800 border-b border-b-emerald-600'>
                  <FaBriefcase className='mr-2'/>
                  Work History
                </div>
                <div className='flex text-emerald-800 text-sm'>
                  <div className='whitespace-nowrap p-2 font-bold'>2016-2019</div>
                  <div className='p-2'>
                    <span className='font-bold text-base'>Application Programmer</span><br/>
                    PT. Waruna Nusa Sentana, Medan, Sumatera Utara<br/>
                    <div className='flex'>
                      <div className='mr-2'>
                        <FaCircle className='pt-1' />
                      </div>
                      <p>Coded projects according to technical specification documentation, precisely adhering to prescribed guidelines and development goals.</p>
                    </div>
                    <div className='flex'>
                      <div className='mr-2'>
                        <FaCircle  className='pt-1'/>
                      </div>
                      <p>Researched software faults, bug and performance issues to determine optimal solutions for inclusion in subsequent patches.</p>
                    </div>
                    <div className='flex'>
                      <div className='mr-2'>
                        <FaCircle  className='pt-1'/>
                      </div>
                      <p>Developed Attendance programs using programming languages such as vue and vaadin.</p>
                    </div>
                    <div className='flex'>
                      <div className='mr-2'>
                        <FaCircle  className='pt-1'/>
                      </div>
                      <p>Created database data entry systems, web forms and other application for diverse uses</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className='w-full sm:w-1/2 lg:w-1/3 p-4'>
              <div className='w-full h-full p-2 relative shadow-md bg-lime-50'>
                <div className='absolute w-3 h-2 top-0 left-0 border-t-2 border-l-2 border-lime-600'></div>
                <div className='absolute w-3 h-2 top-0 right-0 border-t-2 border-r-2 border-lime-600'></div>
                <div className='absolute w-3 h-2 bottom-0 left-0 border-b-2 border-l-2 border-lime-600'></div>
                <div className='absolute w-3 h-2 bottom-0 right-0 border-b-2 border-r-2 border-lime-600'></div>
                <div className='flex items-center font-bold text-lime-800 border-b border-b-lime-600'>
                  <FaGraduationCap className='mr-2'/>
                  Education
                </div>
                <div className='flex text-lime-800 text-sm'>
                  <div className='whitespace-nowrap p-2 font-bold'>2013-2018</div>
                  <div className='p-2'>
                    <span className='font-bold text-base'>Bachelor of Information Technologi</span><br/>
                    STMIK Mikroskil - Jl. M.H Thamrin No. 140 Kel, Pusat PS., Kec Medan<br/>
                  </div>
                </div>
              </div>
            </div>
            <div className='w-full sm:w-1/2 lg:w-1/3 p-4'>
              <div className='w-full h-full p-2 relative shadow-md bg-amber-50'>
                <div className='absolute w-3 h-2 top-0 left-0 border-t-2 border-l-2 border-amber-600'></div>
                <div className='absolute w-3 h-2 top-0 right-0 border-t-2 border-r-2 border-amber-600'></div>
                <div className='absolute w-3 h-2 bottom-0 left-0 border-b-2 border-l-2 border-amber-600'></div>
                <div className='absolute w-3 h-2 bottom-0 right-0 border-b-2 border-r-2 border-amber-600'></div>
                <div className='flex items-center font-bold text-amber-800 border-b border-b-amber-600'>
                  <FaUserAlt className='mr-2'/>
                  Contact
                </div>
                <div className='flex text-amber-800 text-sm'>
                  <div className='p-2'>
                    <span className='font-bold text-base'>Address</span><br/>
                    Kota Binjai, Sumatera Utara, 20719<br/><br/>
                    <span className='font-bold text-base'>Phone</span><br/>
                    +6282162979120<br/><br/>
                    <span className='font-bold text-base'>E-mail</span><br/>
                    andykhu02@gmail.com<br/><br/>
                  </div>
                </div>
              </div>
            </div>
        </div>
      </div>
    </div>
  )
}
