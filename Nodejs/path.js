let path=require('path');
// let fileName=path.basename('D:Nodejs/path.js');
// console.log(fileName);
// =>path.js

// let fileName=path.basename('C:Nodejs/path.js');
// console.log(fileName);

// let fileName=path.basename('');
// console.log(fileName);

// let delimiter=path.delimiter;
// console.log(delimiter);
// =>;

// let dirName=path.dirname('C:Nodejs/path.js');
// console.log(dirName);
// =>C:Nodejs

// let extName=path.extname('C:Nodejs/path.js');
// console.log(extName);
// =>.js

// let fmt=path.format({
//     root: 'D:/',
//     name: 'file',
//     ext: '.txt',
//   });
//   console.log(fmt);
//   =>D:/file.txt 

// let abs=path.isAbsolute('C:Nodejs/path.js');
// console.log(abs)
// let abs=path.isAbsolute('D:/Nodejs/NODEJS/path.js');
// console.log(abs)
// =>true

// let join=path.join('D:','nodejs','path.js');
// console.log(join);
// =>D:\nodejs\path.js

// let norm=path.normalize('D:/Nodejs/NODEJS/path.js');
// console.log(norm);
// =>D:\Nodejs\NODEJS\path.js

// let parse=path.parse('D:/Nodejs/NODEJS/path.js');
// console.log(parse);
// =>{
//     root: 'D:/',
//     dir: 'D:/Nodejs/NODEJS',
//     base: 'path.js',
//     ext: '.js',
//     name: 'path'
//   }

// let posix=path.posix;
// console.log(posix);
// =>
//     <ref *2> {
//         resolve: [Function: resolve],
//         normalize: [Function: normalize],
//         isAbsolute: [Function: isAbsolute],
//         join: [Function: join],
//         relative: [Function: relative],
//         toNamespacedPath: [Function: toNamespacedPath],
//         dirname: [Function: dirname],
//         basename: [Function: basename],
//         extname: [Function: extname],
//         format: [Function: bound _format],
//         parse: [Function: parse],
//         sep: '/',
//         delimiter: ':',
//         win32: <ref *1> {
//           resolve: [Function: resolve],
//           normalize: [Function: normalize],
//           isAbsolute: [Function: isAbsolute],
//           join: [Function: join],
//           relative: [Function: relative],
//           toNamespacedPath: [Function: toNamespacedPath],
//           dirname: [Function: dirname],
//           basename: [Function: basename],
//           extname: [Function: extname],
//           format: [Function: bound _format],
//           parse: [Function: parse],
//           sep: '\\',
//           delimiter: ';',
//           win32: [Circular *1],
//           posix: [Circular *2],
//           _makeLong: [Function: toNamespacedPath]
//         },
//         posix: [Circular *2],
//         _makeLong: [Function: toNamespacedPath]
//       }


// let rel=path.relative('D:/Nodejs/NODEJS/path.js', 'C:/Nodejs/path.js');
// console.log(rel);
// =>C:\Nodejs\path.js

// let reslv=path.resolve('/foo/bar', './baz');
// console.log(reslv);
// =>D:\foo\bar\baz

// let sep=path.sep;
// console.log(sep);
// =>\

// let sep='foo/bar/baz'.split(path.sep);
// console.log(sep);
// =>[ 'foo/bar/baz' ]

// let nsp=path.toNamespacedPath('C:/Nodejs/path.js')
// console.log(nsp);
// =>\\?\C:\Nodejs\path.js

let win=path.win32;
console.log(win);