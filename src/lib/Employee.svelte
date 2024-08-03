<script lang="ts">
	import { employees } from '$lib/stores';

	export let id: number;
	export let name: string;
	export let position: string;
	export let salary: number;

	let isEditing: boolean;
	let newSalary: number = salary;

	$: saveDisabled = !isEditing || newSalary <= 0 || newSalary === salary;

	function handleSalaryClick() {
		isEditing = true;
	}

	function handleSaveClick() {
		isEditing = false;
		employees.update((e) => {
			const employee = e.find((e) => e.id === id);
			employee!.salary = newSalary;
			return e;
		})
	}
</script>

<td>{name}</td>
<td class='pl-20'>{position}</td>
<td class='pl-20'>
	{#if isEditing}
	<input
		type='number'
		bind:value={newSalary}
	/>
	{:else}
		<div on:click={handleSalaryClick}>
			{salary}
		</div>
	{/if}
</td>
<td class='pl-20'>
	<button
		class='x-small w-75 ma-0 px-25'
		disabled={saveDisabled}
		on:click={handleSaveClick}
	>
		Save
	</button>
</td>