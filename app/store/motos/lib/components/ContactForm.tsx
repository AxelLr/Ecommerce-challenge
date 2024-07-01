"use client";
import React from "react";
import Input from "@/lib/components/textInput";
import { useFormState, useFormStatus } from "react-dom";
import { State, createReservation } from "../actions";
import { useSearchParams } from "next/navigation";
import clsx from "clsx";
import { FaceSmileIcon } from "@heroicons/react/24/outline";

const initialState = {
  errors: {
    name: undefined,
    lastName: undefined,
    email: undefined,
    phone: undefined,
  },
  message: "",
};

const ReserveButton = () => {
  const { pending } = useFormStatus();

  return (
    <button
      disabled={pending}
      type="submit"
      className={clsx(
        "bg-secondary text-primary p-4 rounded-lg w-full text-center flex flex-row justify-center items-center",
        pending && "opacity-30"
      )}
    >
      Reservar
      {pending && (
        <FaceSmileIcon className="animate-spin h-5 w-5 text-primary ml-1" />
      )}
    </button>
  );
};

const ContactForm = () => {
  const searchParams = useSearchParams();

  const variant = searchParams.get("variant") ?? "";

  const [state, dispatch] = useFormState(
    (prevState: State, formData: FormData) =>
      createReservation(prevState, formData, variant),
    initialState
  );

  return (
    <form action={dispatch} className="flex flex-col gap-5 w-full">
      <Input
        error={state?.errors?.name}
        label="Nombre"
        name="name"
        maxLength="70"
      />

      <Input
        error={state?.errors?.lastName}
        label="apellido"
        name="lastName"
        maxLength="70"
      />
      <Input
        error={state?.errors?.email}
        label="Correo electrónico"
        name="email"
        type="email"
      />
      <Input
        error={state?.errors?.phone}
        label="Número de teléfono"
        name="phone"
        type="number"
      />
      <ReserveButton />
    </form>
  );
};
export default ContactForm;
