

// var log = function(message){
//     process.stdout.write(message+'\n');
// }
// 每个成员就是帧
var frames = [];
frames[frames.length] = `
                    ...．．∵ ∴★．∴∵∴ ╭ ╯╭ ╯╭ ╯╭ ╯∴∵∴∵∴
                    ．☆．∵∴∵．∴∵∴▍▍ ▍▍ ▍▍ ▍▍☆ ★∵∴
                    ▍．∴∵∴∵．∴▅███████████☆ ★∵
                    ◥█▅▅▅▅███▅█▅█▅█▅█▅█▅███◤
                    ． ◥███████████████████◤
                    .．.．◥████████████████■◤
`;
frames[frames.length] = `
                ...．．∵ ∴★．∴∵∴ ╭ ╯╭ ╯╭ ╯╭ ╯∴∵∴∵∴
                ．☆．∵∴∵．∴∵∴▍▍ ▍▍ ▍▍ ▍▍☆ ★∵∴
                ▍．∴∵∴∵．∴▅███████████☆ ★∵
                ◥█▅▅▅▅███▅█▅█▅█▅█▅█▅███◤
                ． ◥███████████████████◤
                .．.．◥████████████████■◤
`;
frames[frames.length] = `
            ...．．∵ ∴★．∴∵∴ ╭ ╯╭ ╯╭ ╯╭ ╯∴∵∴∵∴
            ．☆．∵∴∵．∴∵∴▍▍ ▍▍ ▍▍ ▍▍☆ ★∵∴
            ▍．∴∵∴∵．∴▅███████████☆ ★∵
            ◥█▅▅▅▅███▅█▅█▅█▅█▅█▅███◤
            ． ◥███████████████████◤
            .．.．◥████████████████■◤
`;
frames[frames.length] = `
        ...．．∵ ∴★．∴∵∴ ╭ ╯╭ ╯╭ ╯╭ ╯∴∵∴∵∴
        ．☆．∵∴∵．∴∵∴▍▍ ▍▍ ▍▍ ▍▍☆ ★∵∴
        ▍．∴∵∴∵．∴▅███████████☆ ★∵
        ◥█▅▅▅▅███▅█▅█▅█▅█▅█▅███◤
        ． ◥███████████████████◤
        .．.．◥████████████████■◤
`;
frames[frames.length] = `
    ...．．∵ ∴★．∴∵∴ ╭ ╯╭ ╯╭ ╯╭ ╯∴∵∴∵∴
    ．☆．∵∴∵．∴∵∴▍▍ ▍▍ ▍▍ ▍▍☆ ★∵∴
    ▍．∴∵∴∵．∴▅███████████☆ ★∵
    ◥█▅▅▅▅███▅█▅█▅█▅█▅█▅███◤
    ． ◥███████████████████◤
    .．.．◥████████████████■◤
`;
frames[frames.length] = `
...．．∵ ∴★．∴∵∴ ╭ ╯╭ ╯╭ ╯╭ ╯∴∵∴∵∴
．☆．∵∴∵．∴∵∴▍▍ ▍▍ ▍▍ ▍▍☆ ★∵∴
▍．∴∵∴∵．∴▅███████████☆ ★∵
◥█▅▅▅▅███▅█▅█▅█▅█▅█▅███◤
． ◥███████████████████◤
.．.．◥████████████████■◤
`;

var fps = 10;
//当前显示哪一帧
var current = 0;
var render = () => {
    //将当前控制人台清空
    // var height = process.stdout.getWindowSize()[1];
    // for(var i=0;i<height;i++){
    //     process.stdout.write('\r\n');
    // }
    process.stdout.write('\033[2J');
    process.stdout.write('\033[0f');
    //输出新的内容
    if(current === frames.length){current = 0;}
    process.stdout.write(frames[current++]);
    
};

setInterval(render, 1000 / fps);
