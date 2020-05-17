## 基于数据挖掘技术的金融数据分析系统设计与实现

## 项目概述

本设计试图构建面向个人用户的金融数据分析系统，
实现了一个简单直观的股票数据分析应用。

## 项目参考与地址

在线演示：http://108.160.131.9:8080/

Presentation 演示：http://108.160.131.9:7732/

项目参考：https://www.coursera.org/learn/python-statistics-financial-analysis/home/welcome

前端源码：https://github.com/AbyssLink/react-admin

后端源码：https://github.com/AbyssLink/stoks-app

## 使用技术

后端：Python3.7.7, Flask

数据库：MySQL

前端：React.js, Material-UI(组件库)

### 功能介绍

1. 获取数据：从金融市场网站和应用获得数据源。
2. 数据预处理：数据清洗、格式转换等预处理。
3. 数据分析：基于成熟的数据分析平台及科学计算模块，构建常见的统计模型制定交易策略。
4. 终端应用：将分析结果制表制图进行分析。

## 项目设计

### 模块划分图

![](https://raw.githubusercontent.com/AbyssLink/pic/master/uPic/05-16-2020_104401.png)

### 数据源

AkShare: 基于 Python 的开源金融数据接口库。

Yfinance: 从 Yahoo Finance 下载历史市场的数据。

MoneyControl: 金融相关新闻，提供 RSS 订阅链接。

### 股票新闻搜索模块

比较任意两个集合的相似度，若逐一比较集合的元素时间复杂度是 O(n^2)。
当集合为高维度稀疏向量时，计算的时间开销会非常大。

本项目使用 Minhash LSH 减少时间开销。

### MinHashing

将原始集合压缩成更小的集合，同时保证相似性

![](https://storage.googleapis.com/lds-media/images/slide-1-permutation-1_ujmH4Ll.width-1200.png)

### LSH

将相似的集合聚集到一起，避免比较不相似的集合
![](https://storage.googleapis.com/lds-media/images/locality-sensitive-hashing-lsh-buckets.width-1200.png)

### Python 实现

```python
from datasketch import MinHash, MinHashLSHForest

# Build
for text in data['text']:
        tokens = preprocess(text)
        m = MinHash(num_perm=perms)
        for s in tokens:
            m.update(s.encode('utf8'))
        minhash.append(m)

forest = MinHashLSHForest(num_perm=perms)

for i, m in enumerate(minhash):
    forest.add(i, m)

forest.index()

# Query
tokens = preprocess(text)
m = MinHash(num_perm=perms)
for s in tokens:
    m.update(s.encode('utf8'))

idx_array = np.array(forest.query(m, num_results))
if len(idx_array) == 0:
    return None # if query is empty, return none
```

### 股票交易策略模块

### 1. 简单移动平均（Moving Average)

移动平均(Moving Average, MA)是一种用于分析时间序列的工具，可抚平短期波动，反应长期的周期或趋势。简单移动平均是 n 个数值的算术平均值。

一个较短时期内的移动平均称为快速信号，反映近期股价的变化。反之则称为缓慢信号。

在本项目中使用的简单策略：如果快速信号值大于缓慢信号值即认为股价会在接下来的几天内上涨，那么购买并持有一股股票。

python 实现

```python
# 若 MA > MA50，1 (多头该股票)，否则 0（不做操作）
fb['Shares'] = [1 if fb.loc[ei, 'MA10'] >
fb.loc[ei, 'MA50'] else 0 for ei in fb.index]
# 计算 Profit
fb['Close1'] = fb['Close'].shift(-1)
fb['Profit'] = [fb.loc[ei, 'Close1'] - fb.loc[ei, 'Close']
                if fb.loc[ei, 'Shares'] == 1 else 0 for ei in fb.index]
# 计算该期间累计的财富
fb['wealth'] = fb['Profit'].cumsum()
```

### 2. 基于统计推断估计平均回报

计算股票的对数日收益，发现其直方图与正态分布非常接近，因此使用正态随机变量对股票收益建模，通过累积分布函数计算未来产生某种收益或亏损的概率。

python 实现

```python
from scipy.stats import norm
import numpy as np

def get_probility(self, ratio, days):
    self.__df['log_return'] = np.log(
        self.__df['close']).shift(-1) - np.log(self.__df['close'])
    self.__df['log_return'].dropna(inplace=True)

    # 在 x 天数内产生 y 比率的亏损的概率
    mu = self.__df['log_return'].mean()
    sigma = self.__df['log_return'].std(ddof=1)
    mu_days = days*mu
    sigma_days = (days**0.5) * sigma
    drop = norm.cdf(ratio, mu_days, sigma_days)
    return {'prob': round(drop, 5)}
```

### 3. 基于持向量机（SVM）

使用 SVM 预测股票未来某日的涨跌。

支持向量机(SVM)是一种监督学习模型。

分类算法和预测时序的算法不同，需要对股票历史数据进行处理，利用分类方法来构建预测模型。

要使用分类算法首先需要为数据打标签，记当日股票涨为 1，下跌为 0。

然后为数据添加更多的特征，如 high-low，close-open。
再使用 svm 分类器训练和预测。

对数据划分训练集和测试集，最后对不同股票的测试结果准确率在 53% 左右，不是很理想。

python 实现

```python
from sklearn import svm

value = pd.Series(stock_df['close'].shift(-1) -
                stock_df['close'], index=stock_df.index)
value[value >= 0] = 1  # 1 means rise
value[value < 0] = 0  # 0 means fall
stock_df['value'] = value
stock_df = stock_df.dropna(how='any')

# poly：选择模型所使用的核函数为多项式核函数
classifier = svm.SVC(kernel='poly')
# 根据给定的训练数据拟合 SVM 模型
classifier.fit(Data_train, value_train)
# 对 value 进行预测
value_predict = classifier.predict(Data_predict)
```

## 前后端交互

前端使用 useQueryWithStore 发送请求，将 dataProvider 的响应持久保存在内部 react-admin Redux 存储中。

javascript 实现

```javascript
const { loaded, error, data } = useQueryWithStore({
    type: "getOne",
    resource: "svm",
    payload: {
      id: symbol,
    },
  });
if (!loaded) {
    // loading
}
if (error) {
    // error
}
return(
    // render data
)
```

## 图表数据更新

React 中的图表数据依赖父组件 props 传递，当 props 数据更新时使用 getDerivedStateFromProps 生命周期方法更新 state。

javascript 实现

```javascript
 // componentWillReceiveProps is not recommended, use getDerivedStateFromProps as an alternative
static getDerivedStateFromProps = (props, state) => {
    if (props.data !== state.data) {
        // update state
    }
}
```

## 结论

本项目是一个金融数据分析应用，主要对股票数据进行分析，形式为一个前后端分离的 Web 单页应用(SPA)。

前端基于 React.js，有较为直观和友好的界面。

后端 web 框架是 Flask，使用 MySQL 实现数据持久化。

以 Restful 风格实现接口。

数据分析算法主要为统计分析方法建立计算模型。

## 后期改进

1. 前端部分组件样式的多平台适配有问题
2. SVM 交易策略算法的准确率不佳
3. 需要添加更多的交易策略算法
4. 后台的功能耦合度过高，需要进行模块化
5. 需要持久化用户的计算结果

## 谢谢！
