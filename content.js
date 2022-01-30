function sleep (time) {
  return new Promise((resolve) => setTimeout(resolve, time));
}
sleep(5000).then(() => {

const load = async () => {
	 console.log('[CumcordLoader] Injecting...');
	const response = await fetch("https://raw.githubusercontent.com/Cumcord/Cumcord/stable/dist/build.js");
	const text = await response.text()
	eval(text);
}
const el = document.createElement('script');
el.appendChild(document.createTextNode(`(${load.toString()})();`));
document.body.appendChild(el);
});
