#!/usr/bin/env node
const {program} = require('commander');
const figlet = require('figlet');
const fs = require('fs-extra');
const path = require('path');
const inquirer = require('inquirer');
const gitClone = require('git-clone');
const chalk = require('chalk');
const ora = require('ora');
// 1、usage + options + command
// 首行提示
program.name('cli-init').usage('<command> [options]')
// 版本号
program.version(`${require('../package.json').version}`)
// 给help信息添加提示
program.on('--help',function(){
  console.log(figlet.textSync('welcome',{
    font:'Ghost',
    horizontalLayout:'default',
    verticalLayout:'default',
    width:80,
    whitespaceBreak:true
  }))
})
// 命令
// 创建项目的命令
program
  .command('create <app-name>')
  .description('创建一个新项目')
  .action(async function(name){
    // 创建项目的逻辑
    // 创建一个名字为name的文件夹，把我们模板项目的代码都放在这个文件夹下面
    // 1、判断执行目录文件夹是否存在，重新创建还是覆盖
    const targetPath = path.join(process.cwd(),name)
    if(!fs.existsSync(targetPath)) {
      // 询问用户使用哪一个模板
      const answer = await inquirer.prompt([
        {
          type:'list',
          message:'选择什么框架去新建项目?',
          name:'type',
          choices:[
            {
              name:'vben-admin-thin-next',
              value:'vben'
            }
          ]
        },
        {
          type:'confirm',
          message:'是否使用ts',
          name:'ts',
        }
      ])
      const template = require('./template.json');
      if(answer.type==='vben') {
        // 仓库地址，路径，
        // 下载中样式
        const spinner = ora('下载中...').start();
        gitClone(template['vben'],name,{ checkout:'main' },function(err) {
          if(err) {
            spinner.fail('下载失败，请稍后重试')
          } else {
            spinner.succeed('下载成功')
            console.log(chalk.green(`cd ${name}`));
            console.log(chalk.green(`npm install`));
            console.log(chalk.green(`npm run dev`));
          }
        })
      }
      // 新建
      // gitClone()
    } else {
      const answer = await inquirer
        .prompt([
          {
            type:'confirm',
            message:'文件夹已存在，是否覆盖？请谨慎选择',
            defalut: false,
            name:'overwrite'
          }
        ])
      if(answer.overwrite) {
        // 确定覆盖
        fs.remove(targetPath)
        console.log(chalk.green('删除成功'))
        return;
      } else {
        // 直接放回起一个新名字
        return;
      }
    }
  })
program.parse(process.env.argv)