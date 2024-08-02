<script>
	import Employee from '$lib/Employee.svelte';
	import AddEmployee from '$lib/AddEmployee.svelte';

	const employeesList = [
		{ id: 0, name: 'Chris Hatch', position: 'Software Developer', salary: 130000 },
		{ id: 1, name: 'Elizabeth Montgomery', position: 'Lead Research Engineer', salary: 70000 },
		{ id: 2, name: 'Aiden Shaw', position: 'Machine Learning Engineer', salary: 80000 },
	];
</script>

<div class="card w-45 mx-auto mt-75 pb-5">
	<table>
		<thead>
		<tr>
			<th>Name</th>
			<th>Position</th>
			<th>Salary</th>
			<th>Action</th>
		</tr>
		</thead>
		<tbody>
		{#each employeesList as employee}
			<tr>
				<Employee
					name={employee.name}
					position={employee.position}
					salary={employee.salary}
				/>
			</tr>
		{/each}
		<tr>
			<AddEmployee/>
		</tr>
		</tbody>
	</table>
</div>

<style lang="postcss">
    :global(html) {
        background-color: theme(colors.gray.100);
    }
</style>