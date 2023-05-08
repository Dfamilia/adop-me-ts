import { createContext } from "react";
import { IPet } from "./APIResponsesType";

const AdoptedPetContext = createContext<
  [IPet | null, (adoptedPet: IPet) => void]
>([
  {
    id: 123,
    name: "Fido",
    animal: "dog",
    description: "great dog",
    breed: "Beagle",
    images: [],
    city: "Seattle",
    state: "WA",
  },
  () => {},
]);

export default AdoptedPetContext;
