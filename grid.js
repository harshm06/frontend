function setvalues() {
    var ele_parent = document.getElementsByClassName("grid-container");
    var arr = [1, 2, 3, 6, 9, 8, 7, 4];
    var pos = [1, 2, 3, 6, 9, 8, 7, 4];
    for (var i = 1; i < 9; i++) {
        let id_name = "cell" + (pos[i - 1]);
        let ele = document.getElementById(id_name);
        ele.innerText = arr[i - 1];
    }
}

function perform_rotation(arr) {

    let last = arr[7];
    let new_arr = arr.splice(0, 7);
    new_arr.splice(0, 0, last);
    return new_arr;
}

function rotatefunc() {
    let ele_parent = document.getElementsByClassName("grid-container");
    var arr = [document.getElementById("cell1").innerHTML, document.getElementById("cell2").innerHTML, document.getElementById("cell3").innerHTML, document.getElementById("cell6").innerHTML, document.getElementById("cell9").innerHTML, document.getElementById("cell8").innerHTML, document.getElementById("cell7").innerHTML, document.getElementById("cell4").innerHTML];
    arr = perform_rotation(arr);
    var pos = [1, 2, 3, 6, 9, 8, 7, 4];
    for (var i = 1; i < 9; i++) {
        let id_name = "cell" + (pos[i - 1]);
        let ele = document.getElementById(id_name);
        ele.innerText = arr[i - 1];
    }
}