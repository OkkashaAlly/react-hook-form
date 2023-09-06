"use client"

import { useForm } from "react-hook-form";
import {DevTool} from '@hookform/devtools'


export default function Home() {
  const {register, control} = useForm() 
  
  return <div className="">
    <h1>YouTube form</h1>
    <form className="w-[40%] bg-slate-200 rounded p-8 mx-auto mt-20">
      <div className="flex flex-col gap-2 mb-3">
        <label htmlFor="name">Name: </label>
        <input className="border border-slate-400 text-2xl rounded " type="text" id="name" {...register('username')} />
      </div>
      <div className="flex flex-col gap-2 mb-3">
        <label htmlFor="email">Email: </label>
        <input className="border border-slate-400 text-2xl rounded " type="text" id="email" {...register('email')} />
      </div>
      <div className="flex flex-col gap-2 mb-3">
        <label htmlFor="channel">Channel: </label>
        <input className="border border-slate-400 text-2xl rounded " type="text" id="channel" {...register('channel')} />
      </div>
      <button className="rounded bg-slate-600 p-4 py-2 text-white">Submit</button>

    </form>
    <DevTool control={control} />
  </div>;
}
