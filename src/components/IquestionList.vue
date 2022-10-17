<template>
  <!--
    根目录规范(必须不能为空)：
    idm-ctrl：控件类型 drag_container：容器，drag_container_inlieblock：行内容器，idm_module：非容器的组件
    id：使用moduleObject.id，如果id不使用这个将会被idm-ctrl-id属性替换
    idm-ctrl-id：组件的id，这个必须不能为空
  -->
<div idm-ctrl="idm_module"
:id="moduleObject.id" 
:idm-ctrl-id="moduleObject.id">
  <div class="questionList-wrap">
    <div class="question-li" v-for="(item, index) in list" :key="index">
      <div class="question-left">
        <img :src="item.image" alt="">
      </div>
      <div class="question-right">
        <div class="question-title">{{item.title}}</div>
        <div class="question-time">{{item.time}}</div>
      </div>
      <div class="question-type">{{item.active}}</div>
    </div>
  </div>
</div>
</template>

<script type="text/jsx">
import { questionList } from '@/mock/mockData.js';
export default {
  name: 'IanswerPaper',
  data () {
    return {
      list: [],
      moduleObject:{},
      propData:this.$root.propData.compositeAttr||{}
    }
  },
  created () {
    this.moduleObject = this.$root.moduleObject
    this.init()
  },
  methods: {
    propDataWatchHandle (propData) {
      this.propData = propData.compositeAttr||{};
      this.init();
    },
    init () {
      if (this.moduleObject.env == "production") {
        this.querygetList();
      } else {
        this.list = questionList.call(this);
      }
    },
    querygetList () {
      
    }
  }
}
</script>

<style lang="scss" scoped>
.questionList-wrap{
  padding: 10px;
  .question-li{
    padding: 20px;
    border-radius: 10px;
    justify-content: space-between;
    align-items: center;
    display: flex;
    box-shadow: 0px  0px 20px 0px #ccc;
    position: relative;
    .question-type{
      position: absolute;
      right: 0px;
      top: 0;
    }
    .question-left{
      width: 150px;
      height: 100px;
      img{
        border-radius: 5px;
        width: 100%;
        height: 100%;
      }
    }
    .question-right{
      margin-left: 15px;
      flex: 1;
      .question-title{
        font-weight: 600;
        font-size: 16px;
      }
      .question-time{
        color: #999999;
        font-size: 14px;
        padding-top: 10px;
      }
    }
  }
  .question-li+.question-li{
    margin-top: 15px;
  }
}
</style>
