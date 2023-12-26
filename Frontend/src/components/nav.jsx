import React from 'react'
import { useState } from 'react';
import Tg from "./toggle";
import { UseAlchemy } from './Hooks/Connection';

import SideMenu from './Sidemenu';

function Nav() {

  const {ownerAddress,accountAddress,provider, handleLogin,userInfo} = UseAlchemy();
  const [loading, setLoading] = useState(false)
  const [isOpen, setIsOpen] = useState(false);
  const [address, setAddress] = useState("");

  function logout(){
    alert("Logout")
  }
  function truncateAddress(add) {
    const len = add.length;
    if (len < 11) return add;
    return add.substring(0, 6) + "..." + add.substring(len - 4, len);
  }
  return (
    <>
    { accountAddress && <SideMenu address={ownerAddress} isOpen={isOpen} setIsOpen={setIsOpen} accountAddress={accountAddress} logout={logout} userInfo={userInfo} />}
    {accountAddress == null && !loading && <button onClick={() => handleLogin()} className='bg-zinc-900 text-zinc-300 w-fit p-2 px-3 rounded-l-lg'>Connect to Web3</button>}
    {accountAddress !== null && (
      <>
      <button 
        onClick={() => setIsOpen(true)} 
        className='bg-zinc-900 text-zinc-300 w-fit p-2 px-3 rounded-l-lg'> 
      {truncateAddress(accountAddress)}
      </button>
      <div className='flex items-center p-2 px-2 bg-[#2172e5] rounded-r-lg'>
      <img
                    className="img-profile rounded-circle"
                    width={25}
       height={25}
                    src="img/undraw_profile.svg"
                  />
      {/* <img
       src=""
       width={25}
       height={25}
       alt="Picture of the author"
       // className={styles.imageItem}
     />  */}
   </div>
      </>
    )
 }
    {loading && <button className='bg-zinc-900 text-zinc-300 w-fit p-2 px-3 rounded-l-lg'>Loading...</button>}
    </>
  )
}

export default Nav


