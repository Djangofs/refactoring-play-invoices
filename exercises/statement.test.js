const statement = require("./2_refine_extracted_function/finished");
const invoices = [
  {
    customer: "BigCo",
    performances: [
      {
        playID: "hamlet",
        audience: 55
      },
      {
        playID: "as-like",
        audience: 35
      },
      {
        playID: "othello",
        audience: 40
      }
    ]
  },
  {
    customer: "NewCo",
    performances: [
      {
        playID: "twelfth-night",
        audience: 200
      },
      {
        playID: "macbeth",
        audience: 100
      }
    ]
  },
  {
    customer: "SmallCo",
    performances: [
      {
        playID: "twelfth-night",
        audience: 10
      },
      {
        playID: "macbeth",
        audience: 5
      },
      {
        playID: "as-like",
        audience: 2
      },
      {
        playID: "othello",
        audience: 12
      },
      {
        playID: "as-like",
        audience: 1
      }
    ]
  },
  {
    customer: "ErrorCo",
    performances: [
      {
        playID: "error-play",
        audience: 200
      }
    ]
  }
];

const plays = {
  hamlet: { name: "Hamlet", type: "tragedy" },
  "as-like": { name: "As You Like It", type: "comedy" },
  othello: { name: "Othello", type: "tragedy" },
  "twelfth-night": { name: "The Twelfth Night", type: "tragedy" },
  macbeth: { name: "MacBeth", type: "tragedy" },
  "error-play": { name: "Error", type: "error" }
};

describe("Function: statement", () => {
  test("Should return correct string for BigCo", () => {
    const expectedResult =
      "Statement for BigCo\n  Hamlet: $650.00 (55 seats)\n  As You Like It: $580.00 (35 seats)\n  Othello: $500.00 (40 seats)\nAmount owed is $1,730.00\nYou earned 47 credits";
    const result = statement(invoices[0], plays);
    expect(result).toEqual(expectedResult);
  });
  test("Should return correct string for NewCo", () => {
    const expectedResult =
      "Statement for NewCo\n  The Twelfth Night: $2,100.00 (200 seats)\n  MacBeth: $1,100.00 (100 seats)\nAmount owed is $3,200.00\nYou earned 240 credits";
    const result = statement(invoices[1], plays);
    expect(result).toEqual(expectedResult);
  });
  test("Should return correct string for SmallCo", () => {
    const expectedResult =
      "Statement for SmallCo\n  The Twelfth Night: $400.00 (10 seats)\n  MacBeth: $400.00 (5 seats)\n  As You Like It: $306.00 (2 seats)\n  Othello: $400.00 (12 seats)\n  As You Like It: $303.00 (1 seats)\nAmount owed is $1,809.00\nYou earned 0 credits";
    const result = statement(invoices[2], plays);
    expect(result).toEqual(expectedResult);
  });
  test("Should throw error if play not found", () => {
    let result;
    try {
      statement(invoices[3], plays);
    } catch (err) {
      result = err;
    }
    expect(result.message).toBe("unknown type: error");
  });
});
