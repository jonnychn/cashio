import { n as TSS_SERVER_FUNCTION, t as createServerFn } from "./ssr.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/rates-DedIJeLm.js
var createServerRpc = (serverFnMeta, splitImportFn) => {
	const url = "/_serverFn/" + serverFnMeta.id;
	return Object.assign(splitImportFn, {
		url,
		serverFnMeta,
		[TSS_SERVER_FUNCTION]: true
	});
};
var RATES_URL = "https://open.er-api.com/v6/latest/USD";
async function parseErApi(res) {
	if (!res.ok) throw new Error(`Rates request failed (${res.status})`);
	const data = await res.json();
	if (!data.rates || typeof data.rates.USD !== "number") throw new Error("Rates payload was incomplete");
	const fetchedAt = Date.now();
	return {
		rates: data.rates,
		fetchedAt
	};
}
var pullRatesViaServer_createServerFn_handler = createServerRpc({
	id: "be0d273ea49712ffe9d5a7db59c031ad95c8da4ba3acd7a4a805ae7b56a09236",
	name: "pullRatesViaServer",
	filename: "src/lib/rates.ts"
}, (opts) => pullRatesViaServer.__executeServer(opts));
var pullRatesViaServer = createServerFn({ method: "GET" }).handler(pullRatesViaServer_createServerFn_handler, async () => {
	return parseErApi(await fetch(RATES_URL, { headers: { accept: "application/json" } }));
});
//#endregion
export { pullRatesViaServer_createServerFn_handler };
