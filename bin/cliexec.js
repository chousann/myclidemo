// 参考：
// https://www.cnblogs.com/wmhuang/p/7052587.html
// http://www.sohu.com/a/275486462_495695
// https://www.jianshu.com/p/095c968d406f

function cli() {
    this._clitask = {};
    this.version = '1.0.0';
}

cli.prototype.exec = function (argv){
    switch (argv[2]) {
        case '-v':
        case '-version':
            console.log('version is ' + this.version);
            break;
        case '-h':
        case '-help': {
            console.log('');
            console.log('-version');
            console.log('-help');
            break;
        }
        case null:{
            console.log("Please enter the command to execute");
            break;
        }
        default: {
            var fn = this.get(argv[2]);
            if(fn == 'undefined' || fn == null) {
                console.log('Command does not exist');
            }
            else {
                this.get(argv[2])();
            }
            break;
        }
    }
};

cli.prototype.clitask = function (name,fn){
    this._clitask['-' + name] = fn;
};

cli.prototype.get = function (name){
    return this._clitask[name];
};

module.exports = cli;