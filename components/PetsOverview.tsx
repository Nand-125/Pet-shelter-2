"use client"

import React from "react";
import PetCover from "@/components/PetCover";

interface Props extends Pet {
  userId: string;
}
const PetOverview = ({
  title,
  species,
  gender,
  breed,
  age,
  size,
  description,
  coverColor,
  coverUrl,
}: Props) => {
  return (
    <section className="flex flex-col-reverse items-center gap-12 sm:gap-32 xl:flex-row xl:gap-8">
      <div className="flex flex-1 flex-col gap-5">
        <h1>{title}</h1>

        <div className="mt-7 flex flex-row flex-wrap gap-4 text-xl text-light-100">
          <p>
            <span className="font-semibold text-light-200">{species}</span>
          </p>

          <p>
            Gender{" "}
            <span className="font-semibold text-light-200">{gender}</span>
          </p>

          <div className="flex flex-row gap-1">
            {/* <Image src="/icons/star.svg" alt="star" width={22} height={22} /> */}
            <p>{breed}</p>
          </div>
        </div>

        <div className="flex flex-row flex-wrap gap-4 mt-1">
          <p>
            Age <span>{age}</span>
          </p>

          <p>
            Size <span>{size}</span>
          </p>
        </div>

        <p className="mt-2 text-justify text-xl text-light-100">{description}</p>
      </div>

      <div className="relative flex flex-1 justify-center">
        <div className="relative">
          <PetCover
            variant="wide"
            className="z-10"
            coverColor={coverColor}
            coverImage={coverUrl}
          />

          <div className="absolute left-16 top-10 rotate-12 opacity-40 max-sm:hidden">
            <PetCover
              variant="wide"
              coverColor={coverColor}
              coverImage={coverUrl}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default PetOverview;