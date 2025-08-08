import { useEffect, useState } from '@byted-lynx/react';

import lynxLogo from './lynx-logo.png';
import reactLogo from './react-logo.png';
import './styles/main.scss';
import Test from './test';
import List from './list';

function App() {
  const [alterLogo, setAlterLogo] = useState(false);

  useEffect(() => {
    console.log('Hello, ReactLynx 3.0');
  }, []);

  return (
    <view className="App">
      <view className="Logo" bindtap={() => setAlterLogo(!alterLogo)}>
        {alterLogo ? (
          <image src={lynxLogo} className="Logo--lynx" />
        ) : (
          <image src={reactLogo} className="Logo--react" />
        )}
      </view>
      <text className="Title">React11111111</text>
      <text className="Subtitle">on Lynx</text>
      <text>Try to tap the logo and have fun!</text>
      <Test />
      <List/>
    </view>
  );
}

export default App;
