# redux-promise-axios

## Installation
```bash
npm install --save-dev axios
npm install --save-dev redux-thunk
npm install --save-dev redux-promise-middleware
npm install --save-dev redux-promise-axios
```

```javascript
import thunk from 'redux-thunk';
import promiseMiddleware from "redux-promise-middleware";
import REDUX_PROMISE_AXIOS from "redux-promise-axios";

applyMiddleware(thunk, promiseMiddleware(), REDUX_PROMISE_AXIOS);
```

## Action Types
```javascript
export const GET_USERS_WITH_ID = "GET_USERS_WITH_ID";
export const PENDING = "_PENDING";
export const FULFILLED = "_FULFILLED";
export const REJECTED = "_REJECTED";
```

## Actions
```javascript
dispatch({
  type: GET_USERS_WITH_ID,
  url: "https://api.github.com/users/hieunv8",
});
```

## Reducers
```javascript
import * as Actions from "../actions";
import {fromJS} from "immutable";
export default function (state = fromJS({hieunv: null}), action) {
    switch (action.type) {
        case Actions.GET_USERS_WITH_ID + Actions.FULFILLED:
            return state.update("hieunv", (v) => fromJS(action.payload.data));
        default:
            return state;
    }
}
```