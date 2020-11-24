# Webpack 4. Полный курс 2020

На основании этого видео

[![Основное видео](http://img.youtube.com/vi/eSaF8NXeNsA/0.jpg)](https://www.youtube.com/watch?v=eSaF8NXeNsA "Основное видео")

## Основные команды

### `npx webpack`

Собрать приложение


## Плагины

### `html-webpack-plugin`
Работа с html шаблоном и подключение всех сгенеренных скриптов

Установка

    npm i -D html-webpack-plugin

Использование, подключаем в `webpack.config.js`
```js
const HtmlWebPackPlugin = require('html-webpack-plugin')
module.exports = {
    ...
    plugins: [
        new HtmlWebPackPlugin({
            title: 'Webpack generate',
            template: './src/index.html'
        })
    ]
}
```



### `clean-webpack-plugin`
Очистка старых скриптов и стилей

    npm i -D clean-webpack-plugin

Использование, подключаем в `webpack.config.js`
```js
const HtmlWebPackPlugin = require('html-webpack-plugin')
module.exports = {
    ...
    plugins: [
        new HtmlWebPackPlugin({
            title: 'Webpack generate',
            template: './src/index.html'
        })
    ]
}
```

