import BookingRoutes from './BookingRoutes.js';
import AuthRoutes from './AuthRoutes.js';
import listRoutes from './ListRoutes.js';

function routes(app) {
    app.use('/auth', AuthRoutes);
    app.use('/booking', BookingRoutes);
    app.use('/list', listRoutes);
}
export default routes;
