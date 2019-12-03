# ReactNativePortfolio

## Creation of a new project

1. Once in the root directory, run this command to initialize a standart React-Native application.

```bash
npx react-native init [project_name]
```

2. Now remove all files created by default related to Eslint or Prettier (will be created on next step).

3. Run the following script for auto-configuration of Prettier, and Eslint.

```bash
   exec 3<&1;bash <&3 <(curl https://raw.githubusercontent.com/paulolramos/eslint-prettier-airbnb-react/master/eslint-prettier-config.sh 2> /dev/null)
```

4. Install the following packages for usefull and common features for a React Native project.

```javascript
npm install --save react-native-vector-icons
```

```bash
npm install --save react-native-gesture-handler
```

```bash
npm install --save react-native-navigation
```

```bash
npm install --save react-native-navigation-tabs
```

```bash
npm install --save react-native-navigation-stack
```

```bash
npm install --save react-native-linear-gradient
```

## Useful templates

### Stack navigation

```javascript
const AppNavigator = createStackNavigator(
  {
    Launcher
  },
  {
    initialRouteName: "Launcher",

    headerMode: "none",
    navigationOptions: {
      headerVisible: false
    }
  }
);
const App = createAppContainer(AppNavigator);

export default App;
```
