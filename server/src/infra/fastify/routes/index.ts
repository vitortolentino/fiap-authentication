import app from "../";
import { authenticateOauth } from "../auth/oauth2";
import { authRoutes } from "./authRoutes";

app.register(authRoutes);
// app.register();
