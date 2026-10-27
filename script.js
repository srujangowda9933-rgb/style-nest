/* StyleNest demo storefront — vanilla JavaScript */

/* ------------------------------------------------------------------
   COLOUR IMAGES — HOW TO ADD A PHOTO FOR EACH COLOUR
   ------------------------------------------------------------------
   Option A (simplest): drop files into  images/products/  named
       <product id>-<colour name in lowercase>.jpg
   Examples:   1-black.jpg   1-cream.jpg   1-olive.jpg   9-dark-blue.jpg
   They are picked up automatically. No code change needed.

   Option B: give a product an explicit list, e.g. add to product 1:
       colorImages:{Black:"https://.../black-tee.jpg", Olive:"images/tee-olive.png"}

   If no photo exists for a colour, the product's main image is shown and
   a small "photo coming soon" note appears in Quick View (the image is
   never faked with a CSS filter). Missing files are listed in the
   browser console (F12) so you know exactly what to add.
------------------------------------------------------------------- */
const IMAGE_DIR = "images/products";

const products = [
 {id:1,name:"Classic Cotton T-shirt",department:"Men",category:"T-shirts",price:499,oldPrice:699,rating:4.7,reviews:128,sizes:["S","M","L","XL","XXL"],colors:[["Cream","#e9e0d1"],["Black","#252525"],["Olive","#68735d"]],image:"https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=800&q=80",tag:"Bestseller",isNew:false,description:"Your everyday essential, made from soft breathable cotton with a relaxed, easy-to-style fit."},
 {id:2,name:"Casual Denim Jeans",department:"Men",category:"Jeans",price:1299,oldPrice:1599,rating:4.6,reviews:84,sizes:["S","M","L","XL","XXL"],colors:[["Blue","#526c87"],["Black","#292929"]],image:"https://images.unsplash.com/photo-1542272604-787c3835535d?auto=format&fit=crop&w=800&q=80",tag:"",isNew:false,description:"A dependable denim staple with a comfortable mid-rise and a clean, timeless silhouette."},
 {id:3,name:"Oversized Everyday Hoodie",department:"Men",category:"Hoodies",price:999,oldPrice:1399,rating:4.8,reviews:96,sizes:["S","M","L","XL"],colors:[["Grey","#aaa9a3"],["Black","#242424"],["Sand","#c7b8a2"]],image:"https://images.unsplash.com/photo-1556821840-3a63f95609a7?auto=format&fit=crop&w=800&q=80",tag:"Popular",isNew:true,description:"A soft, roomy hoodie for slow mornings, cool evenings, and everything in between."},
 {id:4,name:"Relaxed Formal Shirt",department:"Men",category:"Shirts",price:899,oldPrice:1199,rating:4.4,reviews:61,sizes:["S","M","L","XL","XXL"],colors:[["White","#f5f3ec"],["Blue","#9db2c3"]],image:"https://images.unsplash.com/photo-1596755094514-f87e34085b2c?auto=format&fit=crop&w=800&q=80",tag:"",isNew:true,description:"A crisp, versatile shirt that moves easily from weekday plans to weekend dinners."},
 {id:5,name:"Utility Everyday Jacket",department:"Men",category:"Jackets",price:1799,oldPrice:2299,rating:4.5,reviews:47,sizes:["M","L","XL","XXL"],colors:[["Olive","#6a715b"],["Tan","#bca58b"]],image:"https://images.unsplash.com/photo-1551028719-00167b16eac5?auto=format&fit=crop&w=800&q=80",tag:"",isNew:true,description:"A lightweight utility layer with practical pockets and an effortlessly structured finish."},
 {id:6,name:"Tailored Everyday Trousers",department:"Men",category:"Trousers",price:1199,oldPrice:1499,rating:4.3,reviews:35,sizes:["S","M","L","XL"],colors:[["Beige","#c9bca6"],["Black","#242424"]],image:"https://images.unsplash.com/photo-1473966968600-fa801b869a1a?auto=format&fit=crop&w=800&q=80",tag:"",isNew:false,description:"Comfort-first trousers with a clean cut, made for smart casual days and easy evenings."},
 {id:7,name:"Floral Summer Dress",department:"Women",category:"Dresses",price:1499,oldPrice:1999,rating:4.8,reviews:143,sizes:["XS","S","M","L","XL"],colors:[["Floral","#d7a9a2"],["Blue","#8ca6ba"]],image:"https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?auto=format&fit=crop&w=800&q=80",tag:"Bestseller",isNew:true,description:"A light, floaty dress with a cheerful print and an easy silhouette for sunny days."},
 {id:8,name:"Soft Knit Everyday Top",department:"Women",category:"Tops",price:699,oldPrice:899,rating:4.5,reviews:77,sizes:["XS","S","M","L","XL"],colors:[["Cream","#e7dfd2"],["Rust","#a65d43"],["Black","#242424"]],image:"https://images.unsplash.com/photo-1551163943-3f6a855d1153?auto=format&fit=crop&w=800&q=80",tag:"",isNew:false,description:"An easy-to-layer knit top with a soft hand-feel and a flattering everyday fit."},
 {id:9,name:"Straight Fit Blue Jeans",department:"Women",category:"Jeans",price:1199,oldPrice:1599,rating:4.6,reviews:103,sizes:["XS","S","M","L","XL"],colors:[["Blue","#657e96"],["Dark blue","#344a60"]],image:"https://images.unsplash.com/photo-1541099649105-f69ad21f3246?auto=format&fit=crop&w=800&q=80",tag:"",isNew:false,description:"A wardrobe-building pair of straight-fit jeans designed to work with almost everything."},
 {id:10,name:"Everyday Printed Kurti",department:"Women",category:"Kurtis",price:799,oldPrice:1099,rating:4.7,reviews:119,sizes:["S","M","L","XL","XXL"],colors:[["Terracotta","#b66c55"],["Teal","#547d7b"]],image:"https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&w=800&q=80",tag:"",isNew:true,description:"An easy printed kurti that pairs beautifully with your favourite denim or everyday trousers."},
 {id:11,name:"Flowy Midi Skirt",department:"Women",category:"Skirts",price:999,oldPrice:1299,rating:4.3,reviews:43,sizes:["XS","S","M","L"],colors:[["Black","#262626"],["Sand","#c7b8a2"]],image:"https://images.unsplash.com/photo-1583496661160-fb5886a0aaaa?auto=format&fit=crop&w=800&q=80",tag:"",isNew:false,description:"A fluid midi skirt with movement and a versatile shape for day-to-night styling."},
 {id:12,name:"Classic Drape Saree",department:"Women",category:"Sarees",price:1899,oldPrice:2499,rating:4.9,reviews:56,sizes:["Free Size"],colors:[["Rose","#bb8e8d"],["Green","#526b56"]],image:"https://images.unsplash.com/photo-1610030469668-8e9f641aaf4a?auto=format&fit=crop&w=800&q=80",tag:"",isNew:true,description:"A graceful drape with a rich, celebratory feel for special moments and festive evenings."},
 {id:13,name:"Playday Kids T-shirt",department:"Kids",category:"Kids' T-shirts",price:399,oldPrice:549,rating:4.6,reviews:67,sizes:["XS","S","M","L"],colors:[["Yellow","#e6c76a"],["Blue","#7297b5"],["White","#f0eee7"]],image:"https://images.unsplash.com/photo-1519238263530-99bdd11df2ea?auto=format&fit=crop&w=800&q=80",tag:"",isNew:true,description:"A soft, colourful tee for little adventures, made for comfort and plenty of play."},
 {id:14,name:"Little Days Denim",department:"Kids",category:"Jeans",price:699,oldPrice:899,rating:4.4,reviews:39,sizes:["XS","S","M","L"],colors:[["Blue","#6483a0"],["Dark blue","#354a60"]],image:"https://images.unsplash.com/photo-1519238263530-99bdd11df2ea?auto=format&fit=crop&w=800&q=80",tag:"",isNew:false,description:"Durable, easy-wear denim with room to move through all their busy little days."},
 {id:15,name:"Sunday Play Dress",department:"Kids",category:"Dresses",price:799,oldPrice:999,rating:4.8,reviews:51,sizes:["XS","S","M","L"],colors:[["Pink","#d8a6b1"],["Cream","#e8dfd2"]],image:"https://images.unsplash.com/photo-1503919005314-30d93d07d823?auto=format&fit=crop&w=800&q=80",tag:"",isNew:true,description:"A sweet, comfortable dress for parties, playdates, and all the little celebrations."},
 {id:16,name:"Mini Festive Set",department:"Kids",category:"Ethnic Wear",price:1099,oldPrice:1499,rating:4.5,reviews:29,sizes:["XS","S","M","L"],colors:[["Gold","#c9a86a"],["Blue","#6885a0"]],image:"https://images.unsplash.com/photo-1519238263530-99bdd11df2ea?auto=format&fit=crop&w=800&q=80",tag:"",isNew:false,description:"A cheerful festive outfit made for family gatherings, photos, and happy celebrations."},
 {id:17,name:"Weekend Cotton Shirt",department:"Men",category:"Shirts",price:749,oldPrice:999,rating:4.2,reviews:28,sizes:["S","M","L","XL"],colors:[["Sage","#a6b3a0"],["White","#f1eee6"]],image:"https://images.unsplash.com/photo-1603252109303-2751441dd157?auto=format&fit=crop&w=800&q=80",tag:"",isNew:true,description:"A breathable cotton shirt with a relaxed feel for weekend plans and warm afternoons."},
 {id:18,name:"Modern Co-ord Set",department:"Women",category:"Tops",price:1599,oldPrice:1999,rating:4.7,reviews:72,sizes:["XS","S","M","L"],colors:[["Oat","#d3c6b1"],["Black","#292929"]],image:"https://images.unsplash.com/photo-1539109136881-3be0616acf4b?auto=format&fit=crop&w=800&q=80",tag:"Trending",isNew:true,description:"A polished co-ord set that makes getting dressed feel wonderfully effortless."}
];

const $ = (s, root=document) => root.querySelector(s);
const $$ = (s, root=document) => [...root.querySelectorAll(s)];
const money = n => "₹" + Number(n).toLocaleString("en-IN");
const readStore = (key, fallback) => { try { return JSON.parse(localStorage.getItem(key)) ?? fallback; } catch { return fallback; } };
const saveStore = (key, value) => localStorage.setItem(key, JSON.stringify(value));
let cart = readStore("stylenest-cart", []);
let wishlist = readStore("stylenest-wishlist", []);
let currentCategory = "All", currentTag = "", searchTerm = "", currentModalProduct = null, modalSize = "", modalColor = 0, modalQty = 1;
let recentlyViewed = readStore("stylenest-recent", []);
let visibleLimit = 12;
const categoryNames = [...new Set(products.map(p=>p.category))];

/* ---------- Colour → image handling ---------- */
const cardColor = {};      // productId -> colour index chosen on the product card
const imageCache = {};     // "productId-colourIndex" -> {src, exact}
const slug = s => String(s).toLowerCase().replace(/[^a-z0-9]+/g,"-").replace(/^-|-$/g,"");
const colorKey = (p,i) => `${p.id}-${i}`;
function colorCandidates(p,i){
 const name=p.colors[i][0], list=[];
 if(p.colorImages && p.colorImages[name]) list.push(p.colorImages[name]);
 list.push(`${IMAGE_DIR}/${p.id}-${slug(name)}.jpg`);
 return list;
}
/* Synchronous: the image already resolved for this colour, else the product's main image. */
function knownImage(p,i){ const c=imageCache[colorKey(p,i)]; return c?c.src:p.image; }
/* Asynchronous: finds the first image that really loads for this colour. */
function resolveColorImage(p,i,done){
 const key=colorKey(p,i);
 if(imageCache[key]){done(imageCache[key]);return;}
 const candidates=colorCandidates(p,i);
 (function next(){
  if(!candidates.length){
   const result={src:p.image,exact:i===0};
   imageCache[key]=result;
   if(i>0)console.warn(`[StyleNest] Missing colour photo: ${IMAGE_DIR}/${p.id}-${slug(p.colors[i][0])}.jpg  (${p.name} – ${p.colors[i][0]})`);
   done(result);return;
  }
  const src=candidates.shift(), img=new Image();
  img.onload=()=>{imageCache[key]={src,exact:true};done(imageCache[key]);};
  img.onerror=next;
  img.src=src;
 })();
}

function icons(){ if(window.lucide) lucide.createIcons(); }
function toast(message){ const el=document.createElement("div");el.className="toast";el.innerHTML=`<i data-lucide="check-circle-2"></i><span>${message}</span>`;$("#toastRegion").append(el);icons();setTimeout(()=>el.remove(),3000); }
function getProduct(id){return products.find(p=>p.id===Number(id));}
function discount(p){return p.oldPrice?Math.round((1-p.price/p.oldPrice)*100):0;}
function inWishlist(id){return wishlist.some(x=>x.id===Number(id));}
function cartCount(){return cart.reduce((sum,item)=>sum+item.qty,0);}
function updateCounts(){ $("#cartCount").textContent=cartCount();$("#wishCount").textContent=wishlist.length;$("#drawerCartCount").textContent=`(${cartCount()})`;$("#drawerWishCount").textContent=`(${wishlist.length})`; }
function productCard(p){
 const saved=inWishlist(p.id), disc=discount(p), selColor=cardColor[p.id]||0;
 return `<article class="product-card" data-id="${p.id}">
  <div class="product-image-wrap"><img src="${knownImage(p,selColor)}" alt="${p.name}" loading="lazy" onerror="this.onerror=null;this.src='https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&w=800&q=80'">
  ${p.isNew?'<span class="product-badge">NEW IN</span>':p.tag?`<span class="product-badge">${p.tag.toUpperCase()}</span>`:''}${disc?`<span class="product-badge sale" style="top:${p.isNew||p.tag?'39px':'10px'}">${disc}% OFF</span>`:''}
  <button class="wish-btn ${saved?'saved':''}" data-wish="${p.id}" aria-label="${saved?'Remove from':'Add to'} wishlist"><i data-lucide="heart"></i></button>
  <button class="quick-view" data-quick="${p.id}">QUICK VIEW +</button></div>
  <div class="product-info"><div class="product-meta"><span class="product-category">${p.department} · ${p.category}</span><span class="product-rating"><span>★</span> ${p.rating}</span></div><h3 class="product-name">${p.name}</h3><div class="product-price">${money(p.price)} ${p.oldPrice?`<span class="old-price">${money(p.oldPrice)}</span><span class="discount">${disc}% off</span>`:''}</div>
  <div class="product-swatches">${p.colors.slice(0,4).map((c,i)=>`<button type="button" class="swatch ${i===selColor?'selected':''}" data-card-color="${i}" style="background:${c[1]}" title="${c[0]}" aria-label="Colour: ${c[0]}" aria-pressed="${i===selColor}"></button>`).join("")}</div>
  <div class="product-card-bottom"><button class="add-cart" data-quick="${p.id}"><i data-lucide="shopping-bag"></i> Add to bag</button><button class="view-btn" data-quick="${p.id}" aria-label="View product"><i data-lucide="eye"></i></button></div></div></article>`;
}
function currentFilters(){
 const dept=$('input[name="department"]:checked')?.value||currentCategory;
 const sizes=$$('#sizeFilters input:checked').map(el=>el.value);
 return {dept:currentCategory!=="All"?currentCategory:dept,cat:$("#subcategoryFilter").value,min:Number($("#minPrice").value)||0,max:Number($("#maxPrice").value)||5000,sizes,rating:Number($('input[name="rating"]:checked')?.value||0),sale:$("#saleOnly").checked,newOnly:$("#newOnly").checked};
}
function filteredProducts(){
 const f=currentFilters();let list=products.filter(p=>{
  const text=`${p.name} ${p.category} ${p.department} ${p.description}`.toLowerCase();
  return (f.dept==="All"||p.department===f.dept)&&(f.cat==="All"||p.category===f.cat)&&p.price>=f.min&&p.price<=f.max&&(!f.sizes.length||f.sizes.some(s=>p.sizes.includes(s)))&&p.rating>=f.rating&&(!f.sale||discount(p)>0)&&(!f.newOnly||p.isNew)&&(!currentTag||currentTag==="new"&&p.isNew||currentTag==="sale"&&discount(p)>0)&&(!searchTerm||text.includes(searchTerm.toLowerCase()));
 });
 const sort=$("#sortSelect").value;
 if(sort==="price-asc")list.sort((a,b)=>a.price-b.price);
 else if(sort==="price-desc")list.sort((a,b)=>b.price-a.price);
 else if(sort==="newest")list.sort((a,b)=>Number(b.isNew)-Number(a.isNew)||b.id-a.id);
 else if(sort==="rating")list.sort((a,b)=>b.rating-a.rating);
 else if(currentTag==="new")list.sort((a,b)=>Number(b.isNew)-Number(a.isNew)||b.id-a.id);
 return list;
}
function renderProducts(){
 const list=filteredProducts();$("#productCount").textContent=`${list.length} ${list.length===1?'piece':'pieces'}`;
 $("#productGrid").innerHTML=list.slice(0,visibleLimit).map(productCard).join("");
 $("#emptyState").classList.toggle("hidden",list.length>0);$("#productGrid").classList.toggle("hidden",!list.length);
 $("#loadMore").classList.toggle("hidden",list.length<=visibleLimit);
 $("#shopTitle").innerHTML=currentTag==="sale"?'The <em>sale</em> edit':currentTag==="new"?'Fresh <em>arrivals</em>':currentCategory==="All"?'The <em>latest</em> & greatest':`${currentCategory}'s <em>edit</em>`;
 $$(".chip").forEach(c=>c.classList.toggle("active",c.dataset.category===currentCategory));
 const tags=[];if(searchTerm)tags.push(`Search: ${searchTerm}`);if(currentCategory!=="All")tags.push(currentCategory);if(currentTag)tags.push(currentTag==="new"?"New arrivals":"On sale");$("#activeFilters").innerHTML=tags.map(t=>`<span class="active-filter">${t}<button data-remove-tag="${t}">×</button></span>`).join("");
 $("#filterCount").textContent=[...$$('#sizeFilters input:checked')].length||"";icons();
}
function setCategory(category){
 currentCategory=category||"All";currentTag="";visibleLimit=12;
 $('input[name="department"][value="'+currentCategory+'"]')?.click();
 renderProducts();$("#shop").scrollIntoView({behavior:"smooth"});
 $$(".nav-link").forEach(a=>a.classList.toggle("active",a.dataset.category===currentCategory));
}
function setTag(tag){currentTag=tag;currentCategory="All";visibleLimit=12;renderProducts();$("#shop").scrollIntoView({behavior:"smooth"});}
function resetFilters(){
 currentCategory="All";currentTag="";searchTerm="";$("#searchInput").value="";$("#minPrice").value=0;$("#maxPrice").value=5000;$("#maxRange").value=5000;$("#subcategoryFilter").value="All";$("#saleOnly").checked=false;$("#newOnly").checked=false;$$('#sizeFilters input').forEach(x=>x.checked=false);$('input[name="department"][value="All"]').checked=true;$('input[name="rating"][value="0"]').checked=true;$("#sortSelect").value="featured";visibleLimit=12;renderProducts();
}
function initFilters(){
 $("#subcategoryFilter").innerHTML='<option value="All">All categories</option>'+categoryNames.map(c=>`<option value="${c}">${c}</option>`).join("");
}
function toggleWishlist(id){
 const p=getProduct(id);if(!p)return;
 if(inWishlist(id)){wishlist=wishlist.filter(x=>x.id!==Number(id));toast("Removed from your wishlist");}
 else{wishlist.push({id:p.id});toast("Saved to your wishlist");}
 saveStore("stylenest-wishlist",wishlist);updateCounts();renderProducts();renderWishlist();
}
function addToCart(id,size,colorIndex=0,qty=1){
 const p=getProduct(id);if(!p)return;
 if(!size){toast("Please choose a size first");openQuickView(id,colorIndex);return;}
 const color=p.colors[colorIndex]||p.colors[0];const key=`${p.id}-${size}-${color[0]}`;
 const existing=cart.find(item=>item.key===key);
 if(existing)existing.qty+=qty;else cart.push({key,id:p.id,size,color:color[0],colorHex:color[1],image:knownImage(p,colorIndex),qty});
 saveStore("stylenest-cart",cart);updateCounts();renderCart();toast(`${p.name} added to your bag`);
}
function renderCart(){
 const host=$("#cartItems"),footer=$("#cartFooter");
 if(!cart.length){host.innerHTML=`<div class="drawer-empty"><i data-lucide="shopping-bag"></i><h3>Your bag is taking a break</h3><p>Find a few pieces that feel like you.</p><button class="btn btn-dark" data-close>Explore the collection</button></div>`;footer.innerHTML="";icons();return;}
 host.innerHTML=cart.map(item=>{const p=getProduct(item.id);return `<div class="cart-line"><img src="${item.image||p.image}" alt="${p.name} in ${item.color}"><div><h3>${p.name}</h3><div class="line-sub">Size: ${item.size} · Color: ${item.color}</div><div class="line-price">${money(p.price)}</div><div class="quantity-control"><button data-qty="${item.key}" data-change="-1" aria-label="Decrease quantity">−</button><span>${item.qty}</span><button data-qty="${item.key}" data-change="1" aria-label="Increase quantity">+</button></div></div><button class="line-remove" data-remove-cart="${item.key}" aria-label="Remove item"><i data-lucide="trash-2"></i></button></div>`}).join("");
 const subtotal=cart.reduce((sum,item)=>sum+getProduct(item.id).price*item.qty,0),delivery=subtotal>=1499?0:99,total=subtotal+delivery;
 footer.innerHTML=`<div class="shipping-note">${delivery===0?"Lovely! Your delivery is on us.":`You're ${money(1499-subtotal)} away from free delivery.`}</div><div class="cart-totals"><span>Subtotal</span><span>${money(subtotal)}</span></div><div class="cart-totals"><span>Delivery</span><span>${delivery===0?"FREE":money(delivery)}</span></div><div class="cart-totals total"><span>Total</span><span>${money(total)}</span></div><button class="btn btn-dark" id="checkoutStart">Proceed to checkout <i data-lucide="arrow-up-right"></i></button><button class="btn btn-outline" data-close>Continue shopping</button><p class="line-sub" style="text-align:center;margin-top:12px">Demo checkout only. No real payment.</p>`;
 icons();
}
function renderWishlist(){
 const host=$("#wishlistItems");
 if(!wishlist.length){host.innerHTML=`<div class="drawer-empty"><i data-lucide="heart"></i><h3>Your wishlist is waiting</h3><p>Tap the heart on any piece to save it here.</p><button class="btn btn-dark" data-close>Discover styles</button></div>`;icons();return;}
 host.innerHTML=wishlist.map(w=>{const p=getProduct(w.id);if(!p)return"";return `<div class="wish-line"><img src="${p.image}" alt="${p.name}"><div><h3>${p.name}</h3><div class="line-price">${money(p.price)}</div><div class="line-actions"><button data-wish-cart="${p.id}">Add to bag</button><button data-wish-remove="${p.id}">Remove</button></div></div></div>`}).join("");icons();
}
function openDrawer(which){closeDrawers();$("#overlay").classList.add("open");$(which).classList.add("open");document.body.style.overflow="hidden";}
function closeDrawers(){$$(".drawer").forEach(d=>d.classList.remove("open"));$("#overlay").classList.remove("open");document.body.style.overflow="";}
function openModal(html){$("#modalBody").innerHTML=html;$("#modalWrap").classList.remove("hidden");document.body.style.overflow="hidden";icons();}
function closeModal(){$("#modalWrap").classList.add("hidden");document.body.style.overflow="";currentModalProduct=null;}

/* Applies a colour choice inside Quick View: highlight, name, and the real image. */
function showModalColor(i){
 const p=currentModalProduct;if(!p||!p.colors[i])return;
 modalColor=i;
 $$("#modalColors .color-choice").forEach(b=>{const on=Number(b.dataset.color)===i;b.classList.toggle("selected",on);b.setAttribute("aria-pressed",on);});
 $("#selectedColorName").textContent=p.colors[i][0];
 const img=$("#modalImage");if(img)img.alt=`${p.name} in ${p.colors[i][0]}`;
 resolveColorImage(p,i,r=>{
  if(currentModalProduct!==p||modalColor!==i)return;   // user already moved on
  const el=$("#modalImage");
  if(el&&el.getAttribute("src")!==r.src)el.src=r.src;
  const note=$("#colorNote");if(note)note.classList.toggle("hidden",r.exact);
 });
}
function openQuickView(id,colorIndex=0){
 const p=getProduct(id);if(!p)return;currentModalProduct=p;modalSize="";modalColor=p.colors[colorIndex]?colorIndex:0;modalQty=1;
 recentlyViewed=[p.id,...recentlyViewed.filter(x=>x!==p.id)].slice(0,5);saveStore("stylenest-recent",recentlyViewed);
 const disc=discount(p);
 openModal(`<div class="quick-modal-grid"><img id="modalImage" src="${knownImage(p,modalColor)}" alt="${p.name} in ${p.colors[modalColor][0]}"><div class="quick-modal-copy"><span class="eyebrow">${p.department} / ${p.category}</span><h2>${p.name}</h2><div class="product-rating"><span>★</span> ${p.rating} <span style="color:var(--muted)">(${p.reviews} reviews)</span></div><div class="product-price">${money(p.price)} ${p.oldPrice?`<span class="old-price">${money(p.oldPrice)}</span><span class="discount">${disc}% off</span>`:""}</div><p>${p.description}</p><span class="choice-label">Choose size <span style="color:var(--accent)">*</span></span><div class="choice-row" id="modalSizes">${p.sizes.map(s=>`<button class="choice-btn" data-size="${s}">${s}</button>`).join("")}</div><span class="choice-label">Colour: <span id="selectedColorName">${p.colors[modalColor][0]}</span></span><div class="choice-row" id="modalColors">${p.colors.map((c,i)=>`<button type="button" class="choice-btn color-choice ${i===modalColor?'selected':''}" data-color="${i}" style="background:${c[1]}" aria-label="${c[0]}" aria-pressed="${i===modalColor}" title="${c[0]}"></button>`).join("")}</div><div id="colorNote" class="line-sub hidden" style="margin:-6px 0 12px">Photo for this colour is coming soon. Showing our standard image.</div><div class="quantity-row"><span class="choice-label" style="margin:0">Quantity</span><div class="quantity-control"><button id="modalQtyMinus">−</button><span id="modalQtyValue">1</span><button id="modalQtyPlus">+</button></div></div><button class="btn btn-dark" id="modalAddCart">Add to bag · ${money(p.price)} <i data-lucide="shopping-bag"></i></button><button class="btn btn-outline" id="modalWish">${inWishlist(p.id)?"♥ Saved to wishlist":"♡ Add to wishlist"}</button><div class="availability"><i data-lucide="check-circle-2" style="width:13px;vertical-align:middle"></i> In stock · Demo product information</div></div></div>`);
 showModalColor(modalColor);
}
function openInfo(title){
 const copy={
 "About StyleNest":"StyleNest is a sample fashion storefront created to demonstrate a modern online shopping experience. Our product range, reviews, and order information are illustrative demo content.",
 "Contact":"Need help with this demo? Email hello@stylenest.example. This is a sample address and does not represent a monitored support inbox.",
 "FAQs":"This demo lets you browse products, save favourites, and test cart interactions. It does not connect to a warehouse, payment gateway, or delivery service.",
 "Shipping":"Delivery charges are simulated: orders of ₹1,499 or more show free delivery, while smaller demo orders show ₹99 delivery.",
 "Returns":"The demo shows a sample 7-day return policy for illustrative purposes. No real purchases or returns can be created.",
 "Privacy policy":"This front-end demo stores cart, wishlist, and theme preferences in your browser's localStorage. Avoid entering sensitive personal information. No secure account system is connected.",
 "Terms of use":"This website is for demonstration and learning purposes. Product descriptions, reviews, prices, and availability are sample content.",
 "Demo store notice":"This is a demonstration storefront. Checkout does not process payment, create a real order, or arrange delivery. Login and registration are UI demonstrations only."
 };
 openModal(`<div class="info-content"><span class="eyebrow">STYLENEST · HELP</span><h2>${title}</h2><p>${copy[title]||"Thanks for exploring StyleNest. This is a demo storefront."}</p><button class="btn btn-dark" id="infoDone">Got it</button></div>`);
}
function openAccount(mode="login"){
 const isRegister=mode==="register";
 openModal(`<div class="form-modal"><span class="eyebrow">WELCOME TO STYLENEST</span><h2>${isRegister?"Create your account":"Good to see you."}</h2><p>${isRegister?"Make a little space for your favourite styles.":"Sign in to keep your style favourites close."}</p><form id="accountForm">${isRegister?`<div class="form-field"><label for="accountName">Full name</label><input id="accountName" required autocomplete="name" placeholder="Your full name"></div>`:""}<div class="form-field"><label for="accountEmail">Email address</label><input id="accountEmail" type="email" required autocomplete="email" placeholder="you@example.com"></div><div class="form-field"><label for="accountPassword">Password</label><input id="accountPassword" type="password" required minlength="8" autocomplete="${isRegister?"new-password":"current-password"}" placeholder="At least 8 characters"></div>${isRegister?`<div class="form-field"><label for="accountConfirm">Confirm password</label><input id="accountConfirm" type="password" required minlength="8" autocomplete="new-password" placeholder="Repeat password"></div>`:""}<div class="demo-note">Demo UI only. This form does not create a secure account or authenticate you. Never enter a password you use elsewhere.</div><button class="btn btn-dark" type="submit">${isRegister?"Create demo account":"Sign in demo"} <i data-lucide="arrow-up-right"></i></button></form><div class="form-switch">${isRegister?"Already have an account?":"New to StyleNest?"} <button id="accountSwitch">${isRegister?"Sign in":"Create an account"}</button></div></div>`);
}
function openCheckout(){
 if(!cart.length){toast("Your bag is empty");return;}
 closeDrawers();const subtotal=cart.reduce((sum,item)=>sum+getProduct(item.id).price*item.qty,0),delivery=subtotal>=1499?0:99;
 openModal(`<div class="form-modal" style="max-width:680px"><span class="eyebrow">ALMOST YOURS</span><h2>Delivery details</h2><p>Complete this demo form to see the order confirmation. No payment is taken.</p><div class="checkout-layout"><form id="checkoutForm"><div class="form-grid"><div class="form-field full"><label for="fullName">Full name</label><input id="fullName" required autocomplete="name" placeholder="Name on the delivery"></div><div class="form-field full"><label for="checkoutEmail">Email address</label><input id="checkoutEmail" type="email" required autocomplete="email" placeholder="you@example.com"></div><div class="form-field full"><label for="phone">Phone number</label><input id="phone" type="tel" required pattern="[0-9+() -]{8,18}" autocomplete="tel" placeholder="Your contact number"></div><div class="form-field full"><label for="address">Delivery address</label><textarea id="address" required rows="2" placeholder="House number, street, area"></textarea></div><div class="form-field"><label for="city">City</label><input id="city" required></div><div class="form-field"><label for="state">State</label><input id="state" required></div><div class="form-field full"><label for="pin">PIN code</label><input id="pin" required pattern="[0-9]{6}" maxlength="6" inputmode="numeric" placeholder="6-digit PIN code"></div></div><div class="demo-note">Demo checkout. Do not enter payment card details. Submitting only displays a sample confirmation in this browser.</div><button class="btn btn-dark" type="submit">Place demo order <i data-lucide="arrow-up-right"></i></button></form><aside class="checkout-summary"><h3>Your order</h3>${cart.map(item=>`<div class="summary-row"><span>${getProduct(item.id).name} × ${item.qty}<br><small>${item.size} · ${item.color}</small></span><strong>${money(getProduct(item.id).price*item.qty)}</strong></div>`).join("")}<div class="summary-row"><span>Delivery</span><span>${delivery?money(delivery):"FREE"}</span></div><div class="summary-row summary-total"><span>Total</span><span>${money(subtotal+delivery)}</span></div></aside></div></div>`);
}
function finishCheckout(form){
 const orderId="SN-DEMO-"+Math.random().toString(36).slice(2,8).toUpperCase();
 cart=[];saveStore("stylenest-cart",cart);updateCounts();renderCart();
 openModal(`<div class="success-box"><div class="success-icon"><i data-lucide="check" style="width:28px;height:28px"></i></div><span class="eyebrow">DEMO ORDER CONFIRMED</span><h2>That was easy.</h2><p>Your sample order <strong>${orderId}</strong> has been submitted in this demo.<br><br><strong>No real payment was processed and no delivery was created.</strong><br>Your form details were not sent to a server.</p><button class="btn btn-dark" id="finishShopping">Back to shopping</button></div>`);
}
function themeInit(){const dark=localStorage.getItem("stylenest-theme")==="dark";document.body.classList.toggle("dark",dark);$("#themeToggle").innerHTML=`<i data-lucide="${dark?"sun":"moon"}"></i>`;icons();}
function toggleTheme(){const dark=!document.body.classList.contains("dark");document.body.classList.toggle("dark",dark);localStorage.setItem("stylenest-theme",dark?"dark":"light");$("#themeToggle").innerHTML=`<i data-lucide="${dark?"sun":"moon"}"></i>`;icons();}
function searchOpen(){ $("#searchBar").classList.add("open");$("#searchInput").focus(); }
function wireEvents(){
 document.addEventListener("click",e=>{
  /* Colour swatch on a product card: change that card's image right away. */
  const swatch=e.target.closest("[data-card-color]");
  if(swatch){
   e.preventDefault();
   const card=swatch.closest(".product-card"),p=getProduct(card.dataset.id),i=Number(swatch.dataset.cardColor);
   cardColor[p.id]=i;
   $$("[data-card-color]",card).forEach(s=>{const on=s===swatch;s.classList.toggle("selected",on);s.setAttribute("aria-pressed",on);});
   resolveColorImage(p,i,r=>{
    if(cardColor[p.id]!==i)return;
    const img=$(".product-image-wrap img",card);
    if(img)img.src=r.src;
   });
   return;
  }
  const cat=e.target.closest("[data-category]");if(cat){e.preventDefault();setCategory(cat.dataset.category);$("#mainNav").classList.remove("open");}
  const tag=e.target.closest("[data-tag]");if(tag){e.preventDefault();setTag(tag.dataset.tag);}
  const quick=e.target.closest("[data-quick]");if(quick){openQuickView(quick.dataset.quick,cardColor[Number(quick.dataset.quick)]||0);}
  const wish=e.target.closest("[data-wish]");if(wish){e.preventDefault();toggleWishlist(wish.dataset.wish);}
  const close=e.target.closest("[data-close]");if(close)closeDrawers();
  const remove=e.target.closest("[data-remove-cart]");if(remove){cart=cart.filter(x=>x.key!==remove.dataset.removeCart);saveStore("stylenest-cart",cart);updateCounts();renderCart();toast("Item removed from your bag");}
  const qty=e.target.closest("[data-qty]");if(qty){const item=cart.find(x=>x.key===qty.dataset.qty);if(item){item.qty+=Number(qty.dataset.change);if(item.qty<=0)cart=cart.filter(x=>x.key!==item.key);saveStore("stylenest-cart",cart);updateCounts();renderCart();}}
  const wishRemove=e.target.closest("[data-wish-remove]");if(wishRemove)toggleWishlist(wishRemove.dataset.wishRemove);
  const wishCart=e.target.closest("[data-wish-cart]");if(wishCart){const p=getProduct(wishCart.dataset.wishCart);closeDrawers();openQuickView(p.id,cardColor[p.id]||0);}
  const removeTag=e.target.closest("[data-remove-tag]");if(removeTag){if(removeTag.dataset.removeTag.startsWith("Search:")){searchTerm="";$("#searchInput").value="";}else if(["Men","Women","Kids"].includes(removeTag.dataset.removeTag))currentCategory="All";else currentTag="";renderProducts();}
  const info=e.target.closest("[data-info]");if(info){e.preventDefault();openInfo(info.dataset.info);}
 });
 $("#menuToggle").addEventListener("click",()=>$("#mainNav").classList.toggle("open"));
 $("#searchToggle").addEventListener("click",()=>{$("#searchBar").classList.toggle("open");if($("#searchBar").classList.contains("open"))$("#searchInput").focus();});
 $("#searchInput").addEventListener("input",e=>{searchTerm=e.target.value.trim();visibleLimit=12;renderProducts();});
 $("#clearSearch").addEventListener("click",()=>{searchTerm="";$("#searchInput").value="";renderProducts();});
 $("#cartOpen").addEventListener("click",()=>{renderCart();openDrawer("#cartDrawer");});
 $("#cartFooter").addEventListener("click",e=>{if(e.target.closest("#checkoutStart"))openCheckout();});
 $("#wishlistOpen").addEventListener("click",()=>{renderWishlist();openDrawer("#wishlistDrawer");});
 $("#overlay").addEventListener("click",closeDrawers);
 $("#themeToggle").addEventListener("click",toggleTheme);
 $("#accountOpen").addEventListener("click",()=>openAccount());
 $("#sortSelect").addEventListener("change",renderProducts);
 $("#subcategoryFilter").addEventListener("change",renderProducts);
 $("#minPrice").addEventListener("change",()=>{if(Number($("#minPrice").value)>Number($("#maxPrice").value))$("#maxPrice").value=$("#minPrice").value;renderProducts();});
 $("#maxPrice").addEventListener("change",()=>{ $("#maxRange").value=Math.min(5000,Number($("#maxPrice").value)||5000);renderProducts();});
 $("#maxRange").addEventListener("input",()=>{$("#maxPrice").value=$("#maxRange").value;renderProducts();});
 $("#sizeFilters").addEventListener("change",renderProducts);
 $$('input[name="department"],input[name="rating"]').forEach(el=>el.addEventListener("change",()=>{if(el.name==="department")currentCategory=el.value;renderProducts();}));
 $("#saleOnly").addEventListener("change",renderProducts);$("#newOnly").addEventListener("change",renderProducts);
 $("#resetFilters").addEventListener("click",resetFilters);$("#emptyReset").addEventListener("click",resetFilters);
 $("#filterToggle").addEventListener("click",()=>$("#filterPanel").classList.toggle("open"));
 $("#applyFilters").addEventListener("click",()=>{$("#filterPanel").classList.remove("open");renderProducts();});
 $("#loadMore").addEventListener("click",()=>{visibleLimit+=6;renderProducts();});
 $("#modalClose").addEventListener("click",closeModal);
 $("#modalWrap").addEventListener("click",e=>{if(e.target===$("#modalWrap"))closeModal();});
 $("#modalBody").addEventListener("click",e=>{
  const size=e.target.closest("[data-size]");if(size){modalSize=size.dataset.size;$$("[data-size]",$("#modalBody")).forEach(b=>b.classList.toggle("selected",b===size));}
  const color=e.target.closest("[data-color]");
  if(color&&currentModalProduct)showModalColor(Number(color.dataset.color));
  if(e.target.closest("#modalQtyMinus")){modalQty=Math.max(1,modalQty-1);$("#modalQtyValue").textContent=modalQty;}
  if(e.target.closest("#modalQtyPlus")){modalQty=Math.min(10,modalQty+1);$("#modalQtyValue").textContent=modalQty;}
  if(e.target.closest("#modalAddCart")){if(!modalSize){toast("Please choose a size first");$("#modalSizes").scrollIntoView({behavior:"smooth",block:"center"});return;}const p=currentModalProduct;cardColor[p.id]=modalColor;addToCart(p.id,modalSize,modalColor,modalQty);closeModal();renderProducts();}
  if(e.target.closest("#modalWish")){const id=currentModalProduct.id;cardColor[id]=modalColor;toggleWishlist(id);$("#modalWish").textContent=inWishlist(id)?"♥ Saved to wishlist":"♡ Add to wishlist";}
  if(e.target.closest("#accountSwitch"))openAccount($("#accountSwitch").textContent==="Create an account"?"register":"login");
  if(e.target.closest("#infoDone"))closeModal();
  if(e.target.closest("#checkoutStart"))openCheckout();
  if(e.target.closest("#finishShopping")){closeModal();$("#shop").scrollIntoView({behavior:"smooth"});}
 });
 $("#modalBody").addEventListener("submit",e=>{
  if(e.target.id==="accountForm"){e.preventDefault();const isRegister=$("#accountName");if(isRegister&&$("#accountPassword").value!==$("#accountConfirm").value){toast("Passwords do not match");return;}toast(isRegister?"Demo registration validated. No account was created.":"Demo form validated. No login occurred.");closeModal();}
  if(e.target.id==="checkoutForm"){e.preventDefault();if(!e.target.reportValidity())return;finishCheckout(e.target);}
 });
 $("#newsletterForm").addEventListener("submit",e=>{e.preventDefault();const email=$("#newsletterEmail").value.trim();if(!email)return;toast("You're on the demo list. Thanks for joining!");e.target.reset();});
 $("#backToTop").addEventListener("click",()=>window.scrollTo({top:0,behavior:"smooth"}));
 $("#floatingTop").addEventListener("click",()=>window.scrollTo({top:0,behavior:"smooth"}));
 window.addEventListener("scroll",()=>$("#floatingTop").classList.toggle("visible",window.scrollY>500));
 document.addEventListener("keydown",e=>{if(e.key==="Escape"){closeModal();closeDrawers();$("#mainNav").classList.remove("open");}});
}
function init(){initFilters();themeInit();renderProducts();renderCart();renderWishlist();updateCounts();wireEvents();icons();}
document.addEventListener("DOMContentLoaded",init);
