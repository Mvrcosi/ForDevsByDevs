import React from 'react';

type SidebarProps = {
    
};




const Sidebar:React.FC<SidebarProps> = () => {

    
    return (
        <div className=' w-1/3 bg-white m-3'> 
            <div className='p-2'>
                <p className='text-xs font-bold uppercase text-slate-700'>Reference</p>
                <div className='pl-3 m-2'>
                </div>
            </div>
        </div>
    )
}
export default Sidebar; 