<script>
	import { LoaderTypes } from './LoaderTypes'
	export let params = {}
	let propsToLoader = LoaderTypes[params.type].defaults
	let codeString = ''
	let importStatement = ''
	const codeGenerator = (type, props) => {
		let propString = ' '
		Object.keys(props).forEach((key) => {
			let v = props[key]
			let value = typeof v === 'string' ? `"${v}"` : `{${v}}`
			propString = propString + ` <span class='blue'>${key}</span>=${value}`
		})
		codeString = `<<span class='green'>${type}</span> ${propString}/>`
		importStatement = `<span class='purple'>import</span> {<span class='blue'> 
			${type}</span>} <span class='purple'>from</span> 'svelte-loaders'`
	}
	$: {
		codeGenerator(params.type, propsToLoader)
	}
</script>

<div class="loader-container">
	<div class="loader-with-snippet">
		<div class="loader fc">
			<svelte:component this={LoaderTypes[params.type].component} {...propsToLoader} />
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
			{#each Object.keys(propsToLoader) as prop}
				<tr class="prop-type">
					<td>{prop}</td>
					<td>{typeof propsToLoader[prop]}</td>
					<td>{propsToLoader[prop]}</td>
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
		margin-left: 5px;
	}

	.loader-container {
		font-family: monospace;
		width: 100%;
		height: 100%;
		position: relative;
		display: flex;
		justify-content: center;
		padding: 15vh 0 5vh 0;
	}
	.loader-with-snippet {
		width: 60%;
		height: 50%;
		border-radius: 10px;
		border: 1px solid #eee;
	}
	.loader {
		overflow: auto;
		height: calc(100% - 60px);
	}
	.code-snippet {
		border-top: 1px solid #eee;
		overflow: scroll;
		flex-direction: column;
	}
	.html {
		padding: 5px 0px 5px 0px;
	}
	.change-props {
		box-sizing: border-box;
		/* border: 1px solid #eee; */
		/* border-radius: 0px 20px 20px 0px; */
		border-left: none;
		width: 20%;
		height: 50%;
		overflow: auto;
		padding-left: 10px;
	}
</style>
