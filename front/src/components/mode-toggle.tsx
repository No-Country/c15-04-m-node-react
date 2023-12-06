import { Switch } from "@/components/ui/switch";
import { useTheme } from "@/components/theme-provider";

export function ModeToggle() {
	const { theme, setTheme } = useTheme();

	const handleToggle = () => {
		const newTheme = theme === "dark" ? "light" : "dark";
		setTheme(newTheme);
	};

	return <Switch checked={theme === "dark"} onCheckedChange={handleToggle} />;
}
