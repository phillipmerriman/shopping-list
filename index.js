//removes checked from any item on startup
$(".shopping-list .shopping-item").removeClass("shopping-item__checked");

$(function() {
    $("#js-shopping-list-form").submit(function(event) {
        //prevents button submission on startup
        event.preventDefault();
        //creates variable for item added by user
        const listItem = $("#shopping-list-entry").val();
        //empties item form after item submission
        $("#shopping-list-entry").val("");
        //adds new item with name entered by user to the item list
        $(".shopping-list").append(
            `<li>
            <span class="shopping-item">${listItem}</span>
            <div class="shopping-item-controls">
                <button class="shopping-item-toggle">
                <span class="button-label">check</span>
                </button>
                <button class="shopping-item-delete">
                <span class="button-label">delete</span>
                </button>
            </div>
            </li>`
        );
    });

    //removes list item when user clicks 'delete' button
    $(".shopping-list").on("click", ".shopping-item-delete", function(event){
        $(this).closest("li").remove();
    });

    // $(".shopping-item-delete").on("click", function(event){
    //     $(this).closest("li").remove();
    // });

    //adds 'line-through' to item when user clicks 'check' button
    $(".shopping-list").on("click", ".shopping-item-toggle", function(event) {
        $(this).closest("li").find(".shopping-item").toggleClass("shopping-item__checked");
    });

    // $(".shopping-item-toggle").on("click", function(event){
    //     $(this).closest("li").toggleClass("shopping-item__checked");
    // });
    
});