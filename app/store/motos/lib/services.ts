import fetch from "@/lib/utils/fetch";
import { Motorcycle } from "./interfaces";

const API_ENDPOINT = "/products/motorcycles";

export async function getMotorcycles(): Promise<Motorcycle[]> {
  try {
    const response = await fetch(API_ENDPOINT);

    if (!response.ok) {
      throw new Error(`Failed to fetch motorcycles`);
    }

    return response.json();
  } catch (error) {
    console.error("Fetch Error:", error);
    throw new Error("Failed to fetch motorcycles.");
  }
}

export async function getMotorcycleById(id: string): Promise<Motorcycle> {
  try {
    const response = await fetch(`${API_ENDPOINT}?uuid=${id}`);

    if (!response.ok) {
      throw new Error(`Failed to fetch motorcycle with id ${id}`);
    }

    const motorcycles = await response.json();

    return motorcycles[0];
  } catch (error) {
    console.error("Fetch Error:", error);
    throw new Error("Failed to fetch motorcycle.");
  }
}
