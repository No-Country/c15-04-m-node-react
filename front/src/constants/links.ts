export interface LinkOption {
	label: string;
	name: string;
	path: string;
	case: string;
}

export const links: LinkOption[] = [
	{
		label: "Mi Huella",
		name: "Mi Huella",
		path: "/footprint",
		case: "footprint",
	},
	{
		label: "Calculadora",
		name: "Calculadora",
		path: "/quiz",
		case: "calculator",
	},
];
