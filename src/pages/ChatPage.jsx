import React from 'react'
import SideBar from '../components/chat/SideBar'
import Chat from '../components/chat/Chat'
import NavBar from '../components/chat/NavBar'
import Search from '../components/chat/Search'
import Chats from '../components/chat/Chats'
import Messages from '../components/chat/Messages'
import Input from '../components/chat/Input'


function ChatPage() {
  return (

<div class="container mx-auto shadow-lg rounded-lg">
<NavBar />
    <div class="flex flex-row justify-between bg-white">
      <div class="flex flex-col w-2/5 border-r-2 overflow-y-auto">
        <Search />
        <Chats />
        </div>
        <div class="w-full px-5 flex flex-col justify-between">
        <Messages />
        <Input />

          </div>
          </div>
          </div>


  )
}

export default ChatPage