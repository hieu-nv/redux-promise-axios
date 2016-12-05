import chai from "chai";
import REDUX_PROMISE_AXIOS from "../src/index";

describe("redux-promise-axios", () => {
  const dispatch = (action) => {
    return action;
  };
  const getState = () => {
  };
  const next = REDUX_PROMISE_AXIOS({dispatch: dispatch, getState: getState});

  it("next is a function", () => {
    chai.assert.isFunction(next);
    chai.assert.strictEqual(next.length, 1);
  });
  describe("handle next", () => {
    it("must return a function to handle action", () => {
      const action = next();
      chai.assert.isFunction(action);
      chai.assert.strictEqual(action.length, 1);
    });
    it("must pass action to next if action.payload is null", (done) => {
      const actionObj = {
        payload: null
      };
      const action = next(action => {
        chai.assert.strictEqual(action, actionObj);
        done();
      });
      action(actionObj);
    });
    it("must pass action to next if action.payload is undefined", (done) => {
      const actionObj = {};
      const action = next(action => {
        chai.assert.strictEqual(action, actionObj);
        done();
      });
      action(actionObj);
    });
    it("must pass action to next if action.type is not starts with GET_, PUT_, POST_, DELETE_", (done) => {
      const actionObj = {
        type: "ACTION_TYPE",
        payload: "https://facebook.com"
      };
      const action = next(action => {
        chai.assert.strictEqual(action, actionObj);
        done();
      });
      action(actionObj);
    });

    it("must pass action to next if action.payload is a object but not contains url", (done) => {
      const actionObj = {
        type: "ACTION_TYPE",
        payload: {}
      };
      const action = next(action => {
        chai.assert.strictEqual(action, actionObj);
        done();
      });
      action(actionObj);
    });

    it("must pass action to dispatch if action.type starts with GET_", (done) => {
      const dispatch = (action) => {
        chai.assert.strictEqual(action.type, "GET_");
        chai.assert.isFunction(action.payload.then);
        chai.assert.isFunction(action.payload.catch);
        done();
      };
      const getState = () => {
      };
      const next = REDUX_PROMISE_AXIOS({dispatch: dispatch, getState: getState});
      const actionObj = {
        type: "GET_",
        payload: "https://facebook.com"
      };

      const action = next();
      action(actionObj);
    });

    it("must pass action to dispatch if action.type starts with PUT_", (done) => {
      const dispatch = (action) => {
        chai.assert.strictEqual(action.type, "PUT_");
        chai.assert.isFunction(action.payload.then);
        chai.assert.isFunction(action.payload.catch);
        done();
      };
      const getState = () => {
      };
      const next = REDUX_PROMISE_AXIOS({dispatch: dispatch, getState: getState});
      const actionObj = {
        type: "PUT_",
        payload: {
          url: "https://facebook.com",
          params: {}
        }
      };

      const action = next();
      action(actionObj);
    });

    it("must pass action to dispatch if action.type starts with POST_", (done) => {
      const dispatch = (action) => {
        chai.assert.strictEqual(action.type, "POST_");
        chai.assert.isFunction(action.payload.then);
        chai.assert.isFunction(action.payload.catch);
        done();
      };
      const getState = () => {
      };
      const next = REDUX_PROMISE_AXIOS({dispatch: dispatch, getState: getState});
      const actionObj = {
        type: "POST_",
        payload: {
          url: "https://facebook.com",
          params: {}
        }
      };

      const action = next();
      action(actionObj);
    });

    it("must pass action to dispatch if action.type starts with DELETE_", (done) => {
      const dispatch = (action) => {
        chai.assert.strictEqual(action.type, "DELETE_");
        chai.assert.isFunction(action.payload.then);
        chai.assert.isFunction(action.payload.catch);
        done();
      };
      const getState = () => {
      };
      const next = REDUX_PROMISE_AXIOS({dispatch: dispatch, getState: getState});
      const actionObj = {
        type: "DELETE_",
        payload: {
          url: "https://facebook.com",
          params: {}
        }
      };

      const action = next();
      action(actionObj);
    });
  });
});