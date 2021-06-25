import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect } from "react";
import Card from "./Card/Card";
import AddCardForm from "./AddCardForm/AddCardForm";
import { useActions } from "../../hooks/useActions";
import { useTypedSelector } from "../../hooks/useTypedSelector";
import {
      ListElement,
      ListHeading,
      ListTitle,
      CardsWrapper,
} from "./ListStyles";

interface ListProps {
      id: string;
      name: string;
      pos: number;
      cards: [];
}

const List: React.FC<ListProps> = ({ id, name, pos, cards }): JSX.Element => {
      return (
            <ListElement>
                  <ListHeading>
                        <ListTitle>{name}</ListTitle>
                        <FontAwesomeIcon icon={faTimes}></FontAwesomeIcon>
                  </ListHeading>
                  <CardsWrapper>
                        {cards.map((card: any) => {
                              return <Card key={card.id} card={card} />;
                        })}
                        <AddCardForm />
                  </CardsWrapper>
            </ListElement>
      );
};

export default List;
