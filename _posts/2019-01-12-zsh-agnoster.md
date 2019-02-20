---
layout: post
title: zsh-agnoster
date: 2019-01-12
categories: blog
tags: [linux, 终端]
description: OhMyZsh 的经典主题 agnoster
---

[ohmyzsh](https://github.com/robbyrussell/oh-my-zsh) 的优点和安装就不说了

简单说说最最最好看的主题 [agnoster](https://github.com/agnoster/agnoster-zsh-theme) 使用。

用这个主题，只需将 `ZSH_THEME="agnoster"` 写到 .zshrc 就可以了，但是打开终端，一堆乱码。

## WAY1

通常的方法是使用下面的方法：
```sh
wget https://raw.githubusercontent.com/powerline/powerline/develop/font/10-powerline-symbols.conf
wget https://raw.githubusercontent.com/powerline/powerline/develop/font/PowerlineSymbols.otf
sudo mkdir /usr/share/fonts/OTF
sudo cp 10-powerline-symbols.conf /usr/share/fonts/OTF/
sudo mv 10-powerline-symbols.conf /etc/fonts/conf.d/
sudo mv PowerlineSymbols.otf /usr/share/fonts/OTF/
```

可能问题就 **基本** 解决了，但也可能像我一样碰到两个问题：

1. 斜体字体（比如我用的 Ubuntu Mono Italic）的箭头与方框之间会有一定空隙。
2. 分支符号（  ）无法正常显示（乱码是“即鸟”之类的）。

## WAY2

放弃使用斜体？不存在的。

其实比起上面的方法，有更简单的解决方案－ [powerline-fonts](https://github.com/powerline/fonts) 。

也许你可以用 `sudo aptitude install fonts-powerline` 直接安装，但如果你使用的是 Ubuntu 18.04 之类的版本的话，[这样做是不行的](https://github.com/powerline/fonts/issues/281)。

这样的话，还有最通用的方法：
```sh
git clone https://github.com/powerline/fonts.git --depth=1
cd fonts
./install.sh
cd ..
rm -rf fonts
```

成功以后，直接使用其提供的补丁字体（例如我直接把 Ubuntu Mono Italic 换成了 Ubuntu Mono derivative Powerline Italic），还是熟悉的斜体，但是箭头板正了！分支符号出现了！

对比：
![](/post-img/zsh-agnoster--before.png)
![](/post-img/zsh-agnoster--after.png)


