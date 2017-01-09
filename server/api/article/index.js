import { Router } from 'express';
import * as controller from './article.controller';

const router = new Router();

router.get('/', controller.index);
router.post('/create', controller.create);
router.delete('/delete/:id', controller.remove);

export default router;