---
slug: how-to-create-a-tab-bar-in-swiftui
title: 如何在SwiftUI创建选项卡栏
authors: [JeffWang]
tags: [ios, SwiftUI]
---

在SwiftUI中创建Tab Bar非常简单——以下是如何来做。

选项卡栏(在UIKit中称为UITabBars)非常适合为用户提供在不同视图之间快速切换的能力。以下是如何在你的SwiftUI应用程序中创建选项卡栏。

第一步：将包含子视图的整个视图封装到TabView中，这样会自动为我们创建一个具有完整功能的选项卡条。

第二步：将子视图放入到Tab View中。这将自动为TabBar中的每个子视图创建一个“槽”。

第三步：通过添加.tabItem修饰符为每个子视图创建一个Tab选项。你可以为每个选项卡选择任何图标和标签，SwiftUI会知道每个对象应该拥有哪个索引，并根据当前的选择更新状态！然后，您可以使用状态值，就像是我们对显示选定颜色的文本所做的操作一样。

```swift
struct ContentView: View {
    var body: some View {
        //1. 创建一个TabView
        TabView {
            //2. 将子视图放入TabView中
            Text("Home View")
                //3. 为每一个子视图创建一个tab bar
                .tabItem {
                    Image(systemName: "house")
                    Text("Home")
                }
            Text("Settings View")
                .tabItem {
                    Image(systemName: "gear")
                    Text("Settings")
                }
        }
    }
}
```
