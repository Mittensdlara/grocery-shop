var openMenuBtn = document.getElementById("openMenu");
var closeMenuBtn = document.getElementById("closeMenu");
var menu = document.getElementById("menu");
var overlay = document.getElementById("overlay");
var btnBrowseMenu = document.getElementById("btn-browse-menu");
var hamburgerNav = document.getElementById("hamburger-nav");
var searchBar = document.getElementById("search-bar");
var searchInput = document.getElementById("search-input");
var swiperContainer = document.querySelector('.swiper');
var swiperContainerOffer = document.querySelector('.swiper-offer');
var swiperContainerTopSell = document.querySelector('.swiper-container');
var miniList = document.getElementById("mini-list");
var browseCategory = document.getElementById("browse-category");
var miniListHamburgurMenu = document.getElementById("mini-list-hamburgur-menu");
var buttons = document.querySelectorAll(".accordion-header");
var products = [
    {
        id: 1,
        name: "Seeds of Change Organic Quinoa, Brown, & Red Rice",
        brand: "Hodo Foods",
        image: "src/img/p-p-1.png",
        price: 2.51,
        originalPrice: 3.00,
        weight: "500 gram",
        discountLabel: "-17%",
    },
    {
        id: 2,
        name: "All Natural Italian-Style Chicken Meatballs",
        brand: "Hodo Foods",
        image: "/src/img/p-p-2.png",
        price: 2.51,
        originalPrice: 3.00,
        weight: "500 gram",
        discountLabel: "Hot",
    },
    {
        id: 3,
        name: "Angie’s Boomchickapop Sweet & Salty Kettle Corn",
        brand: "Hodo Foods",
        image: "/src/img/p-p3.png",
        price: 2.51,
        originalPrice: 3.00,
        weight: "500 gram",
        discountLabel: "Sale",
    },
    {
        id: 4,
        name: "Foster Farms Takeout Crispy Classic Buffalo Wings",
        brand: "Hodo Foods",
        image: "/src/img/p-p-4.png",
        price: 2.51,
        originalPrice: 3.00,
        weight: "500 gram",
    },
    {
        id: 5,
        name: "Blue Diamond Almonds Lightly Salted Vegetables",
        brand: "Hodo Foods",
        image: "/src/img/p-p-5.png",
        price: 2.51,
        originalPrice: 3.00,
        weight: "500 gram",
    },
];
function createOfferCard(product) {
    var _a;
    return "\n    <div class=\"swiper-slide bg-white p-4 rounded-lg shadow-lg flex flex-col items-center justify-between h-full\">\n      <div class=\"relative w-full flex-shrink-0\">\n        <img src=\"".concat(product.image, "\" alt=\"").concat(product.name, "\" class=\"w-full h-40 object-contain rounded-lg\" />\n        ").concat(product.discountLabel
        ? "<span class=\"absolute top-2 left-2 bg-DangerColor text-white text-xs px-2 py-1 rounded-e-lg\">".concat(product.discountLabel, "</span>")
        : '', "\n      </div>\n      <p class=\"text-TextBody text-sm mt-2\">").concat(product.brand, "</p>\n      <h3 class=\"mt-2 text-md font-semibold text-center\">").concat(product.name, "</h3>\n      <a href=\"\" class=\"hover:transition-all mt-2\">\n        <img src=\"/src/img/star-vote.png\" alt=\"Rating\" />\n      </a>\n      <p class=\"text-gray-500 text-sm mt-1\">").concat(product.weight, "</p>\n      \n      <div class=\"mt-auto w-full\">\n        <div class=\"flex items-center justify-between\">\n          <span class=\"text-xl font-bold text-BrandColor1\">$").concat(product.price.toFixed(2), "</span>\n          <span class=\"text-gray-400 line-through\">$").concat(product.originalPrice.toFixed(2), "</span>\n        </div>\n        <!-- Progress -->\n        <div class=\"flex h-1.5 mt-2 bg-gray-200 rounded-full overflow-hidden dark:bg-neutral-700\" role=\"progressbar\" aria-valuenow=\"").concat(product.progress, "\" aria-valuemin=\"0\" aria-valuemax=\"100\">\n          <div class=\"bg-SuccessColor rounded-full text-xs text-white text-center\" style=\"width: ").concat(product.progress, "%\"></div>\n        </div>\n        <p class=\"text-xs text-TextBody text-start mt-1\">Sold: ").concat((_a = product.sold) !== null && _a !== void 0 ? _a : 'N/A', "</p>\n        <!-- End Progress -->\n        <button class=\"btn-load-more w-full mt-3\">Add To Cart</button>\n      </div>\n    </div>\n  ");
}
function createProductCard(product) {
    return "\n    <div class=\"swiper-slide  bg-white p-4 rounded-lg shadow-lg flex justify-center items-center h-full\">\n      <div class=\"relative  w-full flex-shrink-0\">\n        <img src=\"".concat(product.image, "\" alt=\"").concat(product.name, "\" class=\"w-full h-40 object-contain rounded-lg\" />\n        ").concat(product.discountLabel ? "<span class=\"absolute top-2 -left-4 bg-DangerColor text-white text-xs px-2 py-1 rounded-e-lg\">".concat(product.discountLabel, "</span>") : '', "\n      </div>\n      <p class=\"text-TextBody text-sm\">").concat(product.brand, "</p>\n      <h3 class=\"mt-4 text-md font-semibold\">").concat(product.name, "</h3>\n      <a href=\"\" class=\"hover:transition-all\">\n        <img src=\"src/img/star-vote.png\" alt=\"Rating\" />\n      </a>\n      <p class=\"text-gray-500 text-sm\">").concat(product.weight, "</p>\n      <div class=\"space-x-4\">\n        <span class=\"text-xl font-bold text-BrandColor1\">$").concat(product.price.toFixed(2), "</span>\n        <span class=\"text-gray-400 line-through ml-2\">$").concat(product.originalPrice.toFixed(2), "</span>\n        <button class=\"px-3 bg-[#d6f1e6] text-BrandColor1 py-2 rounded-lg hover:bg-SuccessColor hover:text-white\">\n          Add +\n        </button>\n      </div>\n    </div>\n  ");
}
var PopularProducts = document.querySelector('.popular-products');
if (PopularProducts) {
    products.forEach(function (product) {
        var productCard = createProductCard(product);
        PopularProducts.innerHTML += productCard;
    });
}
var PopularFruits = document.querySelector('.popular-fruits');
if (PopularFruits) {
    products.forEach(function (product) {
        var productCard = createProductCard(product);
        PopularFruits.innerHTML += productCard;
    });
}
var OfferCards = document.querySelector('.offer-cards');
if (OfferCards) {
    products.forEach(function (product) {
        var productCard = createOfferCard(product);
        OfferCards.innerHTML += productCard;
    });
}
buttons.forEach(function (button) {
    button.addEventListener("click", function () {
        buttons.forEach(function (otherButton) {
            var content = otherButton.nextElementSibling;
            if (otherButton !== button && content) {
                content.style.display = "none";
                otherButton.classList.remove("active");
            }
        });
        var content = button.nextElementSibling;
        if (content) {
            if (content.style.display === "block") {
                content.style.display = "none";
                button.classList.remove("active");
            }
            else {
                content.style.display = "block";
                button.classList.add("active");
            }
        }
    });
});
var swiperTopSells = new Swiper('.swiper-container', {
    slidesPerView: 1,
    spaceBetween: 10,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    breakpoints: {
        640: {
            slidesPerView: 2,
            spaceBetween: 20,
        },
        1024: {
            slidesPerView: 3,
            spaceBetween: 30,
        },
    },
});
var swiper = new Swiper('.swiper', {
    slidesPerView: 1,
    spaceBetween: 10,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    breakpoints: {
        640: {
            slidesPerView: 1,
            spaceBetween: 20,
        },
        1024: {
            slidesPerView: 3,
            spaceBetween: 10,
        },
    },
});
var swiper_offer = new Swiper('.swiper-offer', {
    slidesPerView: 2,
    spaceBetween: 10,
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    breakpoints: {
        640: {
            slidesPerView: 2,
            spaceBetween: 20,
        },
        1024: {
            slidesPerView: 4,
            spaceBetween: 10,
        },
    },
});
searchBar === null || searchBar === void 0 ? void 0 : searchBar.addEventListener("click", function (e) {
    e.preventDefault();
    searchInput === null || searchInput === void 0 ? void 0 : searchInput.classList.toggle("hidden");
});
browseCategory === null || browseCategory === void 0 ? void 0 : browseCategory.addEventListener("click", function (e) {
    e.preventDefault();
    miniList === null || miniList === void 0 ? void 0 : miniList.classList.toggle("hidden");
    if (window.innerWidth < 640 && miniList) {
        miniList.style.display = "none";
    }
});
btnBrowseMenu === null || btnBrowseMenu === void 0 ? void 0 : btnBrowseMenu.addEventListener("click", function (e) {
    e.preventDefault();
    hamburgerNav === null || hamburgerNav === void 0 ? void 0 : hamburgerNav.classList.toggle("hidden");
    if (hamburgerNav === null || hamburgerNav === void 0 ? void 0 : hamburgerNav.classList.contains("hidden")) {
        miniListHamburgurMenu === null || miniListHamburgurMenu === void 0 ? void 0 : miniListHamburgurMenu.classList.remove("hidden");
        miniListHamburgurMenu === null || miniListHamburgurMenu === void 0 ? void 0 : miniListHamburgurMenu.classList.add("flex");
        console.log("Menu opened");
    }
    else {
        miniListHamburgurMenu === null || miniListHamburgurMenu === void 0 ? void 0 : miniListHamburgurMenu.classList.remove("flex");
        miniListHamburgurMenu === null || miniListHamburgurMenu === void 0 ? void 0 : miniListHamburgurMenu.classList.add("hidden");
        console.log("Menu closed");
    }
});
openMenuBtn === null || openMenuBtn === void 0 ? void 0 : openMenuBtn.addEventListener("click", function () {
    if (menu && overlay) {
        menu.style.display = "flex";
        menu.style.left = "0";
        overlay.style.display = "block";
    }
});
closeMenuBtn === null || closeMenuBtn === void 0 ? void 0 : closeMenuBtn.addEventListener("click", function () {
    if (menu && overlay) {
        menu.style.left = "-100%";
        overlay.style.display = "none";
    }
});
overlay === null || overlay === void 0 ? void 0 : overlay.addEventListener("click", function () {
    if (menu && overlay) {
        menu.style.left = "-100%";
        overlay.style.display = "none";
    }
});
window.addEventListener("resize", function () {
    if (window.innerWidth > 480) {
        overlay === null || overlay === void 0 ? void 0 : overlay.addEventListener("click", function () {
            if (menu && overlay) {
                menu.style.left = "-100%";
                overlay.style.display = "none";
            }
        });
    }
});
