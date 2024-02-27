import React, { useState } from "react";

export default function AddFriend({friends,setFriends}) {
  const[friendName,setFriendName] = useState("")
  const[friendImg,setFriendImg] = useState("")

  const addFriendHandler = () => {
    const newFriends = [...friends]
    newFriends.push({
      name:friendName,
      imgSrc:friendImg,
      amount:-59,
    })
    setFriends(newFriends);
  }
  

  return (
    <div className="w-[62%] h-[20%] ml-24 flex flex-col bg-[#fcf2e0] text-black p-4">
      <div className="flex justify-between items-center mb-2 text-xl">
        <label htmlFor="friendName">🧑‍🤝‍🧑 Friend name</label>
        <input 
        type="text" 
        name="friendName"
        onChange={(e) => setFriendName(e.target.value)}/>
      </div>
      <div className="flex justify-between items-center text-xl mb-2">
        <label htmlFor="friendImg">📹 Image URL</label>
        <input 
        type="text" 
        name="friendName"
        onChange={(e) => setFriendImg(e.target.value)} />
      </div>
      <div className="w-[100%] flex justify-end items-center text-xl">
        <button 
        className="w-[58%] bg-[#fd9e40] rounded-md"
        onClick={addFriendHandler}>Add</button>
      </div>
    </div>
  );
}
