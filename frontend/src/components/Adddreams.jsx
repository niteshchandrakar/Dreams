import { useState } from "react"

export const Adddreams=()=>{
 // Add posts
const[title,setName]=useState("")
const[body,setEmail]=useState("")
const[image,setPassword]=useState("")

const hadlesubmit=(e)=>{
    e.preventDefault()
   
    if(title && body && image){
        const payload={title,body,image}
        console.log(payload)
        fetch("http://localhost:8080/posts/add",{
            method:"POST",
            headers: {
                "Authorization":localStorage.getItem("token"),
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
// Add posts End
    return(
<div class="max-w-md m-auto mt-6">
  <div
    class="border-t-4 border-blue-600 overflow-hidden rounded shadow-lg"
  >
    <h3 class="text-xl text-center mt-8 mb-8">Add Dream</h3>
    <div class="px-4 mb-4">
      <input
        type="text"
        placeholder="Title"
        class="border border-gray rounded w-full p-3"
        onChange={(e)=>{setName(e.target.value)}}
      />
    </div>
   
    <div class="px-4 mb-4">
      <input
        type="text"
        placeholder="Body"
        class="border border-gray rounded w-full p-3"
        onChange={(e)=>{setEmail(e.target.value)}}
      />
    </div>
    <div class="px-4 mb-4">
      <input
        type="text"
        placeholder="Image"
        class="border border-gray rounded w-full p-3"
        onChange={(e)=>{setPassword(e.target.value)}}
      />
    </div>
   
    <div class="px-4 mb-6">
      <button
        class="border border-blue-500 bg-blue-600 rounded w-full px-4 py-3 text-white font-semibold"
        onClick={(e)=>{hadlesubmit(e)}}
      >
       Add to dreams
      </button>
    </div>
    
  </div>
</div>

    )
}