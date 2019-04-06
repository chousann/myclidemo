// 参考：
// https://www.cnblogs.com/wmhuang/p/7052587.html
// http://www.sohu.com/a/275486462_495695
// https://www.jianshu.com/p/095c968d406f


module.exports = function (cli){
    cli.clitask('default',function (){
        console.log('Please enter a valid command')
    });

    cli.clitask('first', function (){
        console.log('first command');
    });
    
    //Add custom commands here
    //...
};