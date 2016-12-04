import Axios from "axios";

const [ GET, PUT, POST, DELETE ]  = ["GET", "PUT", "POST", "DELETE"];

export default ({dispatch, getState}) => next => action => {
  if (!action.payload && typeof action.payload === "object" && !action.payload.url) {
    return next(action);
  }
  switch (action.type.substring(0, action.type.indexOf("_"))) {
    case GET:
      const url = typeof action.payload === "string" ? action.payload : action.payload.url;
      const params = typeof action.payload !== "string" && action.payload.params ? action.payload.params : {};
      return dispatch({
        type: action.type,
        payload: Axios.get(url, params)
      });
    case PUT:
      return dispatch({
        type: action.type,
        payload: Axios.put(action.url, action.payload)
      });
    case POST:
      return dispatch({
        type: action.type,
        payload: Axios.post(action.url, action.payload)
      });
    case DELETE:
      return dispatch({
        type: action.type,
        payload: Axios.delete(action.url, action.payload)
      });
    default:
      return next(action);
  }
};