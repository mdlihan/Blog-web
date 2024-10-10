let img = document.querySelector('img');
let cards = document.querySelector('.cards');
const categories = document.querySelector('#categories');
const blogCategories = [
  "Technology",
  "Health & Wellness",
  "Lighthouse at Dusk",
  "Travel",
  "Food & Recipes",
  "Fashion & Beauty",
  "Parenting & Family",
  "Finance & Money Management",
  "Fitness & Exercise",
  "Business & Entrepreneurship",
  "Marketing & Social Media",
  "Home & Garden",
  "DIY & Crafts",
  "Photography",
  "Lifestyle",
  "Education & Learning",
  "News & Current Events",
  "Entertainment (Movies, TV, Music)",
  "Relationships & Dating",
  "Art & Design",
  "Environment & Sustainability",
  "Career & Professional Development",
  "Real Estate & Property",
  "Personal Stories & Experiences",
  "Sports & Outdoor Activities",
  "Spirituality & Self-Help"
];
const popular_blogs = document.querySelector('#popular_blogs');
const popular_3_img = document.querySelector('#popular_3_img');
let blog = document.querySelector('#blog');

//about page
const create_blogs = document.querySelector('#create_blogs');
const blog_items = document.querySelector('#blog_items');
const cancel = document.querySelector('#cancel');
const save = document.querySelector('#save');
let titel = document.querySelector('#titel');
let textarea = document.querySelector('#textarea');
let image;


//blog page
const blogs_card = document.querySelector('#blogs_card');
const prev = document.querySelector('#prev');
const next = document.querySelector('#next');
let start = document.querySelector('#start');
let particular_length = document.querySelector('#particular_length'); 
let all_cards = document.querySelector('#all_cards');
let currentData = 1;
let countData = 10;


//all search
let searchData = document.querySelector('#searchData');


let allDatas = [
    {
      id: 1,
      title: "Sunset over the Ocean",
      description: "The sun sets beautifully over the calm ocean waters, painting the sky with hues of orange, pink, and purple. A few clouds scatter across the horizon, adding depth to the stunning scenery.",
      image: "/img1.jpeg",
      count: 0
    },
    {
      id: 2,
      title: "Mountain Landscape",
      description: "Majestic mountains rise against a clear blue sky, their peaks dusted with snow. Pine trees dot the valley below, creating a lush green contrast.",
      image: "/img2.jpeg",
      count: 0
    },
    {
      id: 3,
      title: "Serene Forest",
      description: "A tranquil forest scene with sunlight filtering through tall trees, illuminating the rich green foliage and creating a peaceful atmosphere.",
      image: "/img3.jpeg",
      count: 0
    },
    {
      id: 4,
      title: "Desert Dunes",
      description: "Golden sand dunes stretch endlessly under a bright blue sky, their curves and shadows creating an intricate pattern.",
      image: "/img4.jpeg",
      count: 0
    },
    {
      id: 5,
      title: "Calm Lake",
      description: "A mirror-like lake reflects the surrounding mountains and trees, with a gentle breeze creating ripples on the surface.",
      image: "/img5.jpeg",
      count: 0
    },
    {
      id: 6,
      title: "Tropical Beach",
      description: "A pristine beach with white sand and turquoise waters, fringed by palm trees swaying in the gentle breeze.",
      image: "/img6.jpeg",
      count: 0
    },
    {
      id: 7,
      title: "Autumn Colors",
      description: "A vibrant forest in autumn, showcasing trees adorned with brilliant shades of orange, red, and yellow leaves.",
      image: "/img1.jpeg",
      count: 0
    },
    {
      id: 8,
      title: "Starry Night",
      description: "A breathtaking view of the night sky filled with countless stars twinkling above a peaceful countryside landscape.",
      image: "/img2.jpeg",
      count: 0
    },
    {
      id: 9,
      title: "Snowy Winter",
      description: "A picturesque winter scene with snow-covered trees and a cozy cabin nestled in a serene snowy landscape.",
      image: "/img3.jpeg",
      count: 0
    },
    {
      id: 10,
      title: "Rainforest Paradise",
      description: "A lush rainforest with towering trees and vibrant tropical plants, filled with the sounds of nature and distant waterfalls.",
      image: "/img4.jpeg",
      count: 0
    },
    {
      id: 11,
      title: "Cliffside View",
      description: "Dramatic cliffs overlooking a turbulent sea, with waves crashing against the rocks below, set against a moody sky.",
      image: "/img5.jpeg",
      count: 0
    },
    {
      id: 12,
      title: "Sunflower Field",
      description: "A bright and cheerful field of sunflowers facing the sun, creating a stunning visual spectacle in full bloom.",
      image: "/img6.jpeg",
      count: 0
    },
    {
      id: 13,
      title: "Lavender Fields",
      description: "Vast fields of lavender stretching to the horizon, with their sweet fragrance filling the air and a picturesque farmhouse in the distance.",
      image: "/img1.jpeg",
      count: 0
    },
    {
      id: 14,
      title: "Foggy Morning",
      description: "A serene morning scene with fog rolling over a quiet lake, the silhouettes of trees barely visible in the mist.",
      image: "https://example.com/images/fog1.jpg",
      count: 0
    },
    {
      id: 15,
      title: "Vibrant Coral Reef",
      description: "An underwater paradise filled with colorful corals and schools of tropical fish, showcasing the beauty of marine life.",
      image: "/img2.jpeg",
      count: 0
    },
    {
      id: 16,
      title: "Cherry Blossom Trees",
      description: "A stunning display of cherry blossom trees in full bloom, their delicate pink flowers creating a breathtaking view.",
      image: "/img3.jpeg",
      count: 0
    },
    {
      id: 17,
      title: "Rolling Hills",
      description: "Gentle rolling hills covered in lush grass and wildflowers, under a clear blue sky with fluffy white clouds.",
      image: "/img4.jpeg",
      count: 0
    },
    {
      id: 18,
      title: "Icy Glacier",
      description: "A massive glacier with stunning blue ice formations, surrounded by towering mountains and a clear sky.",
      image: "/img5.jpeg",
      count: 0
    },
    {
      id: 19,
      title: "Waterfall Cascade",
      description: "A breathtaking waterfall cascading down rocky cliffs, surrounded by lush greenery and the sound of rushing water.",
      image: "/img6.jpeg",
      count: 0
    },
    {
      id: 20,
      title: "Wildflower Meadow",
      description: "A vibrant meadow filled with a variety of wildflowers, creating a colorful tapestry against the backdrop of a clear sky.",
      image: "/img1.jpeg",
      count: 0
    },
    {
      id: 21,
      title: "Secluded Cove",
      description: "A hidden cove with crystal-clear waters and rocky cliffs, perfect for a peaceful getaway in nature.",
      image: "/img2.jpeg",
      count: 0
    },
    {
      id: 22,
      title: "Starry Desert Sky",
      description: "A stunning view of the night sky filled with stars above a serene desert landscape, with silhouettes of cacti in the foreground.",
      image: "/img3.jpeg",
      count: 0
    },
    {
      id: 23,
      title: "Coastal Cliffs",
      description: "Tall coastal cliffs standing majestically above crashing waves, with seagulls flying against a bright sky.",
      image: "/img4.jpeg",
      count: 0
    },
    {
      id: 24,
      title: "Golden Wheat Field",
      description: "A vast field of golden wheat swaying gently in the breeze under a clear summer sky, creating a peaceful rural scene.",
      image: "/img5.jpeg",
      count: 0
    },
    {
      id: 25,
      title: "City Skyline at Dusk",
      description: "A stunning city skyline illuminated at dusk, with buildings reflecting the colors of the setting sun.",
      image: "/img6.jpeg",
      count: 0
    },
    {
      id: 26,
      title: "Mountain Lake",
      description: "A tranquil lake nestled in the mountains, surrounded by lush forests and a clear blue sky reflecting on the water's surface.",
      image: "/img1.jpeg"
    },
    {
      id: 27,
      title: "Beach Sunset",
      description: "The sun setting over a beautiful beach, casting warm colors across the sky and reflecting on the water.",
      image: "/img2.jpeg",
      count: 0
    },
    {
      id: 28,
      title: "Rocky Shoreline",
      description: "A rugged shoreline with dramatic rock formations and crashing waves, creating a wild and beautiful coastal scene.",
      image: "/img3.jpeg",
      count: 0
    },
    {
      id: 30,
      title: "Mountain View",
      description: "A breathtaking view of towering mountains under a clear blue sky. The peaks are capped with snow, and lush green valleys stretch below, creating a perfect blend of nature's beauty.",
      image: "/img4.jpeg",
      count: 0
    },
    {
      id: 31,
      title: "City Skyline at Night",
      description: "The vibrant city skyline illuminated at night, with skyscrapers sparkling against the dark sky. Reflections shimmer on the river below, creating a stunning urban landscape.",
      image: "/img5.jpeg",
      count: 0
    },
    {
      id: 32,
      title: "Autumn Forest",
      description: "A serene forest in autumn, with leaves in shades of red, orange, and yellow. Sunlight filters through the trees, creating a warm and inviting atmosphere.",
      image: "/img6.jpeg",
      count: 0
    },
    {
      id: 33,
      title: "Desert Dunes",
      description: "Golden sand dunes stretching as far as the eye can see, under a bright blue sky. The shifting sands create mesmerizing patterns in the sunlight.",
      image: "/img1.jpeg",
      count: 0
    },
    {
      id: 34,
      title: "Starry Night",
      description: "A breathtaking view of a starry night sky, filled with countless stars twinkling brightly. The Milky Way stretches across the horizon, surrounded by silhouettes of trees.",
      image: "/img2.jpeg",
      count: 0
    },
    {
      id: 35,
      title: "Tropical Beach",
      description: "A pristine tropical beach with white sand and crystal-clear waters. Palm trees sway gently in the breeze, creating a perfect paradise for relaxation.",
      image: "/img3.jpeg",
      count: 0
    },
    {
      id: 36,
      title: "Snowy Landscape",
      description: "A tranquil winter landscape covered in a thick blanket of snow. Pine trees stand tall, dusted with white, creating a peaceful and serene atmosphere.",
      image: "/img4.jpeg",
      count: 0
    },
    {
      id: 37,
      title: "Lavender Fields",
      description: "Vibrant lavender fields in full bloom, stretching as far as the eye can see. The sweet scent fills the air, and bees buzz happily among the flowers.",
      image: "/img5.jpeg",
      count: 0
    },
    {
      id: 38,
      title: "Rolling Hills",
      description: "Gentle rolling hills painted in lush green, dotted with wildflowers. A winding path leads through the landscape, inviting exploration.",
      image: "/img6.jpeg",
      count: 0
    },
    {
      id: 39,
      title: "Rainforest Waterfall",
      description: "A stunning waterfall cascading down rocky cliffs in a lush rainforest. The sound of rushing water and vibrant greenery create a tranquil oasis.",
      image: "/img1.jpeg",
      count: 0
    },
    {
      id: 40,
      title: "Underwater Coral Reef",
      description: "A vibrant underwater scene featuring a colorful coral reef teeming with marine life. Schools of fish swim gracefully among the corals, creating a lively ecosystem.",
      image: "/img2.jpeg",
      count: 0
    },
    {
      id: 41,
      title: "Countryside Sunset",
      description: "A picturesque countryside landscape at sunset, with fields of golden wheat swaying in the breeze. The sun casts a warm glow, creating a peaceful scene.",
      image: "/img3.jpeg",
      count: 0
    },
    {
      id: 42,
      title: "Misty Mountains",
      description: "Mystical mountains shrouded in mist, creating an ethereal atmosphere. The landscape is filled with mystery, inviting adventure and exploration.",
      image: "/img4.jpeg",
      count: 0
    },
    {
      id: 43,
      title: "Golden Gate Bridge",
      description: "The iconic Golden Gate Bridge stretching majestically over the bay, surrounded by rolling fog. A beautiful sight that symbolizes San Francisco.",
      image: "/img5.jpeg",
      count: 0
    },
    {
      id: 44,
      title: "Frozen Lake",
      description: "A serene frozen lake surrounded by snow-capped mountains. The clear ice reflects the sky, creating a magical winter wonderland.",
      image: "/img6.jpeg",
      count: 0
    },
    {
      id: 45,
      title: "Cherry Blossom Trees",
      description: "Stunning cherry blossom trees in full bloom, their pink petals creating a beautiful canopy. The gentle breeze sends petals dancing through the air.",
      image: "/img1.jpeg",
      count: 0
    },
    {
      id: 46,
      title: "Volcanic Landscape",
      description: "A dramatic volcanic landscape featuring rugged terrain and smoking craters. The stark beauty of the area showcases nature's power.",
      image: "/img2.jpeg",
      count: 0
    },
    {
      id: 47,
      title: "Ancient Ruins",
      description: "Majestic ancient ruins standing tall against a backdrop of mountains. The remnants of a lost civilization tell stories of the past.",
      image: "/img3.jpeg",
      count: 0
    },
    {
      id: 48,
      title: "Wildflower Meadow",
      description: "A colorful meadow filled with wildflowers of various shapes and sizes. Butterflies flutter about, creating a lively and cheerful atmosphere.",
      image: "/img4.jpeg",
      count: 0
    },
    {
      id: 49,
      title: "Health & Wellness",
      description: "A massive glacier with stunning blue ice formations glistening in the sunlight. The sheer size and beauty of the glacier is awe-inspiring.",
      image: "/img5.jpeg",
      count: 0
    },
    {
      id: 50,
      title: "Lighthouse at Dusk",
      description: "A charming lighthouse standing tall at dusk, its light shining brightly against the twilight sky. Waves crash against the rocks below, creating a soothing ambiance.",
      image: "/img6.jpeg",
      count: 0
    },
    {
      id: 51,
      title: "Health & Wellness",
      description: "A vast desert landscape dotted with towering cacti, under a scorching sun. The resilience of nature is beautifully displayed in this arid environment.",
      image: "/img1.jpeg",
      count: 0
    }
]
//local stroge get data;
function localStorageGetData() {
  allDatas = JSON.parse(localStorage.getItem('strogeData'))|| allDatas;
}
localStorageGetData()


//popular 3 img
function pouplar3Img() {
  if (popular_3_img) {
    allDatas.slice(-3).forEach(el => {
    popular_3_img.innerHTML += `<div>
    <img src="${el.image}" alt="">
    </div>`
    })
    let element = popular_3_img.children;
    
    element[0].classList.add('row-span-2', 'col-span-2');
  }
}
pouplar3Img();

//blog page card
 function blog_page_card() {
  let lastEightData = allDatas.slice(-8);
  lastEightData.forEach((el)=>{
cards?cards.innerHTML += `
<div id='${el.id}' class="bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
    <a href="#" class='w-full'>
        <img class="rounded-t-lg w-full sm:max-h-56 object-cover" src="${el.image}" alt="" />
    </a>
    <div class="p-5">
        <a href="#">
            <h5 class="mb-2 text-2xl sm:text-lg font-bold tracking-tight text-gray-900 dark:text-white">${el.title}</h5>
        </a>
        <p class="mb-2 font-normal text-gray-700 dark:text-gray-400 text-sm">${(el.description.split(' ')).slice(0,5).join(' ')}...</p>
        
          <button class='bg-blue-700 px-3 py-1 rounded-md text-white text-md text-bolder flex justify-between gap-2 items-center pointer'onClick='aboutData(event)'>
             Read more <i class="fa-solid fa-arrow-right"></i>
          </button>
    </div>
</div>
`:''
  })
}
blog_page_card()

//create blog btn config
function createBlogsBtn_back_btn(item) {
  const create_blog_btn = item?item.querySelector('#create_blog_btn'):'';
  create_blog_btn ? create_blog_btn.addEventListener('click', () => {
    blog_items.classList.add('hidden');
    create_blogs.classList.remove('hidden');
  }) : ''
  
  let back_btn = item?item.querySelector('#back_btn'):'';
  back_btn?back_btn.addEventListener('click',()=>{
    window.location.href='/index.html'
  }):''
}

//show all blog
function showAllBlog() {
    window.location.href='/blog.html';
}

//about data
function aboutData(e) {
  //window.location.href = 'about.html'
  let blogId = e.target.closest(`div[id]`).id;
  allDatas.filter(el=>{
    if (el.id == blogId) {
      el.count++
      saveLocalStroge()
       window.location.href='about.html?data='+encodeURIComponent(JSON.stringify(el))
    }
  })
}

//aboutDataShow
function aboutDataShow() {
  let params = new URLSearchParams(window.location.search);
  let getdata = params.get('data');
  let getdata_json = JSON.parse(getdata)??(allDatas.slice(-1))[0];
  blog_items?blog_items.innerHTML = ` <div>
             <img class="w-full h-full" src="${getdata_json.image}" alt="no-img">
           </div>
           <div>
             <h3 class="text-center text-2xl lg:text-6xl mt-6">Blog</h3>
      
             <p id="text-blog" class="mt-3 text-center">
               ${getdata_json.description}
             </p>
           </div>
           <div class="flex justify-between items-centern px-2 mt-6">
             <button id='back_btn' type="submit" class="py-2 px-4 rounded-md bg-red-400 text-white pointer">Back</button>
             <button id="create_blog_btn" type="submit" class="py-2 px-4 rounded-md bg-purple-400 pointer text-white">Create Blog</button>
           </div>`:'';
   createBlogsBtn_back_btn(blog_items)
}
aboutDataShow()

//create Blog functionality;
function openFile(e) {
let aboutimg = document.querySelector('#aboutimg');
let input = e.target;
let reader = new FileReader();
reader.onload = function() {
  let dataURL = reader.result;
  aboutimg.classList.remove('hidden')
  aboutimg.src=dataURL;
  image= dataURL
};
reader.readAsDataURL(input.files[0]);
}

//categories section
function categoriesSection() {
  blogCategories.forEach(el=>{
    categories?categories.innerHTML += `<li>${el}</li>`:'';
  })
};
categoriesSection()


let categoriesData = [];
let catagotisSplit;

//categories lisanar
function catagorisLisanar() {
  let categoriesChildren = Array.from(categories.childNodes);
  categoriesChildren.forEach(el=>{
    el.addEventListener('click',(e)=>{
     catagotisSplit = e.target.innerHTML.split(' ');
     clickFilter()
    })
  })
}
catagorisLisanar()
//kaz

//search listener
searchData.addEventListener('submit', (e) => {
  e.preventDefault()
  catagotisSplit = document.querySelector('#voice-search').value.split(' ');
  clickFilter()
  console.log(catagotisSplit)
})

//click Filter data
function clickFilter() {
  allDatas.forEach(el => {
  let splitTitel = el.title.split(' ');
  catagotisSplit.forEach(eel => {
    if (splitTitel.includes(eel) && !categoriesData.includes(el)) {
      categoriesData.push(el);
      window.location.href = '/blog.html'
    } else {
      window.location.href = '/blog.html'
    }
  })
})
sessionStorage.setItem('categoriesData', JSON.stringify(categoriesData));
blogShowData()
}



//popular blogs
function popular_blogs_section() {
  let countHeightData = [];
  
  let sortData = allDatas.sort((a,b)=> b.count-a.count);
  console.log(sortData)
  sortData.slice(0,6).forEach(el=>{
    popular_blogs ? popular_blogs.innerHTML += `    <div onClick='aboutData(event)' id='${el.id}' class="flex items-start space-x-4">
         <div class="flex-shrink-0">
          <img class="w-10 h-10 rounded-full" src="${el.image}" alt="Tailwind CSS chat bubble component">
          </div>
         <div class="bg-purple-400 text-gray-800 rounded-lg py-2 px-4 max-w-xs text-white">
         <p>${el.description.split(' ').slice(0,8).join(' ')}...</p>
        </div>
       <!--popular  blog card-->
     </div>` : ''
  })
}
popular_blogs_section()

//aboutBlogCancel
function aboutBlogCancel() {
  cancel?cancel.addEventListener('click',()=>{
    blog_items.classList.remove('hidden');
    create_blogs.classList.add('hidden');
  }):''
}
aboutBlogCancel()

//saveBlog
function saveBlog() {
   save?.addEventListener('click',()=>{
    let randomId = Date.now();
    console.log(randomId)
    const textareaValue = textarea.value;
    const titelValue = titel.value;
    if (textareaValue!=='' && titelValue!=='' && image!=='') {
      
      let newData = {
        id: randomId,
        title: titelValue,
        description: textareaValue,
        image: image,
        count: 0
      }
      
       allDatas.push(newData)
       pouplar3Img()
       blog_page_card()
       aboutDataShow()
       categoriesSection()
       popular_blogs_section()
       blogAllCard()
       saveLocalStroge()
       create_blogs.classList.add('hidden')
       blog_items.classList.remove('hidden')
       window.location.href='/index.html'
    } else {
      alert('Please fill up all box');
    }
  })
}
saveBlog()

//blopage navigation bar
function navigation() {
 all_cards?all_cards.innerHTML=allDatas.length:'';
  prev ? prev.disabled = true : '';
  prev ? prev.classList.add('opacity-35') : ''
  next?.addEventListener('click', () => {
    if (countData <= allDatas.length) {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
      prev?prev.disabled = false:'';
      prev?prev.classList.remove('opacity-35'):'';
      blogs_card.innerHTML=''
      if ((allDatas.length - countData) <= 10) {
        console.log(allDatas.length)
         particular_length.innerHTML = allDatas.length;
            next ? next.disabled = true : '';
            next ? next.classList.add('opacity-35') : ''
          }

      currentData += 10;
      countData += 10;
      start.innerHTML=currentData;
      particular_length.innerHTML = countData;;
      let sliceData = allDatas.slice(currentData, countData+1);
      blogAllCard(sliceData)
    }
  })

  prev?.addEventListener('click', () => {
    if (10 < countData) {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
      
      next ? next.disabled = false : '';
      next?next.classList.remove('opacity-35'):'';
      blogs_card.innerHTML = ''
      currentData -= 10;
      countData -= 10;
      start.innerHTML = currentData;
      particular_length.innerHTML = countData;

      let sliceData = allDatas.slice(currentData, countData+1);
      console.log(countData)
      if (currentData <= 1) {
        prev ? prev.disabled = true : '';
        prev ? prev.classList.add('opacity-35') : ''
      }
      blogAllCard(sliceData)
    } 
  })
}
navigation()

//blogcards
function blogAllCard(sliceData=allDatas.slice(0,10)) {
  sliceData.forEach(el=>{
    blogs_card ? blogs_card.innerHTML += `
<div id='${el.id}' class="bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
    <a href="#" class='w-full'>
        <img class="rounded-t-lg w-full sm:max-h-56 object-cover" src="${el.image}" alt="" />
    </a>
    <div class="p-5">
        <a href="#">
            <h5 class="mb-2 text-2xl sm:text-lg font-bold tracking-tight text-gray-900 dark:text-white">${el.title}</h5>
        </a>
        <p class="mb-2 font-normal text-gray-700 dark:text-gray-400 text-sm">${(el.description.split('')).slice(0,10).join('')}...</p>
        
          <button class='bg-blue-700 px-3 py-1 rounded-md text-white text-md text-bolder flex justify-between gap-2 items-center pointer'onClick='aboutData(event)'>
             Read more <i class="fa-solid fa-arrow-right"></i>
          </button>
    </div>
</div>
` : ''
  })
}

let sessionStorageData = JSON.parse(sessionStorage.getItem('categoriesData'));

window.addEventListener('load',()=>{
 let pathname=window.location.pathname;
 if (pathname === '/blog.html') {
   if (!sessionStorageData) {
     blogAllCard()
   } else if (sessionStorageData == '') {
     blogs_card ? blogs_card.innerHTML = '':''
     blogs_card ? blogs_card.innerHTML = '<p class="text-center text-2xl"> no data found</p>':'';
   }else {
     blogShowData()
     sessionStorage.clear()
   }
 }
})

/*blog.addEventListener('click',()=>{
  window.location.href='/blog.html'
  window.addEventListener('load', () => {
  console.log(window.location.pathname.includes('/blog.html'))
})
})*/

//blog show data
function blogShowData() {
 if (sessionStorageData) {
   blogs_card?blogs_card.innerHTML='':'';
   blogAllCard(sessionStorageData)
 }
}

//local stroge save data;
function saveLocalStroge() {
  localStorage.setItem('strogeData',JSON.stringify(allDatas))
  console.log(allDatas)
}