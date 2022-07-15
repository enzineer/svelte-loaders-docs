<script>
	import { push } from 'svelte-spa-router'
</script>

<header class="header">
	<div class="app-title">svelte-loaders</div>
</header>

<style>
	.app-title {
		font-size: 20px;
		font-family: monospace;
	}

	.header {
		height: var(--header-height);
		width: 100%;
		display: flex;
		place-items: center;
		place-content: center;
		flex-direction: row;
		border-bottom: 1px solid #eee;
		background-color: var(--header-bg);
		color: var(--header-color);
	}
</style>
