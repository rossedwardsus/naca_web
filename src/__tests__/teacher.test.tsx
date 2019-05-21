import React from 'react';
import ReactDOM from 'react-dom';
import App from '../App';
import thunk from 'redux-thunk';

import { createStore, Store as ReduxStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import rootReducer from '../reducers';

const store = createStore(rootReducer, applyMiddleware(thunk));


//mock store

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Provider store={store}><App /></Provider>, div);
  ReactDOM.unmountComponentAtNode(div);

});

//teacher can login
//teacher can add student
//teacher can view student
//teacher can create group
//teacher can add student to group
//teacher can add intervention

//ReactDOM.render(<App />, document.getElementById('root'));

/*ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);*/