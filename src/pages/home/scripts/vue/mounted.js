import lottie from 'lottie-web'

import EventBus from '@/utils/eventBus'
import noDevice from '@/assets/animations/no_device.json'

export default async function () {
  const self = this
  EventBus.$on('SEARCH_TRIGGERED', (device) => self.apicall(device))

  lottie.loadAnimation({
    container: this.$refs.noDeviceContainer,
    renderer: 'svg',
    loop: true,
    autoplay: true,
    animationData: noDevice
  })
}
