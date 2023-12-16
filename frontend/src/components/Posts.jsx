import { useEffect, useState } from "react"
import { Link } from "react-router-dom"

export const Posts=()=>{
const[data,setData]=useState([])

const fetchData=()=>{
    fetch("http://localhost:8080/posts",{
        headers: {
            "Authorization":localStorage.getItem("token"),
          }
    })
.then(res=>res.json())
.then(res=>setData(res.posts))



.catch(err=>console.log(err))
}

useEffect(()=>{
fetchData()
},[data])

    return(
<div class="flex items-center justify-center w-screen min-h-screen p-10">
    
    <div class="grid xl:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-2 max-w-6xl">
       {data?.map((el)=>(
        <div class="flex flex-col bg-gray-200 rounded-lg p-4 m-2">
        <img class="h-40 bg-gray-400 rounded-lg" src={el.image} alt="" />
        <div ></div>
        <div class="flex flex-col items-start mt-4">
            <h4 class="text-xl font-semibold">{el.title}</h4>
            <p class="text-sm">{el.body}</p>
                <div class="flex gap-3 max-w-sm">
                <button class="py-2.5 px-6 rounded-lg text-sm font-medium bg-teal-200 text-teal-800"
                onClick={()=>{
                    fetch(`http://localhost:8080/posts/delete/${el._id}`,{
    method:"DELETE",
    headers: {
        "Authorization":localStorage.getItem("token"),
      }
})
.then(res=>res.json())
.then(res=>{
   alert(res.msg)
})



.catch(err=>console.log(err))
                }}
                >Delete</button>
                <button class="py-2.5 px-6 rounded-lg text-sm font-medium text-white bg-teal-600"><Link to={`/update/${el._id}`} style={{ textDecoration: "none", color: "green" }}>
Edit
</Link></button>
                </div>
           
        </div>
    </div>
       ))}
        
       
        
        
    </div>
    
</div>
    )
}