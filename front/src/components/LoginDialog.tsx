import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import LoginForm from "./Login/LoginForm";
import useModalContext from "@/hooks/useModalContext";

export function LoginDialog() {
	const { setModalLogin, modalLogin } = useModalContext();
	return (
		<Dialog open={modalLogin} onOpenChange={setModalLogin}>
			<DialogTrigger
				asChild
				onClick={() => {
					setModalLogin(true);
				}}
			>
				<Button variant="outline">Iniciar Sesión</Button>
			</DialogTrigger>
			<DialogContent className="sm:max-w-[325px] ">
				<div>
					<LoginForm />
				</div>
			</DialogContent>
		</Dialog>
	);
}
