import React from 'react'

function Card() {
  return (
    <div class="relative h-[400px] w-[300px] rounded-md">
    
    <img
    src="https://images.unsplash.com/photo-1491975474562-1f4e30bc9468?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="AirMax Pro"
    class="z-0 h-full w-full rounded-md object-cover"/>
    
    <div class="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent"></div>
    <div class="absolute bottom-4 left-4 text-left">
    <h1 class="text-1g font-semibold text-white">Delba</h1>
    <p class="mt-2 text-sm text-gray-300">
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi,
    debitis?
    </p>
    <button class="mt-2 inline-flex cursor-pointer items-center text-sm font-semibold text-white">
    View Profile
    </button>
    </div>
    </div>
  )
}

export default card