import React from 'react'
import { useState } from 'react';
import Tg from "./toggle";
import { UseAlchemy } from './Hooks/Connection';

import SideMenu from './Sidemenu';

function Nav() {

  const {ownerAddress,accountAddress,provider, handleLogin,userInfo,loading} = UseAlchemy();
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
  <div className='navbar navbar-expand navbar-light bg-white topbar mb-4 static-top shadow fixed-top-bar'>
  <button
            id="sidebarToggleTop"
            className="btn btn-link d-md-none rounded-circle mr-3"
            onClick={Tg}
          >
              <i className="fa fa-bars" />
            </button>
            <ul className="navbar-nav ml-auto">
              {/* Nav Item - Search Dropdown (Visible Only XS) */}
              <li className="nav-item dropdown no-arrow d-sm-none">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  id="searchDropdown"
                  role="button"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  <i className="fas fa-search fa-fw" />
                </a>
                {/* Dropdown - Messages */}
                <div
                  className="dropdown-menu dropdown-menu-right p-3 shadow animated--grow-in"
                  aria-labelledby="searchDropdown"
                >
                  <form className="form-inline mr-auto w-100 navbar-search">
                    <div className="input-group">
                      <input
                        type="text"
                        className="form-control bg-light border-0 small"
                        placeholder="Search for..."
                        aria-label="Search"
                        aria-describedby="basic-addon2"
                      />
                      <div className="input-group-append">
                        <button className="btn btn-primary" type="button">
                          <i className="fas fa-search fa-sm" />
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
              </li>
              <div className="topbar-divider d-none d-sm-block" />
              {/* Nav Item - User Information */}
              <li className="nav-item dropdown no-arrow">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  id="userDropdown"
                  role="button"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  <img
                    className="img-profile rounded-circle"
                    src="img/undraw_profile.svg"
                  />
                </a>
                {/* Dropdown - User Information */}
                <div
                  className="dropdown-menu dropdown-menu-right shadow animated--grow-in"
                  aria-labelledby="userDropdown"
                >
                  <div className="dropdown-divider" />
                  <a
                    className="dropdown-item"
                    href="#"
                    data-toggle="modal"
                    data-target="#logoutModal"
                  >
                    <i className="fas fa-sign-out-alt fa-sm fa-fw mr-2 text-gray-400" />
                    Logout and clear data from browser
                  </a>
                </div>
              </li>
            </ul>
   
    <div className='maincomp flex'>
      {accountAddress &&isOpen &&  <SideMenu address={ownerAddress} isOpen={isOpen} setIsOpen={setIsOpen} accountAddress={accountAddress} logout={logout} userInfo={userInfo} />}
      {accountAddress == null && !loading && <button onClick={() => handleLogin()} className='connect-button' id="connect-button">Connect to Web3</button>}
      {accountAddress !== null &&!isOpen&& (
        <>
          <button onClick={() => setIsOpen(true)} className='account-button' id="account-button">
            {truncateAddress(accountAddress)}
          </button>
          {/* <div className='flex items-center p-2 px-2 bg-[#2172e5] rounded-r-lg' id="profile-image-container">
            <img
              className="img-profile rounded-circle"
              id="profile-image"
              width={25}
              height={25}
              src="img/undraw_profile.svg"
            />
          </div> */}
        </>
      )}
      {loading && <button className='loading-button' id="loading-button">Loading...</button>}
    </div>
  </div>
</>
  )
}

export default Nav


