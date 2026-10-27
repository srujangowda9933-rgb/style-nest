StyleNest — Wear Your Style. Own Your Story.

RUN IT
1. Create a folder named StyleNest.
2. Put index.html, style.css, and script.js in that folder.
3. Double-click index.html to open it in a modern browser.
   For a smoother local development workflow, open the folder in VS Code and use the Live Server extension.

NOTES
- This is a front-end demo. It has no backend, secure authentication, real payment processing, or delivery service.
- Cart, wishlist, and theme preferences are saved in browser localStorage.
- Product images use remote Unsplash image URLs, and fonts/icons use online CDNs. An internet connection is needed for these assets.
- Checkout form values are not sent to a server. Avoid entering sensitive personal information.
- Sample products, reviews, availability, and prices are illustrative.

CUSTOMIZE PRODUCTS
Open script.js and edit the `products` array near the top. Each product has:
id, name, department, category, price, oldPrice, rating, reviews, sizes, colors, image, tag, isNew, description.
Use unique numeric IDs. Use image URLs that permit public display. A color entry looks like ["Olive", "#68735d"].
Set oldPrice to null or omit it if the item should not show a discount.

CUSTOMIZE CATEGORIES
Update the `department` and `category` values in the products array. Departments used by the built-in filters are Men, Women, and Kids. Product category options are generated automatically from the array.

CUSTOMIZE LOOK
Edit CSS variables at the top of style.css, such as --ink, --paper, --cream, --sand, and --accent.
Change the logo, tagline, banner text, and footer details in index.html.

DEMO STORAGE
To reset demo cart/wishlist/theme data, open browser developer tools > Application/Storage > Local Storage and remove keys starting with `stylenest-`.
