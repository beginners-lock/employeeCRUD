import axios from "axios";
import { useRef } from "react";

export default function ReadComponent(){
    const idRef = useRef<HTMLInputElement|null>(null)

    const readAll = () => {
        axios.get(`http://localhost:3000/employee`).then((response)=>{
            const data = response.data

            console.log(data)
        })
    }

    const submit = () => {
        const id = idRef.current!.value;

		axios.get(`http://localhost:3000/employee/${id}`).then((response)=>{
            const data = response.data

            if(data==="failed"){
                alert("Employee not found")
                return
            }

            console.log(data)
            idRef.current!.value = ""
        })
    }

    return(
        <div>
            <button className="mt-6 bg-black text-white px-10 py-2 rounded-md cursor-pointer font-semibold" onClick={readAll}>Find all</button>
            
            <form className="flex flex-col items-start justify-start" onSubmit={(e) =>{ e.preventDefault(); submit() }}>
				<label className="text-sm mt-2.5">Id</label>
				<input ref={idRef} type="number" placeholder="Employee Id" className="border border-slate-300 p-1 mt-1 text-sm"/>
				
				<button className="mt-6 bg-black text-white px-10 py-2 rounded-md cursor-pointer font-semibold">Find</button>
			</form> 
        </div>
    )
}