
// import React from 'react';
// import Counter from './components/Counter';

// const App: React.FC = () => {
//   return (
//     <div>
//       <Counter />
//     </div>
//   );
// };

// export default App;

import React from 'react';
import { Provider } from 'react-redux';
import store from './redux/store';
import ShoppingPage from './components/ShoppingPage';

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <div className="min-h-screen bg-gray-50">
        <ShoppingPage />
      </div>
    </Provider>
  );
};

export default App;

