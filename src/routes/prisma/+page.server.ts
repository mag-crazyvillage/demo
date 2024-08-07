import prisma from '$lib/prisma';

export async function load() {
	return {
		employees: await prisma.employee.findMany()
	};
}

export const actions = {
	create: async ({request}) => {
		const data = await request.formData();
		const name = data.get("name");
		const position = data.get("position");
		const salary = data.get("salary");

		await prisma.employee.create({
			data: {
				name: name as string,
				position: position as string,
				salary: Number(salary),
			}
		});
	},
}