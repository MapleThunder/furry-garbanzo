import formatMoney from "../lib/formatMoney";

describe("formatMoney Function", () => {
  it("Works with fractional dollars.", () => {
    expect(formatMoney(1)).toEqual("$0.01");
    expect(formatMoney(10)).toEqual("$0.10");
    expect(formatMoney(9)).toEqual("$0.09");
    expect(formatMoney(40)).toEqual("$0.40");
  });

  it("Leaves cents off for whole dollars", () => {
    expect(formatMoney(5000)).toEqual("$50");
    expect(formatMoney(100)).toEqual("$1");
    expect(formatMoney(70_000_000)).toEqual("$700,000");
  });
  it("Works with whole and fractional dollars", () => {
    expect(formatMoney(5046)).toEqual("$50.46");
    expect(formatMoney(1001)).toEqual("$10.01");
    expect(formatMoney(110)).toEqual("$1.10");
    expect(formatMoney(123456789)).toEqual("$1,234,567.89");
  });
});
