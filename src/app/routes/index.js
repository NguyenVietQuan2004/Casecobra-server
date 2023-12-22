import productRoutes from './productRoutes.js';
import AuthRoutes from './AuthRoutes.js';
function routes(app) {
    app.use('/search', productRoutes);
    app.use('/auth', AuthRoutes);
    // app.use('/create', productRoutes);
}
export default routes;
