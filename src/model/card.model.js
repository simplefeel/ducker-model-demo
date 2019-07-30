import Model from "ducker-model";

const cardModel = new Model({
  itemMainPic: {
    type: String,
    property: "itemMainPic"
  },
  itemName: {
    type: String,
    property: "itemName"
  },
  itemOriginalPrice: {
    type: Number,
    unit: "B",
    property: "itemOriginalPrice"
  },
  headUrl: {
    type: String,
    property: "buyerExperienceInfo.creator.headUrl"
  },
  nickName: {
    type: String,
    property: "buyerExperienceInfo.creator.nickName"
  },
  description: {
    type: String,
    property: "buyerExperienceInfo.description",
    value: '这是个好东西'
  },
  lastBuyTime: {
    type: Date,
    property: "buyerExperienceInfo.lastBuyTime"
  }
});

export default cardModel;