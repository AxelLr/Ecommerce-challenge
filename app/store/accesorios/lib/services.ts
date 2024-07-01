import fetch from "@/lib/utils/fetch";
import { Accessory } from "./interfaces";

const API_ENDPOINT = "/products/accessories";

export default async function getAccessories(): Promise<Accessory[]> {
  try {
    const accessories = await fetch("/products/accessories");

    return accessories.json();
  } catch (error) {
    console.error("Fetch Error:", error);
    throw new Error("Failed to fetch accessories.");
  }
}

export async function getAccessoryById(id: string): Promise<Accessory> {
  try {
    const response = await fetch(`${API_ENDPOINT}?uuid=${id}`);

    if (!response.ok) {
      throw new Error(`Failed to fetch accessory with id ${id}`);
    }

    const accessories = await response.json();

    return accessories[0];
  } catch (error) {
    console.error("Fetch Error:", error);
    throw new Error("Failed to fetch accessory.");
  }
}
