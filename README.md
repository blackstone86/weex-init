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

1. 将 `DSL` (特定领域语言) 编译成 `JS Bundle`
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

        - 运行 `Xcode IDE` 一次

        - 安装 `cocoapods`

            ```bash
            cd ~ && sudo gem install cocoapods
            pod setup
            ```

            安装 `cocoapods` 若解压失败，或打包安卓应用失败，[去网址](https://services.gradle.org/distributions/)
            下载 `gradle-3.3-all.zip`，并改名为 `gradle-2.14.1-all.zip`，覆盖 `/Users/huangjunwen/.gradle/wrapper/dists/gradle-2.14.1-all/8bnwg5hd3w55iofp58khbp6yv` 目录的 `gradle-2.14.1-all.zip`

            避免编译失败，如 `CompileC ...com.apple.compilers.llvm.clang.1_0.compiler` 错误，修改 `platforms/ios/Podfile` 文件
            
            ```bash
            pod 'ATSDK-Weex', '0.0.1'
            ```

            改成

            ```bash
            pod 'ATSDK', '0.0.1'
            ```            
        
        - 连接ios真机 
    
    - android

        - 安装 `Android Studio`
       
        - 创建一个项目

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

    # web
    cd demo-project && weex run web
    ``` 

1. 平台代码  

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

1. 查看已安装平台及其可用版本

    ```bash
    weexpack platform list
    ```

1. 创建插件脚手架

    ```bash
    weex plugin create demo-plugin
    ```

1. 发布插件

    ```bash
    npm adduser
    cd demo-plugin weex plugin publish
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

## 待办

- 没有权限发布插件
    
    ```bash
    you do not have permission to publish "demo-plugin". Are you logged in as the correct user? : demo-plugin
    ```

- 打包ios应用成功，但没有找到ipa文件

    [参考链接](https://juejin.im/entry/58a3c56ada2f6000530b535b)

### hackernews

## 各平台效果

![][hackernews]

## 应用注意事项

- ios
  
  - 在 `XCODE IDE` 中打开`HackerNews.xcworkspace`目录，而不是`HackerNews.xcodeproj`

  - 目录为 `root/ios/HackerNews.xcworkspace`

- android

  - 在 `Android Studio` 打开`android`目录

  - 目录为 `root/android`

  - 提高模拟器性能
    
    官方建议
    
    > Running an x86 based Android Virtual Device (AVD) is 10x faster.
    We strongly recommend creating a new AVD.
    FAILURE: Build failed with an exception.

    在运行应用， `Select Deployment Target` 中选中 `Create New Virtual Device` -> `Nexus 5X` -> Next -> `x86 Images` 中选择 `x86` 的安装

    > 注：qemu-system-armel（x86_64)，emu-system-i386(x86)，后者比前者速度快10倍左右 

[hackernews]: https://raw.githubusercontent.com/blackstone86/weex-init/master/platforms.png