import { Indicator } from 'mint-ui';
export default {
  pushLoadStack (state) {
    Indicator.open({
      text: 'loading...',
      spinnerType: 'snake'
    });
  	state.stack.push(1)
  },
  completeLoad (state) {
  	let stack = state.stack
    stack.pop()
    if (!stack.length) {
      //延时为了更好显示loading效果
      setTimeout(() => {
        Indicator.close()
      }, 200)
    }
  }
}