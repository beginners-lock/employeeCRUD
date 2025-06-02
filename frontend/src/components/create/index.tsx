import axios from "axios";
import { useRef } from "react";

export default function CreateComponent(){
	const nameRef = useRef<HTMLInputElement|null>(null)
	const deptRef = useRef<HTMLSelectElement|null>(null)
	const passRef = useRef<HTMLInputElement|null>(null)

	const submit = () => {
		const name = nameRef.current!.value;
		const dept = deptRef.current!.value;
		const pass = passRef.current!.value;

		axios.post('http://localhost:3000/employee/create', {
			name, dept, pass
		}).then((response) => {
			alert(response.data)
		})
	}

	return(
		<div className="flex flex-col items-start justify-start">
			<form className="flex flex-col items-start justify-start" onSubmit={(e) =>{ e.preventDefault(); submit() }}>
				<label className="text-sm mt-2.5">Name</label>
				<input ref={nameRef} type="text" placeholder="Employee Name" className="border border-slate-300 p-1 mt-1 text-sm"/>
				
				<label className="text-sm mt-2.5">Department</label>
				<select ref={deptRef} className="border border-slate-300 p-1 mt-1 text-sm">
					<option>Employee Department</option>
					<option>Accounting</option>
					<option>Human Resource</option>
					<option>Engineering</option>
					<option>Technology</option>
				</select>

				<label className="text-sm mt-2.5">Password</label>
				<input ref={passRef} type="password" placeholder="Employee password" className="border border-slate-300 p-1 mt-1 text-sm"/>

				<button className="mt-6 bg-black text-white px-10 py-2 rounded-md cursor-pointer font-semibold">Create</button>
			</form> 
		</div>
	)
}