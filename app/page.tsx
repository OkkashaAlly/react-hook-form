"use client";

import { DevTool } from "@hookform/devtools";
import { useForm } from "react-hook-form";

type FormValues = {
  username: string;
  email: string;
  channel: string;
};

export default function Home() {
  const { register, control, handleSubmit, formState } = useForm<FormValues>();

  const { errors } = formState;
  // const name = watch('username')

  const onSubmit = (data: FormValues) => {
    console.log(data);
  };

  return (
    <div className="">
      <h1>YouTube form</h1>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="w-[40%] bg-slate-200 rounded p-8 mx-auto mt-20"
      >
        <div className="flex flex-col gap-2 mb-3">
          <label htmlFor="name">Name: </label>
          <input
            className="border border-slate-400 text-2xl rounded "
            type="text"
            id="name"
            {...register("username", {
              required: {
                value: true,
                message: "this field is required",
              },
            })}
          />
          {errors.username && (
            <p className="text-red-500 text-sm">{errors.username.message}</p>
          )}
        </div>
        <div className="flex flex-col gap-2 mb-3">
          <label htmlFor="email">Email: </label>
          <input
            className="border border-slate-400 text-2xl rounded "
            type="text"
            id="email"
            {...register("email", {
              required: " this field is required",
              pattern: {
                value: /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/,
                message: "invalid email",
              },
              validate: {
                notAdmin: (fieldValue) =>
                  fieldValue.toLowerCase() !== "admin@example.com" || "Enter a different email",
                notBlackListed: (fieldValue) =>
                 !fieldValue.toLowerCase().endsWith("baddomain.com") || "This Email domain is not supported",
              }
            })}
          />
          {errors.email && (
            <p className="text-red-500 text-sm">{errors.email.message}</p>
          )}
        </div>
        <div className="flex flex-col gap-2 mb-3">
          <label htmlFor="channel">Channel: </label>
          <input
            className="border border-slate-400 text-2xl rounded "
            type="text"
            id="channel"
            {...register("channel", { required: "This field is required" })}
          />
          {errors.channel && (
            <p className="text-red-500 text-sm">{errors.channel.message}</p>
          )}
        </div>
        <button className="rounded bg-slate-600 p-4 py-2 text-white">
          Submit
        </button>
      </form>
      <DevTool control={control} />
    </div>
  );
}
