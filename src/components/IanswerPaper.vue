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
  <div class="answerPaper_wrap">
    <div class="answer-top">
      <div>姓名：{{(questionTime.examInfo || {}).ANSWER_NAME}}</div>
      <div>组织：{{(questionTime.examInfo || {}).ORG_NAME}}</div>
    </div>
    <div class="answer-content">
      <template v-if="questions && questions.length > 0">
        <div class="answer-li" v-for="(item, index) in questions" :key="index">
          <div class="answer-subject">
            {{ item.q_number }}、【{{ item.ques_type_txt }}】{{ item.bt }} <span class="subject-score">分值: </span>
              {{ item.exam_score }}分
          </div>
          <div class="answer-test">
            <!--单选题-->
            <template v-if="item.ques_type === 1">
              <van-radio-group v-model="item.anwer_conten" @change="radioChange">
                <van-radio :name="radio.question_option" v-for="(radio, i) in item.data" :key="`radio-${i}`" class="answer-10pt">
                  <span class="answer-item-wrapper">
                    <span class="answer-item-text">{{ `${radio.question_option} : ${radio.bt}` }}</span>
                  </span>
                </van-radio>
              </van-radio-group>
            </template>
            <!--多选题-->
            <template v-if="item.ques_type === 2">
              <van-checkbox-group v-model="item.anwer_conten1" @change="(val) => checkboxChange(val, item)">
                <van-checkbox :name="checkbox.question_option" v-for="(checkbox, i) in item.data" :key="`checkbox-${i}`" class="answer-10pt">
                  <span class="answer-item-wrapper">
                    <span class="answer-item-text">{{`${checkbox.question_option} : ${checkbox.bt}`}}</span>
                  </span>
                </van-checkbox>
              </van-checkbox-group>
            </template>
            <!--填空题-->
            <template v-if="item.ques_type === 3">
              <div class="answer-item-fill" v-for="(option, i) in item.data" :key="`tiank-${i}`">
                <van-field v-model="option.anser_content" autosize placeholder="请输入内容" style="font-size: 14px" @change="answerOptionChange(item)" />
              </div>
            </template>
            <!--简答题-->
            <template v-if="item.ques_type === 4">
              <van-field
                  v-model="option.anser_content"
                  rows="2"
                  autosize
                  type="textarea"
                  placeholder="请输入答案"
                  v-for="(option, i) in item.data" :key="`jian-${i}`"
                   @change="answerOptionChange(item)"
                />
            </template>
            <!--判断题-->
            <template v-if="item.ques_type === 5">
              <van-radio-group v-model="item.anwer_conten" @change="radioChange">
                <van-radio :name="radio.question_option" v-for="(radio, i) in item.data" :key="`judge-${i}`" class="answer-10pt">
                  <span class="answer-item-wrapper">
                    <span class="answer-item-text">{{ `${radio.bt}` }}</span>
                  </span>
                </van-radio>
              </van-radio-group>
            </template>
          </div>
        </div>
      </template>
    </div>
    <div class="answer-btn" @click="submit">
      提交
    </div>
  </div>
</div>
</template>

<script type="text/jsx">
import { Dialog, Toast } from 'vant';
import { calculateTime, getAllQuestions } from '@/mock/mockData.js'
import { computeSelect, computeWrite } from '@/utils/scoreCompute.js'
export default {
  name: 'IanswerPaper',
  data () {
    return {
      moduleObject:{},
      anwserId: '', // 答题id
      questionTime: {},
      questions: [],
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
      this.getQuestionTime()
      this.getQuestion()
    },
    radioChange (row) {
      console.log(row)
    },
    checkboxChange (checkedValue, item) {
      item.anwer_conten = checkedValue.join(',')
    },
    answerOptionChange (item) {
      let anwer_conten = ""
      item.data.forEach(ele => {
        let val = ele.anser_content == undefined ? "":ele.anser_content;
        if(val==""){
          return true;
        }
        anwer_conten += anwer_conten == "" ? val : ("," + val);
      })
      item.anwer_conten = anwer_conten;
    },
    // 获取试卷信息包括时间
    getQuestionTime () {
      if (this.moduleObject.env == "production") {
        this.propData.dataSource &&
        IDM.http.post(this.propData.dataSource, {
              examAnwserId: this.propData.questionId,
              mangerId: this.propData.mangerId
            },
            {
              headers: {
                "Content-Type": "application/json;charset=UTF-8",
              },
            }
          )
          .then((res) => {
              if (res.status == 200 && res.data.code == 200) {
                  this.questionTime = res.data.data
              } else {
                  IDM.message.error(res.data.message)
              }
            })
      } else {
        this.questionTime = calculateTime.data
      }
    },
    // 获取试卷试题 ques_type: 1:单选题 2：多选题 3：填空题 4:简答题 5：判断题
    getQuestion () {
      if (this.moduleObject.env == "production") {
        this.propData.paperDataSource &&
        IDM.http.post(
            this.propData.paperDataSource,
            {
              anwserId: this.propData.questionId,
              mangerId: this.propData.mangerId
            },
            {
              headers: {
                "Content-Type": "application/json;charset=UTF-8",
              },
            }
          )
          .then((res) => {
              if (res.status == 200 && res.data.code == 200) {
                  let { questions } = res.data.data
                  this.questions = questions
              } else {
                  IDM.message.error(res.data.message)
              }
            })
      } else {
        let { questions } = getAllQuestions.data
        this.questions = questions
      }
      console.log(this.questions, 88)
    },
    pushQuestionsData () {
      console.log(this.questions, '提')
      this.questions.forEach(item => {
        if (item.anwer_conten) {
          if (item.ques_type === 1) {
            item = computeSelect(item);
          }
          if (item.ques_type === 2) {
            item = computeSelect(item);
          }
          if (item.ques_type === 3) {
            item = computeWrite(item);
          }
          if (item.ques_type === 4) {
            item = computeWrite(item);
          }
          if (item.ques_type === 5) {
            item = computeSelect(item);
          }
        }
      });
      this.propData.submitPaper &&
      IDM.http
        .post(
          this.propData.submitPaper,
          {
            anwserId: this.propData.questionId,
            data: this.questions
          },
          {
            headers: {
              "Content-Type": "application/json;charset=UTF-8",
            },
          }
        )
        .then((res) => {
            if (res.status == 200 && res.data.code == 200) {
                console.log('提交成功')
            } else {
                IDM.message.error(res.data.message)
            }
          })
    },
    // 提交
    submit () {
      Dialog.confirm({
        title: '',
        message:
          '确定要交卷么？',
      })
        .then(() => {
          this.handlePaper(false)
        })
        .catch(() => {});
    },
    // 交卷
    async handlePaper (type) {
      await this.pushQuestionsData();

      if (this.questions.filter(item => item.anwer_conten).length < Number((this.questionTime.examInfo||{}).EXAM_MIN_NUM)) { // 如果做的题数小于要求提数 不能提交
        Toast('未到最小答题数量,不可交卷!');
        return
      }
      const params = {
        anwserId: this.anwserId,
      };
      // 调用接口
      this.propData.submitPaperSend &&
      IDM.http
        .post(
          this.propData.submitPaperSend,
          {
            anwserId: this.propData.questionId,
          },
          {
            headers: {
              "Content-Type": "application/json;charset=UTF-8",
            },
          }
        )
        .then((res) => {
            if (res.status == 200 && res.data.code == 200) {
                console.log('提交成功')
            } else {
                IDM.message.error(res.data.message)
            }
          })
    }
  }
}
</script>

<style lang="scss" scoped>
.answerPaper_wrap{
  margin: 20px;
  .answer-10pt{
    padding-top: 10px;
  }
  .answer-top{
    border-radius: 5px;
    padding: 10px;
    box-shadow: 0px  0px 20px 0px #ccc;
  }
  .answer-content{
    margin-top: 10px;
    border-radius: 5px;
    .answer-li{
      padding: 10px;
      border-radius: 5px;
      box-shadow: 0px  0px 20px 0px #ccc;
    }
    .answer-li+.answer-li{
      margin-top: 20px;
    }
    .subject-score{
      color: #A70001;
      font-weight: 600;
    }
  }
  .answer-btn{
    padding: 5px;
    background: #a6a6df;
    text-align: center;
    border-radius: 5px;
    color: #fff;
  }
}
</style>