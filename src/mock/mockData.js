
// http://localhost:8080/DreamWeb/ctrl/partyexma/calculateTime?examAnwserId=221011113133qXfcMBYlMF1ph0hLuxn&mangerId=221011112740X29h3ZepSdhluaFQxbN
// 获取考试时间-姓名-组织-
export const calculateTime = {
    "code": "200",
    "type": null,
    "message": "success",
    "metadata": null,
    "token": null,
    "data": {
      "isLogin": 1,
      "curTime": "2022-10-11 11:32:19",
      "examInfo": {
        "EXAM_FBT": "测试考试",
        "BT": "新建试卷",
        "SCORE": 0,
        "SWRQ": "2022-10-31 00:00:00.0",
        "ORG_NAME": "党支部1号",
        "IS_SUBMIT": 3,
        "EXAM_MIN_NUM": 1,
        "CWRQ": "2022-10-10 00:00:00.0",
        "ANSWER_NAME": "亚瑟",
        "EXAM_LIMIT_TIME": 30
      },
      "startTime": "2022-10-11 11:32:14"
    }
  }


// http://localhost:8080/DreamWeb/ctrl/partyexma/getAllQuestions?anwserId=221011113133qXfcMBYlMF1ph0hLuxn&mangerId=221011112740X29h3ZepSdhluaFQxbN
// 获取考试试题
export const getAllQuestions = {
  "code": "200",
  "type": null,
  "message": null,
  "metadata": null,
  "token": null,
  "data": {
    "questions": [
      {
        "fid": "221013162340UjoEN7pfgfZMQJr92o4",
        "ques_type_txt": "判断题",
        "stem_desc": "北京是中国的省份吗",
        "data": [
          {
            "question_option": "A",
            "is_gen_um": 1,
            "bt": "正确",
            "item_option_id": "999f52d23f214d1c99497801d96e0277",
            "anwser_item_id": "221013162340Ec69Yf05pz4FoWMtMuJ",
            "id": "221013162340kXrZy2IvTRtvJoRulWV",
            "exam_option_img": "",
            "mal_anwer": ""
          },
          {
            "question_option": "B",
            "is_gen_um": 2,
            "bt": "错误",
            "item_option_id": "8d702848a08f4b23974734a9a2b78502",
            "anwser_item_id": "221013162340Ec69Yf05pz4FoWMtMuJ",
            "id": "221013162340pxvX2v0Ux90IPOsOpLq",
            "exam_option_img": "",
            "mal_anwer": ""
          }
        ],
        "ques_type": 5,
        "question_choice_min": 0,
        "is_outer_source": 0,
        "subject_mal_ant": "",
        "anwer_conten": "",
        "anwer_item_image": "",
        "score": 0.00,
        "bt": "北京是中国的省份吗",
        "exam_ques_id": "9f0b36e16e184ff4b5955ef2a1aa17ce",
        "exam_score": 5.00,
        "q_number": 1,
        "id": "221013162340Ec69Yf05pz4FoWMtMuJ",
        "question_choice_max": 0
      },
      {
        "fid": "221013162340UjoEN7pfgfZMQJr92o4",
        "ques_type_txt": "填空题",
        "stem_desc": "请回答出中国省份",
        "data": [
          {
            "question_option": "A",
            "is_gen_um": 1,
            "bt": "",
            "item_option_id": "c87cfa4250254073878a7ae8962dfef5",
            "anwser_item_id": "221013162340cyMcyhk42rwBbmiOkgp",
            "id": "2210131623404AZJp4Rl42HcH3lqrcE",
            "exam_option_img": "",
            "mal_anwer": "北京"
          },
          {
            "question_option": "B",
            "is_gen_um": 1,
            "bt": "",
            "item_option_id": "1b824a9ddcf3494ca050c5667b6c3e3c",
            "anwser_item_id": "221013162340cyMcyhk42rwBbmiOkgp",
            "id": "221013162340etBvaML2Nc4W1rpKmsO",
            "exam_option_img": "",
            "mal_anwer": "上海"
          }
        ],
        "ques_type": 3,
        "question_choice_min": 0,
        "is_outer_source": 0,
        "subject_mal_ant": "北京,上海",
        "anwer_conten": "",
        "anwer_item_image": "",
        "score": 0.00,
        "bt": "测试",
        "exam_ques_id": "450b55a98d744026bd8a7eece3296e59",
        "exam_score": 5.00,
        "q_number": 1,
        "id": "221013162340cyMcyhk42rwBbmiOkgp",
        "question_choice_max": 0
      },
      {
        "fid": "221013162340UjoEN7pfgfZMQJr92o4",
        "ques_type_txt": "简答题",
        "stem_desc": "请说出工作地址",
        "data": [
          {
            "question_option": "A",
            "is_gen_um": 1,
            "bt": "",
            "item_option_id": "e2abe6f6126646ddb9fd70836369ad08",
            "anwser_item_id": "221013162340kxaZxC9DLH61tMbCLNU",
            "id": "221013162340Frx7nHXLXd8vAxVvL2S",
            "exam_option_img": "",
            "mal_anwer": "请说出工作地址"
          }
        ],
        "ques_type": 4,
        "question_choice_min": 0,
        "is_outer_source": 0,
        "subject_mal_ant": "请说出工作地址",
        "anwer_conten": "",
        "anwer_item_image": "",
        "score": 0.00,
        "bt": "请说出工作地址",
        "exam_ques_id": "0c077cc4b06b4b27b09a8125438db87e",
        "exam_score": 5.00,
        "q_number": 1,
        "id": "221013162340kxaZxC9DLH61tMbCLNU",
        "question_choice_max": 0
      },
      {
        "fid": "221013162340UjoEN7pfgfZMQJr92o4",
        "ques_type_txt": "单选题",
        "stem_desc": "",
        "data": [
          {
            "question_option": "A",
            "is_gen_um": 2,
            "bt": "反对帝国主义",
            "item_option_id": "221001134243eTQy4oBbCfS6VCvUoFb",
            "anwser_item_id": "221013162340pYK1dKATlPDXQrIvBQG",
            "id": "221013162340Af53E6Dx3cNnFOXwITI",
            "exam_option_img": "",
            "mal_anwer": ""
          },
          {
            "question_option": "B",
            "is_gen_um": 2,
            "bt": "反对封建主义",
            "item_option_id": "221001134243FD50Nn2dBKauztrbqHj",
            "anwser_item_id": "221013162340pYK1dKATlPDXQrIvBQG",
            "id": "221013162340tZEPUKYiJr5ue1AkRyd",
            "exam_option_img": "",
            "mal_anwer": ""
          },
          {
            "question_option": "C",
            "is_gen_um": 2,
            "bt": "争取民族独立、人民解放",
            "item_option_id": "221001134243KpQh28PvOJF9uAKuvHQ",
            "anwser_item_id": "221013162340pYK1dKATlPDXQrIvBQG",
            "id": "221013162340dR12makk6fUw88HYbEh",
            "exam_option_img": "",
            "mal_anwer": ""
          },
          {
            "question_option": "D",
            "is_gen_um": 2,
            "bt": "实现民族复兴",
            "item_option_id": "221001134243MunvrEwCIaMjl4yoPfr",
            "anwser_item_id": "221013162340pYK1dKATlPDXQrIvBQG",
            "id": "221013162340L5f3nkEYoVWl7eBcpds",
            "exam_option_img": "",
            "mal_anwer": ""
          }
        ],
        "ques_type": 1,
        "question_choice_min": 0,
        "is_outer_source": 0,
        "subject_mal_ant": "",
        "anwer_conten": "",
        "anwer_item_image": "",
        "score": 0.00,
        "bt": "kaoshi务：一个是（ ）；一个是实现国家富强、人民幸福。",
        "exam_ques_id": "221001134243PQfpQ5P8vAUUR9B2MEx",
        "exam_score": 5.00,
        "q_number": 1,
        "id": "221013162340pYK1dKATlPDXQrIvBQG",
        "question_choice_max": 0
      },
      {
        "fid": "221013162340UjoEN7pfgfZMQJr92o4",
        "ques_type_txt": "单选题",
        "stem_desc": "阿松大",
        "data": [
          {
            "question_option": "A",
            "is_gen_um": 1,
            "bt": "1",
            "item_option_id": "221001134243C6rD8n5Gie1t5l0vZ0F",
            "anwser_item_id": "221013162340dCKaUrAe4vJtjnE4oQO",
            "id": "221013162340UGuipSFwEu9kX3eut3v",
            "exam_option_img": "",
            "mal_anwer": ""
          },
          {
            "question_option": "B",
            "is_gen_um": 2,
            "bt": "2",
            "item_option_id": "221001134243S4rWNHIK9R5jVwVVAIo",
            "anwser_item_id": "221013162340dCKaUrAe4vJtjnE4oQO",
            "id": "2210131623404dSdaK0Ym0S3mjnqJRV",
            "exam_option_img": "",
            "mal_anwer": ""
          },
          {
            "question_option": "C",
            "is_gen_um": 2,
            "bt": "34",
            "item_option_id": "221001134243eRbGb8DPETstnR1Xulj",
            "anwser_item_id": "221013162340dCKaUrAe4vJtjnE4oQO",
            "id": "221013162340EyxI3TG5zxPmiwT9Z9m",
            "exam_option_img": "",
            "mal_anwer": ""
          },
          {
            "question_option": "D",
            "is_gen_um": 2,
            "bt": "4",
            "item_option_id": "221001134243OjbIjv7W6cFjwDvobIk",
            "anwser_item_id": "221013162340dCKaUrAe4vJtjnE4oQO",
            "id": "221013162340m5aB8IfevjClMQoP2J3",
            "exam_option_img": "",
            "mal_anwer": ""
          }
        ],
        "ques_type": 1,
        "question_choice_min": 0,
        "is_outer_source": 0,
        "subject_mal_ant": "A",
        "anwer_conten": "",
        "anwer_item_image": "upload/files/2022/10/01/b40c23c7ab6e449fa96b35fa36eb6e72.jpg",
        "score": 0.00,
        "bt": "选择A是对的",
        "exam_ques_id": "221001134243Md6brv5cNiVN76eadRP",
        "exam_score": 5.00,
        "q_number": 2,
        "id": "221013162340dCKaUrAe4vJtjnE4oQO",
        "question_choice_max": 0
      },
      {
        "fid": "221013162340UjoEN7pfgfZMQJr92o4",
        "ques_type_txt": "多选题",
        "stem_desc": "",
        "data": [
          {
            "question_option": "A",
            "is_gen_um": 2,
            "bt": "康藏公路",
            "item_option_id": "221001134243SiPV2mEXlm7atP7vkRM",
            "anwser_item_id": "221013162340cm9Etw2fKE4nEi3YO5r",
            "id": "221013162340moETM70xvyAWwNVzL4J",
            "exam_option_img": "",
            "mal_anwer": ""
          },
          {
            "question_option": "B",
            "is_gen_um": 2,
            "bt": "青藏铁路",
            "item_option_id": "221001134244b0roUoGeBT6pZjJxuuJ",
            "anwser_item_id": "221013162340cm9Etw2fKE4nEi3YO5r",
            "id": "221013162340Ixd4MLbfeINmah48lAR",
            "exam_option_img": "",
            "mal_anwer": ""
          },
          {
            "question_option": "C",
            "is_gen_um": 2,
            "bt": "青藏公路",
            "item_option_id": "2210011342444WyWQMkDv38quBPOUkQ",
            "anwser_item_id": "221013162340cm9Etw2fKE4nEi3YO5r",
            "id": "221013162340jyd8TtQBZVV6gVQMAmN",
            "exam_option_img": "",
            "mal_anwer": ""
          },
          {
            "question_option": "D",
            "is_gen_um": 2,
            "bt": "川藏公路",
            "item_option_id": "221001134244JynADCMbYvvMTWCueEj",
            "anwser_item_id": "221013162340cm9Etw2fKE4nEi3YO5r",
            "id": "221013162340b9PworNzUzj3z4DwARU",
            "exam_option_img": "",
            "mal_anwer": ""
          }
        ],
        "ques_type": 2,
        "question_choice_min": 0,
        "is_outer_source": 0,
        "subject_mal_ant": "",
        "anwer_conten": "",
        "anwer_item_image": "",
        "score": 0.00,
        "bt": "kaoshi全线通车。（ ）",
        "exam_ques_id": "221001134243uhxKzDyao9VWVnxMz5e",
        "exam_score": 10.00,
        "q_number": 3,
        "id": "221013162340cm9Etw2fKE4nEi3YO5r",
        "question_choice_max": 0
      },
      {
        "fid": "221013162340UjoEN7pfgfZMQJr92o4",
        "ques_type_txt": "多选题",
        "stem_desc": "1231",
        "data": [
          {
            "question_option": "A",
            "is_gen_um": 1,
            "bt": "1",
            "item_option_id": "221001134244Jhd5eg72KcYIYCb3JOv",
            "anwser_item_id": "221013162340xfgNl3XmN8QmxGAJ3Gv",
            "id": "221013162340owuaw1cmKt6I5Xje996",
            "exam_option_img": "",
            "mal_anwer": ""
          },
          {
            "question_option": "B",
            "is_gen_um": 1,
            "bt": "2",
            "item_option_id": "221001134244GfHiVKaniroineVMO3r",
            "anwser_item_id": "221013162340xfgNl3XmN8QmxGAJ3Gv",
            "id": "221013162340giKe5OBMBDAmMQfP6Yq",
            "exam_option_img": "",
            "mal_anwer": ""
          },
          {
            "question_option": "C",
            "is_gen_um": 2,
            "bt": "3",
            "item_option_id": "221001134244XaPBH6Crah23mqlSGyy",
            "anwser_item_id": "221013162340xfgNl3XmN8QmxGAJ3Gv",
            "id": "221013162340ygS6vuWjN0blLnEI9DU",
            "exam_option_img": "",
            "mal_anwer": ""
          },
          {
            "question_option": "D",
            "is_gen_um": 2,
            "bt": "4",
            "item_option_id": "2210011342443fwi5gyhn37juW6lZpz",
            "anwser_item_id": "221013162340xfgNl3XmN8QmxGAJ3Gv",
            "id": "221013162340kG4EiVbhlHjkYFSGrHl",
            "exam_option_img": "",
            "mal_anwer": ""
          }
        ],
        "ques_type": 2,
        "question_choice_min": 0,
        "is_outer_source": 0,
        "subject_mal_ant": "A,B",
        "anwer_conten": "",
        "anwer_item_image": "upload/files/2022/10/01/237fc924372044ed8445e7331b71290f.jpg",
        "score": 0.00,
        "bt": "选择AB是对的",
        "exam_ques_id": "221001134244TCHZELwHhPRzqyI5smw",
        "exam_score": 5.00,
        "q_number": 4,
        "id": "221013162340xfgNl3XmN8QmxGAJ3Gv",
        "question_choice_max": 0
      }
    ]
  }
}

// http://localhost:8080/DreamWeb/ctrl/partyexma/submit
// 提交试卷接口 给后台传数据
// http://localhost:8080/DreamWeb/ctrl/partyexma/upsource/submitExamQQc?anwserId=221011164658ml6qcZZUkhZtKvCp2SU
// 提交试卷接口
const test = {
    "anwserId": "221011164658ml6qcZZUkhZtKvCp2SU",
    "data": [
      {
        "fid": "221011164658ml6qcZZUkhZtKvCp2SU",
        "ques_type_txt": "单选题",
        "stem_desc": "",
        "data": [
          {
            "question_option": "A",
            "is_gen_um": 2,
            "bt": "反对帝国主义",
            "item_option_id": "221001134243eTQy4oBbCfS6VCvUoFb",
            "anwser_item_id": "2210111646584GHHsotvWuSnRPZHP5g",
            "id": "221011164658iaYHMz3C116uBYAmnFK",
            "exam_option_img": "",
            "mal_anwer": "",
            "anser_content": true
          },
          {
            "question_option": "B",
            "is_gen_um": 2,
            "bt": "反对封建主义",
            "item_option_id": "221001134243FD50Nn2dBKauztrbqHj",
            "anwser_item_id": "2210111646584GHHsotvWuSnRPZHP5g",
            "id": "221011164658grPD7ccqAv0n0euiP4t",
            "exam_option_img": "",
            "mal_anwer": "",
            "anser_content": false
          },
          {
            "question_option": "C",
            "is_gen_um": 2,
            "bt": "争取民族独立、人民解放",
            "item_option_id": "221001134243KpQh28PvOJF9uAKuvHQ",
            "anwser_item_id": "2210111646584GHHsotvWuSnRPZHP5g",
            "id": "221011164658Vf5iY2d1FeTrYFRnxNt",
            "exam_option_img": "",
            "mal_anwer": "",
            "anser_content": false
          },
          {
            "question_option": "D",
            "is_gen_um": 2,
            "bt": "实现民族复兴",
            "item_option_id": "221001134243MunvrEwCIaMjl4yoPfr",
            "anwser_item_id": "2210111646584GHHsotvWuSnRPZHP5g",
            "id": "221011164658gdTqkzqDzTrsQgnaVvy",
            "exam_option_img": "",
            "mal_anwer": "",
            "anser_content": false
          }
        ],
        "ques_type": 1,
        "question_choice_min": 0,
        "is_outer_source": 0,
        "subject_mal_ant": "",
        "anwer_conten": "A",
        "anwer_item_image": "",
        "score": 0,
        "bt": "kaoshi务：一个是（ ）；一个是实现国家富强、人民幸福。",
        "exam_ques_id": "221001134243PQfpQ5P8vAUUR9B2MEx",
        "exam_score": 5,
        "q_number": 1,
        "id": "2210111646584GHHsotvWuSnRPZHP5g",
        "question_choice_max": 0
      },
      {
        "fid": "221011164658ml6qcZZUkhZtKvCp2SU",
        "ques_type_txt": "判断题",
        "stem_desc": "北京是中国的省份吗",
        "data": [
          {
            "question_option": "A",
            "is_gen_um": 1,
            "bt": "正确",
            "item_option_id": "999f52d23f214d1c99497801d96e0277",
            "anwser_item_id": "221011164658OA4uTqQjZnF2EdpGzp9",
            "id": "221011164658Umiq9XXypb1N9sBZlMr",
            "exam_option_img": "",
            "mal_anwer": "",
            "anser_content": true
          },
          {
            "question_option": "B",
            "is_gen_um": 2,
            "bt": "错误",
            "item_option_id": "8d702848a08f4b23974734a9a2b78502",
            "anwser_item_id": "221011164658OA4uTqQjZnF2EdpGzp9",
            "id": "221011164658PLmr8myRjDOv0wyAfiC",
            "exam_option_img": "",
            "mal_anwer": "",
            "anser_content": false
          }
        ],
        "ques_type": 5,
        "question_choice_min": 0,
        "is_outer_source": 0,
        "subject_mal_ant": "",
        "anwer_conten": "A",
        "anwer_item_image": "",
        "score": 5,
        "bt": "北京是中国的省份吗",
        "exam_ques_id": "9f0b36e16e184ff4b5955ef2a1aa17ce",
        "exam_score": 5,
        "q_number": 1,
        "id": "221011164658OA4uTqQjZnF2EdpGzp9",
        "question_choice_max": 0
      },
      {
        "fid": "221011164658ml6qcZZUkhZtKvCp2SU",
        "ques_type_txt": "填空题",
        "stem_desc": "请回答出中国省份",
        "data": [
          {
            "question_option": "A",
            "is_gen_um": 1,
            "bt": "",
            "item_option_id": "c87cfa4250254073878a7ae8962dfef5",
            "anwser_item_id": "221011164658YQmFdyExcU8jnfc17fx",
            "id": "221011164658thPQLXIhkWxlqScL7Ji",
            "exam_option_img": "",
            "mal_anwer": "北京",
            "anser_content": "1"
          },
          {
            "question_option": "B",
            "is_gen_um": 1,
            "bt": "",
            "item_option_id": "1b824a9ddcf3494ca050c5667b6c3e3c",
            "anwser_item_id": "221011164658YQmFdyExcU8jnfc17fx",
            "id": "221011164658g8njNEYYi9nyCD6pwtR",
            "exam_option_img": "",
            "mal_anwer": "上海",
            "anser_content": "2"
          }
        ],
        "ques_type": 3,
        "question_choice_min": 0,
        "is_outer_source": 0,
        "subject_mal_ant": "上海,北京",
        "anwer_conten": "12",
        "anwer_item_image": "",
        "score": 0,
        "bt": "测试",
        "exam_ques_id": "450b55a98d744026bd8a7eece3296e59",
        "exam_score": 5,
        "q_number": 1,
        "id": "221011164658YQmFdyExcU8jnfc17fx",
        "question_choice_max": 0
      },
      {
        "fid": "221011164658ml6qcZZUkhZtKvCp2SU",
        "ques_type_txt": "简答题",
        "stem_desc": "请说出工作地址",
        "data": [
          {
            "question_option": "A",
            "is_gen_um": 1,
            "bt": "",
            "item_option_id": "e2abe6f6126646ddb9fd70836369ad08",
            "anwser_item_id": "221011164658wz2KvstAmeUYtjnoRnY",
            "id": "221011164658XY9hz73tJAgNmlp6eji",
            "exam_option_img": "",
            "mal_anwer": "请说出工作地址",
            "anser_content": "3"
          }
        ],
        "ques_type": 4,
        "question_choice_min": 0,
        "is_outer_source": 0,
        "subject_mal_ant": "请说出工作地址",
        "anwer_conten": "3",
        "anwer_item_image": "",
        "score": 0,
        "bt": "请说出工作地址",
        "exam_ques_id": "0c077cc4b06b4b27b09a8125438db87e",
        "exam_score": 5,
        "q_number": 1,
        "id": "221011164658wz2KvstAmeUYtjnoRnY",
        "question_choice_max": 0
      },
      {
        "fid": "221011164658ml6qcZZUkhZtKvCp2SU",
        "ques_type_txt": "单选题",
        "stem_desc": "阿松大",
        "data": [
          {
            "question_option": "A",
            "is_gen_um": 1,
            "bt": "1",
            "item_option_id": "221001134243C6rD8n5Gie1t5l0vZ0F",
            "anwser_item_id": "221011164658dY8FjmbpkEVPx5VgY1i",
            "id": "221011164658DubD3kPbmeo3axULkzq",
            "exam_option_img": "",
            "mal_anwer": "",
            "anser_content": false
          },
          {
            "question_option": "B",
            "is_gen_um": 2,
            "bt": "2",
            "item_option_id": "221001134243S4rWNHIK9R5jVwVVAIo",
            "anwser_item_id": "221011164658dY8FjmbpkEVPx5VgY1i",
            "id": "2210111646587XPIs5tkySuY9J3rsHO",
            "exam_option_img": "",
            "mal_anwer": "",
            "anser_content": false
          },
          {
            "question_option": "C",
            "is_gen_um": 2,
            "bt": "34",
            "item_option_id": "221001134243eRbGb8DPETstnR1Xulj",
            "anwser_item_id": "221011164658dY8FjmbpkEVPx5VgY1i",
            "id": "221011164658xrHCaMJ1ph19tZzAUK6",
            "exam_option_img": "",
            "mal_anwer": "",
            "anser_content": true
          },
          {
            "question_option": "D",
            "is_gen_um": 2,
            "bt": "4",
            "item_option_id": "221001134243OjbIjv7W6cFjwDvobIk",
            "anwser_item_id": "221011164658dY8FjmbpkEVPx5VgY1i",
            "id": "2210111646587xtvh4vtXkAZG5YFdj6",
            "exam_option_img": "",
            "mal_anwer": "",
            "anser_content": false
          }
        ],
        "ques_type": 1,
        "question_choice_min": 0,
        "is_outer_source": 0,
        "subject_mal_ant": "A",
        "anwer_conten": "C",
        "anwer_item_image": "WkZoQ2MySXlSbXRNTWxwd1lrZFdla3g2U1hkTmFrbDJUVlJCZGsxRVJYWlphbEYzV1hwSmVsbDZaR2haYWxwc1RrUlJOVnB0UlRWT2JVbDZUbGRhYUUxNldteFphbHBzVG5wSmRXRnVRbTQ9",
        "score": 0,
        "bt": "选择A是对的",
        "exam_ques_id": "221001134243Md6brv5cNiVN76eadRP",
        "exam_score": 5,
        "q_number": 2,
        "id": "221011164658dY8FjmbpkEVPx5VgY1i",
        "question_choice_max": 0
      },
      {
        "fid": "221011164658ml6qcZZUkhZtKvCp2SU",
        "ques_type_txt": "多选题",
        "stem_desc": "",
        "data": [
          {
            "question_option": "A",
            "is_gen_um": 2,
            "bt": "康藏公路",
            "item_option_id": "221001134243SiPV2mEXlm7atP7vkRM",
            "anwser_item_id": "221011164658QWwdHHVkUmRBgOe6669",
            "id": "221011164658XSR13TK4RAAVuzNtOIz",
            "exam_option_img": "",
            "mal_anwer": "",
            "anser_content": false
          },
          {
            "question_option": "B",
            "is_gen_um": 2,
            "bt": "青藏铁路",
            "item_option_id": "221001134244b0roUoGeBT6pZjJxuuJ",
            "anwser_item_id": "221011164658QWwdHHVkUmRBgOe6669",
            "id": "221011164658W5i2SaVU6BJVIV45Ij1",
            "exam_option_img": "",
            "mal_anwer": "",
            "anser_content": true
          },
          {
            "question_option": "C",
            "is_gen_um": 2,
            "bt": "青藏公路",
            "item_option_id": "2210011342444WyWQMkDv38quBPOUkQ",
            "anwser_item_id": "221011164658QWwdHHVkUmRBgOe6669",
            "id": "221011164658NPLu4EtsyY7zM6u3BLS",
            "exam_option_img": "",
            "mal_anwer": "",
            "anser_content": true
          },
          {
            "question_option": "D",
            "is_gen_um": 2,
            "bt": "川藏公路",
            "item_option_id": "221001134244JynADCMbYvvMTWCueEj",
            "anwser_item_id": "221011164658QWwdHHVkUmRBgOe6669",
            "id": "221011164658KevvI6ajKfhU1IFxR57",
            "exam_option_img": "",
            "mal_anwer": "",
            "anser_content": false
          }
        ],
        "ques_type": 2,
        "question_choice_min": 0,
        "is_outer_source": 0,
        "subject_mal_ant": "",
        "anwer_conten": "B,C",
        "anwer_item_image": "",
        "score": 0,
        "bt": "kaoshi全线通车。（ ）",
        "exam_ques_id": "221001134243uhxKzDyao9VWVnxMz5e",
        "exam_score": 10,
        "q_number": 3,
        "id": "221011164658QWwdHHVkUmRBgOe6669",
        "question_choice_max": 0
      },
      {
        "fid": "221011164658ml6qcZZUkhZtKvCp2SU",
        "ques_type_txt": "多选题",
        "stem_desc": "1231",
        "data": [
          {
            "question_option": "A",
            "is_gen_um": 1,
            "bt": "1",
            "item_option_id": "221001134244Jhd5eg72KcYIYCb3JOv",
            "anwser_item_id": "221011164658CB3nSb1GcNaJtglxsfi",
            "id": "221011164658dZ1IsDUT1wFjqwqTZx8",
            "exam_option_img": "",
            "mal_anwer": "",
            "anser_content": false
          },
          {
            "question_option": "B",
            "is_gen_um": 1,
            "bt": "2",
            "item_option_id": "221001134244GfHiVKaniroineVMO3r",
            "anwser_item_id": "221011164658CB3nSb1GcNaJtglxsfi",
            "id": "22101116465850KadTYE7QujGBzm4pL",
            "exam_option_img": "",
            "mal_anwer": "",
            "anser_content": true
          },
          {
            "question_option": "C",
            "is_gen_um": 2,
            "bt": "3",
            "item_option_id": "221001134244XaPBH6Crah23mqlSGyy",
            "anwser_item_id": "221011164658CB3nSb1GcNaJtglxsfi",
            "id": "221011164658Zvw3UWbPWHaRMX8OUwA",
            "exam_option_img": "",
            "mal_anwer": "",
            "anser_content": true
          },
          {
            "question_option": "D",
            "is_gen_um": 2,
            "bt": "4",
            "item_option_id": "2210011342443fwi5gyhn37juW6lZpz",
            "anwser_item_id": "221011164658CB3nSb1GcNaJtglxsfi",
            "id": "2210111646588NHUKGdT3cyx2pzEG3p",
            "exam_option_img": "",
            "mal_anwer": "",
            "anser_content": false
          }
        ],
        "ques_type": 2,
        "question_choice_min": 0,
        "is_outer_source": 0,
        "subject_mal_ant": "B,A",
        "anwer_conten": "B,C",
        "anwer_item_image": "WkZoQ2MySXlSbXRNTWxwd1lrZFdla3g2U1hkTmFrbDJUVlJCZGsxRVJYWk5hazB6V20xTk5VMXFVWHBPZWtsM1RrUlNiRnBFWnpCT1JGWnNUbnBOZWsxWFNUTk5WRWsxVFVkWmRXRnVRbTQ9",
        "score": 0,
        "bt": "选择AB是对的",
        "exam_ques_id": "221001134244TCHZELwHhPRzqyI5smw",
        "exam_score": 5,
        "q_number": 4,
        "id": "221011164658CB3nSb1GcNaJtglxsfi",
        "question_choice_max": 0
      }
    ]
  }

// 问卷列表
export function questionList() {
 const _this = this;
 return [
  {
    title: '2022第四季度党员学习日活动调研',
    image: IDM.url.getModuleAssetsWebPath(require('../assets/banner1.jpg'), _this.moduleObject),
    time: '2022-07-15 21:00',
    active: '已参加'
  },
  {
    title: '2022第四季度党员学习日活动调研',
    image: IDM.url.getModuleAssetsWebPath(require('../assets/banner1.jpg'), _this.moduleObject),
    time: '2022-07-15 21:00',
    active: '已参加'
  },
  {
    title: '2022第四季度党员学习日活动调研',
    image: IDM.url.getModuleAssetsWebPath(require('../assets/banner1.jpg'), _this.moduleObject),
    time: '2022-07-15 21:00',
    active: '已参加'
  }
 ]
}