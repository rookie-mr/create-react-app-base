import React from 'react';
import './App.css';
import Function from  './components/Function'
import LifeCycle from './components/Lifecycle'
import Layout from './components/Layout';
import store from './store/index';
import RouterPage from './components/RouterPage';

function App() {
  store.subscribe(() => {
    console.log('state change')
  })
  return (
    <div className="App">
      <Function />
      <LifeCycle />
      <Layout>
        {{
          content: <div>content</div>,
          buttonClick: () => {
            console.log('this', this)
          }
        }}
      </Layout>
      {store.getState()}
      <button onClick={() => store.dispatch({type: 'ADD'})}>change redux state</button>
      <RouterPage />
    </div>
  );
}

export default App;
