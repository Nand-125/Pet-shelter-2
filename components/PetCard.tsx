import React from "react";
import Link from "next/link";
import PetCover from "@/components/PetCover";

const PetCard = ({
  id,
  title,
  gender,
  coverColor,
  coverUrl,
}: Pet) => (
  <li>
    <Link
      href={`/pets/${id}`}
    >
      <PetCover coverColor={coverColor} coverImage={coverUrl} />

      <div className="mt-4">
        <p className="mt-2 line-clamp-1 text-base font-semibold text-white xs:text-xl">{title}</p>
        <p className="mt-1 line-clamp-1 text-sm italic text-light-100 xs:text-base">{gender}</p>
      </div>
    </Link>
  </li>
);

export default PetCard;