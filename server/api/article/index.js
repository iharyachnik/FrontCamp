import { Router } from 'express';
import * as controller from './article.controller';

const router = new Router();

router.get('/', controller.index);
router.get('/titles', controller.titles);
router.post('/create', controller.create);
router.delete('/delete/:id', controller.remove);
router.get('/:id', controller.getOne);
router.patch('/:id', controller.update);

export default router;