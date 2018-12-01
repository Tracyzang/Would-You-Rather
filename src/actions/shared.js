import { getInitialData } from "../util/API";
import { receiveUsers } from "./users";
import { receiveQuestions } from "./questions";
import { setAuthedUsers } from "./authedUsers";

//use react component to pass data to authedUsers
const AUTHED_ID = "sarah_edo";

export function handleInitialData() {
  return dispatch => {
    return getInitialData().then(({ users, questions }) => {
      dispatch(receiveUsers(users));
      dispatch(receiveQuestions(questions));
      dispatch(setAuthedUsers(AUTHED_ID));
    });
  };
}
