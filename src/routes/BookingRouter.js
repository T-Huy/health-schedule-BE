import express from 'express';
import bookingController from '../controllers/BookingController.js';
import { authUserMiddleware, authAdminMiddleware, authDoctorMiddleware, authMiddleware } from "../middlewares/authMiddleware.js";

const router = express.Router();
router.post("/allbooking", authMiddleware, bookingController.getAllBookingByUserId);
router.get("/:id",authMiddleware,bookingController.getBooking);
router.get("/",authMiddleware,bookingController.getAllBooking)
router.put("/:id",authMiddleware,bookingController.updateBooking);
router.get("/doctor/:doctorId", authDoctorMiddleware, bookingController.getBookingByDoctorId)
router.post("/book-appointment-online", authUserMiddleware, bookingController.patientBookingOnline);
router.post("/book-appointment-direct", authUserMiddleware, bookingController.patientBookingDirect);
router.get("/momo_return", bookingController.handlePaymentReturn); // Định nghĩa tuyến đường để xử lý phản hồi từ MoMo

export default router;