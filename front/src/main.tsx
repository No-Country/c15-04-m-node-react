import { ThemeProvider } from "@/components/theme-provider";
import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import { Toaster } from "./components/ui/toaster.tsx";
import { ModalProvider } from "./context/modalContext.tsx";
import { UserProvider } from "./context/userContext.tsx";
import "./index.css";
import router from "./routes/index.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
	<React.StrictMode>
		<ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
			<UserProvider>
				<ModalProvider>
					<RouterProvider router={router} />
				</ModalProvider>
			</UserProvider>
			<Toaster />
		</ThemeProvider>
	</React.StrictMode>,
);
