import React from "react";
import { X } from "lucide-react";
import Avatar from "@/components/ui/avatar";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useUserContext } from "@/hooks/useUserContext";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { useToast } from "@/components/ui/use-toast";

interface ChangePasswordPanelProps {
	isOpen: boolean;
	onClose: () => void;
}

const formSchema = z
	.object({
		password: z.string().min(2, {
			message: "password is required",
		}),
		password2: z.string().min(2, {
			message: "password is required",
		}),
	})
	.refine((data) => data.password === data.password2, {
		message: "Passwords must match",
		path: ["password2"],
	});

const ChangePasswordPanel: React.FC<ChangePasswordPanelProps> = ({ isOpen, onClose }) => {
	const { user, updateUser } = useUserContext();
	isOpen = true;
	const { toast } = useToast();

	const form = useForm<z.infer<typeof formSchema>>({
		resolver: zodResolver(formSchema),
		defaultValues: {
			password: "",
			password2: "",
		},
	});

	const onSubmit = async (values: z.infer<typeof formSchema>) => {
		const success = await updateUser({
			password: values.password,
		});
		if (success) {
			onClose();
			toast({
				title: "Contraseña actualizada",
			});
		} else {
			toast({
				title: "Error al actualizar contraseña",
				variant: "destructive",
			});
		}
	};

	return (
		<div
			className={`fixed inset-y-0 right-0 w-full  lg:w-1/4 md:w-1/3  dark:bg-[#020817] bg-white shadow-lg  flex flex-col ${
				isOpen ? "translate-x" : "translate-x-full  "
			} transition-transform duration-300 ease-in-out`}
		>
			<div className="header py-11 w-full h-20 flex items-center justify-between shadow-md">
				<div className="">
					<h1 className="text-xl font-bold px-4">Cambiar Contraseña</h1>
				</div>
				<div>
					<a onClick={onClose} className="cursor-pointer">
						<X size={34} className="m-4" />
					</a>
				</div>
			</div>
			<Form {...form}>
				<form onSubmit={form.handleSubmit(onSubmit)} className="content py-4  grow overflow-auto">
					<div className="flex items-center justify-center pt-4 ">
						<Avatar imagesize={100} />
					</div>
					<div className="flex flex-col items-center justify-center p-2 font-semibold">
						<h3 className="text-bold text-xl">{user?.nombre}</h3>
					</div>
					<div className="flex flex-col items-center justify-center gap-6 pt-6 px-6">
						<FormField
							control={form.control}
							name="password"
							render={({ field }) => (
								<FormItem className="w-full">
									<FormLabel>Contraseña nueva:</FormLabel>
									<FormControl>
										<Input type="password" placeholder="Contraseña nueva" {...field} />
									</FormControl>
									<FormMessage />
								</FormItem>
							)}
						/>
						<FormField
							control={form.control}
							name="password2"
							render={({ field }) => (
								<FormItem className="w-full">
									<FormLabel>Confirmar contraseña nueva:</FormLabel>
									<FormControl>
										<Input type="password" placeholder="Repite contraseña nueva" {...field} />
									</FormControl>
									<FormMessage />
								</FormItem>
							)}
						/>
					</div>
					<div className="flex items-center justify-center pt-10">
						<Button className="bg-emerald-500" type="submit" disabled={form.formState.isSubmitting}>
							Actualizar Contraseña
						</Button>
					</div>
				</form>
			</Form>
		</div>
	);
};

export default ChangePasswordPanel;
