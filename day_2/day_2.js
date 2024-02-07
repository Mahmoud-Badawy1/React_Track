let grade = 55;
if (grade >= 0 && grade < 50) {
  console.log("Failed");
} else if (grade >= 50 && grade < 65) {
  console.log("Accepted");
} else if (grade >= 65 && grade < 75) {
  console.log("Good");
} else if (grade >= 75 && grade < 85) {
  console.log("Very Good");
} else if (grade >= 85 && grade <= 100) {
  console.log("Excellent");
}
// I want this without using && and || and don't use more if you can use else not else if
// let grade = 75;

if (grade >= 0) {
   if (grade < 50) {
    console.log("Failed");
  } else if (grade < 65) {
    console.log("Accepted");
  } else if (grade < 75) {
    console.log("Good");
  } else if (grade < 85) {
    console.log("Very Good");
  } else if (grade <= 100) {
    console.log("Excellent");
  }
}

//..........................................................2 (.َََِِ.َََِِ)

if (grade >= 0) {
} else if (grade < 50) {
    console.log("Failed");
  } else if (grade < 65) {
    console.log("Accepted");
  } else if (grade < 75) {
    console.log("Good");
  } else if (grade < 85) {
    console.log("Very Good");
  } else {
    if (grade <= 100) {
      console.log("Excellent");
    }
  }

// with Invalid Grade so we will add more else if statment to handle that case (.َََِِ.َََِِ)
//                                                                                  
if (grade >= 0) {
  if (grade < 50) {
    console.log("Failed");
  } else if (grade < 65) {
    console.log("Accepted");
  } else if (grade < 75) {
    console.log("Good");
  } else if (grade < 85) {
    console.log("Very Good");
  } else if (grade <= 100) {
    console.log("Excellent");
  } else {
    console.log("Invalid Grade");
  }
} 
