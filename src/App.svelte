<script>
	import { onMount } from "svelte";
	import { validateObject } from "./utils";
	import { testData } from "./testData";

	let validObject = false;

	onMount(() => {
		/**
		 * @param {object} schema
		 * @param {object} objectToValidate
		 * @return {boolean} it wil return true is the object is valid, else it will return false
		 */
		validObject = validateObject(
			testData.person.personSchema,
			testData.person.personObj
		);
	});
</script>

<style>
	main {
		text-align: center;
		padding: 1em;
		max-width: 240px;
		margin: 0 auto;
	}

	h1 {
		color: #2369d3;
		text-transform: uppercase;
		font-size: 2em;
		font-weight: 100;
	}

	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}
</style>

<main>
	<h1>This object is {validObject ? 'valid' : 'not valid'}</h1>
</main>
