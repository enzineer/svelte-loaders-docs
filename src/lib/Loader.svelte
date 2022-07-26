<script>
	import { LoaderTypes, GetDefaults, rawDefaults } from './LoaderTypes'
	export let params = {}
	let propsToLoader = GetDefaults(params.type)
	let raw = {}
	let codeString = ''
	let importStatement = ''
	const codeGenerator = (type) => {
		let newRaw = rawDefaults[params.type]
		console.log(newRaw)
		raw = newRaw
		let propString = ' '
		propsToLoader = GetDefaults(params.type)
		Object.keys(newRaw).forEach((key) => {
			if (key === 'secondaryColor') return
			let v = newRaw[key]
			let value = typeof v === 'string' ? `"${v}"` : `{${v}}`
			propString = propString + ` <span class='blue'>${key}</span>=${value}`
		})
		codeString = `<<span class='green'>${type}</span> ${propString}/>`
		importStatement = `<span class='purple'>import</span> {<span class='blue'> 
			${type}</span>} <span class='purple'>from</span> 'svelte-loaders'`
	}
	$: {
		codeGenerator(params.type)
	}
</script>

<div class="loader-container">
	<div class="loader-with-snippet">
		<div class="loader fc">
			<svelte:component this={LoaderTypes[params.type]} {...propsToLoader} />
		</div>
		<div class="code-snippet fc">
			<span class="html">{@html importStatement}</span>
			<span class="html">{@html codeString}</span>
		</div>
	</div>
	<div class="change-props">
		<table>
			<tr class="prop-type">
				<th>prop-name</th>
				<th>type</th>
				<th>default value</th>
			</tr>
			{#each Object.keys(raw) as key}
				<tr class="prop-type">
					<td>{key}</td>
					<td>{typeof raw[key]}</td>
					<td>{raw[key]}</td>
				</tr>
			{/each}
		</table>
	</div>
</div>

<style>
	table {
		border-collapse: collapse;
		width: 100%;
	}

	td,
	th {
		border: 1px solid #dddddd;
		text-align: left;
		padding: 8px;
	}
	.prop-type {
		height: 30px;
		margin: 5px;
	}

	.loader-container {
		font-family: monospace;
		width: 100%;
		height: 100%;
		position: relative;
		display: flex;
		flex-direction: column;
		align-items: center;
	}
	@media (min-width: 768px) {
		.loader-container {
			flex-direction: row;
			justify-content: center;
		}
	}
	.loader-with-snippet {
		width: 55%;
		height: 50%;
		border-radius: 10px;
		border: 1px solid #eee;
	}
	.loader {
		overflow: auto;
		height: calc(100% - 80px);
	}
	.code-snippet {
		border-top: 1px solid #eee;
		overflow: auto;
		flex-direction: column;
		height: 80px;
	}
	.html {
		padding: 5px 0px 5px 0px;
	}
	.change-props {
		box-sizing: border-box;
		/* border: 1px solid #eee; */
		/* border-radius: 0px 20px 20px 0px; */
		border-left: none;
		max-width: 40%;
		max-height: 50%;
		overflow: auto;
		padding-left: 10px;
	}
</style>
