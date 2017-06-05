// process.stdin.setEncoding('utf-8');

// process.stdin.on('readable', () => {
//     var chunk = process.stdin.read();
//     if( chunk !== null ){
//         process.stdout.write(`data: ${chunk}`);
//     }
// });

var q = '请输入用户名：';

var users = {
    'admin':'123',
    'user1':'321',
    'user2':'213'
};

//出书第一个问题
process.stdout.write(q+'\n');

// var i = 0;
// var isInputUsername = true;
var username = '';
//接收用户输入
// var res = process.stdin.realine();//用户的操作无状态
process.stdin.on('data',(input) => {
    // console.log(i++);
    // 在此处知道到底input是啥？
    //process.stdout.write(`[${input}]`);
    //input实际上一个流（二进制数组）
    //输入的字符最后肯定是一个回车符
    input = input.toString().trim();
    //获取一个键值对集合中所有的键
    if (!username){
        if( Object.keys(users).indexOf(input) === -1 ){
            //用户名不存在
            process.stdout.write('用户名不存在'+'\n');
            process.stdout.write(q+'\n');
            //isInputUsername = true;
            username = '';
        }else{
            //用户存在
            //var pwd = users[input];
            //console.log('存在');
            process.stdout.write('请输入密码：'+'\n');
            //isInputUsername = false;
            username = input;
        }
    }else{
        //传入的是密码,此处拿不到上次的输入，所以拿不到用户名
        // console.log(1111);
        if(input === users[username]){
            console.log('登录成功');
        }else{
            process.stdout.write('请输入密码：\n');
        }
    }
});

//当命令行中回车符出现，触发
// process.stdin.on('data', (data) => {
//     process.stdout.write(data);
// });
