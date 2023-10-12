class PlayersBluePrint {
  constructor(pName, pNumber, pWing){
    this.pName = pName,
    this.pNumber = pNumber,
    this.pWing = pWing
  }
}


const create = () =>{
  var forPOneNo = p1No.value;
  var forPOneName = p1Name.value;
  var forPOneWing = p1Wing.value;
  var player1 = new PlayersBluePrint(forPOneNo, forPOneName, forPOneWing)
  // alert("is woor")
  pName1.innerHTML = player1.pName
  pNo1.innerText = player1.pNumber
  pWing1.innerText = player1.pWing
  // console.log(player1.pName);
}