
export default function Test() {
    function handleTap(){
        console.log('tap');
    }
    function handleTap2(){
        console.log('tap2')
    }
  return (
    <view bindtap = {handleTap2}>
        <view catchtap = {handleTap}>
            <text>tap me</text>
        </view>
    </view>
  )
}
