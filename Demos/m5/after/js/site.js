(function () {
  $("[data-toggle='tooltip']").tooltip();
  $("[data-toggle='popover']").popover();

  let $modal = $("#theDisclaimer");

  let $form = $("#contact-form");

  $form.on("submit", function() {
    $modal.modal("show");
    return false;
  });

  $modal.on("hidden.bs.modal", function () {
    alert("form hidden");
  });

  $("#agree-button").on("click", function () {
    $modal.modal("hide");
    alert("Submit the form");
  });


})();