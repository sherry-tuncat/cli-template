#!/usr/bin/env node
// 告诉操作系统，用node执行
// console.log('this is a bin package')
const inquirer = require('inquirer');
const { program } = require('commander'); // 命令定义
const chalk = require('chalk'); // 美化交互样式
const ora = require('ora'); // 加载美化
const figlet = require('figlet') // 艺术字体

// ------------chalk-----------------

// ------------打印艺术字------------
// figlet('hello world!!',(err,data)=> {
//   if(err) {
//     console.log('something went wrong...')
//     console.dir(err);
//     return
//   } 
//   console.log(data)
// })
// console.log(figlet.textSync('hey!',{
//   font:'Ghost',
//   horizontalLayout:'default',
//   verticalLayout:'default',
//   width:80,
//   whitespaceBreak:true
// }))
// ------------loading效果------------
// const spinner = ora('下载中...').start();

// setTimeout(()=>{
//   spinner.text='网络较慢，请稍等...';
//   spinner.color='red'
// },2000)

// setTimeout(()=>{
//   spinner.fail('加载失败')
// },4000)
// console.log(chalk.red.bold('hello sherry'))
// console.log(chalk.yellow('hello sherry'))
// console.log(chalk.blue.bold.bgYellow('hello sherry'))
// ------------commander---------------
// program.name('cli').usage('<command> [option]')

// program
//   .command('template')
//   .description('create init template')
//   .action(()=>{
//       inquirer
//         .prompt([
//           {
//             type:'list',
//             name:'template',
//             choices:[
//               {name:'管理端',value:'管理端'},
//               {name:'h5',value:'h5'},
//             ],
//             message:'请选择一个模板类型'
//           }
//         ])
//         .then(answers=>{
//           console.log(`您的选项是:${answers.template}`)
//           // 安装到目标文件夹
//         })
//   })
// program
//   .option('-d','--debug','output extra debugging')
//   .option('-s','--small','small pizza size')
//   .option('-p','--pizza-type <type>','flavour of pizza')

// program
//   .command('clone <source> [destination]')
//   .description('clone a respository into a newly created directory')
//   .action((source,destination)=>{
//     console.log(source,destination)
//   })

program.parse(process.argv);

// -----------inquirer-----------

// inquirer
//   .prompt([
//     {
//       type:'input',
//       name:'food',
//       message:'你吃什么？',
//       default:"今天汉堡特惠🍔"
//     }
//   ])
//   .then((answers)=>{
//     console.log(answers)
//   })
//   .catch((err)=>{
//     if(err.isTtyError) {

//     } else {

//     }
//   })
