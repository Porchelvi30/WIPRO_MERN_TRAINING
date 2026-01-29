const callbacks = [];

const dispatcher = {
  register(callback) {
    callbacks.push(callback);
  },

  dispatch(action) {
    callbacks.forEach((cb) => cb(action));
  },
};

export default dispatcher;
