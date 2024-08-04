<script lang="ts">
	import Employee from '$lib/Employee.svelte';
	import AddEmployee from '$lib/AddEmployee.svelte';

	export let data;
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
		{#each data.employees as employee}
			<tr>
				<Employee
					{...employee}
				/>
			</tr>
		{/each}
		</tbody>
	</table>
	<form method="POST" action="?/create">
		<label>
			Name
			<input name="name" required>
		</label>
		<label>
			Position
			<input name="position" required>
		</label>
		<label>
			Salary
			<input name="salary" type="number" required min="0">
		</label>
		<button>Add</button>
	</form>
</div>

<style lang="postcss">
    :global(html) {
        background-color: theme(colors.gray.100);
    }
</style>