chrome.tabs.onCreated.addListener((tab) => {
	let redirectUrl = "https://google.com"; // 固定のリダイレクト先

	// `edge://newtab/` の場合のみリダイレクト
	if (tab.pendingUrl && tab.pendingUrl.startsWith("edge://newtab")) {
		chrome.tabs.update(tab.id, { url: redirectUrl });
	}
});
