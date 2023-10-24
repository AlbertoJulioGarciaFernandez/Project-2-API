const router = require('express').Router()

const { getOneBooking, getAllBookings, createBooking, updateBooking, deleteBooking, getMyBookings, updateMyBooking, deleteBookings } = require('../controllers/booking.controller')
const { checkAuth, checkAdmin } = require('../middleware')

router.get('/', getAllBookings)
router.get('/getMyBookings', checkAuth, getMyBookings)
router.get('/:id', getOneBooking)
router.post('/', checkAuth, createBooking)
router.post('/:id', checkAuth, checkAdmin, createBooking)
router.put('/updateMyBooking/:id', checkAuth, updateMyBooking)
router.put('/:id', checkAuth, checkAdmin, updateBooking)
router.delete('/deleteBookings', checkAuth, deleteBookings)
router.delete('/:id', deleteBooking)

module.exports = router