<script>
	import {
		Button, Input,
		Label,
		Table,
		TableBody,
		TableBodyCell,
		TableBodyRow,
		TableHead,
		TableHeadCell
	} from 'flowbite-svelte';
	import { enhance } from '$app/forms';

	export let data;
</script>

<Table striped={true}>
	<TableHead>
		<TableHeadCell>Name</TableHeadCell>
		<TableHeadCell>Position</TableHeadCell>
		<TableHeadCell>Salary</TableHeadCell>
		<TableHeadCell>
			<span class="sr-only">Edit</span>
		</TableHeadCell>
	</TableHead>
	<TableBody tableBodyClass="divide-y">
		{#each data.employees as employee}
		<TableBodyRow>
			<TableBodyCell>{employee.name}</TableBodyCell>
			<TableBodyCell>{employee.position}</TableBodyCell>
			<TableBodyCell>{employee.salary}</TableBodyCell>
			<TableBodyCell>
				<a href="/tables" class="font-medium text-primary-600 hover:underline dark:text-primary-500">Edit</a>
			</TableBodyCell>
		</TableBodyRow>
		{/each}
	</TableBody>
</Table>
<form method="POST" action="/prisma?/create" use:enhance>
	<div class="grid gap-6 mb-6 md:grid-cols-4">
		<div>
			<Label for="name" class="mb-2">Name</Label>
			<Input type="text" id="name" name="name" placeholder="Name" required/>
		</div>
		<div>
			<Label for="position" class="mb-2">Position</Label>
			<Input type="text" id="position" name="position" placeholder="Position" required />
		</div>
		<div>
			<Label for="salary" class="mb-2">Salary</Label>
			<Input type="number" id="salary" name="salary" placeholder="Salary" required />
		</div>
		<div>
			<Label for="add" class="mb-2">Action</Label>
			<Button type="submit" id="add">Add</Button>
		</div>
	</div>
</form>