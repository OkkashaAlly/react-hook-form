import { useForm } from "react-hook-form";


export default function Home() {
  const form = useForm() 
  
  return <div className="">
    <h1>YouTube form</h1>
    <form className="w-[40%] bg-slate-200 rounded p-8 mx-auto mt-20">
      <div className="flex flex-col gap-2 mb-3">
        <label htmlFor="name">Name: </label>
        <input className="border border-slate-400 text-2xl rounded " type="text" id="name" name="name" />
      </div>
      <div className="flex flex-col gap-2 mb-3">
        <label htmlFor="email">Email: </label>
        <input className="border border-slate-400 text-2xl rounded " type="text" id="email" name="email" />
      </div>
      <div className="flex flex-col gap-2 mb-3">
        <label htmlFor="channel">Channel: </label>
        <input className="border border-slate-400 text-2xl rounded " type="text" id="channel" name="channel" />
      </div>
      <button className="rounded bg-slate-600 p-4 py-2 text-white">Submit</button>

    </form>
  </div>;
}
