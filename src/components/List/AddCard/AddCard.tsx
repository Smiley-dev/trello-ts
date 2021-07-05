import React, { useState } from "react";
import { useActions } from "../../../hooks/useActions";
import {
      AddCardButton,
      AddCardForm,
      ButtonGroup,
      AddButton,
      CloseButton,
} from "./AddCardStyles";
import TextArea from "react-textarea-autosize";
import { faTimes } from "@fortawesome/free-solid-svg-icons";

interface AddCardProps {
      cards: [];
      listId: string;
}

const AddCard: React.FC<AddCardProps> = ({ cards, listId }): JSX.Element => {
      const [formOpened, setFormOpened] = useState<boolean>(false);
      const [cardTitle, setCardTitle] = useState<string>("");

      const { addCard } = useActions();

      const addCardHandler = () => {
            addCard(cardTitle, listId);
            setFormOpened(false);
      };

      return (
            <>
                  {!formOpened ? (
                        <AddCardButton onClick={() => setFormOpened(true)}>
                              <span
                                    style={{
                                          fontSize: "30px",
                                          marginRight: "20px",
                                    }}
                              >
                                    +
                              </span>
                              {cards.length === 0
                                    ? "Add a card"
                                    : "Add another card"}
                        </AddCardButton>
                  ) : (
                        <AddCardForm>
                              <TextArea
                                    placeholder="Card Title..."
                                    autoFocus
                                    value={cardTitle}
                                    onChange={(e) =>
                                          setCardTitle(e.target.value)
                                    }
                                    minRows={1}
                                    style={{
                                          resize: "none",
                                          width: "100%",
                                          outline: "none",
                                          border: "none",
                                          overflow: "hidden",
                                          padding: "10px",
                                          borderRadius: "5px",
                                          font: "inherit",
                                    }}
                              />
                              <ButtonGroup>
                                    <AddButton onClick={() => addCardHandler()}>
                                          {" "}
                                          Add Card{" "}
                                    </AddButton>
                                    <CloseButton
                                          onClick={() => setFormOpened(false)}
                                          icon={faTimes}
                                          size={"lg"}
                                          color={"#6b778c"}
                                    ></CloseButton>
                              </ButtonGroup>
                        </AddCardForm>
                  )}
            </>
      );
};

export default AddCard;
