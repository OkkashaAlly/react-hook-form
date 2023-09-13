"use client";

import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
// import { useEffect } from "react";
import { FieldErrors, useForm } from "react-hook-form";

type FormValues = {
  username: string;
  email: string;
  channel: string;
};

const schema = Yup.object().shape({
  username: Yup.string().required("Username is required"),
  email: Yup.string().email().required("Email is required"),
  channel: Yup.string().required("Channel is required"),
});

export default function Home() {
  const {
    register,
    handleSubmit,
    formState,
  } = useForm<FormValues>({
    defaultValues: {
      username: "Okkasha",
      email: "",
      channel: "",
    },
    resolver: yupResolver(schema),
  });

  const { errors } = formState;

  const onSubmit = (data: FormValues) => {
    console.log(data);
  };

  const onError = (errors: FieldErrors<FormValues>) => {
    console.log("🚀 ~ file: page.tsx:101 ~ onError ~ errors:", errors);
  };

  return (
    <div className="">
      <h1>YouTube form: ({})</h1>
      <form
        onSubmit={handleSubmit(onSubmit, onError)}
        className="w-[40%] bg-slate-200 rounded p-8 mx-auto mt-20"
      >
        <div className="flex flex-col gap-2 mb-3">
          <label htmlFor="name">Name: </label>
          <input
            className="border border-slate-400 text-2xl rounded "
            type="text"
            id="name"
            {...register("username")}
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
            {...register("email")}
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
            {...register("channel")}
          />
          {errors.channel && (
            <p className="text-red-500 text-sm">{errors.channel.message}</p>
          )}
        </div>

        <div className="flex gap-2">
          <button className="rounded bg-slate-600 p-4 py-2 text-white">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}
