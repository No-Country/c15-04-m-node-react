export type Answer = string | number | boolean;

export interface InputObject {
	[key: string]: Answer;
}

export interface NestedObject {
	[key: string]: string | NestedObject;
}

export interface ConditionSubQuestion {
	triggerAnswer: Answer;
	questions: Question[];
}

export interface Option {
	value: Answer;
	label: string;
}

export type QuestionType = "text" | "number" | "radio" | "checkbox" | "select";

export interface Question {
	title: string;
	name: string;
	description?: string;
	type: QuestionType;
	options?: Option[];
	conditions?: ConditionSubQuestion[];
}
