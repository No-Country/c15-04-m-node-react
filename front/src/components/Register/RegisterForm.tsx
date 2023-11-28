"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";

import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";

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
	const form = useForm<z.infer<typeof formSchema>>({
		resolver: zodResolver(formSchema),
		defaultValues: {
			username: "",
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
				<img className="w-[50%] m-auto" src="logo.png" alt="" />
				<FormField
					control={form.control}
					name="username"
					render={({ field }) => (
						<FormItem>
							<FormLabel>Username:</FormLabel>
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
							<FormLabel>Password:</FormLabel>
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
							<FormLabel>Confirm Password:</FormLabel>
							<FormControl>
								<Input placeholder="Confirma tu contraseña" {...field} />
							</FormControl>
							<FormMessage />
						</FormItem>
					)}
				/>

				<Button type="submit">Crear</Button>
			</form>
		</Form>
	);
};
export default RegisterForm;
