"use strict";

// require를 사용해 모듈을 불러오고 있다.
// 바벨과 같은 트랜스파일러는 현재 필요하지 않다.
const { sum } = require("./number-parser");

const parserTest = () => {
  try {
    const result = sum("1,2");
    if (result === 3) {
      console.log("parserTest example 1 PASSED");
    } else {
      throw new Error(`parserTest: expected 3 but was ${result}`);
    }
  } catch (e) {
    console.error(e.stack);
  }
};

parserTest();
