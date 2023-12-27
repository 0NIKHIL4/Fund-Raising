import React, { useEffect, useState } from 'react';
import { Transition } from '@headlessui/react';
import EthBadge from './EthBadge';
import TokenBalance from './TokenBalance';
import "./sidemenu.css";
function SideMenu({ isOpen, setIsOpen, smartAccount, logout, userInfo, address }) {
  const [value, setValue] = useState(0);
  const [balances, setBalances] = useState(null);

  const handleLogout = () => {
    setIsOpen(false);
    logout();
  }

  const getBalances = async () => {
    // ... (your asynchronous balance retrieval logic)
  }

  useEffect(() => {
    getBalances();
  }, []);

  return (
    <div>
      <Transition show={isOpen} as={React.Fragment}>
        <div className="fixed inset-0 overflow-hidden z-50">
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute inset-0 bg-opacity-75 transition-opacity" onClick={() => setIsOpen(false)}></div>

            <section className=" right-0 pl-10 w-full h-full flex items-center justify-end">
              <div className="relative">
                <Transition.Child
                  enter="transform transition ease-in-out duration-500 sm:duration-700"
                  enterFrom="translate-x-full"
                  enterTo="translate-x-0"
                  leave="transform transition ease-in-out duration-400 sm:duration-700"
                  leaveFrom="translate-x-0"
                  leaveTo="translate-x-full"
                >
                  <div className="divide-gray-900 bg-gray-900 text-white ">
                    <div className="px-4 sm:px-6">
                      <div className="flex items-start justify-between">
                        <h2 className="text-lg font-medium text-white">Smart Account</h2>
                        <div className="ml-3 h-7 flex items-center">
                          <button className="bg-black rounded-md text-white hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500" onClick={() => setIsOpen(false)}>
                            <span className="sr-only">Close panel</span>
                            
                          </button>
                        </div>
                      </div>
                    </div>

                    <div className='m-2'>
                      <EthBadge address={address} />
                      <div className="text-white text-2xl m-4">
                        ${value.toFixed(2)}
                      </div>
                      <button className="bg-blue-500 mb-3 text-gray py-2 px-4 rounded-full w-full">
                        Buy Crypto
                      </button>
                      <button onClick={() => handleLogout()} className="bg-blue-500 text-gray py-2 px-4 rounded-full w-full">
                        Logout
                      </button>
                      {balances && balances.map((tok, i) => {
                        if (tok.contract_ticker_symbol === "USDC") {
                          return (
                            <TokenBalance key={i} name={tok.contract_ticker_symbol} value={parseInt(tok.balance) / 10**6} />
                          )
                        }
                        return (
                          <TokenBalance key={i} name={tok.contract_ticker_symbol} value={100} />
                        )
                      })}
                    </div>
                  </div>
                </Transition.Child>
              </div>
            </section>
          </div>
        </div>
      </Transition>
    </div>
  );
}

export default SideMenu;
