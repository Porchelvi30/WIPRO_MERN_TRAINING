import dispatcher from "../dispatcher/AppDispatcher";

export function addEmployee(name) {
  dispatcher.dispatch({
    type: "ADD_EMPLOYEE",
    payload: name,
  });
}
