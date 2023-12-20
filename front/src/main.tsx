import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import "./index.css";
import router from "./routes/index.tsx";
import { UserProvider } from "./context/userContext.tsx";
import { Toaster } from "./components/ui/toaster.tsx";
import { ThemeProvider } from "@/components/theme-provider";
import { ModalContext, ModalProvider } from "./context/modalContext.tsx";

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
