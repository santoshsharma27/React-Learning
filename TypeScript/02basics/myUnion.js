var score = 33;
score = 44;
score = "55";
var santosh = { name: "santosh", id: 334 };
santosh = { userName: "Santosh Sharma", id: 334 };
// function getDbId(id: number | string){
//     //making some API calls
//     console.log(`DB id is: ${id}`);
// }
getDbId(3);
getDbId("3");
function getDbId(id) {
    if (typeof id === "string") {
        id.toLowerCase();
    }
}
// Array
var data = [1, 2, 3];
var data2 = ["1", "2", "3"];
var data3 = ["1", "2", "3", 4, true];
var seatAllotment;
seatAllotment = "aisle";
// seatAllotment = "crew" // not allowed
