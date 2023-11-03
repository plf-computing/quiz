import express from 'express';
import * as controller from '../controllers/questions.contoller.js';
const router = express.Router();

router.route('/question')
    .get(controller.getAllQuestions)
    .post(controller.insertQuestions)
    .delete(controller.deleteQuestions)


router.route('/result')
    .get(controller.getResults)
    .post(controller.storeResult)
    .delete(controller.deleteResult)





export default router;