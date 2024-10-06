const openMenuBtn = document.getElementById("openMenu") as HTMLElement | null;
const closeMenuBtn = document.getElementById("closeMenu") as HTMLElement | null;
const menu = document.getElementById("menu") as HTMLElement | null;
const overlay = document.getElementById("overlay") as HTMLElement | null;
const btnBrowseMenu = document.getElementById("btn-browse-menu") as HTMLElement | null;
const hamburgerNav = document.getElementById("hamburger-nav") as HTMLElement | null;
const searchBar = document.getElementById("search-bar") as HTMLElement | null;
const searchInput = document.getElementById("search-input") as HTMLElement | null;
const swiperContainer = document.querySelector('.swiper') as HTMLElement | null;
const swiperContainerOffer = document.querySelector('.swiper-offer') as HTMLElement | null;
const swiperContainerTopSell = document.querySelector('.swiper-container') as HTMLElement | null;

const miniList = document.getElementById("mini-list") as HTMLElement | null;
const browseCategory = document.getElementById("browse-category") as HTMLElement | null;
const miniListHamburgurMenu = document.getElementById("mini-list-hamburgur-menu");
const buttons: NodeListOf<HTMLButtonElement> = document.querySelectorAll(".accordion-header");

interface Product {
  id: number;
  name: string;
  brand: string;
  image: string;
  price: number;
  originalPrice: number;
  weight: string;
  discountLabel?: string; 
  progress?: number; 
  sold?: string;
}
interface Offer {
  id: number;
  image: string;
  brand: string;
  name: string;
  weight: string;
  price: number;
  originalPrice: number;
  discountLabel?: string;
  progress: number;
  sold: string;
}

const products: Product[] = [
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

function createOfferCard(product: Product): string {
  return `
    <div class="swiper-slide bg-white p-4 rounded-lg shadow-lg flex flex-col items-center justify-between h-full">
      <div class="relative w-full flex-shrink-0">
        <img src="${product.image}" alt="${product.name}" class="w-full h-40 object-contain rounded-lg" />
        ${
          product.discountLabel
            ? `<span class="absolute top-2 left-2 bg-DangerColor text-white text-xs px-2 py-1 rounded-e-lg">${product.discountLabel}</span>`
            : ''
        }
      </div>
      <p class="text-TextBody text-sm mt-2">${product.brand}</p>
      <h3 class="mt-2 text-md font-semibold text-center">${product.name}</h3>
      <a href="" class="hover:transition-all mt-2">
        <img src="/src/img/star-vote.png" alt="Rating" />
      </a>
      <p class="text-gray-500 text-sm mt-1">${product.weight}</p>
      
      <div class="mt-auto w-full">
        <div class="flex items-center justify-between">
          <span class="text-xl font-bold text-BrandColor1">$${product.price.toFixed(2)}</span>
          <span class="text-gray-400 line-through">$${product.originalPrice.toFixed(2)}</span>
        </div>
        <!-- Progress -->
        <div class="flex h-1.5 mt-2 bg-gray-200 rounded-full overflow-hidden dark:bg-neutral-700" role="progressbar" aria-valuenow="${product.progress}" aria-valuemin="0" aria-valuemax="100">
          <div class="bg-SuccessColor rounded-full text-xs text-white text-center" style="width: ${product.progress}%"></div>
        </div>
        <p class="text-xs text-TextBody text-start mt-1">Sold: ${product.sold ?? 'N/A'}</p>
        <!-- End Progress -->
        <button class="btn-load-more w-full mt-3">Add To Cart</button>
      </div>
    </div>
  `;
}

function createProductCard(product: Product): string {
  return `
    <div class="swiper-slide  bg-white p-4 rounded-lg shadow-lg flex justify-center items-center h-full">
      <div class="relative  w-full flex-shrink-0">
        <img src="${product.image}" alt="${product.name}" class="w-full h-40 object-contain rounded-lg" />
        ${product.discountLabel ? `<span class="absolute top-2 -left-4 bg-DangerColor text-white text-xs px-2 py-1 rounded-e-lg">${product.discountLabel}</span>` : ''}
      </div>
      <p class="text-TextBody text-sm">${product.brand}</p>
      <h3 class="mt-4 text-md font-semibold">${product.name}</h3>
      <a href="" class="hover:transition-all">
        <img src="src/img/star-vote.png" alt="Rating" />
      </a>
      <p class="text-gray-500 text-sm">${product.weight}</p>
      <div class="space-x-4">
        <span class="text-xl font-bold text-BrandColor1">$${product.price.toFixed(2)}</span>
        <span class="text-gray-400 line-through ml-2">$${product.originalPrice.toFixed(2)}</span>
        <button class="px-3 bg-[#d6f1e6] text-BrandColor1 py-2 rounded-lg hover:bg-SuccessColor hover:text-white">
          Add +
        </button>
      </div>
    </div>
  `;
}


const PopularProducts = document.querySelector('.popular-products') as HTMLElement | null;

if (PopularProducts) {
  products.forEach((product) => {
    const productCard = createProductCard(product);
    PopularProducts.innerHTML += productCard;
  });
}

const PopularFruits = document.querySelector('.popular-fruits') as HTMLElement | null;

if (PopularFruits) {
  products.forEach((product) => {
    const productCard = createProductCard(product);
    PopularFruits.innerHTML += productCard;
  });
}


const OfferCards = document.querySelector('.offer-cards') as HTMLElement | null;

if (OfferCards) {
  products.forEach((product) => {
    const productCard = createOfferCard(product);
    OfferCards.innerHTML += productCard;
  });
}






buttons.forEach((button: HTMLButtonElement) => {
  button.addEventListener("click", () => {
    buttons.forEach((otherButton: HTMLButtonElement) => {
      const content = otherButton.nextElementSibling as HTMLElement | null;

      if (otherButton !== button && content) {
        content.style.display = "none";
        otherButton.classList.remove("active");
      }
    });

    const content = button.nextElementSibling as HTMLElement | null;
    if (content) {
      if (content.style.display === "block") {
        content.style.display = "none";
        button.classList.remove("active");
      } else {
        content.style.display = "block";
        button.classList.add("active");
      }
    }
  });
});



const swiperTopSells = new Swiper('.swiper-container', {
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
const swiper = new (Swiper as any)('.swiper', {
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

const swiper_offer = new (Swiper as any)('.swiper-offer', {
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

searchBar?.addEventListener("click", (e) => {
  e.preventDefault();
  searchInput?.classList.toggle("hidden");
});

browseCategory?.addEventListener("click", (e) => {
  e.preventDefault();
  miniList?.classList.toggle("hidden");

  if (window.innerWidth < 640 && miniList) {
    miniList.style.display = "none";
    
  }
});

btnBrowseMenu?.addEventListener("click", (e) => {
  e.preventDefault();
  
  hamburgerNav?.classList.toggle("hidden");

  if (hamburgerNav?.classList.contains("hidden")) {
    miniListHamburgurMenu?.classList.remove("hidden");
    miniListHamburgurMenu?.classList.add("flex");
    console.log("Menu opened");
  } else {
    miniListHamburgurMenu?.classList.remove("flex");
    miniListHamburgurMenu?.classList.add("hidden");
    console.log("Menu closed");
  }
});

openMenuBtn?.addEventListener("click", () => {
  if (menu && overlay) {
    menu.style.display = "flex";
    menu.style.left = "0";
    overlay.style.display = "block";
  }
});

closeMenuBtn?.addEventListener("click", () => {
  if (menu && overlay) {
    menu.style.left = "-100%";
    overlay.style.display = "none";
  }
});

overlay?.addEventListener("click", () => {
  if (menu && overlay) {
    menu.style.left = "-100%";
    overlay.style.display = "none";
  }
});

window.addEventListener("resize", () => {
  if (window.innerWidth > 480) {
    overlay?.addEventListener("click", () => {
      if (menu && overlay) {
        menu.style.left = "-100%";
        overlay.style.display = "none";        
      }

    });
  }
});
