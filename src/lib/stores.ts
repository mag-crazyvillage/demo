import {writable} from 'svelte/store';

export const employees = writable([
	{ id: 0, name: 'Chris Hatch', position: 'Software Developer', salary: 130000 },
	{ id: 1, name: 'Elizabeth Montgomery', position: 'Lead Research Engineer', salary: 70000 },
	{ id: 2, name: 'Aiden Shaw', position: 'Machine Learning Engineer', salary: 80000 },
]);