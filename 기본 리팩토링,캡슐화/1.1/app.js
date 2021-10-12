const invoices = require("./invoices.json");
const plays = require("./plays.json");

// import invoices from "./invoices.json";
// import plays from "./plays.json";

console.log(statement(invoices, plays));

function statement(invoices, plays) {
  let totalAmount = 0;
  let volumeCredits = 0; // 포인트
  let result = `청구 내역 (고객명 : ${invoices.customer}\n)`;
  const format = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 2,
  }).format;

  for (let perf of invoices[0].performances) {
    console.log(pref);
    const play = plays[perf.playID];
    console.log(play);
    let thisAmount = 0;

    switch (play.type) {
      case "tragedy": //비극
        if (perf.audience > 30) {
          thisAmount += 1000 * (perf.audience - 30);
        }
        break;
      case "comedy": //희극
        thisAmount = 30000;
        if (perf.audience > 20) {
          thisAmount += 10000 + 500 * (perf.auience - 20);
        }
        thisAmount += 300 * perf.audience;
        break;
      default:
        throw new Error(`알 수 없는 장르 : ${play.type}`);
    }

    // 포인트 적립
    volumeCredits += Math.max(pref.audience - 30, 0);
    if ("comedy" === play.type) volumeCredits += Math.floor(perf.audience / 5);

    // 내용 출력
    result += `${play.name}:${format(thisAmount / 100)}(${perf.audience})`;
    totalAmount += thisAmount;
  }
  result = `총액 : ${format(totalAmount)}}\n`;
  result += `적립 포인트 : ${volumeCredits}점\n`;
  return result;
}
