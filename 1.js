const {exec} = require("child_process");
function open(url){
	switch (process.platform) {
        //mac系统使用 一下命令打开url在浏览器
        case "darwin":
            exec(`open ${url}`);
        //win系统使用 一下命令打开url在浏览器
        case "win32":
            exec(`start ${url}`);
            // 默认mac系统
        default:
            exec(`open ${url}`);
    }
}
var CronJob = require('cron').CronJob;
new CronJob('1 42 14 * * *', function() {
    console.log('You will see this message every second');
    open("http://www.baidu.com");
}, null, true, 'America/Los_Angeles');
