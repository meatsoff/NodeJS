const express = require('express');
const router = express.Router();

const courseController = require('../app/controllers/CourseController');

router.get('/create', courseController.create);
router.post('/store', courseController.store);
router.get('/:id/edit', courseController.edit);
router.post('/handle-form-actions', courseController.handleFormActions);
// Update all 
router.put('/:id', courseController.update);
// Update a feild 
router.patch('/:id/restore', courseController.restore);
router.delete('/:id', courseController.deleteSoft);
router.delete('/:id/force', courseController.forcedDelete);
router.get('/:slug', courseController.show);

module.exports = router;
