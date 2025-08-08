import { Component } from '@byted-lynx/react';

class Counter extends Component {
  componentDidMount() {
    console.log('Mount!'); // Mount! x100
  }
  render() {
    return (
      <view
        ref={() => {
          console.log('Attached!'); // Attached! x7
        }}
        style="height: 60rpx; width: 60rpx;"
      />
    );
  }
}

export default function List() {
  return (
    <view>
      <list style="width:400rpx; height:400rpx; background-color:red">
        {Array.from({ length: 100 }).map((_, i) => (
          <list-item item-key={i} key={i}>
            <Counter />
          </list-item>
        ))}
      </list>
    </view>
  );
}