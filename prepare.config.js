// const replace = require('replace-in-file')
const { Command } = require('commander')
const program = new Command()

program
  .command('android')
  .description('....')
  .argument('<env>', 'environtment')
  .action((env, options) => {
    console.log(env)
    const copyfiles = require('copyfiles')

    const copyCup = (paths, opts) => {
      return new Promise((resolve) => {
        copyfiles(paths, opts, () => {
          resolve()
        })
      })
    }

    const singleFiles = [
      [`./config/${env}/.env`, './'],
      [
        `./config/${env}/android/res/values/strings.xml`,
        './android/app/src/main/res/values/'
      ],
      [
        `./config/${env}/android/app/src/main/assets/appcenter-config.json`,
        './android/app/src/main/assets/'
      ]
    ]

    const singleFilePromises = []
    for (let i = 0; i < singleFiles.length; i++) {
      const singleFile = singleFiles[i]
      singleFilePromises.push(
        copyCup(singleFile, {
          up: true,
          verbose: true,
          error: true
        })
      )
    }

    Promise.all(singleFilePromises)
  })

program.parse()
