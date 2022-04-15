const fs = require('fs')
const chalk = require('chalk')

const {toCamelCase, errorLog, warningLog, successLog, infoLog} = require('./helpers')

module.exports = (name) => {
    fs.mkdir(name, (err) => {
        if (err && err.code !== 'EEXIST') {
            errorLog(err.message)
        } else {
            if (err && err.code === 'EEXIST')
                warningLog(err.message)
            else
                successLog(`Directory '${chalk.italic(name)}' created.`)

            const componentName = name.slice(name.lastIndexOf('/') + 1)

            const componentFile = `${name}/${componentName}.tsx`
            const propsInterfaceFile = `${name}/I${componentName}.props.ts`
            const stylesFile = `${name}/${componentName}.module.css`

            fs.appendFile(componentFile, component(componentName), (err) => {
                if (err)
                    errorLog(err.message)
                else
                    successLog(`'${componentFile}' created.`)
            })
            fs.appendFile(propsInterfaceFile, propsInterface(componentName), (err) => {
                if (err)
                    errorLog(err.message)
                else
                    successLog(`'${propsInterfaceFile}' created.`)
            })
            fs.appendFile(stylesFile, styles(componentName), (err) => {
                if (err) {
                    errorLog(err.message)
                } else {
                    successLog(`'${stylesFile}' created.`)
                }
            })
        }
    })
}

const component = (componentName) =>
    `import React from 'react'
import { I${componentName}Props } from './I${componentName}.props'
import styles from './${componentName}.module.css'

function ${componentName} ({...props}: I${componentName}Props): JSX.Element {
  return (
    <div>${componentName}</div>
  );
};

export default ${componentName}
`

const propsInterface = (componentName) =>
    `export interface I${componentName}Props {}
`

const styles = (componentName) =>
    `.${toCamelCase(componentName)} {
  display: block;
}
`
