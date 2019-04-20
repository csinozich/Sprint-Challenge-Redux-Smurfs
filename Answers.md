1.  Name 3 JavaScript Array/Object Methods that do not produce side-effects? Which method do we use to create a new object while extending the properties of another object?

  .map, .concat, .filter. You use Object.assign for new objects.

1.  Describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?

  The store contains state for the application, and it's the 'single source of truth' because in non-redux applications, you can have multiple declarations of state. In Redux, the store contains all the state and is only declared once. Actions are literally the actions that people can take in your application, and it's the only way that you can modify the application's state. Reducers essentially take the actions and create a new version of state to pass on to the store.

1.  What is the difference between Application state and Component state? When would be a good time to use one over the other?

  Application state has the state of the whole application, whereas component state is limited to the individual component. You use component state when you don't want to mutate anything but specific pieces of state inside the component.

1.  What is middleware?

  Middleware is essentially a function that allows you to pause the application's processes, run a new function, and then continue the process.

1.  Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?

  Redux Thunk is a middleware that allows you to have asynchronous actions in Redux, which typically limits you to synchronous reducers. It allows our action creators to have dispatch functions that provide for asynchronous actions.

1.  Which `react-redux` method links up our `components` with our `redux store`?

  connect
