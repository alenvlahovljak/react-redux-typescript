import { ActionType } from "../action-types/repositories";
import { Action } from "../actions/repositories";

interface RepositoriesState {
  loading: boolean;
  error: string | undefined;
  data: string[];
}

const initialState = {
  loading: false,
  error: undefined,
  data: [],
};

const reducer = (
  state: RepositoriesState = initialState,
  action: Action
): RepositoriesState => {
  switch (action.type) {
    case ActionType.SEARCH_REPOSITORIES:
      return { loading: true, error: undefined, data: [] };
    case ActionType.SEARCH_REPOSITORIES_SUCCESS:
      return { loading: false, error: undefined, data: action.payload };
    case ActionType.SEARCH_REPOSITORIES_ERROR:
      return { loading: false, error: action.payload, data: [] };
    default:
      return state;
  }
};

export default reducer;
