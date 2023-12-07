import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import LoginForm from "./Login/LoginForm";

export function LoginDialog() {
	return (
		<Dialog>
			<DialogTrigger asChild>
				<Button variant="outline">Iniciar Sesión</Button>
			</DialogTrigger>
			<DialogContent className="sm:max-w-[425px]">
				<div>
					<LoginForm />
				</div>
			</DialogContent>
		</Dialog>
	);
}
