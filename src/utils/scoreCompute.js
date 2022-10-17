export const computeSelect = (item) => {
  let rightArr = [];//代表所有正确的选项
  let choicedArr = [];//代表正确的选择
  let errordArr = []
  item.score = 0;
  item.data.forEach(option => {
    //判断当前选项是否被选中
    option.anser_content = false;
    if (item.anwer_conten.indexOf(option.question_option) > -1) {
      option.anser_content = true;
    } else {
      option.anser_content = false;
    }
    if (option.is_gen_um == 1) {
      rightArr.push(option.id);
      if (option.anser_content) {
        choicedArr.push(option.id);
      }
    } else {
      if (option.anser_content) {
        errordArr.push(option.id);
      }
    }
  })

  if (rightArr.length == choicedArr.length && errordArr.length == 0) {
    item.score = item.exam_score;
  } else{
    item.score = parseFloat(0);
  }
  return item;
}

export const computeWrite = (item) => {
  let rightArr = [];//代表所有正确的选项
  let choicedArr = [];//代表正确的选择
  let errordArr = []
  let anwer_conten = "";
  item.score = 0;

    item.data.forEach(option => {
      rightArr.push(option.id);
      let anser_content = option.anser_content == undefined ? "" : option.anser_content;
      if (anser_content != "" && anser_content == option.mal_anwer) {
        choicedArr.push(option.id);
      } else {
        errordArr.push(option.id);
      }
      anwer_conten += anser_content;
    });
    item.anwer_conten = anwer_conten;
    if (rightArr.length === choicedArr.length && errordArr.length === 0) {
      item.score = item.exam_score;
    } else if (rightArr.length > choicedArr.length && choicedArr.length > 0) {
      if (errordArr.length > 0) {
        item.score = parseFloat(0);
      } else {
        item.score = parseFloat(item.exam_score) / parseFloat(2);
      }
    }
    return item
}