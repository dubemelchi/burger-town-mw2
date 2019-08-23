$(document).ready(() => {
  $(() => {
    $(".devour").on("click", (event) => {
      let id = $(this).data("id");
      let isDevoured = {
        devoured: true
      };

      $.ajax("/api/burger/" + id, {
        type: "PUT",
        data: isDevoured
      }).then(
        () => {
          console.log("change to isDevoured");

          location.reload();
        }
      );
    });

    $("#burgers").on("submit", (event) => {
      event.preventDefault();

      let newChoice = {
        name: $("#name").val().trim()
      };
      console.log(name);

      $.ajax("/api/burger", {
        type: "POST",
        data: newChoice
      }).then( () => {
        console.log("new burger loaded!");
        location.reload();
      });
    });

    $(".delete-burger").on("click", (event) => {
      let id = $(this).data("id");

      $.ajax("/api/burger/" + id, {
        type: "DELETE"
      }).then(
        () => {
          console.log("deleted burger", id);
          location.reload();
        }
      );


    });
  });
})