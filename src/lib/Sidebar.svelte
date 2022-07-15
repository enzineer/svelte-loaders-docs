<script>
	import { push, location } from 'svelte-spa-router'
	import { LoaderTypes } from './LoaderTypes'
	console.log($location.split('/'))
	let loc = ''
	location.subscribe((e) => {
		let l = e.split('/')
		if (l.length) loc = l[l.length - 1]
	})
</script>

<div class="sidebar">
	<div class="list-container">
		<div class="menu-item" class:active={loc === ''} on:click={() => push('/')}>Getting Started</div>
		<div class="menu-item">Loaders</div>
		<div class="submenu">
			{#each Object.keys(LoaderTypes) as loader}
				<div
					class="menu-item sub-item"
					class:active={loc === loader}
					on:click={() => push(`/loader/${loader}`)}
				>
					{loader}
				</div>
			{/each}
		</div>
	</div>
</div>

<style>
	.sidebar {
		position: absolute;
		top: var(--header-height);
		left: 0;
		width: var(--sidebar-width);
		height: calc(100vh - var(--header-height));
		border-right: 1px solid #eee;
		display: flex;
		place-content: center;
		background-color: var(--sidebar-bg);
	}
	.list-container {
		margin-top: 30px;
		width: 95%;
	}
	.menu-item {
		margin: 10px 0px 10px 30px;
		color: #222;
		border-left: 3px transparent;
		padding-left: 5px;
		cursor: pointer;
		font-size: 16px;
	}

	.submenu {
		margin-left: 15px;
		margin-top: 15px;
	}
	.sub-item {
		font-size: 14px;
		color: #444;
	}
	.active {
		border-left: 3px solid tomato;
		border-radius: 3px;
		font-weight: bold;
	}
</style>
