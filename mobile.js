<script>
document.addEventListener("DOMContentLoaded", function () {

    const mobileButton = document.querySelector(".home-header .mobile");
    const menu = document.querySelector(".home-header .list");

    if (mobileButton && menu) {

        mobileButton.addEventListener("click", function () {

            menu.classList.toggle("active");
            mobileButton.classList.toggle("active");

        });

    }

});
</script>