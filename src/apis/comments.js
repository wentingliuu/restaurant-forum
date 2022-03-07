import { apiHelper } from '../utils/helpers.js'

export default {
  create ({ restaurantId, UserId, text }) {
    return apiHelper.post('/comments', { restaurantId, UserId, text })
  },
  delete ({ commentId }) {
    return apiHelper.delete(`/comments/${commentId}`)
  }
}
