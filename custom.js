function openNav() {
    document.getElementById("mySidenav").style.width = "300px";
  }
  
  function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
  }
  /** */
  function buttonClick(element) {
    let qtyBox = element.getElementByTagName("td");
    if(qtyBox.value<4)
    qtyBox.value = parseInt(qtyBox.value) + 1;
  }
  /** */
