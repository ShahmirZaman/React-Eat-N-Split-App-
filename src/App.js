import { useState } from "react";
import FriendList from "./components/FriendList/FriendList";
import SplitBillUI from "./components/Split/SplitBillUI";
import AddFriend from "./components/AddFriend/AddFriend";

function App() {
  const friendArr = [
    {
      name:"Clark",
      imgSrc:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRf9wljR7Q2fvVHIqODA-ir1TkX8xuNVBVExBvXzsr8SI-2uCSuv_GARl-iVA&s",
      amount:7,
    },
    
    {
      name:"Sarah",
      imgSrc:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4vnk0arnApp7vwpowH53sp3oDCZgTCgUS3w&usqp=CA",
      amount:-20,
    },
    {
      name:"Anthony",
      imgSrc:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZCJ98l7lWPq6Chz3pPrpW_loySN3WvIYw5Q&usqp=CAU",
      amount:0,
    },
  ]
  const[friends,setFriends] = useState(friendArr)
  const[userIndex,setUserIndex] = useState(0)
  const[showAddFriendUI,setShowAddFriendUI] = useState(false)
  const[showSplitBillUI,setShowSplitBillUI] = useState(false)
  return (
    <div className="w-[100%] h-[100vh] flex">
      <div className="w-[50%] h-[100%] flex items-center justify-center flex-col gap-10">
        <FriendList 
        friends={friends} 
        setFriends={setFriends} 
        setUserIndex = {setUserIndex}
        showBillUI = {showSplitBillUI}
        setBillUI = {setShowSplitBillUI}
        />
        {showAddFriendUI && <AddFriend friends={friends} setFriends={setFriends}/>}
        <div className="w-[62%] h-[10%] ml-24 flex justify-end items-center">
          <button 
          className=" bg-[#fd9e40] text-black font-bold text-md px-8 py-4 rounded-md"
          onClick={() => setShowAddFriendUI(!showAddFriendUI)}>{showAddFriendUI ? "Close" : "Add Friend"}</button>
        </div>
      </div>
      <div className="w-[50%] h-[100%] flex items-center">
        { showSplitBillUI && <SplitBillUI friends={friends} setFriends={setFriends} userIndex = {userIndex}/>}
      </div>
    </div>
  );
}

export default App;
