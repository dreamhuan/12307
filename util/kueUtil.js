const express = require('express');
const path = require('path');
const kue = require('kue');
const queue = kue.createQueue();

const app = express();
app.listen(3000);

kue.app.listen(3001);
console.log('kue UI started on port http://localhost:3001');

/**
 * 创建一个任务
 * @param {any} data
 * @param {string} [priority='normal']  low normal medium high critical
 */
function addEmailTask(taskName, data, priority = 'normal') {
    const job = queue
        .create(taskName, data)
        .priority(priority)
        .save(function(err) {
            if (!err) {
                console.log('you add Email job success, jobid:', job.id);
            }
        });
}

app.get('/', (req, res, next) => {
    res.sendFile(path.resolve(__dirname, 'views/index.html'));
});

app.get('/add', (req, res, next) => {
    //创建一个任务
    addEmailTask('send email', {
        title: '测试队列的使用',
        to: 'test@qq.com',
        template: 'you are use queue send email success...'
    });
    res.sendFile(path.resolve(__dirname, 'views/index.html'));
});

app.get('/process', (req, res, next) => {
    /**
     处理队列，这里的第一个参数，是任务的名称, 需要和添加的任务名称一致。
     job.data 是创建任务传过来的数据
     done 执行完成后的回调
     */
    queue.process('send email', 5, function(job, done) {
        console.log('send email:', job.data.title);
        setTimeout(done, Math.random() * 1000);
    });
    res.sendFile(path.resolve(__dirname, 'views/index.html'));
});
