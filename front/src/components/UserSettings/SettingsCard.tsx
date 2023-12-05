import SettingsItem from "./SettingsItem";

const SetringsList = (props: any) => {
	return (
		<div className="config flex flex-col justify-start font-semibold">
			<h2 className="flex px-6 py-1 text-lg text-gray-800 font-bold dark:text-white">{props.title}</h2>
			<div className="text-sm text-gray-600 dark:text-white">
				{props.items.map((item: any) => (
					<SettingsItem icon={item.icon} label={item.label} useSwitch={item.useSwitch} />
				))}
				<div className="mx-6 border border-slate-4 my-2"></div>
			</div>
		</div>
	);
};

export default SetringsList;
