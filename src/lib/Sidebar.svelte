<script>
	import { push, location } from 'svelte-spa-router'
	import { LoaderTypes } from './LoaderTypes'
	let loc = ''
	location.subscribe((e) => {
		let l = e.split('/')
		if (l.length) loc = l[l.length - 1]
	})
</script>

<div class="sidebar">
	<div class="list-container">
		<div class="menu-item" class:active={loc === ''} on:click={() => push('/')}>Getting Started</div>
		<div class="section">Loaders</div>
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
	.menu-item,
	.section {
		width: 100%;
		margin-left: 30px;
		color: #222;
		border-left: 3px transparent;
		padding: 8px 0px 8px 8px;
		cursor: pointer;
		font-size: 16px;
	}
	.section {
		margin-top: 10px;
		font-weight: bold;
	}
	.menu-item:hover {
		background-color: #fff;
	}
	.submenu {
		margin-left: 15px;
		margin-top: 15px;
	}
	.sub-item {
		font-size: 14px;
		color: #444;
		border-left: 2px solid #eee;
	}
	.active {
		border-left: 2px solid #ff3e00;
		background-color: #fff;
	}
</style>
