export default () => ({
  devices: [],
  brands: [],
  hasNoResult: false,
  style: {
    width: '100%',
    height: '100%',
    overflow: 'hidden',
    margin: '0 auto'
  },
  brandLoading: false,
  page: 1,
  loading: {
    title: 'Loading...',
    subtitle: 'Fetching all brand Informations.'
  }
})
