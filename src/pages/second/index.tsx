import { Component, PropsWithChildren } from 'react'
import { View, Text } from '@tarojs/components'
import './index.scss'
import Taro, {eventCenter, getCurrentInstance} from "@tarojs/taro";

export default class Index extends Component<PropsWithChildren> {
  // eslint-disable-next-line react/sort-comp
  $instance = getCurrentInstance()

  componentWillMount () {
    // @ts-ignore
    const onReadyEventId = this.$instance.router.onReady
    eventCenter.once(onReadyEventId, () => {
      console.log('onReady')

      // onReady 触发后才能获取小程序渲染层的节点
      Taro.createSelectorQuery().select('#only')
        .boundingClientRect()
        .exec(res => console.log(res, 'res'))
    })
  }

  componentDidMount () { }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  render () {
    return (
      <View id='only' className='index'>
        <Text>This is 2nd page</Text>
      </View>
    )
  }
}
