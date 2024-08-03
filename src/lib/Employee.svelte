<script lang="ts">
	export let name: string;
	export let position: string;
	export let salary: number;
</script>

<td>{name}</td>
<td class='pl-20'>{position}</td>
<td class='pl-20'>
	<div>
		{salary}
	</div>
	<!--{/* use this block of code when the salary field becomes editable */}-->
	<!--{/* <input-->
	<!--	data-testid={ 'employee-salary-input-' + idx }-->
	<!--	type='number'-->
	<!--/> */}-->
</td>
<td class='pl-20'>
	<button
		class='x-small w-75 ma-0 px-25'
	>
		Save
	</button>
</td>