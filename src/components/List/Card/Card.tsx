import React from "react";
import { CardStyled } from "./CardStyles";

interface CardProps {
      card: { name: string; id: string };
}

const Card: React.FC<CardProps> = ({ card }): JSX.Element => {
      return <CardStyled>{card.name}</CardStyled>;
};

export default Card;
