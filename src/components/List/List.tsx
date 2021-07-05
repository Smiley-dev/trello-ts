import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect } from "react";
import Card from "./Card/Card";
import AddCard from "./AddCard/AddCard";
import { useActions } from "../../hooks/useActions";
import { useTypedSelector } from "../../hooks/useTypedSelector";
import {
      ListElement,
      ListHeading,
      ListTitle,
      CardsWrapper,
} from "./ListStyles";

interface ListProps {
      list: { [key: string]: any };
}

const List: React.FC<ListProps> = ({ list }): JSX.Element => {
      return (
            <ListElement>
                  <ListHeading>
                        <ListTitle>{list.name}</ListTitle>
                        <FontAwesomeIcon icon={faTimes}></FontAwesomeIcon>
                  </ListHeading>
                  <CardsWrapper>
                        {list.cards.map((card: any) => {
                              return <Card key={card.id} card={card} />;
                        })}
                        <AddCard cards={list.cards} listId={list.id} />
                  </CardsWrapper>
            </ListElement>
      );
};

export default List;
