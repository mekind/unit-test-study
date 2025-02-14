test("hello jest", () => {
  // 테스트 실패
  expect("hello").toEqual("goodbye");

  // 테스트 성공
  expect("hello").toEqual("hello");

  expect("1").toStrictEqual(1);

  expect("1").toStrictEqual("1");
});
