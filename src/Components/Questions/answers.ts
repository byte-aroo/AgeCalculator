export function getAnswersRange() {
  let ranges: any = {
    agarwalMin: "0",
    agarwalMax: "100",
    mukherjeeMin: "0",
    mukherjeeMax: "100",
    reddyMin: "0",
    reddyMax: "100",
    swapnilMin: "0",
    swapnilMax: "100",
    nanddyMin: "0",
    nanddyMax: "100",
  };

  // let sliderRanges = sessionStorage.getItem("answers");
  // if (sliderRanges) {
  //   ranges = JSON.parse(sliderRanges);
   
  // }

  let shoulderAnswers: any = sessionStorage.getItem("shoulder")?.split(",");
  let elbowAnswers: any = sessionStorage.getItem("elbow")?.split(",");
  let kneeAnswers: any = sessionStorage.getItem("knee")?.split(",");
  let wristAnswers: any = sessionStorage.getItem("wrist")?.split(",");
  let hipAnswers: any = sessionStorage.getItem("hip")?.split(",");
  let dentalTempAnswers: any = sessionStorage.getItem("dentalTemp")?.split(",");
  let dentalPermAnswers: any = sessionStorage.getItem("dentalPerm")?.split(",");
  let ankleAnswers: any = sessionStorage.getItem("ankle")?.split(",");

  if (shoulderAnswers) {
    if (shoulderAnswers[0]) {
      if (shoulderAnswers[0] === "Not appeared") {
        // if (!ranges["agarwalMin"] || Number(ranges["agarwalMin"]) < 18) {
          // ranges["agarwalMin"] = 0;
        // }
        // if (!ranges["mukherjeeMin"] || Number(ranges["mukherjeeMin"]) < 22) {
          // ranges["mukherjeeMin"] = 0;
        // }
        // if (!ranges["reddyMin"] || Number(ranges["reddyMin"]) < 20) {
          // ranges["reddyMin"] = 0;
        // }
        // if (!ranges["swapnilMin"] || Number(ranges["swapnilMin"]) < 20) {
          // ranges["swapnilMin"] =0;
        // }
        if (!ranges["agarwalMax"] || Number(ranges["agarwalMax"]) > 19) {
          ranges["agarwalMax"] = 19;
        }
        if (!ranges["mukherjeeMax"] || Number(ranges["mukherjeeMax"]) > 19) {
          ranges["mukherjeeMax"] = 19;
        }
        if (!ranges["reddyMax"] || Number(ranges["reddyMax"]) > 19) {
          ranges["reddyMax"] = 19;
        }
        if (!ranges["swapnilMax"] || Number(ranges["swapnilMax"]) > 19) {
          ranges["swapnilMax"] = 19;
        }
      } else if (shoulderAnswers[0] === "Appeared but not fused") {
        if (!ranges["agarwalMin"] || Number(ranges["agarwalMin"]) < 11) {
          ranges["agarwalMin"] = 11;
        }
        if (!ranges["agarwalMax"] || Number(ranges["agarwalMax"]) > 25) {
          ranges["agarwalMax"] = 25;
        }
        if (!ranges["mukherjeeMin"] || Number(ranges["mukherjeeMin"]) < 15) {
          ranges["mukherjeeMin"] = 15;
        }
        if (!ranges["mukherjeeMax"] || Number(ranges["mukherjeeMax"]) > 22) {
          ranges["mukherjeeMax"] = 22;
        }
        if (!ranges["reddyMin"] || Number(ranges["reddyMin"]) < 18) {
          ranges["reddyMin"] = 18;
        }
        if (!ranges["reddyMax"] || Number(ranges["reddyMax"]) > 22) {
          ranges["reddyMax"] = 22;
        }
        if (!ranges["swapnilMin"] || Number(ranges["swapnilMin"]) < 15) {
          ranges["swapnilMin"] = 15;
        }
        if (!ranges["swapnilMax"] || Number(ranges["swapnilMax"]) > 22) {
          ranges["swapnilMax"] = 22;
        }
      } else if (shoulderAnswers[0] === "Fused") {
        if (!ranges["agarwalMin"] || Number(ranges["agarwalMin"]) < 18) {
          ranges["agarwalMin"] = 18;
        }
        if (!ranges["mukherjeeMin"] || Number(ranges["mukherjeeMin"]) < 22) {
          ranges["mukherjeeMin"] = 22;
        }
        if (!ranges["reddyMin"] || Number(ranges["reddyMin"]) < 20) {
          ranges["reddyMin"] = 20;
        }
        if (!ranges["swapnilMin"] || Number(ranges["swapnilMin"]) < 20) {
          ranges["swapnilMin"] = 20;
        }
      }
    }
    if (shoulderAnswers[1]) {
      if (shoulderAnswers[1] === "Not appeared") {
        if (!ranges["agarwalMax"] || Number(ranges["agarwalMax"]) > 11) {
          ranges["agarwalMax"] = 11;
        }
        if (!ranges["mukherjeeMax"] || Number(ranges["mukherjeeMax"]) > 11) {
          ranges["mukherjeeMax"] = 11;
        }
        if (!ranges["reddyMax"] || Number(ranges["reddyMax"]) > 11) {
          ranges["reddyMax"] = 11;
        }
        if (!ranges["swapnilMax"] || Number(ranges["swapnilMax"]) > 12) {
          ranges["swapnilMax"] = 12;
        }
      } else if (shoulderAnswers[1] === "Appeared but not fused") {
        if (!ranges["agarwalMin"] || Number(ranges["agarwalMin"]) < 11) {
          ranges["agarwalMin"] = 11;
        }
        if (!ranges["agarwalMax"] || Number(ranges["agarwalMax"]) > 15) {
          ranges["agarwalMax"] = 15;
        }
        if (!ranges["mukherjeeMin"] || Number(ranges["mukherjeeMin"]) < 10) {
          ranges["mukherjeeMin"] = 10;
        }
        if (!ranges["mukherjeeMax"] || Number(ranges["mukherjeeMax"]) > 16) {
          ranges["mukherjeeMax"] = 16;
        }
        if (!ranges["reddyMin"] || Number(ranges["reddyMin"]) < 10) {
          ranges["reddyMin"] = 10;
        }
        if (!ranges["reddyMax"] || Number(ranges["reddyMax"]) > 16) {
          ranges["reddyMax"] = 16;
        }
        if (!ranges["swapnilMin"] || Number(ranges["swapnilMin"]) < 12) {
          ranges["swapnilMin"] = 12;
        }
        if (!ranges["swapnilMax"] || Number(ranges["swapnilMax"]) > 16) {
          ranges["swapnilMax"] = 16;
        }
      } else if (shoulderAnswers[1] === "Fused") {
        if (!ranges["agarwalMin"] || Number(ranges["agarwalMin"]) < 15) {
          ranges["agarwalMin"] = 15;
        }
        if (!ranges["mukherjeeMin"] || Number(ranges["mukherjeeMin"]) < 16) {
          ranges["mukherjeeMin"] = 16;
        }
        if (!ranges["reddyMin"] || Number(ranges["reddyMin"]) < 16) {
          ranges["reddyMin"] = 16;
        }
        if (!ranges["swapnilMin"] || Number(ranges["swapnilMin"]) < 16) {
          ranges["swapnilMin"] = 16;
        }
      }
    }
    if (shoulderAnswers[2]) {
      if (shoulderAnswers[2] === "Not appeared") {
        if (!ranges["agarwalMax"] || Number(ranges["agarwalMax"]) > 16) {
          ranges["agarwalMax"] = 16;
        }
        if (!ranges["mukherjeeMax"] || Number(ranges["mukherjeeMax"]) > 17) {
          ranges["mukherjeeMax"] = 17;
        }
        if (!ranges["reddyMax"] || Number(ranges["reddyMax"]) > 15) {
          ranges["reddyMax"] = 15;
        }
        if (!ranges["swapnilMax"] || Number(ranges["swapnilMax"]) > 14) {
          ranges["swapnilMax"] = 14;
        }
      } else if (shoulderAnswers[2] === "Appeared but not fused") {
        if (!ranges["agarwalMin"] || Number(ranges["agarwalMin"]) < 16) {
          ranges["agarwalMin"] = 16;
        }
        if (!ranges["agarwalMax"] || Number(ranges["agarwalMax"]) > 20) {
          ranges["agarwalMax"] = 20;
        }
        if (!ranges["mukherjeeMin"] || Number(ranges["mukherjeeMin"]) < 14) {
          ranges["mukherjeeMin"] = 14;
        }
        if (!ranges["mukherjeeMax"] || Number(ranges["mukherjeeMax"]) > 19) {
          ranges["mukherjeeMax"] = 19;
        }
        if (!ranges["reddyMin"] || Number(ranges["reddyMin"]) < 14) {
          ranges["reddyMin"] = 14;
        }
        if (!ranges["reddyMax"] || Number(ranges["reddyMax"]) > 18) {
          ranges["reddyMax"] = 18;
        }
        if (!ranges["swapnilMin"] || Number(ranges["swapnilMin"]) < 14) {
          ranges["swapnilMin"] = 14;
        }
        if (!ranges["swapnilMax"] || Number(ranges["swapnilMax"]) > 18) {
          ranges["swapnilMax"] = 18;
        }
      } else if (shoulderAnswers[2] === "Fused") {
        if (!ranges["agarwalMin"] || Number(ranges["agarwalMin"]) < 20) {
          ranges["agarwalMin"] = 20;
        }
        if (!ranges["mukherjeeMin"] || Number(ranges["mukherjeeMin"]) < 14) {
          ranges["mukherjeeMin"] = 14;
        }
        if (!ranges["reddyMin"] || Number(ranges["reddyMin"]) < 17) {
          ranges["reddyMin"] = 17;
        }
        if (!ranges["swapnilMin"] || Number(ranges["swapnilMin"]) < 18) {
          ranges["swapnilMin"] = 18;
        }
      }
    }

    if (shoulderAnswers[3]) {
      if (shoulderAnswers[3] === "Not appeared") {
        if (!ranges["agarwalMax"] || Number(ranges["agarwalMax"]) > 1) {
          ranges["agarwalMax"] = 1;
        }
        if (!ranges["mukherjeeMax"] || Number(ranges["mukherjeeMax"]) > 1) {
          ranges["mukherjeeMax"] = 1;
        }
        if (!ranges["reddyMax"] || Number(ranges["reddyMax"]) > 1) {
          ranges["reddyMax"] = 1;
        }
        if (!ranges["swapnilMax"] || Number(ranges["swapnilMax"]) > 1) {
          ranges["swapnilMax"] = 1;
        }
      } else if (shoulderAnswers[3] === "Appeared but not fused") {
        if (!ranges["agarwalMin"] || Number(ranges["agarwalMin"]) < 1) {
          ranges["agarwalMin"] = 1;
        }
        if (!ranges["agarwalMax"] || Number(ranges["agarwalMax"]) > 18) {
          ranges["agarwalMax"] = 18;
        }
        if (!ranges["mukherjeeMin"] || Number(ranges["mukherjeeMin"]) < 1) {
          ranges["mukherjeeMin"] = 1;
        }
        if (!ranges["mukherjeeMax"] || Number(ranges["mukherjeeMax"]) > 18) {
          ranges["mukherjeeMax"] = 18;
        }
        if (!ranges["reddyMin"] || Number(ranges["reddyMin"]) < 0.5) {
          ranges["reddyMin"] = 0.5;
        }
        if (!ranges["reddyMax"] || Number(ranges["reddyMax"]) > 19) {
          ranges["reddyMax"] = 19;
        }
        if (!ranges["swapnilMin"] || Number(ranges["swapnilMin"]) < 1) {
          ranges["swapnilMin"] = 1;
        }
        if (!ranges["swapnilMax"] || Number(ranges["swapnilMax"]) > 18) {
          ranges["swapnilMax"] = 18;
        }
      } else if (shoulderAnswers[3] === "Fused") {
        if (!ranges["agarwalMin"] || Number(ranges["agarwalMin"]) < 18) {
          ranges["agarwalMin"] = 18;
        }
        if (!ranges["mukherjeeMin"] || Number(ranges["mukherjeeMin"]) < 14) {
          ranges["mukherjeeMin"] = 14;
        }
        if (!ranges["reddyMin"] || Number(ranges["reddyMin"]) < 18) {
          ranges["reddyMin"] = 18;
        }
        if (!ranges["swapnilMin"] || Number(ranges["swapnilMin"]) < 18) {
          ranges["swapnilMin"] = 18;
        }
      }
    }
    if (shoulderAnswers[4]) {
      if (shoulderAnswers[4] === "Not appeared") {
        if (!ranges["agarwalMax"] || Number(ranges["agarwalMax"]) > 3) {
          ranges["agarwalMax"] = 3;
        }

        if (!ranges["reddyMax"] || Number(ranges["reddyMax"]) > 3) {
          ranges["reddyMax"] = 3;
        }
        if (!ranges["swapnilMax"] || Number(ranges["swapnilMax"]) > 3) {
          ranges["swapnilMax"] = 3;
        }
      } else if (shoulderAnswers[4] === "Appeared but not fused") {
        if (!ranges["agarwalMin"] || Number(ranges["agarwalMin"]) < 3) {
          ranges["agarwalMin"] = 3;
        }
        if (!ranges["agarwalMax"] || Number(ranges["agarwalMax"]) > 6) {
          ranges["agarwalMax"] = 6;
        }

        if (!ranges["mukherjeeMax"] || Number(ranges["mukherjeeMax"]) > 4) {
          ranges["mukherjeeMax"] = 4;
        }
        if (!ranges["reddyMin"] || Number(ranges["reddyMin"]) < 3) {
          ranges["reddyMin"] = 3;
        }

        if (!ranges["swapnilMin"] || Number(ranges["swapnilMin"]) < 3) {
          ranges["swapnilMin"] = 3;
        }
        if (!ranges["swapnilMax"] || Number(ranges["swapnilMax"]) > 6) {
          ranges["swapnilMax"] = 6;
        }
      } else if (shoulderAnswers[4] === "Fused") {
        if (!ranges["agarwalMin"] || Number(ranges["agarwalMin"]) < 6) {
          ranges["agarwalMin"] = 6;
        }
        if (!ranges["mukherjeeMin"] || Number(ranges["mukherjeeMin"]) < 2) {
          ranges["mukherjeeMin"] = 2;
        }

        if (!ranges["swapnilMin"] || Number(ranges["swapnilMin"]) < 6) {
          ranges["swapnilMin"] = 6;
        }
      }
    }
    if (shoulderAnswers[5]) {
      if (shoulderAnswers[5] === "Not appeared") {
        if (!ranges["agarwalMax"] || Number(ranges["agarwalMax"]) > 5) {
          ranges["agarwalMax"] = 5;
        }

        if (!ranges["reddyMax"] || Number(ranges["reddyMax"]) > 5) {
          ranges["reddyMax"] = 5;
        }
        if (!ranges["swapnilMax"] || Number(ranges["swapnilMax"]) > 5) {
          ranges["swapnilMax"] = 5;
        }
      } else if (shoulderAnswers[5] === "Appeared but not fused") {
        if (!ranges["agarwalMin"] || Number(ranges["agarwalMin"]) < 5) {
          ranges["agarwalMin"] = 5;
        }
        if (!ranges["agarwalMax"] || Number(ranges["agarwalMax"]) > 6) {
          ranges["agarwalMax"] = 6;
        }

        if (!ranges["mukherjeeMax"] || Number(ranges["mukherjeeMax"]) > 7) {
          ranges["mukherjeeMax"] = 7;
        }
        if (!ranges["reddyMin"] || Number(ranges["reddyMin"]) < 5) {
          ranges["reddyMin"] = 5;
        }

        if (!ranges["swapnilMin"] || Number(ranges["swapnilMin"]) < 5) {
          ranges["swapnilMin"] = 5;
        }
        if (!ranges["swapnilMax"] || Number(ranges["swapnilMax"]) > 6) {
          ranges["swapnilMax"] = 6;
        }
      } else if (shoulderAnswers[5] === "Fused") {
        if (!ranges["agarwalMin"] || Number(ranges["agarwalMin"]) < 6) {
          ranges["agarwalMin"] = 6;
        }
        if (!ranges["mukherjeeMin"] || Number(ranges["mukherjeeMin"]) < 5) {
          ranges["mukherjeeMin"] = 5;
        }

        if (!ranges["swapnilMin"] || Number(ranges["swapnilMin"]) < 6) {
          ranges["swapnilMin"] = 6;
        }
      }
    }
  }

  if (elbowAnswers) {
    if (elbowAnswers[0]) {
      if (elbowAnswers[0] === "Not appeared") {
        if (!ranges["agarwalMax"] || Number(ranges["agarwalMax"]) > 5) {
          ranges["agarwalMax"] = 5;
        }
        if (!ranges["mukherjeeMax"] || Number(ranges["mukherjeeMax"]) > 8) {
          ranges["mukherjeeMax"] = 8;
        }
        if (!ranges["reddyMax"] || Number(ranges["reddyMax"]) > 5) {
          ranges["reddyMax"] = 5;
        }
        if (!ranges["swapnilMax"] || Number(ranges["swapnilMax"]) > 5) {
          ranges["swapnilMax"] = 5;
        }
      } else if (elbowAnswers[0] === "Appeared but not fused") {
        if (!ranges["agarwalMin"] || Number(ranges["agarwalMin"]) < 5) {
          ranges["agarwalMin"] = 5;
        }
        if (!ranges["agarwalMax"] || Number(ranges["agarwalMax"]) > 16) {
          ranges["agarwalMax"] = 16;
        }
        if (!ranges["mukherjeeMin"] || Number(ranges["mukherjeeMin"]) < 8) {
          ranges["mukherjeeMin"] = 8;
        }
        if (!ranges["mukherjeeMax"] || Number(ranges["mukherjeeMax"]) > 16) {
          ranges["mukherjeeMax"] = 16;
        }
        if (!ranges["reddyMin"] || Number(ranges["reddyMin"]) < 5) {
          ranges["reddyMin"] = 5;
        }
        if (!ranges["reddyMax"] || Number(ranges["reddyMax"]) > 17) {
          ranges["reddyMax"] = 17;
        }
        if (!ranges["swapnilMin"] || Number(ranges["swapnilMin"]) < 5) {
          ranges["swapnilMin"] = 5;
        }
        if (!ranges["swapnilMax"] || Number(ranges["swapnilMax"]) > 17) {
          ranges["swapnilMax"] = 17;
        }
      } else if (elbowAnswers[0] === "Fused") {
        if (!ranges["agarwalMin"] || Number(ranges["agarwalMin"]) < 16) {
          ranges["agarwalMin"] = 16;
        }
        if (!ranges["mukherjeeMin"] || Number(ranges["mukherjeeMin"]) < 16) {
          ranges["mukherjeeMin"] = 16;
        }
        if (!ranges["reddyMin"] || Number(ranges["reddyMin"]) < 16) {
          ranges["reddyMin"] = 16;
        }
        if (!ranges["swapnilMin"] || Number(ranges["swapnilMin"]) < 16) {
          ranges["swapnilMin"] = 16;
        }
      }
    }
    if (elbowAnswers[1]) {
      if (elbowAnswers[1] === "Not appeared") {
        if (!ranges["agarwalMax"] || Number(ranges["agarwalMax"]) > 9) {
          ranges["agarwalMax"] = 9;
        }
        if (!ranges["mukherjeeMax"] || Number(ranges["mukherjeeMax"]) > 13) {
          ranges["mukherjeeMax"] = 13;
        }
        if (!ranges["reddyMax"] || Number(ranges["reddyMax"]) > 9) {
          ranges["reddyMax"] = 9;
        }
        if (!ranges["swapnilMax"] || Number(ranges["swapnilMax"]) > 9) {
          ranges["swapnilMax"] = 9;
        }
      } else if (elbowAnswers[1] === "Appeared but not fused") {
        if (!ranges["agarwalMin"] || Number(ranges["agarwalMin"]) < 9) {
          ranges["agarwalMin"] = 9;
        }
        if (!ranges["agarwalMax"] || Number(ranges["agarwalMax"]) > 16) {
          ranges["agarwalMax"] = 16;
        }
        if (!ranges["mukherjeeMin"] || Number(ranges["mukherjeeMin"]) < 11) {
          ranges["mukherjeeMin"] = 11;
        }
        if (!ranges["mukherjeeMax"] || Number(ranges["mukherjeeMax"]) > 17) {
          ranges["mukherjeeMax"] = 17;
        }
        if (!ranges["reddyMin"] || Number(ranges["reddyMin"]) < 9) {
          ranges["reddyMin"] = 9;
        }
        if (!ranges["reddyMax"] || Number(ranges["reddyMax"]) > 17) {
          ranges["reddyMax"] = 17;
        }
        if (!ranges["swapnilMin"] || Number(ranges["swapnilMin"]) < 9) {
          ranges["swapnilMin"] = 9;
        }
        if (!ranges["swapnilMax"] || Number(ranges["swapnilMax"]) > 17) {
          ranges["swapnilMax"] = 17;
        }
      } else if (elbowAnswers[1] === "Fused") {
        if (!ranges["agarwalMin"] || Number(ranges["agarwalMin"]) < 16) {
          ranges["agarwalMin"] = 16;
        }
        if (!ranges["mukherjeeMin"] || Number(ranges["mukherjeeMin"]) < 17) {
          ranges["mukherjeeMin"] = 17;
        }
        if (!ranges["reddyMin"] || Number(ranges["reddyMin"]) < 16) {
          ranges["reddyMin"] = 16;
        }
        if (!ranges["swapnilMin"] || Number(ranges["swapnilMin"]) < 16) {
          ranges["swapnilMin"] = 16;
        }
      }
    }
    if (elbowAnswers[2]) {
      if (elbowAnswers[2] === "Not appeared") {
        if (!ranges["agarwalMax"] || Number(ranges["agarwalMax"]) > 7) {
          ranges["agarwalMax"] = 7;
        }
        if (!ranges["mukherjeeMax"] || Number(ranges["mukherjeeMax"]) > 7) {
          ranges["mukherjeeMax"] = 7;
        }
        if (!ranges["reddyMax"] || Number(ranges["reddyMax"]) > 7) {
          ranges["reddyMax"] = 7;
        }
        if (!ranges["swapnilMax"] || Number(ranges["swapnilMax"]) > 7) {
          ranges["swapnilMax"] = 7;
        }
      } else if (elbowAnswers[2] === "Appeared but not fused") {
        if (!ranges["agarwalMin"] || Number(ranges["agarwalMin"]) < 5) {
          ranges["agarwalMin"] = 5;
        }
        if (!ranges["agarwalMax"] || Number(ranges["agarwalMax"]) > 16) {
          ranges["agarwalMax"] = 16;
        }
        if (!ranges["mukherjeeMin"] || Number(ranges["mukherjeeMin"]) < 5) {
          ranges["mukherjeeMin"] = 5;
        }
        if (!ranges["mukherjeeMax"] || Number(ranges["mukherjeeMax"]) > 16) {
          ranges["mukherjeeMax"] = 16;
        }
        if (!ranges["reddyMin"] || Number(ranges["reddyMin"]) < 6) {
          ranges["reddyMin"] = 6;
        }
        if (!ranges["reddyMax"] || Number(ranges["reddyMax"]) > 16) {
          ranges["reddyMax"] = 16;
        }
        if (!ranges["swapnilMin"] || Number(ranges["swapnilMin"]) < 5) {
          ranges["swapnilMin"] = 5;
        }
        if (!ranges["swapnilMax"] || Number(ranges["swapnilMax"]) > 16) {
          ranges["swapnilMax"] = 16;
        }
      } else if (elbowAnswers[2] === "Fused") {
        if (!ranges["agarwalMin"] || Number(ranges["agarwalMin"]) < 16) {
          ranges["agarwalMin"] = 16;
        }
        if (!ranges["mukherjeeMin"] || Number(ranges["mukherjeeMin"]) < 16) {
          ranges["mukherjeeMin"] = 16;
        }
        if (!ranges["reddyMin"] || Number(ranges["reddyMin"]) < 14) {
          ranges["reddyMin"] = 14;
        }
        if (!ranges["swapnilMin"] || Number(ranges["swapnilMin"]) < 14) {
          ranges["swapnilMin"] = 14;
        }
      }
    }

    if (elbowAnswers[3]) {
      if (elbowAnswers[3] === "Not appeared") {
        if (!ranges["agarwalMax"] || Number(ranges["agarwalMax"]) > 11) {
          ranges["agarwalMax"] = 11;
        }
        if (!ranges["mukherjeeMax"] || Number(ranges["mukherjeeMax"]) > 11) {
          ranges["mukherjeeMax"] = 11;
        }
        if (!ranges["reddyMax"] || Number(ranges["reddyMax"]) > 11) {
          ranges["reddyMax"] = 11;
        }
        if (!ranges["swapnilMax"] || Number(ranges["swapnilMax"]) > 11) {
          ranges["swapnilMax"] = 11;
        }
      } else if (elbowAnswers[3] === "Appeared but not fused") {
        if (!ranges["agarwalMin"] || Number(ranges["agarwalMin"]) < 11) {
          ranges["agarwalMin"] = 11;
        }

        if (!ranges["mukherjeeMin"] || Number(ranges["mukherjeeMin"]) < 11) {
          ranges["mukherjeeMin"] = 11;
        }
        if (!ranges["mukherjeeMax"] || Number(ranges["mukherjeeMax"]) > 15) {
          ranges["mukherjeeMax"] = 15;
        }
        if (!ranges["reddyMin"] || Number(ranges["reddyMin"]) < 9) {
          ranges["reddyMin"] = 9;
        }
        if (!ranges["reddyMax"] || Number(ranges["reddyMax"]) > 16) {
          ranges["reddyMax"] = 16;
        }
        if (!ranges["swapnilMin"] || Number(ranges["swapnilMin"]) < 9) {
          ranges["swapnilMin"] = 9;
        }
        if (!ranges["swapnilMax"] || Number(ranges["swapnilMax"]) > 16) {
          ranges["swapnilMax"] = 16;
        }
      } else if (elbowAnswers[3] === "Fused") {
        if (!ranges["mukherjeeMin"] || Number(ranges["mukherjeeMin"]) < 11) {
          ranges["mukherjeeMin"] = 11;
        }
        if (!ranges["reddyMin"] || Number(ranges["reddyMin"]) < 14) {
          ranges["reddyMin"] = 14;
        }
        if (!ranges["swapnilMin"] || Number(ranges["swapnilMin"]) < 14) {
          ranges["swapnilMin"] = 14;
        }
      }
    }
    if (elbowAnswers[4]) {
      if (elbowAnswers[4] === "Not appeared") {
        if (!ranges["agarwalMax"] || Number(ranges["agarwalMax"]) > 11) {
          ranges["agarwalMax"] = 11;
        }
        if (!ranges["mukherjeeMax"] || Number(ranges["mukherjeeMax"]) > 12) {
          ranges["mukherjeeMax"] = 12;
        }
        if (!ranges["reddyMax"] || Number(ranges["reddyMax"]) > 11) {
          ranges["reddyMax"] = 11;
        }
        if (!ranges["swapnilMax"] || Number(ranges["swapnilMax"]) > 11) {
          ranges["swapnilMax"] = 11;
        }
      } else if (elbowAnswers[4] === "Appeared but not fused") {
        if (!ranges["agarwalMin"] || Number(ranges["agarwalMin"]) < 11) {
          ranges["agarwalMin"] = 11;
        }
        if (!ranges["mukherjeeMin"] || Number(ranges["mukherjeeMin"]) < 12) {
          ranges["mukherjeeMin"] = 12;
        }

        if (!ranges["mukherjeeMax"] || Number(ranges["mukherjeeMax"]) > 16) {
          ranges["mukherjeeMax"] = 16;
        }
        if (!ranges["reddyMin"] || Number(ranges["reddyMin"]) < 11) {
          ranges["reddyMin"] = 11;
        }
        if (!ranges["reddyMax"] || Number(ranges["reddyMax"]) > 16) {
          ranges["reddyMax"] = 16;
        }
        if (!ranges["swapnilMin"] || Number(ranges["swapnilMin"]) < 10) {
          ranges["swapnilMin"] = 10;
        }
        if (!ranges["swapnilMax"] || Number(ranges["swapnilMax"]) > 16) {
          ranges["swapnilMax"] = 16;
        }
      } else if (elbowAnswers[4] === "Fused") {
        if (!ranges["mukherjeeMin"] || Number(ranges["mukherjeeMin"]) < 11) {
          ranges["mukherjeeMin"] = 11;
        }
        if (!ranges["reddyMin"] || Number(ranges["reddyMin"]) < 14) {
          ranges["reddyMin"] = 14;
        }
        if (!ranges["swapnilMin"] || Number(ranges["swapnilMin"]) < 14) {
          ranges["swapnilMin"] = 14;
        }
      }
    }
    if (elbowAnswers[5]) {
      if (elbowAnswers[5] === "Not appeared") {
        if (!ranges["agarwalMax"] || Number(ranges["agarwalMax"]) > 1) {
          ranges["agarwalMax"] = 1;
        }

        if (!ranges["swapnilMax"] || Number(ranges["swapnilMax"]) > 1) {
          ranges["swapnilMax"] = 1;
        }
      } else if (elbowAnswers[5] === "Appeared but not fused") {
        if (!ranges["agarwalMin"] || Number(ranges["agarwalMin"]) < 1) {
          ranges["agarwalMin"] = 1;
        }

        if (!ranges["reddyMax"] || Number(ranges["reddyMax"]) > 1) {
          ranges["reddyMax"] = 1;
        }

        if (!ranges["swapnilMin"] || Number(ranges["swapnilMin"]) < 1) {
          ranges["swapnilMin"] = 1;
        }
        if (!ranges["swapnilMax"] || Number(ranges["swapnilMax"]) > 16) {
          ranges["swapnilMax"] = 16;
        }
      } else if (elbowAnswers[5] === "Fused") {
        if (!ranges["reddyMin"] || Number(ranges["reddyMin"]) < 1) {
          ranges["reddyMin"] = 1;
        }

        if (!ranges["swapnilMin"] || Number(ranges["swapnilMin"]) < 14) {
          ranges["swapnilMin"] = 14;
        }
      }
    }
  }

  if (kneeAnswers) {
    if (kneeAnswers[0]) {
      if (kneeAnswers[0] === "Not appeared") {
        if (!ranges["agarwalMax"] || Number(ranges["agarwalMax"]) > 0.9) {
          ranges["agarwalMax"] = 0.9;
        }
        if (!ranges["mukherjeeMax"] || Number(ranges["mukherjeeMax"]) > 0) {
          ranges["mukherjeeMax"] = 0;
        }
        if (!ranges["reddyMax"] || Number(ranges["reddyMax"]) > 0.9) {
          ranges["reddyMax"] = 0.9;
        }
        if (!ranges["swapnilMax"] || Number(ranges["swapnilMax"]) > 0.9) {
          ranges["swapnilMax"] = 0.9;
        }
      } else if (kneeAnswers[0] === "Appeared but not fused") {
        if (!ranges["agarwalMin"] || Number(ranges["agarwalMin"]) < 0.9) {
          ranges["agarwalMin"] = 0.9;
        }
        if (!ranges["agarwalMax"] || Number(ranges["agarwalMax"]) > 18) {
          ranges["agarwalMax"] = 18;
        }
        if (!ranges["mukherjeeMin"] || Number(ranges["mukherjeeMin"]) < 0) {
          ranges["mukherjeeMin"] = 0;
        }
        if (!ranges["mukherjeeMax"] || Number(ranges["mukherjeeMax"]) > 17) {
          ranges["mukherjeeMax"] = 17;
        }
        if (!ranges["reddyMin"] || Number(ranges["reddyMin"]) < 0.9) {
          ranges["reddyMin"] = 0.9;
        }
        if (!ranges["reddyMax"] || Number(ranges["reddyMax"]) > 19) {
          ranges["reddyMax"] = 19;
        }
        if (!ranges["swapnilMin"] || Number(ranges["swapnilMin"]) < 0.9) {
          ranges["swapnilMin"] = 0.9;
        }
        if (!ranges["swapnilMax"] || Number(ranges["swapnilMax"]) > 19) {
          ranges["swapnilMax"] = 19;
        }
      } else if (kneeAnswers[0] === "Fused") {
        if (!ranges["agarwalMin"] || Number(ranges["agarwalMin"]) < 18) {
          ranges["agarwalMin"] = 18;
        }
        if (!ranges["mukherjeeMin"] || Number(ranges["mukherjeeMin"]) < 14) {
          ranges["mukherjeeMin"] = 14;
        }
        if (!ranges["reddyMin"] || Number(ranges["reddyMin"]) < 18) {
          ranges["reddyMin"] = 18;
        }
        if (!ranges["swapnilMin"] || Number(ranges["swapnilMin"]) < 18) {
          ranges["swapnilMin"] = 18;
        }
      }
    }
    if (kneeAnswers[1]) {
      if (kneeAnswers[1] === "Not appeared") {
      } else if (kneeAnswers[1] === "Appeared but not fused") {
        if (!ranges["agarwalMin"] || Number(ranges["agarwalMin"]) < 0) {
          ranges["agarwalMin"] = 0;
        }
        if (!ranges["agarwalMax"] || Number(ranges["agarwalMax"]) > 18) {
          ranges["agarwalMax"] = 18;
        }
        if (!ranges["mukherjeeMin"] || Number(ranges["mukherjeeMin"]) < 0) {
          ranges["mukherjeeMin"] = 0;
        }
        if (!ranges["mukherjeeMax"] || Number(ranges["mukherjeeMax"]) > 17) {
          ranges["mukherjeeMax"] = 17;
        }
        if (!ranges["reddyMin"] || Number(ranges["reddyMin"]) < 0) {
          ranges["reddyMin"] = 0;
        }
        if (!ranges["reddyMax"] || Number(ranges["reddyMax"]) > 19) {
          ranges["reddyMax"] = 19;
        }
        if (!ranges["swapnilMin"] || Number(ranges["swapnilMin"]) < 0) {
          ranges["swapnilMin"] = 0;
        }
        if (!ranges["swapnilMax"] || Number(ranges["swapnilMax"]) > 19) {
          ranges["swapnilMax"] = 19;
        }
      } else if (kneeAnswers[1] === "Fused") {
        if (!ranges["agarwalMin"] || Number(ranges["agarwalMin"]) < 18) {
          ranges["agarwalMin"] = 18;
        }
        if (!ranges["mukherjeeMin"] || Number(ranges["mukherjeeMin"]) < 15) {
          ranges["mukherjeeMin"] = 15;
        }
        if (!ranges["reddyMin"] || Number(ranges["reddyMin"]) < 18) {
          ranges["reddyMin"] = 18;
        }
        if (!ranges["swapnilMin"] || Number(ranges["swapnilMin"]) < 18) {
          ranges["swapnilMin"] = 18;
        }
      }
    }
    if (kneeAnswers[2]) {
      if (kneeAnswers[2] === "Not appeared") {
        if (!ranges["agarwalMax"] || Number(ranges["agarwalMax"]) > 4) {
          ranges["agarwalMax"] = 4;
        }

        if (!ranges["reddyMax"] || Number(ranges["reddyMax"]) > 4) {
          ranges["reddyMax"] = 4;
        }
        if (!ranges["swapnilMax"] || Number(ranges["swapnilMax"]) > 4) {
          ranges["swapnilMax"] = 4;
        }
      } else if (kneeAnswers[2] === "Appeared but not fused") {
        if (!ranges["agarwalMin"] || Number(ranges["agarwalMin"]) < 4) {
          ranges["agarwalMin"] = 4;
        }
        if (!ranges["agarwalMax"] || Number(ranges["agarwalMax"]) > 18) {
          ranges["agarwalMax"] = 18;
        }

        if (!ranges["mukherjeeMax"] || Number(ranges["mukherjeeMax"]) > 16) {
          ranges["mukherjeeMax"] = 16;
        }
        if (!ranges["reddyMin"] || Number(ranges["reddyMin"]) < 4) {
          ranges["reddyMin"] = 4;
        }
        if (!ranges["reddyMax"] || Number(ranges["reddyMax"]) > 19) {
          ranges["reddyMax"] = 19;
        }
        if (!ranges["swapnilMin"] || Number(ranges["swapnilMin"]) < 4) {
          ranges["swapnilMin"] = 4;
        }
        if (!ranges["swapnilMax"] || Number(ranges["swapnilMax"]) > 19) {
          ranges["swapnilMax"] = 19;
        }
      } else if (kneeAnswers[2] === "Fused") {
        if (!ranges["agarwalMin"] || Number(ranges["agarwalMin"]) < 18) {
          ranges["agarwalMin"] = 18;
        }
        if (!ranges["mukherjeeMin"] || Number(ranges["mukherjeeMin"]) < 11) {
          ranges["mukherjeeMin"] = 11;
        }
        if (!ranges["reddyMin"] || Number(ranges["reddyMin"]) < 18) {
          ranges["reddyMin"] = 18;
        }
        if (!ranges["swapnilMin"] || Number(ranges["swapnilMin"]) < 18) {
          ranges["swapnilMin"] = 18;
        }
      }
    }
  }

  if (wristAnswers) {
    if (wristAnswers[0]) {
      if (wristAnswers[0] === "Not appeared") {
        if (!ranges["agarwalMax"] || Number(ranges["agarwalMax"]) > 2) {
          ranges["agarwalMax"] = 2;
        }
        if (!ranges["mukherjeeMax"] || Number(ranges["mukherjeeMax"]) > 1) {
          ranges["mukherjeeMax"] = 1;
        }
        if (!ranges["reddyMax"] || Number(ranges["reddyMax"]) > 2) {
          ranges["reddyMax"] = 2;
        }
        if (!ranges["swapnilMax"] || Number(ranges["swapnilMax"]) > 2) {
          ranges["swapnilMax"] = 2;
        }
      } else if (wristAnswers[0] === "Appeared but not fused") {
        if (!ranges["agarwalMin"] || Number(ranges["agarwalMin"]) < 2) {
          ranges["agarwalMin"] = 2;
        }
        if (!ranges["agarwalMax"] || Number(ranges["agarwalMax"]) > 19) {
          ranges["agarwalMax"] = 19;
        }
        if (!ranges["mukherjeeMin"] || Number(ranges["mukherjeeMin"]) < 1) {
          ranges["mukherjeeMin"] = 1;
        }
        if (!ranges["mukherjeeMax"] || Number(ranges["mukherjeeMax"]) > 20) {
          ranges["mukherjeeMax"] = 20;
        }
        if (!ranges["reddyMin"] || Number(ranges["reddyMin"]) < 2) {
          ranges["reddyMin"] = 2;
        }
        if (!ranges["reddyMax"] || Number(ranges["reddyMax"]) > 19) {
          ranges["reddyMax"] = 19;
        }
        if (!ranges["swapnilMin"] || Number(ranges["swapnilMin"]) < 2) {
          ranges["swapnilMin"] = 2;
        }
        if (!ranges["swapnilMax"] || Number(ranges["swapnilMax"]) > 19) {
          ranges["swapnilMax"] = 19;
        }
      } else if (wristAnswers[0] === "Fused") {
        if (!ranges["agarwalMin"] || Number(ranges["agarwalMin"]) < 19) {
          ranges["agarwalMin"] = 19;
        }
        if (!ranges["mukherjeeMin"] || Number(ranges["mukherjeeMin"]) < 19) {
          ranges["mukherjeeMin"] = 19;
        }
        if (!ranges["reddyMin"] || Number(ranges["reddyMin"]) < 18) {
          ranges["reddyMin"] = 18;
        }
        if (!ranges["swapnilMin"] || Number(ranges["swapnilMin"]) < 18) {
          ranges["swapnilMin"] = 18;
        }
      }
    }
    if (wristAnswers[1]) {
      if (wristAnswers[1] === "Not appeared") {
        if (!ranges["agarwalMax"] || Number(ranges["agarwalMax"]) > 6) {
          ranges["agarwalMax"] = 6;
        }
        if (!ranges["mukherjeeMax"] || Number(ranges["mukherjeeMax"]) > 11) {
          ranges["mukherjeeMax"] = 11;
        }
        if (!ranges["reddyMax"] || Number(ranges["reddyMax"]) > 6) {
          ranges["reddyMax"] = 6;
        }
        if (!ranges["swapnilMax"] || Number(ranges["swapnilMax"]) > 5) {
          ranges["swapnilMax"] = 5;
        }
      } else if (wristAnswers[1] === "Appeared but not fused") {
        if (!ranges["agarwalMin"] || Number(ranges["agarwalMin"]) < 6) {
          ranges["agarwalMin"] = 6;
        }
        if (!ranges["agarwalMax"] || Number(ranges["agarwalMax"]) > 19) {
          ranges["agarwalMax"] = 19;
        }
        if (!ranges["mukherjeeMin"] || Number(ranges["mukherjeeMin"]) < 10) {
          ranges["mukherjeeMin"] = 10;
        }
        if (!ranges["mukherjeeMax"] || Number(ranges["mukherjeeMax"]) > 18) {
          ranges["mukherjeeMax"] = 18;
        }
        if (!ranges["reddyMin"] || Number(ranges["reddyMin"]) < 5) {
          ranges["reddyMin"] = 5;
        }
        if (!ranges["reddyMax"] || Number(ranges["reddyMax"]) > 18) {
          ranges["reddyMax"] = 18;
        }
        if (!ranges["swapnilMin"] || Number(ranges["swapnilMin"]) < 5) {
          ranges["swapnilMin"] = 5;
        }
        if (!ranges["swapnilMax"] || Number(ranges["swapnilMax"]) > 18) {
          ranges["swapnilMax"] = 18;
        }
      } else if (wristAnswers[1] === "Fused") {
        if (!ranges["agarwalMin"] || Number(ranges["agarwalMin"]) < 19) {
          ranges["agarwalMin"] = 19;
        }
        if (!ranges["mukherjeeMin"] || Number(ranges["mukherjeeMin"]) < 18) {
          ranges["mukherjeeMin"] = 18;
        }
        if (!ranges["reddyMin"] || Number(ranges["reddyMin"]) < 17) {
          ranges["reddyMin"] = 17;
        }
        if (!ranges["swapnilMin"] || Number(ranges["swapnilMin"]) < 17) {
          ranges["swapnilMin"] = 17;
        }
      }
    }
    if (wristAnswers[2]) {
      if (wristAnswers[2] === "Yes") {
        if (!ranges["agarwalMin"] || Number(ranges["agarwalMin"]) < 1) {
          ranges["agarwalMin"] = 1;
        }
        if (!ranges["mukherjeeMin"] || Number(ranges["mukherjeeMin"]) < 1) {
          ranges["mukherjeeMin"] = 1;
        }
        if (!ranges["reddyMin"] || Number(ranges["reddyMin"]) < 1) {
          ranges["reddyMin"] = 1;
        }
        if (!ranges["swapnilMin"] || Number(ranges["swapnilMin"]) < 1) {
          ranges["swapnilMin"] = 1;
        }
      }
    }
    if (wristAnswers[3]) {
      if (wristAnswers[3] === "Yes") {
        if (!ranges["agarwalMin"] || Number(ranges["agarwalMin"]) < 2) {
          ranges["agarwalMin"] = 2;
        }
        if (!ranges["mukherjeeMin"] || Number(ranges["mukherjeeMin"]) < 2) {
          ranges["mukherjeeMin"] = 2;
        }
        if (!ranges["reddyMin"] || Number(ranges["reddyMin"]) < 2) {
          ranges["reddyMin"] = 2;
        }
        if (!ranges["swapnilMin"] || Number(ranges["swapnilMin"]) < 2) {
          ranges["swapnilMin"] = 2;
        }
      }
    }
    if (wristAnswers[4]) {
      if (wristAnswers[4] === "Yes") {
        if (!ranges["agarwalMin"] || Number(ranges["agarwalMin"]) < 3) {
          ranges["agarwalMin"] = 3;
        }
        if (!ranges["mukherjeeMin"] || Number(ranges["mukherjeeMin"]) < 3) {
          ranges["mukherjeeMin"] = 3;
        }
        if (!ranges["reddyMin"] || Number(ranges["reddyMin"]) < 3) {
          ranges["reddyMin"] = 3;
        }
        if (!ranges["swapnilMin"] || Number(ranges["swapnilMin"]) < 3) {
          ranges["swapnilMin"] = 3;
        }
      }
    }
    if (wristAnswers[5]) {
      if (wristAnswers[5] === "Yes") {
        if (!ranges["agarwalMin"] || Number(ranges["agarwalMin"]) < 4) {
          ranges["agarwalMin"] = 4;
        }
        if (!ranges["mukherjeeMin"] || Number(ranges["mukherjeeMin"]) < 4) {
          ranges["mukherjeeMin"] = 4;
        }
        if (!ranges["reddyMin"] || Number(ranges["reddyMin"]) < 4) {
          ranges["reddyMin"] = 4;
        }
        if (!ranges["swapnilMin"] || Number(ranges["swapnilMin"]) < 4) {
          ranges["swapnilMin"] = 4;
        }
      }
    }
    if (wristAnswers[6]) {
      if (wristAnswers[6] === "Yes") {
        if (!ranges["agarwalMin"] || Number(ranges["agarwalMin"]) < 5) {
          ranges["agarwalMin"] = 5;
        }
        if (!ranges["mukherjeeMin"] || Number(ranges["mukherjeeMin"]) < 5) {
          ranges["mukherjeeMin"] = 5;
        }
        if (!ranges["reddyMin"] || Number(ranges["reddyMin"]) < 5) {
          ranges["reddyMin"] = 5;
        }
        if (!ranges["swapnilMin"] || Number(ranges["swapnilMin"]) < 5) {
          ranges["swapnilMin"] = 5;
        }
      }
    }
    if (wristAnswers[7]) {
      if (wristAnswers[7] === "Yes") {
        if (!ranges["agarwalMin"] || Number(ranges["agarwalMin"]) < 6) {
          ranges["agarwalMin"] = 6;
        }
        if (!ranges["mukherjeeMin"] || Number(ranges["mukherjeeMin"]) < 6) {
          ranges["mukherjeeMin"] = 6;
        }
        if (!ranges["reddyMin"] || Number(ranges["reddyMin"]) < 6) {
          ranges["reddyMin"] = 6;
        }
        if (!ranges["swapnilMin"] || Number(ranges["swapnilMin"]) < 6) {
          ranges["swapnilMin"] = 6;
        }
      }
    }
    if (wristAnswers[8]) {
      if (wristAnswers[8] === "Yes") {
        if (!ranges["agarwalMin"] || Number(ranges["agarwalMin"]) < 7) {
          ranges["agarwalMin"] = 7;
        }
        if (!ranges["mukherjeeMin"] || Number(ranges["mukherjeeMin"]) < 7) {
          ranges["mukherjeeMin"] = 7;
        }
        if (!ranges["reddyMin"] || Number(ranges["reddyMin"]) < 7) {
          ranges["reddyMin"] = 7;
        }
        if (!ranges["swapnilMin"] || Number(ranges["swapnilMin"]) < 7) {
          ranges["swapnilMin"] = 7;
        }
      }
    }
    if (wristAnswers[9]) {
      if (wristAnswers[9] === "Yes") {
        if (!ranges["agarwalMin"] || Number(ranges["agarwalMin"]) < 10) {
          ranges["agarwalMin"] = 10;
        }
        if (!ranges["mukherjeeMin"] || Number(ranges["mukherjeeMin"]) < 10) {
          ranges["mukherjeeMin"] = 10;
        }
        if (!ranges["reddyMin"] || Number(ranges["reddyMin"]) < 10) {
          ranges["reddyMin"] = 10;
        }
        if (!ranges["swapnilMin"] || Number(ranges["swapnilMin"]) < 10) {
          ranges["swapnilMin"] = 10;
        }
      }
    }
  }
  if (hipAnswers) {
    if (hipAnswers[0]) {
      if (hipAnswers[0] === "Not appeared") {
        if (!ranges["agarwalMax"] || Number(ranges["agarwalMax"]) > 14) {
          ranges["agarwalMax"] = 14;
        }
        if (!ranges["mukherjeeMax"] || Number(ranges["mukherjeeMax"]) > 17) {
          ranges["mukherjeeMax"] = 17;
        }
        if (!ranges["reddyMax"] || Number(ranges["reddyMax"]) > 14) {
          ranges["reddyMax"] = 14;
        }
        if (!ranges["swapnilMax"] || Number(ranges["swapnilMax"]) > 14) {
          ranges["swapnilMax"] = 14;
        }
      } else if (hipAnswers[0] === "Appeared but not fused") {
        if (!ranges["agarwalMin"] || Number(ranges["agarwalMin"]) < 14) {
          ranges["agarwalMin"] = 14;
        }
        if (!ranges["agarwalMax"] || Number(ranges["agarwalMax"]) > 20) {
          ranges["agarwalMax"] = 20;
        }
        if (!ranges["mukherjeeMin"] || Number(ranges["mukherjeeMin"]) < 17) {
          ranges["mukherjeeMin"] = 17;
        }
        if (!ranges["mukherjeeMax"] || Number(ranges["mukherjeeMax"]) > 20) {
          ranges["mukherjeeMax"] = 20;
        }
        if (!ranges["reddyMin"] || Number(ranges["reddyMin"]) < 14) {
          ranges["reddyMin"] = 14;
        }
        if (!ranges["reddyMax"] || Number(ranges["reddyMax"]) > 21) {
          ranges["reddyMax"] = 21;
        }
        if (!ranges["swapnilMin"] || Number(ranges["swapnilMin"]) < 14) {
          ranges["swapnilMin"] = 14;
        }
        if (!ranges["swapnilMax"] || Number(ranges["swapnilMax"]) > 20) {
          ranges["swapnilMax"] = 20;
        }
      } else if (hipAnswers[0] === "Fused") {
        if (!ranges["agarwalMin"] || Number(ranges["agarwalMin"]) < 20) {
          ranges["agarwalMin"] = 20;
        }
        if (!ranges["mukherjeeMin"] || Number(ranges["mukherjeeMin"]) < 19) {
          ranges["mukherjeeMin"] = 19;
        }
        if (!ranges["reddyMin"] || Number(ranges["reddyMin"]) < 20) {
          ranges["reddyMin"] = 20;
        }
        if (!ranges["swapnilMin"] || Number(ranges["swapnilMin"]) < 19) {
          ranges["swapnilMin"] = 19;
        }
      }
    }
    if (hipAnswers[1]) {
      if (hipAnswers[1] === "Not appeared") {
        if (!ranges["mukherjeeMax"] || Number(ranges["mukherjeeMax"]) > 18) {
          ranges["mukherjeeMax"] = 18;
        }
        if (!ranges["reddyMax"] || Number(ranges["reddyMax"]) > 16) {
          ranges["reddyMax"] = 16;
        }
        if (!ranges["swapnilMax"] || Number(ranges["swapnilMax"]) > 16) {
          ranges["swapnilMax"] = 16;
        }
      } else if (hipAnswers[1] === "Appeared but not fused") {
        if (!ranges["mukherjeeMin"] || Number(ranges["mukherjeeMin"]) < 16) {
          ranges["mukherjeeMin"] = 16;
        }
        if (!ranges["mukherjeeMax"] || Number(ranges["mukherjeeMax"]) > 20) {
          ranges["mukherjeeMax"] = 20;
        }
        if (!ranges["reddyMin"] || Number(ranges["reddyMin"]) < 16) {
          ranges["reddyMin"] = 16;
        }
        if (!ranges["reddyMax"] || Number(ranges["reddyMax"]) > 21) {
          ranges["reddyMax"] = 21;
        }
        if (!ranges["swapnilMin"] || Number(ranges["swapnilMin"]) < 16) {
          ranges["swapnilMin"] = 16;
        }
        if (!ranges["swapnilMax"] || Number(ranges["swapnilMax"]) > 21) {
          ranges["swapnilMax"] = 21;
        }
      } else if (hipAnswers[1] === "Fused") {
        if (!ranges["mukherjeeMin"] || Number(ranges["mukherjeeMin"]) < 20) {
          ranges["mukherjeeMin"] = 20;
        }
        if (!ranges["reddyMin"] || Number(ranges["reddyMin"]) < 21) {
          ranges["reddyMin"] = 21;
        }
        if (!ranges["swapnilMin"] || Number(ranges["swapnilMin"]) < 21) {
          ranges["swapnilMin"] = 21;
        }
      }
    }
    if (hipAnswers[2]) {
      if (hipAnswers[2] === "Not appeared") {
        if (!ranges["agarwalMax"] || Number(ranges["agarwalMax"]) > 13) {
          ranges["agarwalMax"] = 13;
        }

        if (!ranges["reddyMax"] || Number(ranges["reddyMax"]) > 13) {
          ranges["reddyMax"] = 13;
        }
      } else if (hipAnswers[2] === "Appeared but not fused") {
        if (!ranges["agarwalMin"] || Number(ranges["agarwalMin"]) < 13) {
          ranges["agarwalMin"] = 13;
        }
        if (!ranges["agarwalMax"] || Number(ranges["agarwalMax"]) > 15) {
          ranges["agarwalMax"] = 15;
        }
        if (!ranges["mukherjeeMax"] || Number(ranges["mukherjeeMax"]) > 16) {
          ranges["mukherjeeMax"] = 16;
        }

        if (!ranges["reddyMin"] || Number(ranges["reddyMin"]) < 13) {
          ranges["reddyMin"] = 13;
        }
        if (!ranges["reddyMax"] || Number(ranges["reddyMax"]) > 15) {
          ranges["reddyMax"] = 15;
        }
        if (!ranges["swapnilMax"] || Number(ranges["swapnilMax"]) > 15) {
          ranges["swapnilMax"] = 15;
        }
      } else if (hipAnswers[2] === "Fused") {
        if (!ranges["agarwalMin"] || Number(ranges["agarwalMin"]) < 15) {
          ranges["agarwalMin"] = 15;
        }
        if (!ranges["mukherjeeMin"] || Number(ranges["mukherjeeMin"]) < 15) {
          ranges["mukherjeeMin"] = 15;
        }
        if (!ranges["reddyMin"] || Number(ranges["reddyMin"]) < 15) {
          ranges["reddyMin"] = 15;
        }
        if (!ranges["swapnilMin"] || Number(ranges["swapnilMin"]) < 14) {
          ranges["swapnilMin"] = 14;
        }
      }
    }

    if (hipAnswers[3]) {
      if (hipAnswers[3] === "Not appeared") {
        if (!ranges["agarwalMax"] || Number(ranges["agarwalMax"]) > 1) {
          ranges["agarwalMax"] = 1;
        }
        if (!ranges["mukherjeeMax"] || Number(ranges["mukherjeeMax"]) > 1) {
          ranges["mukherjeeMax"] = 1;
        }
        if (!ranges["reddyMax"] || Number(ranges["reddyMax"]) > 1) {
          ranges["reddyMax"] = 1;
        }
        if (!ranges["swapnilMax"] || Number(ranges["swapnilMax"]) > 1) {
          ranges["swapnilMax"] = 1;
        }
      } else if (hipAnswers[3] === "Appeared but not fused") {
        if (!ranges["agarwalMin"] || Number(ranges["agarwalMin"]) < 1) {
          ranges["agarwalMin"] = 1;
        }
        if (!ranges["agarwalMax"] || Number(ranges["agarwalMax"]) > 17) {
          ranges["agarwalMax"] = 17;
        }
        if (!ranges["mukherjeeMin"] || Number(ranges["mukherjeeMin"]) < 1) {
          ranges["mukherjeeMin"] = 1;
        }
        if (!ranges["mukherjeeMax"] || Number(ranges["mukherjeeMax"]) > 17) {
          ranges["mukherjeeMax"] = 17;
        }
        if (!ranges["reddyMin"] || Number(ranges["reddyMin"]) < 0.5) {
          ranges["reddyMin"] = 0.5;
        }
        if (!ranges["reddyMax"] || Number(ranges["reddyMax"]) > 18) {
          ranges["reddyMax"] = 18;
        }
        if (!ranges["swapnilMin"] || Number(ranges["swapnilMin"]) < 1) {
          ranges["swapnilMin"] = 1;
        }
        if (!ranges["swapnilMax"] || Number(ranges["swapnilMax"]) > 18) {
          ranges["swapnilMax"] = 18;
        }
      } else if (hipAnswers[3] === "Fused") {
        if (!ranges["agarwalMin"] || Number(ranges["agarwalMin"]) < 17) {
          ranges["agarwalMin"] = 17;
        }
        if (!ranges["mukherjeeMin"] || Number(ranges["mukherjeeMin"]) < 16) {
          ranges["mukherjeeMin"] = 16;
        }
        if (!ranges["reddyMin"] || Number(ranges["reddyMin"]) < 17) {
          ranges["reddyMin"] = 17;
        }
        if (!ranges["swapnilMin"] || Number(ranges["swapnilMin"]) < 18) {
          ranges["swapnilMin"] = 18;
        }
      }
    }
    if (hipAnswers[4]) {
      if (hipAnswers[4] === "Not appeared") {
        if (!ranges["agarwalMax"] || Number(ranges["agarwalMax"]) > 4) {
          ranges["agarwalMax"] = 4;
        }

        if (!ranges["reddyMax"] || Number(ranges["reddyMax"]) > 4) {
          ranges["reddyMax"] = 4;
        }
        if (!ranges["swapnilMax"] || Number(ranges["swapnilMax"]) > 4) {
          ranges["swapnilMax"] = 4;
        }
      } else if (hipAnswers[4] === "Appeared but not fused") {
        if (!ranges["agarwalMin"] || Number(ranges["agarwalMin"]) < 4) {
          ranges["agarwalMin"] = 4;
        }

        if (!ranges["mukherjeeMax"] || Number(ranges["mukherjeeMax"]) > 17) {
          ranges["mukherjeeMax"] = 17;
        }
        if (!ranges["reddyMin"] || Number(ranges["reddyMin"]) < 4) {
          ranges["reddyMin"] = 4;
        }
        if (!ranges["reddyMax"] || Number(ranges["reddyMax"]) > 18) {
          ranges["reddyMax"] = 18;
        }
        if (!ranges["swapnilMin"] || Number(ranges["swapnilMin"]) < 4) {
          ranges["swapnilMin"] = 4;
        }
        if (!ranges["swapnilMax"] || Number(ranges["swapnilMax"]) > 18) {
          ranges["swapnilMax"] = 18;
        }
      } else if (hipAnswers[4] === "Fused") {
        if (!ranges["mukherjeeMin"] || Number(ranges["mukherjeeMin"]) < 15) {
          ranges["mukherjeeMin"] = 15;
        }
        if (!ranges["reddyMin"] || Number(ranges["reddyMin"]) < 17) {
          ranges["reddyMin"] = 17;
        }
        if (!ranges["swapnilMin"] || Number(ranges["swapnilMin"]) < 18) {
          ranges["swapnilMin"] = 18;
        }
      }
    }
    if (hipAnswers[5]) {
      if (hipAnswers[5] === "Not appeared") {
        if (!ranges["agarwalMax"] || Number(ranges["agarwalMax"]) > 14) {
          ranges["agarwalMax"] = 14;
        }
        if (!ranges["reddyMax"] || Number(ranges["reddyMax"]) > 14) {
          ranges["reddyMax"] = 14;
        }
        if (!ranges["swapnilMax"] || Number(ranges["swapnilMax"]) > 14) {
          ranges["swapnilMax"] = 14;
        }
      } else if (hipAnswers[5] === "Appeared but not fused") {
        if (!ranges["agarwalMin"] || Number(ranges["agarwalMin"]) < 4) {
          ranges["agarwalMin"] = 4;
        }
        if (!ranges["mukherjeeMax"] || Number(ranges["mukherjeeMax"]) > 17) {
          ranges["mukherjeeMax"] = 17;
        }
        if (!ranges["reddyMin"] || Number(ranges["reddyMin"]) < 4) {
          ranges["reddyMin"] = 4;
        }
        if (!ranges["reddyMax"] || Number(ranges["reddyMax"]) > 18) {
          ranges["reddyMax"] = 18;
        }

        if (!ranges["swapnilMin"] || Number(ranges["swapnilMin"]) < 4) {
          ranges["swapnilMin"] = 4;
        }
        if (!ranges["swapnilMax"] || Number(ranges["swapnilMax"]) > 18) {
          ranges["swapnilMax"] = 18;
        }
      } else if (hipAnswers[5] === "Fused") {
        if (!ranges["mukherjeeMin"] || Number(ranges["mukherjeeMin"]) < 17) {
          ranges["mukherjeeMin"] = 17;
        }
        if (!ranges["reddyMin"] || Number(ranges["reddyMin"]) < 17) {
          ranges["reddyMin"] = 17;
        }

        if (!ranges["swapnilMin"] || Number(ranges["swapnilMin"]) < 18) {
          ranges["swapnilMin"] = 18;
        }
      }
    }
    if (hipAnswers[6]) {
      if (hipAnswers[6] === "Not fused") {
        if (!ranges["agarwalMax"] || Number(ranges["agarwalMax"]) > 25) {
          ranges["agarwalMax"] = 25;
        }
        if (!ranges["reddyMax"] || Number(ranges["reddyMax"]) > 25) {
          ranges["reddyMax"] = 25;
        }
        if (!ranges["swapnilMax"] || Number(ranges["swapnilMax"]) > 25) {
          ranges["swapnilMax"] = 25;
        }
        if (!ranges["mukherjeeMax"] || Number(ranges["mukherjeeMax"]) > 25) {
          ranges["mukherjeeMax"] = 25;
        }
      } else if (hipAnswers[6] === "Fused") {
        if (!ranges["agarwalMin"] || Number(ranges["agarwalMin"]) < 21) {
          ranges["agarwalMin"] = 21;
        }
        if (!ranges["reddyMin"] || Number(ranges["reddyMin"]) < 21) {
          ranges["reddyMin"] = 21;
        }
        if (!ranges["swapnilMin"] || Number(ranges["swapnilMin"]) < 21) {
          ranges["swapnilMin"] = 21;
        }
        if (!ranges["mukherjeeMin"] || Number(ranges["mukherjeeMin"]) < 21) {
          ranges["mukherjeeMin"] = 21;
        }
      }
    }
  }

  if (ankleAnswers) {
    if (ankleAnswers[0]) {
      if (ankleAnswers[0] === "Not appeared") {
        if (!ranges["agarwalMax"] || Number(ranges["agarwalMax"]) > 1) {
          ranges["agarwalMax"] = 1;
        }

        if (!ranges["reddyMax"] || Number(ranges["reddyMax"]) > 1) {
          ranges["reddyMax"] = 1;
        }
        if (!ranges["swapnilMax"] || Number(ranges["swapnilMax"]) > 1) {
          ranges["swapnilMax"] = 1;
        }
      } else if (ankleAnswers[0] === "Appeared but not fused") {
        if (!ranges["agarwalMin"] || Number(ranges["agarwalMin"]) < 1) {
          ranges["agarwalMin"] = 1;
        }
        if (!ranges["agarwalMax"] || Number(ranges["agarwalMax"]) > 17) {
          ranges["agarwalMax"] = 17;
        }

        if (!ranges["mukherjeeMax"] || Number(ranges["mukherjeeMax"]) > 16) {
          ranges["mukherjeeMax"] = 16;
        }
        if (!ranges["reddyMin"] || Number(ranges["reddyMin"]) < 1) {
          ranges["reddyMin"] = 1;
        }
        if (!ranges["reddyMax"] || Number(ranges["reddyMax"]) > 17) {
          ranges["reddyMax"] = 17;
        }
        if (!ranges["swapnilMin"] || Number(ranges["swapnilMin"]) < 1) {
          ranges["swapnilMin"] = 1;
        }
        if (!ranges["swapnilMax"] || Number(ranges["swapnilMax"]) > 17) {
          ranges["swapnilMax"] = 17;
        }
      } else if (ankleAnswers[0] === "Fused") {
        if (!ranges["agarwalMin"] || Number(ranges["agarwalMin"]) < 17) {
          ranges["agarwalMin"] = 17;
        }
        if (!ranges["mukherjeeMin"] || Number(ranges["mukherjeeMin"]) < 16) {
          ranges["mukherjeeMin"] = 16;
        }
        if (!ranges["reddyMin"] || Number(ranges["reddyMin"]) < 16) {
          ranges["reddyMin"] = 16;
        }
        if (!ranges["swapnilMin"] || Number(ranges["swapnilMin"]) < 16) {
          ranges["swapnilMin"] = 16;
        }
      }
    }
    if (ankleAnswers[1]) {
      if (ankleAnswers[1] === "Not appeared") {
        if (!ranges["agarwalMax"] || Number(ranges["agarwalMax"]) > 1) {
          ranges["agarwalMax"] = 1;
        }

        if (!ranges["reddyMax"] || Number(ranges["reddyMax"]) > 1) {
          ranges["reddyMax"] = 1;
        }
        if (!ranges["swapnilMax"] || Number(ranges["swapnilMax"]) > 1) {
          ranges["swapnilMax"] = 1;
        }
      } else if (ankleAnswers[1] === "Appeared but not fused") {
        if (!ranges["agarwalMin"] || Number(ranges["agarwalMin"]) < 1) {
          ranges["agarwalMin"] = 1;
        }
        if (!ranges["agarwalMax"] || Number(ranges["agarwalMax"]) > 17) {
          ranges["agarwalMax"] = 17;
        }

        if (!ranges["mukherjeeMax"] || Number(ranges["mukherjeeMax"]) > 16) {
          ranges["mukherjeeMax"] = 16;
        }
        if (!ranges["reddyMin"] || Number(ranges["reddyMin"]) < 1) {
          ranges["reddyMin"] = 1;
        }
        if (!ranges["reddyMax"] || Number(ranges["reddyMax"]) > 17) {
          ranges["reddyMax"] = 17;
        }
        if (!ranges["swapnilMin"] || Number(ranges["swapnilMin"]) < 1) {
          ranges["swapnilMin"] = 1;
        }
        if (!ranges["swapnilMax"] || Number(ranges["swapnilMax"]) > 17) {
          ranges["swapnilMax"] = 17;
        }
      } else if (ankleAnswers[1] === "Fused") {
        if (!ranges["agarwalMin"] || Number(ranges["agarwalMin"]) < 17) {
          ranges["agarwalMin"] = 17;
        }
        if (!ranges["mukherjeeMin"] || Number(ranges["mukherjeeMin"]) < 14) {
          ranges["mukherjeeMin"] = 14;
        }
        if (!ranges["reddyMin"] || Number(ranges["reddyMin"]) < 16) {
          ranges["reddyMin"] = 16;
        }
        if (!ranges["swapnilMin"] || Number(ranges["swapnilMin"]) < 16) {
          ranges["swapnilMin"] = 16;
        }
      }
    }
    if (ankleAnswers[2]) {
      if (ankleAnswers[2] === "Not appeared") {
        if (!ranges["agarwalMax"] || Number(ranges["agarwalMax"]) > 0.5) {
          ranges["agarwalMax"] = 0.5;
        }
        if (!ranges["mukherjeeMax"] || Number(ranges["mukherjeeMax"]) > 0) {
          ranges["mukherjeeMax"] = 0;
        }
        if (!ranges["reddyMax"] || Number(ranges["reddyMax"]) > 0.5) {
          ranges["reddyMax"] = 0.5;
        }
        if (!ranges["swapnilMax"] || Number(ranges["swapnilMax"]) > 0.5) {
          ranges["swapnilMax"] = 0.5;
        }
      } else if (ankleAnswers[2] === "Appeared but not fused") {
        if (!ranges["agarwalMin"] || Number(ranges["agarwalMin"]) < 0.5) {
          ranges["agarwalMin"] = 0.5;
        }
        if (!ranges["agarwalMax"] || Number(ranges["agarwalMax"]) > 16) {
          ranges["agarwalMax"] = 16;
        }
        if (!ranges["mukherjeeMin"] || Number(ranges["mukherjeeMin"]) < 0) {
          ranges["mukherjeeMin"] = 0;
        }

        if (!ranges["reddyMin"] || Number(ranges["reddyMin"]) < 0.5) {
          ranges["reddyMin"] = 0.5;
        }
        if (!ranges["reddyMax"] || Number(ranges["reddyMax"]) > 16) {
          ranges["reddyMax"] = 16;
        }
        if (!ranges["swapnilMin"] || Number(ranges["swapnilMin"]) < 0.5) {
          ranges["swapnilMin"] = 0.5;
        }
      } else if (ankleAnswers[2] === "Fused") {
        if (!ranges["agarwalMin"] || Number(ranges["agarwalMin"]) < 16) {
          ranges["agarwalMin"] = 16;
        }

        if (!ranges["reddyMin"] || Number(ranges["reddyMin"]) < 14) {
          ranges["reddyMin"] = 14;
        }
      }
    }
  }

  if (dentalTempAnswers) {
    /*
    if (dentalTempAnswers[0]) {
      if (dentalTempAnswers[0] === "Appeared") {
        if (!ranges["agarwalMin"] || Number(ranges["agarwalMin"]) < 6) {
          ranges["agarwalMin"] = 6;
        }
        if (!ranges["mukherjeeMin"] || Number(ranges["mukherjeeMin"]) < 6) {
          ranges["mukherjeeMin"] = 6;
        }
        if (!ranges["reddyMin"] || Number(ranges["reddyMin"]) < 6) {
          ranges["reddyMin"] = 6;
        }
        if (!ranges["nanddyMin"] || Number(ranges["nanddyMin"]) < 5) {
          ranges["nanddyMin"] = 5;
        }
        if (!ranges["swapnilMin"] || Number(ranges["swapnilMin"]) < 6) {
          ranges["swapnilMin"] = 6;
        }
      }
    }
    if (dentalTempAnswers[1]) {
      if (dentalTempAnswers[1] === "Appeared") {
        if (!ranges["agarwalMin"] || Number(ranges["agarwalMin"]) < 8) {
          ranges["agarwalMin"] = 8;
        }
        if (!ranges["mukherjeeMin"] || Number(ranges["mukherjeeMin"]) < 7) {
          ranges["mukherjeeMin"] = 7;
        }
        if (!ranges["reddyMin"] || Number(ranges["reddyMin"]) < 7) {
          ranges["reddyMin"] = 7;
        }
        if (!ranges["nanddyMin"] || Number(ranges["nanddyMin"]) < 6) {
          ranges["nanddyMin"] = 6;
        }
        if (!ranges["swapnilMin"] || Number(ranges["swapnilMin"]) < 7) {
          ranges["swapnilMin"] = 7;
        }
      }
    }
    if (dentalTempAnswers[2]) {
      if (dentalTempAnswers[2] === "Appeared") {
        if (!ranges["agarwalMin"] || Number(ranges["agarwalMin"]) < 10) {
          ranges["agarwalMin"] = 10;
        }
        if (!ranges["mukherjeeMin"] || Number(ranges["mukherjeeMin"]) < 9) {
          ranges["mukherjeeMin"] = 9;
        }
        if (!ranges["reddyMin"] || Number(ranges["reddyMin"]) < 7) {
          ranges["reddyMin"] = 7;
        }
        if (!ranges["nanddyMin"] || Number(ranges["nanddyMin"]) < 7) {
          ranges["nanddyMin"] = 7;
        }
        if (!ranges["swapnilMin"] || Number(ranges["swapnilMin"]) < 7) {
          ranges["swapnilMin"] = 7;
        }
      }
    }
    if (dentalTempAnswers[3]) {
      if (dentalTempAnswers[3] === "Appeared") {
        if (!ranges["agarwalMin"] || Number(ranges["agarwalMin"]) < 12) {
          ranges["agarwalMin"] = 12;
        }
        if (!ranges["mukherjeeMin"] || Number(ranges["mukherjeeMin"]) < 10) {
          ranges["mukherjeeMin"] = 10;
        }
        if (!ranges["reddyMin"] || Number(ranges["reddyMin"]) < 10) {
          ranges["reddyMin"] = 10;
        }
        if (!ranges["nanddyMin"] || Number(ranges["nanddyMin"]) < 8) {
          ranges["nanddyMin"] = 8;
        }
        if (!ranges["swapnilMin"] || Number(ranges["swapnilMin"]) < 10) {
          ranges["swapnilMin"] = 10;
        }
      }
    }
    if (dentalTempAnswers[4]) {
      if (dentalTempAnswers[4] === "Appeared") {
        if (!ranges["agarwalMin"] || Number(ranges["agarwalMin"]) < 14) {
          ranges["agarwalMin"] = 14;
        }
        if (!ranges["mukherjeeMin"] || Number(ranges["mukherjeeMin"]) < 12) {
          ranges["mukherjeeMin"] = 12;
        }
        if (!ranges["reddyMin"] || Number(ranges["reddyMin"]) < 12) {
          ranges["reddyMin"] = 12;
        }
        if (!ranges["nanddyMin"] || Number(ranges["nanddyMin"]) < 1) {
          ranges["nanddyMin"] = 1;
        }
        if (!ranges["swapnilMin"] || Number(ranges["swapnilMin"]) < 12) {
          ranges["swapnilMin"] = 12;
        }
      }
    }
    if (dentalTempAnswers[5]) {
      if (dentalTempAnswers[5] === "Appeared") {
        if (!ranges["agarwalMin"] || Number(ranges["agarwalMin"]) < 18) {
          ranges["agarwalMin"] = 18;
        }
        if (!ranges["mukherjeeMin"] || Number(ranges["mukherjeeMin"]) < 17) {
          ranges["mukherjeeMin"] = 17;
        }
        if (!ranges["reddyMin"] || Number(ranges["reddyMin"]) < 17) {
          ranges["reddyMin"] = 17;
        }
        if (!ranges["nanddyMin"] || Number(ranges["nanddyMin"]) < 1.5) {
          ranges["nanddyMin"] = 1.5;
        }
        if (!ranges["swapnilMin"] || Number(ranges["swapnilMin"]) < 14) {
          ranges["swapnilMin"] = 14;
        }
      }
    }
    */
    if (dentalTempAnswers[0]) {
      if (dentalTempAnswers[0] === "Appeared") {
        if (!ranges["agarwalMin"] || Number(ranges["agarwalMin"]) < 2) {
          ranges["agarwalMin"] = 2;
        }
        if (!ranges["mukherjeeMin"] || Number(ranges["mukherjeeMin"]) < 2) {
          ranges["mukherjeeMin"] = 2;
        }
        if (!ranges["reddyMin"] || Number(ranges["reddyMin"]) < 2) {
          ranges["reddyMin"] = 2;
        }
        if (!ranges["nanddyMin"] || Number(ranges["nanddyMin"]) < 2) {
          ranges["nanddyMin"] = 2;
        }
        if (!ranges["swapnilMin"] || Number(ranges["swapnilMin"]) < 2) {
          ranges["swapnilMin"] = 2;
        }
      }
    }
  }

  if (dentalPermAnswers) {
    if (dentalPermAnswers[0]) {
      if (dentalPermAnswers[0] === "Appeared") {
        if (!ranges["agarwalMin"] || Number(ranges["agarwalMin"]) < 6) {
          ranges["agarwalMin"] = 6;
        }
        if (!ranges["mukherjeeMin"] || Number(ranges["mukherjeeMin"]) < 6) {
          ranges["mukherjeeMin"] = 6;
        }
        if (!ranges["reddyMin"] || Number(ranges["reddyMin"]) < 6) {
          ranges["reddyMin"] = 6;
        }
        if (!ranges["nanddyMin"] || Number(ranges["nanddyMin"]) < 6) {
          ranges["nanddyMin"] = 6;
        }
        if (!ranges["swapnilMin"] || Number(ranges["swapnilMin"]) < 6) {
          ranges["swapnilMin"] = 6;
        }
      }
    }
    if (dentalPermAnswers[1]) {
      if (dentalPermAnswers[1] === "Appeared") {
        if (!ranges["agarwalMin"] || Number(ranges["agarwalMin"]) < 7) {
          ranges["agarwalMin"] = 7;
        }
        if (!ranges["mukherjeeMin"] || Number(ranges["mukherjeeMin"]) < 7) {
          ranges["mukherjeeMin"] = 7;
        }
        if (!ranges["reddyMin"] || Number(ranges["reddyMin"]) < 6) {
          ranges["reddyMin"] = 6;
        }
        if (!ranges["nanddyMin"] || Number(ranges["nanddyMin"]) < 7) {
          ranges["nanddyMin"] = 7;
        }
        if (!ranges["swapnilMin"] || Number(ranges["swapnilMin"]) < 7) {
          ranges["swapnilMin"] = 7;
        }
      }
    }
    if (dentalPermAnswers[2]) {
      if (dentalPermAnswers[2] === "Appeared") {
        if (!ranges["agarwalMin"] || Number(ranges["agarwalMin"]) < 8) {
          ranges["agarwalMin"] = 8;
        }
        if (!ranges["mukherjeeMin"] || Number(ranges["mukherjeeMin"]) < 8) {
          ranges["mukherjeeMin"] = 8;
        }
        if (!ranges["reddyMin"] || Number(ranges["reddyMin"]) < 7) {
          ranges["reddyMin"] = 7;
        }
        if (!ranges["nanddyMin"] || Number(ranges["nanddyMin"]) < 8) {
          ranges["nanddyMin"] = 8;
        }
        if (!ranges["swapnilMin"] || Number(ranges["swapnilMin"]) < 8) {
          ranges["swapnilMin"] = 8;
        }
      }
    }
    if (dentalPermAnswers[3]) {
      if (dentalPermAnswers[3] === "Appeared") {
        if (!ranges["agarwalMin"] || Number(ranges["agarwalMin"]) < 9) {
          ranges["agarwalMin"] = 9;
        }
        if (!ranges["mukherjeeMin"] || Number(ranges["mukherjeeMin"]) < 9) {
          ranges["mukherjeeMin"] = 9;
        }
        if (!ranges["reddyMin"] || Number(ranges["reddyMin"]) < 9) {
          ranges["reddyMin"] = 9;
        }
        if (!ranges["nanddyMin"] || Number(ranges["nanddyMin"]) < 9) {
          ranges["nanddyMin"] = 9;
        }
        if (!ranges["swapnilMin"] || Number(ranges["swapnilMin"]) < 9) {
          ranges["swapnilMin"] = 9;
        }
      }
    }
    if (dentalPermAnswers[4]) {
      if (dentalPermAnswers[4] === "Appeared") {
        if (!ranges["agarwalMin"] || Number(ranges["agarwalMin"]) < 10) {
          ranges["agarwalMin"] = 10;
        }
        if (!ranges["mukherjeeMin"] || Number(ranges["mukherjeeMin"]) < 10) {
          ranges["mukherjeeMin"] = 10;
        }
        if (!ranges["reddyMin"] || Number(ranges["reddyMin"]) < 10) {
          ranges["reddyMin"] = 10;
        }
        if (!ranges["nanddyMin"] || Number(ranges["nanddyMin"]) < 10) {
          ranges["nanddyMin"] = 10;
        }
        if (!ranges["swapnilMin"] || Number(ranges["swapnilMin"]) < 10) {
          ranges["swapnilMin"] = 10;
        }
      }
    }
    if (dentalPermAnswers[5]) {
      if (dentalPermAnswers[5] === "Appeared") {
        if (!ranges["agarwalMin"] || Number(ranges["agarwalMin"]) < 11) {
          ranges["agarwalMin"] = 11;
        }
        if (!ranges["mukherjeeMin"] || Number(ranges["mukherjeeMin"]) < 11) {
          ranges["mukherjeeMin"] = 11;
        }
        if (!ranges["reddyMin"] || Number(ranges["reddyMin"]) < 11) {
          ranges["reddyMin"] = 11;
        }
        if (!ranges["nanddyMin"] || Number(ranges["nanddyMin"]) < 11) {
          ranges["nanddyMin"] = 11;
        }
        if (!ranges["swapnilMin"] || Number(ranges["swapnilMin"]) < 11) {
          ranges["swapnilMin"] = 11;
        }
      }
    }
    if (dentalPermAnswers[6]) {
      if (dentalPermAnswers[6] === "Appeared") {
        if (!ranges["agarwalMin"] || Number(ranges["agarwalMin"]) < 12) {
          ranges["agarwalMin"] = 12;
        }
        if (!ranges["mukherjeeMin"] || Number(ranges["mukherjeeMin"]) < 12) {
          ranges["mukherjeeMin"] = 12;
        }
        if (!ranges["reddyMin"] || Number(ranges["reddyMin"]) < 12) {
          ranges["reddyMin"] = 12;
        }
        if (!ranges["nanddyMin"] || Number(ranges["nanddyMin"]) < 12) {
          ranges["nanddyMin"] = 12;
        }
        if (!ranges["swapnilMin"] || Number(ranges["swapnilMin"]) < 12) {
          ranges["swapnilMin"] = 12;
        }
      }
    }
    if (dentalPermAnswers[7]) {
      if (dentalPermAnswers[7] === "Present") {
        if (!ranges["swapnilMin"] || Number(ranges["swapnilMin"]) < 14) {
          ranges["swapnilMin"] = 14;
        }
      }
    }
    if (dentalPermAnswers[8]) {
      if (dentalPermAnswers[8] === "Appeared") {
        if (!ranges["agarwalMin"] || Number(ranges["agarwalMin"]) < 18) {
          ranges["agarwalMin"] = 18;
        }
        if (!ranges["mukherjeeMin"] || Number(ranges["mukherjeeMin"]) < 17) {
          ranges["mukherjeeMin"] = 17;
        }
        if (!ranges["reddyMin"] || Number(ranges["reddyMin"]) < 17) {
          ranges["reddyMin"] = 17;
        }
        if (!ranges["nanddyMin"] || Number(ranges["nanddyMin"]) < 17) {
          ranges["nanddyMin"] = 17;
        }
        if (!ranges["swapnilMin"] || Number(ranges["swapnilMin"]) < 17) {
          ranges["swapnilMin"] = 17;
        }
      }
    }
  }

  const hasEmptyShoulderElements: any = shoulderAnswers && shoulderAnswers.every(
    (element: any) => !element
  );
  const hasEmptyWristElements: any = wristAnswers && wristAnswers.every(
    (element: any) => !element
  );

  const hasEmptyElbowElements: any = elbowAnswers && elbowAnswers.every(
    (element: any) => !element
  );

  const hasEmptyHipElements: any = hipAnswers && hipAnswers.every((element: any) => !element);

  const hasEmptyKneeElements: any = kneeAnswers && kneeAnswers.every(
    (element: any) => !element
  );

  const hasEmptyAnkleElements: any = ankleAnswers && ankleAnswers.every(
    (element: any) => !element
  );

  const hasEmptyDentalTempElements: any = dentalTempAnswers && dentalTempAnswers.every(
    (element: any) => !element
  );

  const hasEmptyDentalPermElements: any = dentalPermAnswers && dentalPermAnswers.every(
    (element: any) => !element
  );

const variablesToCheck = [
  hasEmptyShoulderElements,
  hasEmptyWristElements,
  hasEmptyElbowElements,
  hasEmptyHipElements,
  hasEmptyKneeElements,
  hasEmptyAnkleElements,
  hasEmptyDentalTempElements,
  hasEmptyDentalPermElements,
];

const allAreTrue = variablesToCheck.every((variable) => variable === undefined || variable === true);
if (allAreTrue) {
  sessionStorage.setItem(
    "answers",
    JSON.stringify({
      agarwalMin: "0",
      agarwalMax: "100",
      mukherjeeMin: "0",
      mukherjeeMax: "100",
      reddyMin: "0",
      reddyMax: "100",
      swapnilMin: "0",
      swapnilMax: "100",
      nanddyMin: "0",
      nanddyMax: "100",
    })
  );
} else {
  sessionStorage.setItem("answers", JSON.stringify(ranges));
}
 
  
}
