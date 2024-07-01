"use server";
import { z } from "zod";
import { redirect } from "next/navigation";
import fetchWrapper from "@/lib/utils/fetch";

const FormSchema = z.object({
  name: z
    .string()
    .trim()
    .min(1, "Campo requerido")
    .regex(/^[a-zA-Z\s]+$/, "Formato inválido"),
  lastName: z
    .string()
    .trim()
    .min(1, "Campo requerido")
    .regex(/^[a-zA-Z\s]+$/, "Formato inválido"),
  email: z.string().email("Campo requerido"),
  phone: z
    .string()
    .min(1, "Campo requerido")
    .regex(/^[0-9]+$/, "Formato inválido"),
});

export type State = {
  errors?: {
    name?: string[];
    email?: string[];
    phone?: string[];
  };
  message?: string | null;
};

export async function createReservation(
  prevState: State,
  formData: FormData,
  variant: string
) {
  const validatedFields = FormSchema.safeParse({
    name: formData.get("name"),
    lastName: formData.get("name"),
    email: formData.get("email"),
    phone: formData.get("phone"),
  });

  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
      message: "Missing Fields. Failed to Create Reservation.",
    };
  }

  const { name, lastName, email, phone } = validatedFields.data;

  const sendData = {
    uuid: variant,
    accessories: [],
    contact: {
      firstname: name,
      lastname: lastName,
      email,
      phone,
      finace: true,
      trade: false,
    },
  };

  try {
    await fetchWrapper("/createlead", {
      method: "POST",
      body: JSON.stringify(sendData),
    });
  } catch (error) {
    console.error("Error creating reservation:", error);
    return {
      message: "Error: Failed to create Reservation.",
    };
  }
  redirect(
    `recibo?variant=${variant}&nombre=${
      name + "" + lastName
    }&tel=${phone}&email=${email}`
  );
}
