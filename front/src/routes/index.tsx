import { createBrowserRouter } from "react-router-dom";

import mainRoutes from "./mainRoutes";
import authRoutes from "./authRoutes";

const router = createBrowserRouter([mainRoutes, authRoutes]);

export default router;
