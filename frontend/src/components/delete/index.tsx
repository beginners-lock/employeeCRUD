import axios from "axios";
import { useRef } from "react";

export default function DeleteComponent(){
    const idRef = useRef<HTMLInputElement|null>(null)

    const submit = () => {
        const id = idRef.current!.value;

		axios.delete(`http://localhost:3000/employee/delete/${id}`).then((response)=>{
            const data = response.data

            if(data.message === "success"){
                alert("Employee deleted successfully")
                idRef.current!.value = ""
            }else{
                alert("Employee ID not found")
            }
        })
    }

    return(
        <div className="flex flex-col items-start justify-start">
			<form className="flex flex-col items-start justify-start" onSubmit={(e) =>{ e.preventDefault(); submit() }}>
				<label className="text-sm mt-2.5">Id</label>
				<input ref={idRef} type="number" placeholder="Employee Id" className="border border-slate-300 p-1 mt-1 text-sm"/>
				
				<button className="mt-6 bg-black text-white px-10 py-2 rounded-md cursor-pointer font-semibold">Delete</button>
			</form> 
		</div>
    )
}