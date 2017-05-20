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
