<script lang="ts">
	import Employee from '$lib/Employee.svelte';
	import AddEmployee from '$lib/AddEmployee.svelte';
	import { employeesList } from '$lib/stores';
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
		{#each $employeesList as employee}
			<tr>
				<Employee
					{...employee}
				/>
			</tr>
		{/each}
		<tr>
			<AddEmployee />
		</tr>
		</tbody>
	</table>
</div>

<style lang="postcss">
    :global(html) {
        background-color: theme(colors.gray.100);
    }
</style>