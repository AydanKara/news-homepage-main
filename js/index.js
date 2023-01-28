function sidebarFunc() {

    //! header sidebar start
    const btnOpenSidebar = document.querySelector("#btn-menu");
    const sidebar = document.querySelector("#sidebar");
    const closeSidebar = document.querySelector("#btn-close");

    btnOpenSidebar.addEventListener("click", function () {
        sidebar.style.right = "0";
    });

    closeSidebar.addEventListener("click", function () {
        sidebar.style.right = "-100%";
    });


    
    //! header sidebar end
}

sidebarFunc();