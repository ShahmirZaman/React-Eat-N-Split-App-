import React, { useState } from "react";

export default function SplitBillUI({friends,setFriends,userIndex}) {
  
  const newFriend = [...friends]

  const[yourExpense,setYourExpense] = useState(0)
  const[freindExpense,setFriendExpense] = useState(0)
  const[billPayer,setBillPayer] = useState()

  const splitBillHandler = () => {
    let splitFriendUser = newFriend[userIndex]
    let count = yourExpense - freindExpense
    if(billPayer !== "You") {
      splitFriendUser.amount = yourExpense * 1
    } else {
      splitFriendUser.amount = -freindExpense * 1
    }
    setFriends(newFriend)
  }

  return (
    <div className="h-[70%] w-[80%] flex justify-center items-center bg-[#fcf2e0] border-8 border-[#d91e68]">
      <div className=" w-[80%] flex flex-col gap-6">
      <h1 className=" text-3xl uppercase font-bold text-center">Split a Bill With {newFriend[userIndex].name}</h1>
      <div className="flex justify-between items-center p-1 ">
        <label for="bill" className=" text-xl font-semibold">💵 Bill Value</label>
        <input type="number" name="bill" className="w-32 h-8"/>
      </div>
      <div className="flex justify-between items-center p-1">
        <label for="yourExpense" className=" text-xl font-semibold">🧍 Your expense</label>
        <input type="number" name="yourExpense" className="w-32 h-8" onChange={(e) => setYourExpense(e.target.value)}/>
      </div>
      <div className="flex justify-between items-center p-1">
        <label for="frndExpense" className=" text-xl font-semibold">🧑‍🤝‍🧑 {`${newFriend[userIndex].name}'s`} expense</label>
        <input type="number" name="frndExpense" className="w-32 h-8" onChange={(e) => setFriendExpense(e.target.value)}/>
      </div>
      <div className="flex justify-between items-center p-1">
      <label for="billPayer" className=" text-xl font-semibold">🤑 Who is paying this bill?</label>
        <select name="billPayer" className="w-32 h-8 text-center" onChange={(e) => setBillPayer(e.target.value)}>
          <option value="you">You</option>
          <option value="name">{newFriend[userIndex].name}</option>          
        </select>
      </div>
      <div className=" p-1 flex justify-end items-center">
        <button className=" bg-[#fd9e40] text-black font-bold w-32 h-8 rounded-md"
        onClick={splitBillHandler}>Split bill</button>
      </div>
      </div>      
    </div>
  );
}
