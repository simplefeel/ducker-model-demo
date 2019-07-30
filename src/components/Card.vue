<template>
  <div class="box">
    <img class="hd" :src="cardData.itemMainPic" />
    <span class="main">{{cardData.itemName}}</span>
    <span class="submain">¥{{cardData.itemOriginalPrice}}</span>
    <span class="row">你看过的商品</span>
    <div class="row-2">
      <img class="avator" :src="cardData.buyerExperienceInfo && cardData.buyerExperienceInfo.creator.headUrl" />
      <span class="info">{{cardData.buyerExperienceInfo && cardData.buyerExperienceInfo.creator && cardData.buyerExperienceInfo.creator.nickName}}</span>
      <div class="tag-wrap">
        <span class="tag">买过2次</span>
      </div>
    </div>
    <div class="ft">
      <span class="summary">{{cardData.buyerExperienceInfo && cardData.buyerExperienceInfo.description}}</span>
    </div>
    <div class="row-3">上次购买时间 {{cardData.buyerExperienceInfo && cardData.buyerExperienceInfo.lastBuyTime}}</div>
  </div>
</template>

<script>
import manba from "manba";

import getCardData from "../store/card";

export default {
  name: "Card",

  data() {
    return {
      cardData: {}
    };
  },
  created() {
    this.initData();
  },

  methods: {
    initData() {
      getCardData().then(res => {
        this.cardData = this.decorate(res.data);
      });
    },

    decorate(data = {}) {
      for (let attr in data) {
        if (Object.prototype.toString.call(data[attr]) === "[object Object]") {
          this.decorate(data[attr]);
        } else {
          // 原始价格单位是分，转化为圆
          if (attr === "itemOriginalPrice") {
            data[attr] = parseFloat(data[attr] / 100).toFixed(2);
          }
          // 格式化时间，1563926400000 --> 2019-07-24
          if (attr === "lastBuyTime") {
            data[attr] = manba(parseFloat(data[attr])).format("l");
          }
        }
      }
      return data;
    },

    beforeSubmit(data = {}) {
      for (let attr in data) {
        if (Object.prototype.toString.call(data[attr]) === "[object Object]") {
          this.beforeSubmit(data[attr]);
        } else {
          // 拿到的价格单位是 百元 ，需要转化为 分
          if (attr === "itemOriginalPrice") {
            data[attr] = data[attr] * 100;
          }
          // 格式化时间，2019-07-24 --> 1563926400000
          if (attr === "lastBuyTime") {
            data[attr] = manba(data[attr]).time();
          }
        }
      }
      return data;
    }
  }
};
</script>
<style scoped>
.box {
  background-color: #ffffff;
  width: 336px;
  height: 710px;
  box-shadow: 0px 0px 6px rgba(55, 60, 67, 0.1);
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  border-radius: 12px;
  overflow: hidden;
  margin: 0 auto;
}
.hd {
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
  background-color: #d8d8d8;
  width: 336px;
  height: 380px;
  overflow: hidden;
}
.main {
  margin-top: 18px;
  margin-left: 18px;
  max-width: 306px;
  overflow: hidden;
  text-overflow: ellipsis;
  line-height: 38px;
  white-space: nowrap;
  color: #333333;
  font-size: 28px;
  font-weight: 400;
}
.submain {
  margin-top: 17px;
  margin-left: 18px;
  max-width: 306px;
  overflow: hidden;
  text-overflow: ellipsis;
  line-height: 32px;
  white-space: nowrap;
  color: #fe5a4c;
  font-size: 32px;
  font-weight: 500;
}
.row {
  margin-top: 15px;
  margin-left: 19px;
  max-width: 305px;
  overflow: hidden;
  text-overflow: ellipsis;
  line-height: 22px;
  white-space: nowrap;
  color: #f1961c;
  font-size: 22px;
  font-weight: 400;
}
.row-1 {
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin-top: 18px;
  width: 335px;
}
.bg {
  opacity: 1px;
  width: 301px;
  height: 2px;
}
.row-2 {
  display: flex;
  flex-direction: row;
  margin-top: 15px;
}
.row-3 {
  color: #16a085;
  font-size: 22px;
  font-weight: 400;
  margin: 10px 0 0 18px;
}
.avator {
  margin-left: 18px;
  width: 32px;
  height: 32px;
}
.info {
  margin-top: 5px;
  margin-left: 6px;
  max-width: 180px;
  overflow: hidden;
  text-overflow: ellipsis;
  line-height: 22px;
  white-space: nowrap;
  color: #989ca8;
  font-size: 22px;
  font-weight: 400;
}
.tag-wrap {
  box-sizing: border-box;
  display: flex;
  align-items: center;
  flex-direction: row;
  margin-top: 4px;
  margin-left: 7px;
  border-radius: 4px;
  background-color: #dcb581;
  padding-right: 10px;
  padding-left: 6px;
  height: 24px;
}
.tag {
  line-height: 18px;
  white-space: nowrap;
  color: #ffffff;
  font-size: 18px;
  font-weight: 500;
}
.ft {
  display: flex;
  flex-direction: row;
  justify-content: center;
  text-align: left;
  margin-top: 13px;
  width: 335px;
}
.summary {
  width: 288px;
  overflow: hidden;
  text-overflow: ellipsis;
  line-height: 34px;
  color: #646a7d;
  font-size: 24px;
  font-weight: 400;
}
</style>