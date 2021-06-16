import { useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import { actionCreateors } from "../redux";

export const useActions = () => {
      const dispatch = useDispatch();
      return bindActionCreators(actionCreateors, dispatch);
};
