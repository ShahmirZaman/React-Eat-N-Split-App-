import React from 'react'
import Friend from './Friend/Friend.jsx'

export default function FriendList({friends,setFriends,setUserIndex,showBillUI,setBillUI}) {
    console.log(friends)
  return (
    <div className='w-[80%] h-[50%] ml-24 border-8 border-[#3350f2] flex justify-center flex-col items-center gap-2 overflow-auto'>
      {
        friends?.map((friend,index) => {
             return <Friend 
             key = {index}
             indexNumber = {index} 
             friend={friend} 
             setFriends={setFriends} 
             setUserIndex={setUserIndex} 
             showBillUI = {showBillUI}
             setShowBillUI = {setBillUI} />
        })
      }
    </div>
  )
}
