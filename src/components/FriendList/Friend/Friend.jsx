import React, { useState } from 'react'

export default function Friend({indexNumber , friend , setFriends , setUserIndex ,showBillUI,setShowBillUI}) {
    const [selectFriend, setSelectFriend] = useState(false)
  return (
    <div className='border-2 border-[#7d50f4] w-[80%] h-[30%] flex  justify-around items-center'>
        <div>
            <img className='w-20 h-20 object-cover rounded-full' src={friend.imgSrc}/>
        </div>
        <div>
            <h3 className='font-bold text-2xl'>{friend.name}</h3>
            <p 
            className='font-medium text-md'
            style={{
                color:(friend.amount > 0 ? "red" : friend.amount < 0 ? "#25d366" : "black")
            }}
            >{friend.amount > 0 ? `you owe ${friend.amount}$`: friend.amount == 0 ? `You and ${friend.name} are Even ` : `${friend.name} owes you ${Math.abs(friend.amount)}$`}</p>
        </div>
        <div>
            <button 
            disabled = {!selectFriend && showBillUI}
            className=' bg-[#fd9e40] text-black font-bold px-6 py-2 rounded-md'
            onClick={() =>  {setUserIndex(() => indexNumber); setShowBillUI(() => !showBillUI); setSelectFriend(() => !selectFriend)}}>{!selectFriend ? "Select" : "Close"}</button>
        </div>
    </div>    
  )
}
