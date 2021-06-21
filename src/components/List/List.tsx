import { faTrashAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect } from "react";
import { useActions } from "../../hooks/useActions";
import { useTypedSelector } from "../../hooks/useTypedSelector";
import {
      ListElement,
      ListHeading,
      ListTitle,
      UpdateListForm,
      DeleteIcon,
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
                  <ListTitle>{name}</ListTitle>
                  {cards.map((card: any) => {
                        return <div key={card.id}>{card.name}</div>;
                  })}
                  <DeleteIcon>
                        <FontAwesomeIcon icon={faTrashAlt}></FontAwesomeIcon>
                  </DeleteIcon>
            </ListElement>
      );
};

export default List;
