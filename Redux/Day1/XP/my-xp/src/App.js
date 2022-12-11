import store from './store'
import { Provider } from 'react';
import Counter from './components/Counter';
import { Provider } from 'react-redux'

function App() {
  return (
    <>
    <Provider store={store}>
        <Counter/>
    </Provider>
    </>   
  );
}

export default App;
