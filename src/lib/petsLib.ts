import { type } from "os";
import PETS from "./pets.json";

export type typePets = {
  name: string;
  species: string;
  breed: string;
  age: number;
  color: string;
  fun_fact: string;
  image?: string;
};

export function getPets(): typePets[] {
  return PETS;
}
