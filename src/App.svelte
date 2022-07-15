<script>
	import './app.css'
	import Router from 'svelte-spa-router'
	import { Routes } from './lib/Routes'
	import Header from './lib/Header.svelte'
	import Sidebar from './lib/Sidebar.svelte'
</script>

<main>
	<Header />
	<Sidebar />
	<div class="app-container">
		<Router routes={Routes} />
	</div>
</main>

<style>
	main {
		height: 100vh;
		width: 100%;
	}
	.app-container {
		position: absolute;
		top: var(--header-height);
		left: var(--sidebar-width);
		width: calc(100% - var(--sidebar-width));
		height: calc(100% - var(--header-height));
		overflow: auto;
	}
</style>
