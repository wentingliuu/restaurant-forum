import { apiHelper } from '../utils/helpers.js'
const getToken = () => localStorage.getItem('token')

export default {
  create ({ restaurantId, UserId, text }) {
    return apiHelper.post('/comments', { restaurantId, UserId, text }, {
      headers: { Authorization: `Bearer ${getToken()}` }
    })
  },
  delete ({ commentId }) {
    return apiHelper.delete(`/comments/${commentId}`, {
      headers: { Authorization: `Bearer ${getToken()}` }
    })
  }
}
