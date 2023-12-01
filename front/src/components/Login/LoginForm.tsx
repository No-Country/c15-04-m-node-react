import { Link } from "react-router-dom";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useUserContext } from "@/hooks/useExample/useUserContext";

const formSchema = z.object({
	email: z.string().min(2, {
		message: "email is required",
	}),
	password: z.string().min(2, {
		message: "password is required",
	}),
});
const LoginForm = () => {
	const { logIn } = useUserContext();

	const form = useForm<z.infer<typeof formSchema>>({
		resolver: zodResolver(formSchema),
		defaultValues: {
			email: "",
		},
	});
	// 2. Define a submit handler.
	async function onSubmit(values: z.infer<typeof formSchema>) {
		// Do something with the form values.
		// ✅ This will be type-safe and validated.
		await logIn(values.email, values.password);
	}

	return (
		<Form {...form}>
			<form
				onSubmit={form.handleSubmit(onSubmit)}
				className="max-w-sm p-6 text-lg bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 sm:w-[347px] md:[802px]"
			>
				<img className="w-[50%] m-auto" src="./src/assets/img/greentracelogo.png" alt="logo" />
				<FormField
					control={form.control}
					name="email"
					render={({ field }) => (
						<FormItem>
							<FormLabel>
								<h3 className="text-lg">Email:</h3>
							</FormLabel>
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
							<FormLabel>
								<h3 className="text-lg">Contraseña:</h3>
							</FormLabel>
							<FormControl>
								<Input placeholder="Ingresa tu contraseña" {...field} />
							</FormControl>
							<FormMessage />
						</FormItem>
					)}
				/>
				<div className="flex flex-col items-center justify-center gap-3 mt-6">
					<Button className="bg-green-700 text-lg" type="submit">
						Iniciar Sesión
					</Button>
					<p>¿No tienes cuenta?</p>
					<Link className="hover:underline" to="/signup">
						Registrarse
					</Link>
				</div>
			</form>
		</Form>
	);
};
export default LoginForm;
