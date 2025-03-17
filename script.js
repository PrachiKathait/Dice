// function DiceSelect(){
//     let a = [1,2,3,4,5,6];
//     let i = Math.floor(Math.random() * a.length);
//     let r = a[i];
//     console.log(r);

//     let image = document.getElementById('image1');

//     if(r==1){
//         image.src="https://img.icons8.com/?size=100&id=o1dGziQOijg4&format=png&color=000000";
//         image.alt="1";
//     }
//     else if(r==2){
//         image.src="https://img.icons8.com/?size=100&id=Fwcx5mpkWd8P&format=png&color=000000";
//         image.alt="2";
//     }
//     else if(r==3){
//         image.src="https://img.icons8.com/?size=100&id=q4ul9MoiyRtB&format=png&color=000000";
//         image.alt="3";
//     }
//     else if(r==4){
//         image.src="https://img.icons8.com/?size=100&id=ByJ6Sp3X3_cv&format=png&color=000000";
//         image.alt="4";
//     }
//     else if(r==5){
//         image.src="https://img.icons8.com/?size=100&id=5iWV5u7ve3PJ&format=png&color=000000";
//         image.alt="5";
//     }
//     // else if(r==6){
//     else{
//         image.src="https://img.icons8.com/?size=100&id=sL5WaT_mFUmK&format=png&color=000000";
//         image.alt="6";
//     }


// }

//-----------------------------------------------------------------------------------------------------------------------------


// let currentPlayer = 1;

// function DiceSelect(player) {

//     if (player !== currentPlayer
//     ) {
//         alert(`It's Player ${currentPlayer}'s turn!`);
//         return;
//     }
//     let diceFaces = [
//         "https://img.icons8.com/?size=100&id=o1dGziQOijg4&format=png&color=000000", // 1
//         "https://img.icons8.com/?size=100&id=Fwcx5mpkWd8P&format=png&color=000000", // 2
//         "https://img.icons8.com/?size=100&id=q4ul9MoiyRtB&format=png&color=000000", // 3
//         "https://img.icons8.com/?size=100&id=ByJ6Sp3X3_cv&format=png&color=000000", // 4
//         "https://img.icons8.com/?size=100&id=5iWV5u7ve3PJ&format=png&color=000000", // 5
//         "https://img.icons8.com/?size=100&id=sL5WaT_mFUmK&format=png&color=000000"  // 6
//     ];
//     const users=[{player1:1,status:false},{player2:2,status:false}]
//     if(player){

//     }

//     let randomIndex = Math.floor(Math.random() * 6);
//     let selectedImage = diceFaces[randomIndex];

//     let imageElement = document.getElementById(`image${player}`);

//     if (imageElement) {
//         imageElement.src = selectedImage;
//         imageElement.alt = (randomIndex + 1).toString();
//     }

//     console.log(`Player ${player} rolled: ${randomIndex + 1}`);

//     currentPlayer = player === 1 ? 2 : 1;

// }


//-----------------------------------------------------------------------------------------------

// let currentPlayer = 1;

// function DiceSelect(player) {

//     if (player !== currentPlayer) 
//       {
//         alert(`It's Player ${currentPlayer}'s turn!`);
//         return;
//       }
//     let diceFaces = [
//         "https://img.icons8.com/?size=100&id=o1dGziQOijg4&format=png&color=000000", // 1
//         "https://img.icons8.com/?size=100&id=Fwcx5mpkWd8P&format=png&color=000000", // 2
//         "https://img.icons8.com/?size=100&id=q4ul9MoiyRtB&format=png&color=000000", // 3
//         "https://img.icons8.com/?size=100&id=ByJ6Sp3X3_cv&format=png&color=000000", // 4
//         "https://img.icons8.com/?size=100&id=5iWV5u7ve3PJ&format=png&color=000000", // 5
//         "https://img.icons8.com/?size=100&id=sL5WaT_mFUmK&format=png&color=000000"  // 6
//     ];

//     let randomIndex = Math.floor(Math.random() * 6);
//     let selectedImage = diceFaces[randomIndex];

//     let imageElement = document.getElementById(`image${player}`);
//     // let healthElement = document.getElementById(`health${player}`).value;
//     document.getElementById(`health${player}`).value=document.getElementById(`health${player}`).value - selectedImage;

//     if (imageElement) {
//         imageElement.src = selectedImage;
//         imageElement.alt = (randomIndex + 1).toString();
//     }

//     console.log(`Player ${player} rolled: ${randomIndex + 1}`);
//     currentPlayer = player === 1 ? 2 : 1;

// }

//----------------------------------------------------------------------------

let currentPlayer = 1;

function DiceSelect(player) {
    if (player !== currentPlayer) {
        alert(`It's Player ${currentPlayer}'s turn!`);
        return;
    }

    let diceFaces = [
        "https://img.icons8.com/?size=100&id=o1dGziQOijg4&format=png&color=000000", // 1
        "https://img.icons8.com/?size=100&id=Fwcx5mpkWd8P&format=png&color=000000", // 2
        "https://img.icons8.com/?size=100&id=q4ul9MoiyRtB&format=png&color=000000", // 3
        "https://img.icons8.com/?size=100&id=ByJ6Sp3X3_cv&format=png&color=000000", // 4
        "https://img.icons8.com/?size=100&id=5iWV5u7ve3PJ&format=png&color=000000", // 5
        "https://img.icons8.com/?size=100&id=sL5WaT_mFUmK&format=png&color=000000"  // 6
    ];

    let randomIndex = Math.floor(Math.random() * 6);
    let rolledNumber = randomIndex + 1;
    let selectedImage = diceFaces[randomIndex];

    let imageElement = document.getElementById(`image${player}`);
    let healthElement = document.getElementById(`health${player}`);

    if (healthElement) {
        // Ensure health is always a valid number
        let currentHealth = parseInt(healthElement.textContent) || 50;
        let newHealth = Math.max(0, currentHealth - rolledNumber); // Prevent negative health
        healthElement.textContent = newHealth;

        if (newHealth === 0) {
            alert(`Player ${player} is out of health! Game Over.`);
            return;
        }
    }

    if (imageElement) {
        imageElement.src = selectedImage;
        imageElement.alt = rolledNumber.toString();
    }

    console.log(`Player ${player} rolled: ${rolledNumber}`);

    // Switch turn to the next player
    currentPlayer = player === 1 ? 2 : 1;
}














































































































































//-------------------------  turn by turn game logic----------------------------------------
// function DiceSelect(player) 
// {

//         let users = [{ player: 1, status: false }, { player: 2, status: false }];
        
//         users = users.map((item) => {
//           // if (item.player === player && item.status===false) {
//           if (item.status===false) {
//             console.log(`i/p from ${player}`)
//             return { ...item, status: true };
            
//           }
//           // else if (item.player === player && item.status===true) {
//           else if ( item.status===true) {
//             console.log("same player")
//             alert("oh no its not your turn ")
//           }
//           // return { ...item, status: false };
//         });

//         console.log("users",users)
  
//     let diceFaces = [
//         "https://img.icons8.com/?size=100&id=o1dGziQOijg4&format=png&color=000000", // 1
//         "https://img.icons8.com/?size=100&id=Fwcx5mpkWd8P&format=png&color=000000", // 2
//         "https://img.icons8.com/?size=100&id=q4ul9MoiyRtB&format=png&color=000000", // 3
//         "https://img.icons8.com/?size=100&id=ByJ6Sp3X3_cv&format=png&color=000000", // 4
//         "https://img.icons8.com/?size=100&id=5iWV5u7ve3PJ&format=png&color=000000", // 5
//         "https://img.icons8.com/?size=100&id=sL5WaT_mFUmK&format=png&color=000000"  // 6
//     ];
    

//     let randomIndex = Math.floor(Math.random() * 6);
//     let selectedImage = diceFaces[randomIndex];

//     let imageElement = document.getElementById(`image${player}`);

//     if (imageElement) {
//         imageElement.src = selectedImage;
//         imageElement.alt = (randomIndex + 1).toString();
//     }

//     // console.log(`Player ${player} rolled: ${randomIndex + 1}`);

//     // currentPlayer = player === 1 ? 2 : 1;

// }