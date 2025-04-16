import React from "react";
import PetCard from "@/components/PetCard";

interface Props {
  title: string;
  pets: Pet[];
  containerClassName?: string;
}

const PetList = ({ title, pets, containerClassName }: Props) => {
  if (pets.length < 2) return;

  return (
    <section className={containerClassName}>
      <h2 className="text-4xl text-light-100">{title}</h2>

      <ul className="book-list">
        {pets.map((pet) => (
          <PetCard key={pet.title} {...pet} />
        ))}
      </ul>
    </section>
  );
};
export default PetList;