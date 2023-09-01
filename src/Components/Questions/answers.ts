export function getAnswersRange() {
  console.log("dfdfdzbfdskfbhjeadfhvbdjskl");
  const ranges: any = {
    agarwalMin: null,
    agarwalMax: null,
    mukherjeeMin: null,
    mukherjeeMax: null,
    reddyMin: null,
    reddyMax: null,
    swapnilMin: null,
    swapnilMax: null,
    nanddyMin: null,
    nanddyMax: null,
  };
  let shoulderAnswers = sessionStorage.getItem("shoulder")?.split(",");
  let elbowAnswers = sessionStorage.getItem("elbow")?.split(",");
  let kneeAnswers = sessionStorage.getItem("knee")?.split(",");
  let wristAnswers = sessionStorage.getItem("wrist")?.split(",");
  let hipAnswers = sessionStorage.getItem("hip")?.split(",");
  let dentalTempAnswers = sessionStorage.getItem("dentalTemp")?.split(",");
  let dentalPermAnswers = sessionStorage.getItem("dentalPerm")?.split(",");
  let ankleAnswers = sessionStorage.getItem("ankle")?.split(",");
  if (shoulderAnswers) {
    if (shoulderAnswers[0]) {
      if (shoulderAnswers[0] === "Not appeared") {
        if (ranges["agarwalMax"] < 19) {
          ranges["agarwalMax"] = 19;
        }
        if (ranges["mukherjeeMax"] < 19) {
          ranges["mukherjeeMax"] = 19;
        }
        if (ranges["reddyMax"] < 19) {
          ranges["reddyMax"] = 19;
        }
        if (ranges["swapnilMax"] < 19) {
          ranges["swapnilMax"] = 19;
        }
      } else if (shoulderAnswers[0] === "Appeared but not fused") {
        if (ranges["agarwalMin"] > 11) {
          ranges["agarwalMin"] = 11;
        }
        if (ranges["agarwalMax"] < 25) {
          ranges["agarwalMax"] = 25;
        }
        if (ranges["mukherjeeMin"] > 15) {
          ranges["mukherjeeMin"] = 15;
        }
        if (ranges["mukherjeeMax"] < 22) {
          ranges["mukherjeeMax"] = 22;
        }
        if (ranges["reddyMin"] > 18) {
          ranges["reddyMin"] = 18;
        }
        if (ranges["reddyMax"] < 22) {
          ranges["reddyMax"] = 22;
        }
        if (ranges["swapnilMin"] > 15) {
          ranges["swapnilMin"] = 15;
        }
        if (ranges["swapnilMax"] < 22) {
          ranges["swapnilMax"] = 22;
        }
      } else if (shoulderAnswers[0] === "Fused") {
        if (ranges["agarwalMin"] > 18) {
          ranges["agarwalMin"] = 18;
        }
        if (ranges["mukherjeeMin"] > 22) {
            ranges["mukherjeeMin"] = 22;
          }
          if (ranges["reddyMin"] > 20) {
            ranges["reddyMin"] = 20;
          }
          if (ranges["swapnilMin"] > 20) {
            ranges["swapnilMin"] = 20;
          }
      }
    }
    if (shoulderAnswers[1]) {
        if (shoulderAnswers[1] === "Not appeared") {
          if (ranges["agarwalMax"] < 1) {
            ranges["agarwalMax"] = 1;
          }
          if (ranges["mukherjeeMax"] < 11) {
            ranges["mukherjeeMax"] = 11;
          }
          if (ranges["reddyMax"] < 11) {
            ranges["reddyMax"] = 11;
          }
          if (ranges["swapnilMax"] < 11) {
            ranges["swapnilMax"] = 11;
          }
        } else if (shoulderAnswers[1] === "Appeared but not fused") {
          if (ranges["agarwalMin"] > 1) {
            ranges["agarwalMin"] = 1;
          }
          if (ranges["agarwalMax"] < 15) {
            ranges["agarwalMax"] = 15;
          }
          if (ranges["mukherjeeMin"] > 10) {
            ranges["mukherjeeMin"] = 10;
          }
          if (ranges["mukherjeeMax"] < 16) {
            ranges["mukherjeeMax"] = 16;
          }
          if (ranges["reddyMin"] > 10) {
            ranges["reddyMin"] = 10;
          }
          if (ranges["reddyMax"] < 16) {
            ranges["reddyMax"] = 16;
          }
          if (ranges["swapnilMin"] > 12) {
            ranges["swapnilMin"] = 12;
          }
          if (ranges["swapnilMax"] < 16) {
            ranges["swapnilMax"] = 16;
          }
        } else if (shoulderAnswers[1] === "Fused") {
          if (ranges["agarwalMin"] > 15) {
            ranges["agarwalMin"] = 15;
          }
          if (ranges["mukherjeeMin"] > 16) {
              ranges["mukherjeeMin"] = 16;
            }
            if (ranges["reddyMin"] > 16) {
              ranges["reddyMin"] = 16;
            }
            if (ranges["swapnilMin"] > 16) {
              ranges["swapnilMin"] = 16;
            }
        }
      }
  }
}
