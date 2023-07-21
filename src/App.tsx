import React from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { RootState } from '../services/store';

interface Props {
  name?: string;
}

const App: React.FC<Props> = () => {
  const user = useSelector((state: RootState) => state.info);
  console.log('user', user);

  return <div><button>plus</button></div>
};

export default App;
