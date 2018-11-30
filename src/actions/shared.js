import { getInitialData } from "../util/API";
import { receiveUsers } from "./users";
import { receiveQuestions } from "./questions";
import { setAuthedUsers } from "./authedUsers";

export function handleInitialData() {
  return dispatch => {
    return getInitialData().then(({ users, questions }) => {
      dispatch(receiveUsers(users));
      dispatch(receiveQuestions(questions));
    });
  };
}
