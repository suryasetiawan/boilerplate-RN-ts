import data from '@kernel/data'
import router from '@kernel/router'

interface Kernel {
  data: any
  router: any
}

const Index: Kernel = {
  data,
  router
}

declare module '@kernel/components/PersistGate'

export default Index
