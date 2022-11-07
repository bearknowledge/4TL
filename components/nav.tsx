import React from "react"


export const Nav = () => {

return (
  <div className='flex flex-row h-[10%] w-full justify-around fixed bottom-0 border border-top'>
  <a href="/" className='flex flex-col justify-center items-center'><img className="h-[20%]" src="discover.svg"/><h1>Discover</h1></a>
  <a href="/connect" className='flex flex-col justify-center items-center'><img className="h-[20%]" src="connect.svg"/><h1>Connect</h1></a>
  <a href="/profile" className='flex flex-col justify-center items-center'><img className="h-[20%]" src="profile.svg"/><h1>Profile</h1></a>
  </div>
)

}