import Router from 'koa-router'
import getHealth from './health/health'
import event from './actions/events'

const router = new Router()

router.get('/health', getHealth)

router.post('/api/event/threshold/:time', event.threshold);

export default router
