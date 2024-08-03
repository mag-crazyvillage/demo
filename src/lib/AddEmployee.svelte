<script lang="ts">
	import {employeesList} from '$lib/stores';

	let employee: {name: string, position: string, salary: number} = {
		name: '',
		position: '',
		salary: 0,
	};

	function addEmployee(){
		employeesList.update((e) => {
			const ids = e.map(e => e.id);
			const nextId = Math.max(...ids) + 1;
			e.push({id: nextId, ...employee})
			return e;
		})
	}
</script>

<td class='pl-30'>
	<input
		placeholder='Enter Name'
		bind:value={employee.name}
	/>
</td>
<td class='pl-20'>
	<input
		placeholder='Enter Position'
		bind:value={employee.position}
	/>
</td>
<td class='pl-20'>
	<input
		type='number'
		placeholder='Enter Salary'
		bind:value={employee.salary}
	/>
</td>
<td class='pl-20'>
	<button
		class='x-small w-75 ma-0 px-25'
		on:click={addEmployee}
	>
		Add
	</button>
</td>