// 运行在 Electron 主进程 下的插件入口

// 创建窗口时触发
module.exports.onBrowserWindowCreated = (window) => {
	// window 为 Electron 的 BrowserWindow 实例
	window.once('show', () => {
		window.setBackgroundColor('rgba(0, 0, 0, 0)');
		window.setBackgroundMaterial('mica');
	});
};
