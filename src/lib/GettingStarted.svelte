<div class="getting-started">
	<div class="h3">Getting started</div>
	<div class="message">
		<code>svelte-loaders</code> provides customizable Svelte svg spinner/loader component which can be implemented
		for async await operation before data loads to the view.
	</div>
	<div class="h3">Installation</div>
	<div class="installation">
		<div class="npm">$ <span class="red">npm install </span> svelte-loaders</div>
		<div class="seperator">#or</div>

		<div class="yarn">$ <span class="red"> npm install </span> svelte-loaders</div>
	</div>
</div>

<style>
	.seperator {
		padding: 10px 0px 10px 30px;
		font-style: italic;
		color: #888;
	}
	.red {
		color: brown;
	}
	.h3 {
		margin: 20px 0px 15px 0px;
		font-size: 22px;
		font-weight: bold;
	}
	.getting-started {
		color: #444;
		padding: 10vh 5vw 10vh 5vw;
	}
	.installation {
		font-family: monospace;
		font-size: 15px;
		height: 150px;
		display: flex;
		flex-direction: column;
		justify-content: center;
		background-color: var(--sidebar-bg);
		border-radius: 8px;
	}
</style>
