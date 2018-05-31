import lottie from 'lottie-web'

import noDevice from '@/assets/animations/no_device.json'

export default async function () {
  lottie.loadAnimation({
    container: this.$refs.noDeviceContainer,
    renderer: 'svg',
    loop: true,
    autoplay: true,
    animationData: noDevice
  })
}
