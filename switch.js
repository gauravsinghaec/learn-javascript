const marks = 90;

switch (marks) {
  case 90:
    console.log(`Pass A+ ${marks}`);
  case 80:
    console.log(`Pass B ${marks}`);
  case 70:
    console.log(`Pass C ${marks}`);
    break;
  case 60:
    console.log(`Pass D ${marks}`);
    break;
  default:
    console.log(`Pass E ${marks}`);
}

// switch (marks) {
//   case 90:
//   case 80:
//   case 70:
//   case 60:
//     console.log(`Pass ${marks}`);
//     break;
//   default:
//     console.log(`Fail ${marks}`);
// }

// switch (marks) {
//   case 90:
//   case 80:
//   case 70:
//   case 60:
//     console.log(`Pass ${marks}`);
//   default:
//     console.log(`Fail ${marks}`);
// }
