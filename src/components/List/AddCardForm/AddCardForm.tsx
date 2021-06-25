import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

const AddCardForm: React.FC = (): JSX.Element => {
      return (
            <div>
                  <FontAwesomeIcon icon={faPlus}></FontAwesomeIcon>
                  Add another card
            </div>
      );
};

export default AddCardForm;
