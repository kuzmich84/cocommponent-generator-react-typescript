# React Typescript Component Generator

React Typescript Component Generator is a cli for generating react component for typescript based architecture.  

Based on packet ["react-typescript-component-generator"](https://www.npmjs.com/package/react-typescript-component-generator) "Hafeez Hamza <hafeez1042@gmail.com>"   

## Install
* Global installation
  ```bash
  # Using yarn package manager
  $ yarn global add component-generator-react-ts

  # Using npm package manager
  $ npm install --global component-generator-react-ts
  ```

## Usage
`<componentName>` is the name of component that can be with or without directory

eg:
- `src/webparts/webpartName/components/ComponentName`

  this will generate component named *`ComponentName`* in the directory *`./src/webparts/webpartName/components/ComponentName`*

- `ComponentName`

  this will generate component named *`ComponentName`* in the directory *`./ComponentName`*
### Generate React Stateless Component

```bash
$ grc statelessComponent <componentName>
# or
$ grc s <componentName>
```
### Generate React Function Component

```bash
$ grc functionComponent <componentName>
# or
$ grc f <componentName>
```


### Generate React Class Component

```bash
$ grc classComponent <componentName>
# or
$ grc c <componentName>
```

  ### Generate React Redux Container Component

```bash
$ grc containerComponent <componentName>
# or
$ grc r <componentName>
```
## License



React Typescript Component Generator is MIT licensed.