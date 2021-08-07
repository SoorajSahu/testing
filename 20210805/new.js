function renderProductsSearchPage(num) {
    var viewSize = 25;
    var newPageNum = num - 1;
    var startIndex = viewSize * newPageNum;
    $("#BrandProductsLoader").show();
    jQuery.ajax({
        url: "/loadMorePharmacyProducts.mart"
        , type: 'POST'
        , data: "brand=" + $('#brand').val() + "&startIndex=" + startIndex + "&productIdString=" + $("#productIdString").val() + "&totalProductFound=" + $("#totalProductFound").val()
        , cache: false
        , success: function (content) {
            $('#brandProductListDiv').replaceWith(content);
            $("#BrandProductsLoader").hide();
            $("#brandProductListDiv").show();
        }
        , error: function () {
            $(".svrmsg").removeClass("alert-success alert-danger").addClass("alert-danger").slideDown().delay(5000).slideUp("slow").find("span").html("Unable to process your request.");
            $("#BrandProductsLoader").hide();
        }
    });
};