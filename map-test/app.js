const activatePopup = (e) => {
  const countyName = e.target.attributes[3].nodeValue;
  const text = `You have clicked ${countyName}`;
  const mousePosition = getMouseCoords(e);
  const popupDimensions = getPopupDimensions($("#myPopup"));

  $("#myPopup").children().text(text);

  if (mousePosition.x < screen.width / 2) {
    $("#myPopup").offset({
      top: mousePosition.y - popupDimensions.height / 2,
      left: 0,
    });
  } else {
    $("#myPopup").offset({
      top: mousePosition.y - popupDimensions.height / 2,
      left: screen.width - popupDimensions.width,
    });
  }

  $("#myPopup").addClass("show");
};

const getPopupDimensions = (popup) => {
  return {
    height: popup.outerHeight(),
    width: popup.outerWidth(),
  };
};

const getMouseCoords = (e) => {
  return {
    x: e.pageX,
    y: e.pageY,
  };
};

$(".path").on("click", (e) => {
  activatePopup(e);
});
