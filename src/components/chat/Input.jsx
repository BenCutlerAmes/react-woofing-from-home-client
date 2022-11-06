import React from 'react'

function Input() {
  return (
    <div class="py-5">
    <input
      class="w-full bg-gray-300 py-5 px-3 rounded-xl"
      type="text"
      placeholder="type your message here..."
    />
    <img src='' alt='' />
    <input type="file" style={{display:"none"}} id='file' />
    <label htmlFor='file'>
    <img src='' alt='' />
    </label>

    </div>
  )
}

export default Input