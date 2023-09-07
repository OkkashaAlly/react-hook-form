"use client";

import { DevTool } from "@hookform/devtools";
import { useForm } from "react-hook-form";

type FormValues = {
  username: string;
  email: string;
  channel: string;
  socials: {
    facebook: string;
    twitter: string;},
    phoneNumbers: string[];

};

export default function Home() {
  const { register, control, handleSubmit, formState } = useForm<FormValues>({
    defaultValues: async () => {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/users/1"
      );
      const data = await response.json();
      return {
        username: data.name,
        email: data.email,
        channel: "",
        socials: {
          facebook: "",
          twitter: "",
        },
        phoneNumbers: ['',''],
      };
    },
    // defaultValues: {
    //   username: "Okkasha",
    //   email: "",
    //   channel: "",
    // },
  });

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
                notAdmin: fieldValue =>
                  fieldValue.toLowerCase() !== "admin@example.com" ||
                  "Enter a different email",
                notBlackListed: fieldValue =>
                  !fieldValue.toLowerCase().endsWith("baddomain.com") ||
                  "This Email domain is not supported",
              },
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

        <div className="flex flex-col gap-2 mb-3">
          <label htmlFor="facebook">Facebook: </label>
          <input
            className="border border-slate-400 text-2xl rounded "
            type="text"
            id="facebook"
            {...register("socials.facebook")}
          />
          
        </div>
        
        <div className="flex flex-col gap-2 mb-3">
          <label htmlFor="twitter">Twitter: </label>
          <input
            className="border border-slate-400 text-2xl rounded "
            type="text"
            id="twitter"
            {...register("socials.twitter")}
          />
          
        </div>
        
        <div className="flex flex-col gap-2 mb-3">
          <label htmlFor="primary-phone-number">Primary Phone Number: </label>
          <input
            className="border border-slate-400 text-2xl rounded "
            type="text"
            id="primary-phone-number"
            {...register("phoneNumbers.0")}
          />
          
        </div>

        
        <div className="flex flex-col gap-2 mb-3">
          <label htmlFor="secondary-phone-number">Secondary Phone Number: </label>
          <input
            className="border border-slate-400 text-2xl rounded "
            type="text"
            id="secondary-phone-number"
            {...register("phoneNumbers.1")}
          />
          
        </div>

        <button className="rounded bg-slate-600 p-4 py-2 text-white">
          Submit
        </button>
      </form>
      <DevTool control={control} />
    </div>
  );
}
