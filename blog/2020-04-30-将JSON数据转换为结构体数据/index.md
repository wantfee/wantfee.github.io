---
slug: convert-json-data-to-structure-data
title: 将JSON数据转换为结构体数据
authors: [JeffWang]
tags: [ios, SwiftUI]
---

### 问题

假设我们从服务器获取了一个 JSON 类型的数据如下：

```swift
{"name": "Jone","age": 17}
```

请使用 swift 将其转换为结构体类型的数据，其中年龄转换为整型数据，并打印出来。

### 思路

首先将此 JSON 数据定义为字符串类型的数据，将其转换成 Data 型。

然后定义一个结构体类型的数据模型，使其遵守 Codable 协议，只要遵守这些协议才能进行 json 与模型之间的编码与解码。

接下来我们就可以进行讲 json 解码并映射成模型，打印出年龄值。

### 解答

```swift
//将 json 数据转换为字符串类型的数据，方法是使用三个双引号包裹，属于多行字符串，引号中什么样，打印出来就是什么样，格式都不会变。
let res = """
{
"name": "Jone",
"age": 17
}
"""

//使用字符串.data()方法对字符串进行转换转换之后打印显示 32bytes
let data = res.data(using: .utf8)!

//Codable 协议其实就是遵守一个关于解码的协议和一个关于编码的协议，只要遵守这些协议才能进行 Json 与模型之间的编码与解码。

struct Student : Codable{
let name : String
let age : Int
}

//接下来我们就可以将 json 解码并映射成模型
let decoder = JSONDecoder()

//!的意思是强制解码，因为我们知道 data 中有值
let stu = try! decoder.decode(Student.self, from: data)

//可以看到，stu.age 已经成为整型。
print(stu.age)
```
