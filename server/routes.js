import articlesRoutes from './routes/articles';

const router = (app) => {
  app.use('/api/articles', articlesRoutes);
};

export default router;