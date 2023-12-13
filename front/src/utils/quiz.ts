import { InputObject, NestedObject } from "@/types/quiz";

export const transformData = (input: InputObject): NestedObject => {
	const output: NestedObject = {};

	for (const key in input) {
		const value = input[key];
		const parts = key.split(".");

		if (parts.length > 1) {
			let temp: NestedObject = output;

			for (let i = 0; i < parts.length - 1; i++) {
				const part = parts[i];

				if (!temp[part] || typeof temp[part] !== "object") {
					temp[part] = {};
				}

				temp = temp[part] as NestedObject;
			}

			temp[parts[parts.length - 1]] = value;
		} else {
			output[key] = value;
		}
	}

	return output;
};
