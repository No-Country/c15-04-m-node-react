"use client";
import { Link } from "react-router-dom";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";

const formSchema = z.object({
	email: z.string().min(2, {
		message: "email is required",
	}),
	password: z.string().min(2, {
		message: "password is required",
	}),
});
const LoginForm = () => {
	const form = useForm<z.infer<typeof formSchema>>({
		resolver: zodResolver(formSchema),
		defaultValues: {
			email: "",
		},
	});
	// 2. Define a submit handler.
	function onSubmit(values: z.infer<typeof formSchema>) {
		// Do something with the form values.
		// ✅ This will be type-safe and validated.
		console.log(values);
	}

	return (
		<Form {...form}>
			<form
				onSubmit={form.handleSubmit(onSubmit)}
				className="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 sm:w-[347px] md:[802px]"
			>
				<img
					className="w-[50%] m-auto"
					src="https://lh3.googleusercontent.com/drive-viewer/AK7aPaDNIP9_zcZgI39HIO92M_u4qKEDGeOHWDYbSwk_8ORsiQW45EqGTRCjb2_bbPsZBPtQYm7Lzonq75Ph4cTQ5vPC2TQG6A=s2560"
					alt=""
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
				<div className="flex flex-col items-center justify-center gap-3 mt-6">
					<Button className="bg-green-700" type="submit">
						Iniciar Sesión
					</Button>
					<h3>¿No tienes cuenta?</h3>
					<Link className="hover:underline" to="/signin">
						Registrarse
					</Link>
				</div>
			</form>
		</Form>
	);
};
export default LoginForm;
