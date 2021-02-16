# 小司の春日祭 —— 第一幕 淘汰赛

::: tip 提示
淘汰赛已经完结
:::

春节活动~雀魂麻将比赛

导航:

- [赛事首页](./)
- **淘汰赛**
- [积分赛](./stage-2.md)
- [决赛](./stage-3.md)

### 我是参赛选手，我懒得看字，我应该干什么？

1. 把群 ID 改成和 B 站 ID 一致，方便其他人找
1. 登录雀魂账号，同意小司的好友请求，方便小司直播观战
1. 看本页下方的排桌表，在群里跟同桌的人约定好对局时间
1. ~~开游戏房间进行幺九的断~~，进行游戏对局
1. 打开[这个网页](https://wj.qq.com/s2/8044813/8d0b/)，提交牌谱链接

遇到任何问题可以在群里 `@GeekTR`

### 时间

淘汰赛时间安排在 2 月 11 日 和 2 月 12 日

### 规则

每局 4 位直接淘汰，剩下三人进入积分赛。

### 赛程

本次共 34 名参赛选手，为了凑成整桌，我们安排了两个嘉宾位置补齐到 36 人，共计 9 桌比赛。

被抽到同一桌的四个人请在群内自行沟通、约定时间进行对局，并在对局完成后通过这个网页提交牌谱链接：[点击访问](https://wj.qq.com/s2/8044813/8d0b/)。

### 对局

| 桌号 | 一位           | 二位             | 三位             | 四位             | 对局链接          |
| :--: | -------------- | ---------------- | ---------------- | ---------------- | ----------------- |
|  1   | 特邀嘉宾:mjwxt | 沙城主           | 林 soso\_        | 八云无痕 QAQ     | [点此打开][desk1] |
|  2   | 花姐姐幽香     | 风桦             | 惠灬阅           | FDG 迪欧墶       | [点此打开][desk2] |
|  3   | 覃言星         | 小司无常         | 捣乱的骗子熊猫   | 明年更人生相谈   | [点此打开][desk3] |
|  4   | 东云子进       | 瓦努             | 堕落的天使珈百璃 | 为毛非要起昵称呢 | [点此打开][desk4] |
|  5   | lazard         | wo5555           | 贝纳加尔         | 八九寺熊仔       | [点此打开][desk5] |
|  6   | 墨汐 Linro     | 不知名的懵逼东方 | k_Milk           | 若晓丶           | [点此打开][desk6] |
|  7   | 薪尘\_FuelDust | 正直的盾爷       | GeekTR           | 天目             | [点此打开][desk7] |
|  8   | 梓风 A-        | 特邀嘉宾:mjwxt   | 克洛殿下         | 迷路的疯兔       | [点此打开][desk8] |
|  9   | FDG 天弈       | 开玩笑 open      | 白澜雨蔡         | -權圓圆权-       | [点此打开][desk9] |

### Q&A

::: tip 如何同意好友请求？
在雀魂游戏主界面，打开 `友人` - `好友申请`，在列表里找到 "司芜裳" 的好友请求，点击`同意`
:::

::: tip 如何提交对局链接？
在雀魂游戏主界面，打开 `牌谱` - `友人`，找到你想分享的对局，**不要** 选中`匿名`选项，复制文本框的内容，到网页提交即可
:::

### 公平分桌

分桌使用技术手段来保障可信的公平抽取，如果您对技术细节感兴趣，可以点开下方分桌方法

::: details 分桌方法

```javascript
// 1. 用小司发布动态后的下个比特币区块的哈希值，取哈希 hex 值的后八位作为梅森旋转算法的种子
// 2. 将提交的B站用户名数组按 V8 的默认实现排序后，使用梅森旋转算法提供的随机数进行随机排序
// 3. 将排序后的结果每四位一桌分桌

const MersenneTwister = require("mersenne-twister");
const blockhash = "";
const generator = new MersenneTwister(parseInt("0x" + blockhash.slice(-8)));

const list = [
  "堕落的天使珈百璃",
  "八云无痕QAQ",
  "捣乱的骗子熊猫",
  "八九寺熊仔",
  "林soso_",
  "不知名的懵逼东方",
  "贝纳加尔",
  "wo5555",
  "正直的盾爷",
  "薪尘_FuelDust",
  "瓦努",
  "梓风A-",
  "迷路的疯兔",
  "开玩笑open",
  "明年更人生相谈",
  "天目",
  "k_Milk",
  "-權圓圆权-",
  "墨汐Linro",
  "FDG迪欧墶",
  "风桦",
  "为毛非要起昵称呢",
  "覃言星",
  "东云子进",
  "花姐姐幽香",
  "若晓丶",
  "lazard",
  "白澜雨蔡",
  "克洛殿下",
  "惠灬阅",
  "FDG天弈",
  "沙城主",
  "GeekTR",
  "小司无常",
  "特邀嘉宾1",
  "特邀嘉宾2",
].sort();

function shuffle(arr) {
  const length = arr.length;
  let index = -1;
  while (++index < length) {
    const rand = index + Math.floor(generator.random() * (length - index));
    const value = arr[rand];
    arr[rand] = arr[index];
    arr[index] = value;
  }
  return arr;
}

const randomList = shuffle(list);

for (i = 0; i <= 9; i++) {
  console.log(`第${i}桌:`);
  console.log(randomList.slice(i * 4, (i + 1) * 4).join(" | "));
}
```

:::

<style>
.yuu-theme-dark summary {
  color: #1a1a1a;
}
</style>

[desk1]: https://game.maj-soul.com/1/?paipu=210212-9d70e852-e6cc-478e-9521-f54b109fea92_a111398079
[desk2]: https://game.maj-soul.com/1/?paipu=210211-3e31ade4-d2c4-4be4-b817-48b5f5603598_a92996991
[desk3]: https://game.maj-soul.com/1/?paipu=210212-6e9bb818-38ba-479a-88f9-3d415efb7bf7_a11957832
[desk4]: https://game.maj-soul.com/1/?paipu=210211-f3978d67-df85-400d-8680-d331cb5a178c_a19293405
[desk5]: https://game.maj-soul.com/1/?paipu=210211-ad741cde-8d1e-4109-93f1-112af888c8a0_a110593724
[desk6]: https://game.maj-soul.com/1/?paipu=210211-7a0d82a0-5ed9-4290-8b54-b15f1151549e_a91795565
[desk7]: https://game.maj-soul.com/1/?paipu=210211-581fbdef-81a9-429a-9155-73efce39a26b_a88885562
[desk8]: https://game.maj-soul.com/1/?paipu=210211-62839a58-3acc-48fe-901b-1add65f34410_a91751734
[desk9]: https://game.maj-soul.com/1/?paipu=210211-6a5ab7c9-89e5-4f35-8375-c9c42ad7bdbb_a110698080
