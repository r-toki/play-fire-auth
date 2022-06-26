import { FC, useEffect } from 'react';

import { fn1, fn2 } from './fire/functions';

export const App: FC = () => {
  useEffect(() => {
    fn1().then(console.log);
    fn2().then(console.log);
  }, []);
  return <div>This is App Component</div>;
};
