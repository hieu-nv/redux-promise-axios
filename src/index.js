const [GET, PUT, POST, DELETE]  = ["GET", "PUT", "POST", "DELETE"];

export default (options) => {
  const {axios} = options;

  return ({dispatch, getState}) => next => action => {
    if (!action.payload || typeof action.payload === "object" && !action.payload.url) {
      return next(action);
    }

    const url = typeof action.payload === "string" ? action.payload : action.payload.url;
    const params = typeof action.payload !== "string" && action.payload.params ? action.payload.params : {};

    switch (action.type.substring(0, action.type.indexOf("_"))) {
      case GET:
        return dispatch({
          type: action.type,
          payload: axios.get(url, params)
        });
      case PUT:
        return dispatch({
          type: action.type,
          payload: axios.put(url, params)
        });
      case POST:
        return dispatch({
          type: action.type,
          payload: axios.post(url, params)
        });
      case DELETE:
        return dispatch({
          type: action.type,
          payload: axios.delete(url, params)
        });
      default:
        return next(action);
    }
  }
};