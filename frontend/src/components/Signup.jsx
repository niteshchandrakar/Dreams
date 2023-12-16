import { useState } from "react"

export const Signup=()=>{

    const[name,setName]=useState("")
    const[email,setEmail]=useState("")
    const[password,setPassword]=useState("")
    const[gender,setGender]=useState("")

const hadlesubmit=()=>{
    if(name && email && password && gender){
        const payload={name,email,password,gender}
        
        fetch("http://localhost:8080/users/register",{
            method:"POST",
            headers: {
                "Content-Type": "application/json",
              },
              body:JSON.stringify(payload)
        })
        .then(res=>res.json())
        .then(res=>alert(res.msg))
        .catch(err=>console.log(err))
    }else{
        alert("fill all details")
    }

}

    return(
<div >
<div class="max-w-md m-auto mt-6">
  <div
    class="border-t-4 border-blue-600 overflow-hidden rounded shadow-lg"
  >
    <h3 class="text-xl text-center mt-8 mb-8">Welcome</h3>
    <div class="px-4 mb-4">
      <input
        type="text"
        placeholder="Name"
        class="border border-gray rounded w-full p-3"
        onChange={(e)=>{setName(e.target.value)}}
      />
    </div>
    <div class="px-4 mb-4">

      <select name="nitesh"
      class="border border-gray rounded w-full p-3"
      onChange={(e)=>{setGender(e.target.value)}}
      >
        <option value="male">Select Gender</option>
        <option value="male">Male</option>
        <option value="female">Female</option>
      </select>
    </div>
    <div class="px-4 mb-4">
      <input
        type="text"
        placeholder="Email Address"
        class="border border-gray rounded w-full p-3"
        onChange={(e)=>{setEmail(e.target.value)}}
      />
    </div>
    <div class="px-4 mb-4">
      <input
        type="text"
        placeholder="Password"
        class="border border-gray rounded w-full p-3"
        onChange={(e)=>{setPassword(e.target.value)}}
      />
    </div>
   
    <div class="px-4 mb-6">
      <button
        class="border border-blue-500 bg-blue-600 rounded w-full px-4 py-3 text-white font-semibold"
        onClick={()=>{hadlesubmit()}}
      >
        Sign in
      </button>
    </div>
    <div class="bg-gray-100 text-center text-gray-700 py-5">
      Already have a account?
      <a href="/login" class="font-semibold no-underline text-black">Login</a>
    </div>
  </div>
</div>
</div>

    )
}