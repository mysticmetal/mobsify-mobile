import lottie from 'lottie-web'

import noNetwork from '@/assets/animations/network_lost.json'

export default function () {
  lottie.loadAnimation({
    container: this.$refs.noNetworkContainer,
    renderer: 'svg',
    loop: true,
    autoplay: true,
    animationData: noNetwork
  })
}
