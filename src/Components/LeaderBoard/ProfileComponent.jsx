import React from 'react'
function ProfileComp({name='Doe',surname='John',post='telec.',minAvg=0 ,position=0}) {
  return (
    <>
        <div id='profileCard' className='w-[full] h-fit bg-white rounded-md drop-shadow-md flex items-center px-[20px] py-2 gap-2 '>
            <div id='profilePic' className='w-[40px] h-[40px] bg-slate-400 rounded-md  '>
            </div>

            <div id='dataZone' className='w-full flex items-center justify-between'>
                <div>
                <p className='font-title text-titles text-sm'>{name} {surname} <span className='text-subtitles font-title'>-{post}</span> </p>
                <p className='text-subtitles font-title text-[12px]'>temps moyens par appel : {minAvg}</p>
                </div>

                <div>
                    <p id='position' className='font-content text-titles text-[18px] font-semibold'>{position}</p>
                </div>
            </div>
        </div>
    </>
  )
}

export default ProfileComp