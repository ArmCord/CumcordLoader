const extVersion = chrome.runtime.getManifest().version;

const inject = async (branch, version) => {
  console.log('[CumcordLoader] Injecting...');

  const js = await (await fetch("https://raw.githubusercontent.com/Cumcord/Cumcord/stable/dist/build.js")).text(); // JSON.parse(localStorage.getItem('goosemodCoreJSCache'));

  const el = document.createElement('script');
  
  el.appendChild(document.createTextNode(js));
  
  document.body.appendChild(el);

  console.log('[CumcordLoader] Injected fetched JS');
};



