# 动态规划 Dynamic Plan

## 零、基础知识

## 一、Leetcode 刷题

### 70. 爬楼梯
- 刷题进度:
    - [x] 递推(DFS).
    - [x] 递归+记忆化(DFS).
    - [x] 动态规划.
    - [ ] 斐波那契(特殊题目契合).
    - [ ] Binets(矩阵).
- 难度: easy.
- 题意解析: 目标是爬 n 步， 每步可以走 1 或者走 2, 求走法总数.
- 初始思路: 将每次的目标分为"走一步情况" & "走两步情况"，当计数刚好等于 n 时通过，走法总数+1.
    - 思路: 递归法(DFS).
    - 复杂度分析:
        - 时间: O(2^n). 该解法可视为生成树的过程，总数每加一，层数也随之加一，故时间复杂度为O(2^n).
        - 空间: O(n). 树深度为n.
    - Leetcode 结果: 超时, 需要借助 memory 去掉重复计算.
    - 实现:
        ``` js
        var climbStairs = function(n) {
            return recursion(0, n);
        };

        function recursion (curr, target) {
            if (curr > target) return 0;
            if (curr === target) return 1;
            return recursion(curr+1, target) + recursion(curr+2, target);
        }
        ```
- 第二思路: 递归+记忆化(DFS).
    - 思路: 思路同上，用 memory 数据去掉重复计算.
    - 复杂度分析: 
        - 时间: O(n). memory将题目简化为树形递归.
        - 空间: O(n). 树深度为n.
    - Leetcode 结果:
        - 执行用时 : 72ms, 在所有 JavaScript 提交中击败了  89.09%的用户
        - 内存消耗 : 33.6MB, 在所有 JavaScript 提交中击败  62.77%的用户
    - 实现:
        ``` js
        var climbStairs = function(n) {
            return recursion(0, n, []);
        };

        function recursion (curr, target, memory) {
            if (curr > target) return 0;
            if (curr === target) return 1;
            if (memory[curr] > 0) return memory[curr];
            memory[curr] =  recursion(curr+1, target, memory) + recursion(curr+2, target, memory);
            return memory[curr];
        }
        ```
- 第三思路: 动态规划.
    - 思路: 定义 dp[n] 为：到达 n 的走法总数, 故易得 dp[n] = dp[n-1] + dp[n-2].
    - 复杂度分析:
        - 时间: O(n). 循环 3->n.
        - 空间: O(n). dp 数组所用的空间.
    - Leetcode 结果:
        - 执行用时 : 72ms, 在所有 JavaScript 提交中击败了  89.09%的用户
        - 内存消耗 : 33.7MB, 在所有 JavaScript 提交中击败  41.12%的用户
    - 实现:
        ``` js
        var climbStairs = function(n) {
            let dp = ['', 1, 2];
            for (let i=3; i<=n; i++) {
                dp[i] = dp[i-1] + dp[i-2];
            }
            return dp[n];
        };
        ```
- 第四思路: 
    - 思路: 
    - 复杂度分析:
        - 时间: .
        - 空间: .
    - Leetcode 结果:
        - 执行用时 : ms, 在所有 JavaScript 提交中击败了  %的用户
        - 内存消耗 : MB, 在所有 JavaScript 提交中击败  %的用户
    - 实现:
        ``` js
        ```

### 746. 使用最小花费爬楼梯
- 刷题进度:
    - [x] 动态规划.
    - [x] 动态规划(优化).
    - [ ] xxx
- 难度: easy
- 题意解析: 有一段阶梯，行走每步的体力消耗用数组存储，走到数组末位(下标=数组长度)即视为走完. 每次可以走一步或者两步，求最低花费.
- 初始思路: 动态规划.
    - 思路: 
        - 状态定义：题目要求求解走楼梯的最低花费，故 dp[n] 指每一步的最低花费;
        - 初始状态：
            - dp[0]: 第一步走index=0的阶梯，最小花费为 cost[0];
            - dp[1]: 第一步走index=1的阶梯，最小花费为 Math.min(cost[0], cost[0]+cost[1]), 故为 cost[1];
        - 状态转移方程：
            - dp[n]: 每一步的最小花费 = 当前这一步的花费 + 最小值(上一步最小花费, 上上步最小花费)
            - 上面文字的实现: dp[n] = cost[n] + Math.min(dp[n-1], dp[n-2]);
        - Tip: 边界定义：可以在倒数第一位或者倒数第二位停下来, 所以我们**要计算的是 dp[cost.length]的值, 而不是dp[cost.length-1]的值！**;
    - 复杂度分析: 
        - 时间: O(n). 循环耗时.
        - 空间: O(n). 存储 dp 状态消耗.
    - Leetcode 结果:
        - 执行用时 : 92ms, 在所有 JavaScript 提交中击败了  76.16%的用户.
        - 内存消耗 : 35.5MB, 在所有 JavaScript 提交中击败  47.83%的用户.
    - 实现:
        ``` js
        var minCostClimbingStairs = function(cost) {
            cost.push(0);
            let dp = [cost[0], cost[1]];
            let len = cost.length;
            for (let i=2; i<len; i++) {
                dp[i] = cost[i] + Math.min(dp[i-1], dp[i-2]);
            }
            return dp[len-1];
        };
        ```
- 第二思路: 动态规划(优化).
    - 思路: 思路同上，不过只存储最近所需两个 dp 状态，减少了空间消耗和数组查询的时间.
    - 复杂度分析:
        - 时间: O(n). 循环耗时.
        - 空间: O(1). 只用到数个变量.
    - Leetcode 结果:
        - 执行用时 : 88 ms, 在所有 JavaScript 提交中击败了 89.40 %的用户
        - 内存消耗 : 36.1 MB, 在所有 JavaScript 提交中击败 14.49 %的用户
    - 实现:
        ``` js
        var minCostClimbingStairs = function(cost) {
            cost.push(0);
            let [dp1, dp2] = [cost[0], cost[1]];
            for (let i=2, len = cost.length; i<len; i++) {
                [dp1, dp2] = [dp2, cost[i]+Math.min(dp1,dp2)];
            }
            return dp2;
        };
        ```

### 121. 买卖股票的最佳时机
- 刷题进度:
    - [x] 暴力解.
    - [x] 一次遍历.
    - [x] 模板动态规划.
    - [x] 模板动态规划优化.
- 难度: easy
- 题意解析: 将数日的股价存在数组中，求最大利益.
    - 限制枚举：
        - (新) 只能做一次买入和一次卖出操作;
- 初始思路: 暴力解.
    - 思路: 双重循环对比出最大利润结果.
    - 复杂度分析:
        - 时间: O(n^2). 双重循环.
        - 空间: O(1). 忽略.
    - Leetcode 结果:
        - 执行用时 : 536 ms, 在所有 JavaScript 提交中击败了  20%的用户
        - 内存消耗 : 35.7MB, 在所有 JavaScript 提交中击败  24%的用户
    - 实现:
        ``` js
        var maxProfit = function(prices) {
            let res = 0;
            for (let i=0, len=prices.length; i<len; i++) {
                for (let j=i+1; j<len; j++) {
                    let profit = prices[j] - prices[i];
                    res = Math.max(profit, res);
                }
            }
            return res;
        };
        ```
- 第二思路: 一次遍历.
    - 思路: 由于买入要在卖出之前，于是通过存储最小买入值和当前最大利润，单次遍历即可完成计算.
    - 复杂度分析:
        - 时间: O(n). 遍历消耗.
        - 空间: O(1). 忽略.
    - Leetcode 结果:
        - 执行用时 : 80ms, 在所有 JavaScript 提交中击败了  92%的用户
        - 内存消耗 : 35.4MB, 在所有 JavaScript 提交中击败  47%的用户
    - 实现:
        ``` js
        var maxProfit = function(prices) {
            let min = Number.POSITIVE_INFINITY;
            let profit = 0;
            for (let i=0, len=prices.length; i<len; i++) {
                min = Math.min(min, prices[i]);
                profit = Math.max(profit, prices[i] - min);
            }
            return profit;
        };
        ```
- 第三思路: 模板动态规划.
    - 思路: "[一个方法团灭 6 道股票问题](https://leetcode-cn.com/problems/best-time-to-buy-and-sell-stock/solution/yi-ge-fang-fa-tuan-mie-6-dao-gu-piao-wen-ti-by-l-3)"解法.
        - 状态定义: 
            - 方式: 穷举所有状态，找出每种状态对应的选择.
            - 状态: 天数、允许的最大交易次数(买卖算一次)、当前状态:持有、卖出.
            - 选择: 买入、卖出、无操作.
            - 构建状态定义: dp[天数][买卖次数][当前状态] =》 第 X 天，最多进行 Y 次交易，手头有无股票（0-无，1-有）
                - 目标结果 dp[n-1][k][0], 即最后一天，最多进行了 k 次交易，手头无股票.
            - 状态转移: 
                - 某天空仓: dp[i][k][0] = max(dp[i-1][k][0], dp[i-1][k][1]+price[i])
                    - 上面情况可分为两种选择：一种是昨天也空仓今天继续，一种是昨天持仓今天卖了，所以到某天为止的最高利润为 max(昨日利润, 昨日利润+今日股价)
                - 某日持仓: dp[i][k][1] = max(dp[i-1][k][1], dp[i-1][k-1][0]-price[i])
                    - 上面情况可以分两种选择：一种是做题也持仓今天继续，一种是昨天空仓今日买入，所以到某天为止的最高利润为 max(昨日利润，昨日利润-今日股价)
                    - Tip: 注意，这里的** 昨天空仓今日买入情况，昨日交易次数为 k-1, 故今日发生交易后变为 k **.
            - 基础状态：
                - dp[-1][k][0] = 0      =>  日期未开始前无利润；
                - dp[-1][k][1] = 负无穷  =>  日期未开始必定无持仓；
                - dp[i][0][0] = 0       =>  最大交易次数为 0即不允许交易；
                - dp[i][0][1] = 负无穷   =>  不允许交易时必定无持仓；
        - 本题分析:
            - 本题限制： n 天内允许最多一次交易，即 k=1;
                - 初始状态转移方程如下(借助基础状态做简化)：
                    - dp[i][1][0] = max(dp[i-1][1][0], dp[i-1][1][1] + prices[i])
                    - dp[i][1][1] = max(dp[i-1][1][1], dp[i-1][0][0] - prices[i]) = max(dp[i-1][1][1] - prices[i])
                - k=1，可以简化掉：
                    - dp[i][0] = max(dp[i-1][0], dp[i-1][1] + prices[i])
                    - dp[i][1] = max(dp[i-1][1], - prices[i])  # 已达交易上限，故只能比对谁成本低
    - 复杂度分析:
        - 时间: O(n). 循环耗时.
        - 空间: O(n). dp 数组占空间 n*2.
    - Leetcode 结果:
        - 执行用时 : 88ms, 在所有 JavaScript 提交中击败了  80%的用户
        - 内存消耗 : 41MB, 在所有 JavaScript 提交中击败  20%的用户
    - 实现:
        ``` js
        var maxProfit = function(prices) {
            let len = prices.length;
            if (len < 2) return 0;
            // 1. dp
            let dp = Array.from({length: len}, ()=>[]);
            // 2. init 
            dp[0][0] = 0;
            dp[0][1] = -prices[0];
            // 3. calc
            for (let i=1; i<len; i++) {
                dp[i][0] = Math.max(dp[i-1][0], dp[i-1][1] + prices[i]);
                dp[i][1] = Math.max(dp[i-1][1], -prices[i]);    // 已达交易上限，故只能比对谁成本低
            }
            return dp[len-1][0];
        };
        ```
- 第四思路: 模板动态规划(优化).
    - 思路: 思路同上，微调：不用数组存储每个 dp 状态，只用变量存储两个状态.
    - 复杂度分析:
        - 时间: O(n). 循环耗时.
        - 空间: O(1). 数组存储改为变量存储.
    - Leetcode 结果:
        - 执行用时 : 68ms, 在所有 JavaScript 提交中击败了 99.5%的用户
        - 内存消耗 : 35.4MB, 在所有 JavaScript 提交中击败 39.7%的用户
    - 实现:
        ``` js
                var maxProfit = function(prices) {
            if (prices.length < 2) return 0;
            // 1. init
            let [dp_i_0, dp_i_1] = [0, -prices[0]];
            // 2. calc
            for (let i=1,len=prices.length; i<len; i++) {
                dp_i_0 = Math.max(dp_i_0, dp_i_1 + prices[i]);
                dp_i_1 = Math.max(dp_i_1, -prices[i]);
            }
            return dp_i_0;
        };
        ```

### 122. 买卖股票的最佳时机 II
- 刷题进度: 
    - [x] 模板动态规划.
    - [x] 模板动态规划(优化).
    - [ ] xxx
- 难度: easy.
- 题意解析: 将数日的股价存在数组中，求最大利益.
    - 限制枚举：
        - (新) 将 121 的"最多交易1次" 改为 "允许交易任意多次";
        - (新) 同一日期最多持有一股;
- 初始思路: 模板动态规划.
    - 思路: 
        - 初始状态转移方程(k无限制之后，考虑 k 无意义)：
            - dp[i][k][0] = max(dp[i-1][k][0], dp[i-1][k][1]+prices[i])
            - dp[i][k][1] = max(dp[i-1][k][1], dp[i-1][k-1][0]-prices[i]) = max(dp[i-1][k][1], dp[i-1][k][0]-prices[i])
        - 去掉 k：
            - dp[i][0] = max(dp[i-1][0], dp[i-1][1]+prices[i])
            - dp[i][1] = max(dp[i-1][1], dp[i-1][0]-prices[i])
    - 复杂度分析:
        - 时间: O(n). 循环耗时.
        - 空间: O(n). dp 数组占空间 n*2.
    - Leetcode 结果:
        - 执行用时 : 84ms, 在所有 JavaScript 提交中击败了  80%的用户
        - 内存消耗 : 40.7MB, 在所有 JavaScript 提交中击败  5%的用户
    - 实现:
        ``` js
        var maxProfit = function(prices) {
            if (prices.length < 2) return 0;
            let len = prices.length;
            let dp = Array.from({length: len}, ()=> []);
            dp[0][0] = 0;
            dp[0][1] = -prices[0];
            for (let i=1; i<len; i++) {
                dp[i][0] = Math.max(dp[i-1][0], dp[i-1][1]+prices[i]);
                dp[i][1] = Math.max(dp[i-1][1], dp[i-1][0]-prices[i]);
            }
            return dp[len-1][0];
        };
        ```
- 第二思路:
    - 思路:
    - 复杂度分析:
        - 时间: O(n). 循环耗时.
        - 空间: O(1). 忽略不计.
    - Leetcode 结果:
        - 执行用时 : 72ms, 在所有 JavaScript 提交中击败了  98%的用户
        - 内存消耗 : 35MB, 在所有 JavaScript 提交中击败  24%的用户
    - 实现:
        ``` js
        var maxProfit = function(prices) {
            if (prices.length < 2) return 0;
            let len = prices.length;
            let [dp_i_0, dp_i_1] = [0, -prices[0]];
            for (let i=1; i<len; i++) {
                let temp =  dp_i_0;
                dp_i_0 = Math.max(dp_i_0, dp_i_1+prices[i]);
                dp_i_1 = Math.max(dp_i_1, dp_i_0-prices[i])
            }
            return dp_i_0;
        };
        ```

### 309. 买卖股票的最佳时机含冷冻期
- 刷题进度:
    - [x] 模板动态规划.
    - [x] 模板动态规划(优化).
    - [ ] xxx
- 难度: medium.
- 题意解析: 将数日的股价存在数组中，求最大利益.
    - 限制枚举：
        - 将 121 的"最多交易1次" 改为 "允许交易任意多次";
        - 同一日期最多持有一股.卖完之后要过一天才能买;
        - (新)加入冷冻期，一次交易卖出之后，次日不能购买;
- 初始思路: 模板动态规划.
    - 思路:
        - 初始状态转移方程(直接去k,dp[i][1]需要有所改变)：
            - dp[i][0] = Math.max(dp[i-1][0], dp[i-1][1] + prices(i))
            - dp[i][1] = Math.max(dp[i-1][1], dp[i-2][0] - prices(i))
    - 复杂度分析:
        - 时间: O(n). 循环消耗.
        - 空间: O(2n). dp 数组占空间 n*2.
    - Leetcode 结果:
        - 执行用时 : 92ms, 在所有 JavaScript 提交中击败了  74%的用户
        - 内存消耗 : 36.3MB, 在所有 JavaScript 提交中击败  11%的用户
    - 实现:
        ``` js
        var maxProfit = function(prices) {
            if (prices.length < 2) return 0;
            let len = prices.length;
            let dp = Array.from({length: len}, ()=>[]);
            dp[0][0] = 0;
            dp[0][1] = -prices[0];
            for (let i=1; i<len; i++) {
                dp[i][0] = Math.max(dp[i-1][0], dp[i-1][1]+prices[i]);
                // 第三个数之前不能再次买入，期间盈利为 0
                dp[i][1] = Math.max(dp[i-1][1], (i>1? dp[i-2][0]: 0)-prices[i]);
            }
            return dp[len-1][0];
        };
        ```
- 第二思路: 模板动态规划(优化).
    - 思路: 用三个变量存储所需状态.
    - 复杂度分析: 
        - 时间: O(n). 循环消耗.
        - 空间: O(1). 忽略不计.
    - Leetcode 结果:
        - 执行用时 : 76ms, 在所有 JavaScript 提交中击败了  98%的用户
        - 内存消耗 : 35MB, 在所有 JavaScript 提交中击败  55.56%的用户
    - 实现:
        ``` js
        var maxProfit = function(prices) {
            if (prices.length < 2) return 0;
            let len = prices.length;
            dp_i_0 = 0;
            dp_i_1 = -prices[0];
            dp_pre_0 = 0;
            for (let i=1; i<len; i++) {
                let temp = dp_i_0;
                dp_i_0 = Math.max(dp_i_0, dp_i_1+prices[i]);
                dp_i_1 = Math.max(dp_i_1, dp_pre_0-prices[i]);
                dp_pre_0 = temp;
            }
            return dp_i_0;
        };
        ```

### 714. 买卖股票的最佳时机含手续费
- 刷题进度:
    - [x] 模板动态规划.
    - [x] 模板动态规划(优化).
    - [ ] xxx
- 难度: medium
- 题意解析: 将数日的股价存在数组中，求最大利益.
    - 限制枚举：
        - 将 121 的"最多交易1次" 改为 "允许交易任意多次";
        - 同一日期最多持有一股.卖完之后要过一天才能买;
        - (新)加入手续费，一次交易(买+卖)需扣除一次手续费;
- 初始思路:
    - 思路: 模板动态规划.
        - 状态转移方程: 每次卖出时扣除手续费.
            - dp[i][k][0] = max(dp[i-1][k][0], dp[i-1][k][1]+prices[i]-fee)
            - dp[i][k][1] = max(dp[i-1][k][1], dp[i-1][k-1][0]-prices[i])
        - 交易次数无限制，故去 k：
            - dp[i][0] = max(dp[i-1][0], dp[i-1][1]+prices[i]-fee)
            - dp[i][1] = max(dp[i-1][1], dp[i-1][0]-prices[i]) 
    - 复杂度分析:
        - 时间: O(n). 循环耗时.
        - 空间: O(n). dp数组消耗空间大小为2*n.
    - Leetcode 结果:
        - 执行用时 : 420ms, 在所有 JavaScript 提交中击败了  7%的用户
        - 内存消耗 : 94.4MB, 在所有 JavaScript 提交中击败  33%的用户
    - 实现:
        ``` js
        var maxProfit = function(prices, fee) {
            if (prices.length < 2) return 0;
            let len = prices.length;
            // 1. dp
            let dp = Array.from({length: len}, ()=>[]);
            // 2. init
            dp[0][0] = 0;
            dp[0][1] = -prices[0];
            // 3. calc
            for (let i=1; i<len; i++) {
                dp[i][0] = Math.max(dp[i-1][0], dp[i-1][1]+prices[i]-fee);
                dp[i][1] = Math.max(dp[i-1][1], dp[i-1][0]-prices[i]);
            }
            return dp[len-1][0];
        };
        ```
- 第二思路:
    - 思路: 用两个个变量存储所需状态，转化过程中需要借助临时变量存值.
    - 复杂度分析:
        - 时间: O(n). 循环消耗.
        - 空间: O(1). 忽略不计.
    - Leetcode 结果:
        - 执行用时 : 108ms, 在所有 JavaScript 提交中击败了  87%的用户
        - 内存消耗 : 44.6MB, 在所有 JavaScript 提交中击败  100%的用户
    - 实现:
        ``` js
        var maxProfit = function(prices, fee) {
            if (prices.length < 2) return 0;
            let len = prices.length;
            // 1. init
            let [dp_i_0, dp_i_1] = [0, -prices[0]];
            // 2. calc
            for (let i=1; i<len; i++) {
                let temp = dp_i_0;
                dp_i_0 = Math.max(dp_i_0, dp_i_1+prices[i]-fee);
                dp_i_1 = Math.max(dp_i_1, temp-prices[i]);
            }
            return dp_i_0;
        };
        ```

### 123. 买卖股票的最佳时机 III
- 刷题进度:
    - [x] 模板动态规划.
    - [x] 模板动态规划(优化).
    - [ ] xxx
- 难度: difficult.
- 题意解析: 将数日的股价存在数组中，求最大利益.
    - 限制枚举：
        - (新)将 121 的"最多交易1次" 改为 "最多交易2次";
        - 同一日期最多持有一股.卖完之后要过一天才能买;
- 初始思路: 
    - 思路: 模板动态规划. Tip：dp的k代表已操作次数
        - 状态转移方程(由于 k 有明显限制：kMax=2, 所以无法去k，写代码需要考虑多一层 k)：
            - dp[i][k][0] = max(dp[i-1][k][0], dp[i-1][k][1]+prices[i])
            - dp[i][k][1] = max(dp[i-1][k][1], dp[i-1][k-1][0]-prices[i])
        - 初始状态：
            - dp[0][2][0] = 0, dp[0][1][0] = -prices[0];
            - dp[0][1][0] = 0, dp[0][1][1] = -prices[0];
    - 复杂度分析:
        - 时间: O(n*k). 循环耗时.
        - 空间: O(n*k*2). dp数组空间占用.
    - Leetcode 结果:
        - 执行用时 : 136ms, 在所有 JavaScript 提交中击败了  42%的用户
        - 内存消耗 : 52MB, 在所有 JavaScript 提交中击败  20%的用户
    - 实现:
        ``` js
        var maxProfit = function(prices) {
            if (prices.length < 2) return 0;
            let len = prices.length;
            let dp = Array.from({length: len}, ()=>[[],[],[]]);
            dp[0][2][0] = 0;              // 第一天完成两次操作，不盈利
            dp[0][2][1] = -prices[0];     // 第一天完成两次操作并持有，即减去第一天股价
            dp[0][1][0] = 0;              // 第一天完成一次操作，不盈利
            dp[0][1][1] = -prices[0];     // 第一天完成一次操作并持有，即减去第一天股价

            for (let i=1; i<len; i++) {
                for (let k=2; k>0; k--) {
                    dp[i][k][0] = Math.max(dp[i-1][k][0], dp[i-1][k][1]+prices[i]);
                    dp[i][k][1] = Math.max(dp[i-1][k][1], (k>1? dp[i-1][k-1][0]: 0)-prices[i]);   // 买入减少次数
                }
                // dp[i][2][0] = Math.max(dp[i-1][2][0], dp[i-1][2][1]+prices[i]);
                // dp[i][2][1] = Math.max(dp[i-1][2][1], dp[i-1][1][0]-prices[i]);
                // dp[i][1][0] = Math.max(dp[i-1][1][0], dp[i-1][1][1]+prices[i]);
                // dp[i][1][1] = Math.max(dp[i-1][1][1], -prices[i]);
            }
            console.log(dp);
            return dp[len-1][2][0];
        };
        ```
- 第二思路: 模板动态规划(优化).
    - 思路: 用变量取代 dp 数组.
    - 复杂度分析:
        - 时间: O(n*k). 循环耗时
        - 空间: O(1). 变量存储，空间消耗可忽视.
    - Leetcode 结果:
        - 执行用时 : 80ms, 在所有 JavaScript 提交中击败了  98.39%的用户
        - 内存消耗 : 36MB, 在所有 JavaScript 提交中击败  60%的用户
    - 实现:
        ``` js
        var maxProfit = function(prices) {
            if (prices.length < 2) return 0;
            let len = prices.length;
            dp_i20 = dp_i10 = 0;
            dp_i21 = dp_i11 = -prices[0];
            for (let i=1; i<len; i++) {
                dp_i20 = Math.max(dp_i20, dp_i21+prices[i]);
                dp_i21 = Math.max(dp_i21, dp_i10-prices[i]);
                dp_i10 = Math.max(dp_i10, dp_i11+prices[i]);
                dp_i11 = Math.max(dp_i11, -prices[i]);
            }
            return dp_i20;
        };
        ```



### 188. 买卖股票的最佳时机 IV
- 刷题进度:
    - [x] 模板动态规划(无优化，堆内存溢出).
    - [x] 模板动态规划(条件分支优化).
    - [x] 模板动态规划(数组优化)
- 难度: Difficult.
- 题意解析: 将数日的股价存在数组中，求最大利益.
    - 限制枚举：
        - (新)将 121 的"最多交易1次" 改为 "最多交易k次";
        - 同一日期最多持有一股.卖完之后要过一天才能买;
- 初始思路: 模板动态规划(无优化，堆内存溢出).
    - 思路: 直接 dp.
    - 复杂度分析:
        - 时间: O(n*k). 循环消耗.
        - 空间: O(n*k*2). dp 数组占用空间.
    - Leetcode 结果: 堆内存溢出
    - 实现:
        ``` js
        var maxProfit = function(k, prices) {
            if (prices.length < 2) return 0;
            let len = prices.length;
            let dp = Array.from({length: len}, ()=>Array.from({length: k+1}, ()=>[[], []]));
            for (let i=0; i<len; i++) {
                for (let j=k; j>0; j--) {
                    if (i===0) {
                        dp[i][j][0] = 0;
                        dp[i][j][1] = -prices[0];
                        continue;
                    }
                    dp[i][j][0] = Math.max(dp[i-1][j][0], dp[i-1][j][1]+prices[i]);
                    dp[i][j][1] = Math.max(dp[i-1][j][1], dp[i-1][j-1][0]-prices[i]);
                }
            }
            return dp[len-1][k][0];
        };
        ```
- 第二思路: 模板动态规划(条件分支优化)
    - 思路: 当 k >= n/2时, k 的限制无意义。故当 k >= n/2, k可以直接使用 122 的思路，其他情况继续使用 188 的思路.
    - 复杂度分析:
        - 时间: O(n)=>O(n*k). 循环消耗. 
        - 空间: O(n*2)=>O(n*k*2). dp数组空间消耗.
    - Leetcode 结果:
        - 执行用时 : 208ms, 在所有 JavaScript 提交中击败了 15%的用户
        - 内存消耗 : 62.8MB, 在所有 JavaScript 提交中击败  25%的用户
    - 实现:
        ``` js
        var maxProfit = function(k, prices) {
            if (prices.length < 2) return 0;
            let len = prices.length;
            if (k >= Math.floor(len/2)) {
                let dp = Array.from({ length: len }, () => []);
                for (let i=0; i<len; i++) {
                    if (i===0) {
                        dp[0][0] = 0;
                        dp[0][1] = -prices[0];
                        continue;
                    }
                    dp[i][0] = Math.max(dp[i-1][0], dp[i-1][1]+prices[i]);
                    dp[i][1] = Math.max(dp[i-1][1], dp[i-1][0]-prices[i]);
                }
                return dp[len-1][0];
            } else {
                let dp = Array.from({ length: len }, 
                        () => Array.from({ length: k+1 }, ()=>[[], []]));
                for (let i=0; i<len; i++) {
                    for (let j=k; j>0; j--) {
                        if (i===0) {
                            dp[0][j][0] = 0;
                            dp[0][j][1] = -prices[0];
                            continue;
                        }
                        dp[i][j][0] = Math.max(dp[i-1][j][0], dp[i-1][j][1]+prices[i]);
                        dp[i][j][1] = Math.max(dp[i-1][j][1], dp[i-1][j-1][0]-prices[i]);
                    }
                }
                return dp[len-1][k][0];
            }
        };
        ```
- 第三思路: 模板动态规划(数组优化)
    - 思路: 使用变量代替 dp 的方式简化复杂度.
    - 复杂度分析:
        - 时间: O(n)=>O(n*k). 循环消耗. 
        - 空间: O(1). 变量空间占用基本可以忽略不计.
    - Leetcode 结果:
        - 执行用时 : 92ms, 在所有 JavaScript 提交中击败了 95%的用户
        - 内存消耗 : 37.2MB, 在所有 JavaScript 提交中击败  50%的用户
    - 实现:
        ``` js
        var maxProfit = function(k, prices) {
            if (prices.length < 2) return 0;
            let len = prices.length;
            if (k >= Math.floor(len/2)) {
                let [dp_i0, dp_i1] = [0, -prices[0]];
                for (let i=1; i<len; i++) {
                    let temp = dp_i0;
                    dp_i0 = Math.max(dp_i0, dp_i1+prices[i]);
                    dp_i1 = Math.max(dp_i1, temp-prices[i]);
                }
                return dp_i0;
            } else {
                let dp = Array.from({ length: k+1 }, () => [0, -prices[0]]);
                for (let i=1; i<len; i++) {
                    for (let j=k; j>0; j--) {
                        dp[j] = [
                            Math.max(dp[j][0], dp[j][1]+prices[i]),
                            Math.max(dp[j][1], dp[j-1][0]-prices[i])
                        ];
                    }
                }
                return dp[k][0];
            }
        };
        ```

        dp: [ 
                [ [ [], [] ], [ 0, -3 ], [ 0, -3 ] ],
                [ [ [], [] ], [ 0, -2 ], [ 0, -2 ] ],
                [ [ [], [] ], [ 4, -2 ], [ 4, -2 ] ],
                [ [ [], [] ], [ 4, -2 ], [ 4, -1 ] ],
                [ [ [], [] ], [ 4, 0 ],  [ 4, 4 ] ],
                [ [ [], [] ], [ 4, 0 ],  [ 7, 4 ] ] 
            ]

### 502. IPO
- 刷题进度:
    - [ ] xxx
    - [ ] xxx
    - [ ] xxx
- 难度: 
- 题意解析:
- 初始思路:
    - 思路:
    - 复杂度分析:
        - 时间: 
        - 空间: 
    - Leetcode 结果:
        - 执行用时 : ms, 在所有 JavaScript 提交中击败了  %的用户
        - 内存消耗 : MB, 在所有 JavaScript 提交中击败  %的用户
    - 实现:
        ``` js
        ```
- 第二思路:
    - 思路:
    - 复杂度分析:
        - 时间: 
        - 空间: 
    - Leetcode 结果:
        - 执行用时 : ms, 在所有 JavaScript 提交中击败了  %的用户
        - 内存消耗 : MB, 在所有 JavaScript 提交中击败  %的用户
    - 实现:
        ``` js
        ```