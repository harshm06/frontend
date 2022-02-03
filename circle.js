function func(param) {
    let ele = document.getElementById("display");
    ele.innerText = "Currently selected circle is: " + param;

    window.event.stopPropagation();
}