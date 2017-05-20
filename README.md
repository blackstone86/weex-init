## weex 安装环境

1. 安装 `weex-toolkit`

    ```bash
    # 安装 weex-toolkit
    npm i -g weex-toolkit
    weex -v

    # weex-toolkit 集成 weex-devtool
    weex debug
    # ? This command need to install weex-devtool. Install now? (Y/n) y
    weex debug -v

    # weex-toolkit 集成 weex-devtool
    weex platform
    # ? This command need to install weexpack. Install now? (Y/n) y
    weex -v

    # 安装 debug 工具
    npm i -g weex-devtool 
    weex-devtool -v

    # 安装 platform 工具
    npm i -g weexpack 
    weexpack -V
    ```

1. 预览

    ### 预览单个页面
    ```bash
    weex demo/src/foo.vue
    ```

    ### 预览整个项目
    ```bash
    weex demo/src --entry demo/src/foo.vue
    ```

    或

    ```bash
    weex demo/src --entry foo.vue
    ```

1. 编译 `JS Bundle`

    ```bash
    cd demo && weex compile src/foo.vue dist
    ```

1. 创建weex页面
    
    ```bash
    weex init demo
    ```

1. 创建weex项目

    ```bash
    weex create demo-project
    ```

1. weex运行环境准备
    - ios
        - 安装 `Xcode IDE`

        - 运行`Xcode IDE`一次

        - 安装 `cocoapods`

            ```bash
            sudo gem install cocoapods
            ```
        
        - 连接ios真机
    
    - android
        - 安装 `Android Studio`
       
        - 创建一个项目

        - Tools -> Android -> AVD Manager ，新建 Android 模拟器并启动 。（如果有安装 Docker ，请关闭 Docker Server 。）

        - 设置`ANDROID_HOME`路径和`adb`命令的环境变量
            ```bash
            # 打开环境变量配置文件
            cd ~ && open .bash_profile

            # 增加以下文本
            export ANDROID_HOME=~/Library/Android/sdk
            export PATH=$PATH:$ANDROID_HOME/tools:$ANDROID_HOME/platform-tools
            ```
        - 连接android真机

    - web
        - 安装浏览器

1. 添加平台模拟器并运行(针对weex项目)
   
    ```bash
    # ios
    cd demo-project && weex platform add ios
    weex run ios

    # android
    cd demo-project && weex platform add android
    weex run android
    ```

    # web
    cd demo-project && weex run web
    ``` 

1. 打包平台代码  

    ```bash
    # ios
    cd demo-project && weex build ios

    # android
    # 安装 `JAVA SDK`
    cd demo-project && weex build android

    # web
    cd demo-project && weex build web
    ```

1. 添加/移除插件

    ```bash
    # 添加
    weex plugin add weex-chart

    # 移除
    weex plugin remove weex-chart
    ```

## `shell` 命令简写 

- ## git

    ```bash
    cd ~ && nano .bash_profile
    ```

    拷贝

    ```bash
    alias gs='git status'
    alias ga='git add'
    alias gb='git branch'
    alias gc='git commit'
    alias gd='git diff'
    alias go='git checkout'
    alias gk='gitk --all&'
    ```  

    保存并退出

    - 回车
    - `^X`（`control` + `X`)
