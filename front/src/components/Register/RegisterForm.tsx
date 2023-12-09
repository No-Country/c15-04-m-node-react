import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";

import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Link, useNavigate } from "react-router-dom";
import { useUserContext } from "@/hooks/useExample/useUserContext";

import GreenTraceLogo from "@/assets/img/greentracelogo.png";

const formSchema = z.object({
	username: z.string().min(2, {
		message: "Username is required.",
	}),
	email: z.string().min(2, {
		message: "email is required",
	}),
	password: z.string().min(2, {
		message: "password is required",
	}),
	password2: z.string().min(2, {
		message: "password is required",
	}),
});
const RegisterForm = () => {
	const { signUp } = useUserContext();
	const navigate = useNavigate();

	const form = useForm<z.infer<typeof formSchema>>({
		resolver: zodResolver(formSchema),
		defaultValues: {
			username: "",
		},
	});
	// 2. Define a submit handler.
	async function onSubmit(values: z.infer<typeof formSchema>) {
		// Do something with the form values.
		// ✅ This will be type-safe and validated.
		const user = await signUp({
			correo: values.email,
			password: values.password,
			nombre: values.username,
		});
		if (user?.nombre) {
			navigate("/");
		}
	}

	return (
		<div className="flex items-center">
			<Form {...form}>
				<form
					onSubmit={form.handleSubmit(onSubmit)}
					className="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 sm:w-[347px] md:[802px]"
				>
					<img className="w-[50%] m-auto" src={GreenTraceLogo} alt="logo" />
					<FormField
						control={form.control}
						name="username"
						render={({ field }) => (
							<FormItem>
								<FormLabel>Nombre de usuario:</FormLabel>
								<FormControl>
									<Input placeholder="Ingresa tu nombre de usuario" {...field} />
								</FormControl>
								<FormMessage />
							</FormItem>
						)}
					/>
					<FormField
						control={form.control}
						name="email"
						render={({ field }) => (
							<FormItem>
								<FormLabel>Email:</FormLabel>
								<FormControl>
									<Input placeholder="Ingresa tu email" {...field} />
								</FormControl>
								<FormMessage />
							</FormItem>
						)}
					/>
					<FormField
						control={form.control}
						name="password"
						render={({ field }) => (
							<FormItem>
								<FormLabel>Contraseña:</FormLabel>
								<FormControl>
									<Input placeholder="Ingresa tu contraseña" {...field} />
								</FormControl>
								<FormMessage />
							</FormItem>
						)}
					/>
					<FormField
						control={form.control}
						name="password2"
						render={({ field }) => (
							<FormItem>
								<FormLabel>Confirmar Contraseña:</FormLabel>
								<FormControl>
									<Input placeholder="Confirma tu contraseña" {...field} />
								</FormControl>
								<FormMessage />
							</FormItem>
						)}
					/>

					<div className="flex mt-5 justify-center">
						<Button className="bg-green-500 disabled:bg-gray-500" type="submit">
							Crear Cuenta
						</Button>
					</div>
					<div className="flex flex-col items-center pt-4">
						<p className="p-4">¿Ya tienes cuenta?</p>
						<Link className="hover:underline" to="/login">
							Iniciar Sesión
						</Link>
					</div>
				</form>
			</Form>
		</div>
	);
};
export default RegisterForm;
