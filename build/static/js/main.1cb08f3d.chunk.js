(this.webpackJsonpamazon_clone=this.webpackJsonpamazon_clone||[]).push([[0],{109:function(e,t,s){},110:function(e,t,s){},112:function(e,t,s){},114:function(e,t,s){"use strict";s.r(t);var a=s(3),c=s.n(a),i=s(29),n=s.n(i),r=(s(65),s(52)),l=s(8),j=(s(66),s(67),s(54)),o=s.n(j),d=s(56),m=s.n(d),h=s(17),b=s(2),g=Object(a.createContext)(),O=function(e){var t=e.reducer,s=e.initialState,c=e.children;return Object(b.jsx)(g.Provider,{value:Object(a.useReducer)(t,s),children:c})},u=function(){return Object(a.useContext)(g)},p=s(38),x=p.a.initializeApp({apiKey:"AIzaSyBYsJ-TrbAruQ6UNXVC2phDz_4RUOkozSE",authDomain:"challenge-79ced.firebaseapp.com",projectId:"challenge-79ced",storageBucket:"challenge-79ced.appspot.com",messagingSenderId:"373786829031",appId:"1:373786829031:web:f6f45dc478452dd9824242",measurementId:"G-NXY38EPZJK"}).firestore(),f=p.a.auth();var S=function(){var e=u(),t=Object(l.a)(e,2),s=t[0],a=s.basket,c=s.user;return t[1],Object(b.jsxs)("div",{className:"header",children:[Object(b.jsx)(h.b,{to:"/",children:Object(b.jsx)("img",{className:"header_logo",src:"data:image/png;base64,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"})}),Object(b.jsxs)("div",{className:"header_search",children:[Object(b.jsx)("input",{className:"header_searchInput",type:"text"}),Object(b.jsx)("a",{href:"https://www.amazon.in/",children:Object(b.jsx)(o.a,{className:"header_searchIcon"})})]}),Object(b.jsxs)("div",{className:"header_nav",children:[Object(b.jsx)(h.b,{to:!c&&"/login",children:Object(b.jsxs)("div",{onClick:function(){c&&f.signOut()},className:"header_option",children:[Object(b.jsxs)("span",{className:"header_optionLineOne",children:["Hello ",c?c.email:"Guest"]}),Object(b.jsx)("span",{className:"header_optionLineTwo",children:c?"Sign Out":"Sign In"})]})}),Object(b.jsx)(h.b,{to:"/orders",children:Object(b.jsxs)("div",{className:"header_option",children:[Object(b.jsx)("span",{className:"header_optionLineOne",children:"Returns"}),Object(b.jsx)("span",{className:"header_optionLineTwo",children:"& Orders"})]})}),Object(b.jsxs)("div",{className:"header_option",children:[Object(b.jsx)("span",{className:"header_optionLineOne",children:"Your"}),Object(b.jsx)("span",{className:"header_optionLineTwo",children:Object(b.jsx)("a",{href:"https://www.primevideo.com/ref=atv_nb_logo",children:"Prime"})})]}),Object(b.jsx)(h.b,{to:"/checkout",children:Object(b.jsxs)("div",{className:"header_optionBasket",children:[Object(b.jsx)(m.a,{}),Object(b.jsx)("span",{className:"header_optionLineTwo header_BasketCount",children:null===a||void 0===a?void 0:a.length})]})})]})]})};s(83),s(84);var A=function(e){var t=e.title,s=e.image,a=e.price,c=e.rating,i=u(),n=Object(l.a)(i,2),r=n[0].basket,j=n[1];return console.log("this is the basket items>>>>>",r),Object(b.jsxs)("div",{className:"product",children:[Object(b.jsxs)("div",{className:"product_info",children:[Object(b.jsx)("p",{children:Object(b.jsx)("strong",{children:t})}),Object(b.jsxs)("p",{className:"product_price",children:[Object(b.jsx)("strong",{children:Object(b.jsx)("small",{children:"\u20b9 "})}),Object(b.jsx)("strong",{children:a})]}),Object(b.jsx)("div",{className:"product_rating",children:Array(c).fill().map((function(e,t){return Object(b.jsx)("p",{children:"\u2b50"})}))})]}),Object(b.jsx)("img",{src:s,alt:""}),Object(b.jsx)("button",{onClick:function(){j({type:"ADD_TO_BASKET",item:{title:t,image:s,price:a,rating:c}})},children:"Add To Cart"})]})};var v=function(){return Object(b.jsx)("div",{className:"home",children:Object(b.jsxs)("div",{className:"home_container",children:[Object(b.jsx)("img",{className:"home_image",src:"https://store-images.s-microsoft.com/image/apps.16285.14618985536919905.552c0017-6644-49a8-8467-8f7b34ce0428.30ad6b05-16d9-4d5e-a242-43107708a16a",alt:""}),Object(b.jsxs)("div",{className:"home_row",children:[Object(b.jsx)(A,{title:"Boat Stone 250 5W Bluetooth Speaker(Black) ",price:1999,image:"https://images-na.ssl-images-amazon.com/images/I/710tGD6oCBL._SL1500_.jpg",rating:4}),Object(b.jsx)(A,{title:"Dairy Milk Chocolate Gift Hamper With Nuts and Fruits To Celebrate With Your Family and Loved Ones",price:299,image:"https://images-eu.ssl-images-amazon.com/images/G/31/img20/Grocery/GW/Chocolates_PC_CC_379x304_V2._SY304_CB404777310_.jpg",rating:3}),Object(b.jsx)(A,{title:"BLUEWUD Primax Engineered Wood TV Entertainment Wall Unit , Ideal for up to 42 Inch (Brown, Standard )",price:2999,image:"https://images-na.ssl-images-amazon.com/images/I/719gGgsuuVL._SL1500_.jpg",rating:5})]}),Object(b.jsx)("div",{className:"home_row",children:Object(b.jsx)("img",{className:"random_image1",src:"https://m.media-amazon.com/images/G/31/AMS/IN/970X250-_desktop_banner.jpg"})}),Object(b.jsx)("h2",{children:"PETS COMFY AND CUTE SLEEPING CUSHIONS"}),Object(b.jsxs)("div",{className:"home_row",children:[Object(b.jsx)(A,{title:"Mellifluous Premium Waterproof Dog Cat Pet Bed (Small, Green-Black)",price:899,image:"https://m.media-amazon.com/images/I/41ae7t+QE8L._AC_SY200_.jpg",rating:3}),Object(b.jsx)(A,{title:"Mellifluous Black Gold Color Bed for Cats & Dogs (Small, Black-Gold)",price:1099,image:"https://m.media-amazon.com/images/I/51BDOSH36uL._AC_SY200_.jpg",rating:4}),Object(b.jsx)(A,{title:"Mellifluous Small Size Cat Ears Pet Bed, Brown-Cream",price:799,image:"https://m.media-amazon.com/images/I/311u1ih-IKL._AC_SY200_.jpg",rating:4})]}),Object(b.jsx)("h2",{children:"ELECTRONICS AND DIGITAL MEDIA ITEMS"}),Object(b.jsxs)("div",{className:"home_row",children:[Object(b.jsx)(A,{title:"Echo Dot (3rd Gen), Certified Refurbished, Black \u2013 Improved smart speaker with Alexa ",price:2500,image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5LLZ8Z8B03ghxLcQf3F6U_Eht3jsDcfOykw&usqp=CAU",rating:4}),Object(b.jsx)(A,{title:"Pigeon by Stovekraft Handy and Compact Chopper for effortlessly Chopping Vegetables and Fruits",price:299,image:"https://images-na.ssl-images-amazon.com/images/I/51o5S2KQA7L._SL1000_.jpg",rating:3}),Object(b.jsx)(A,{title:"Prestige 1.2 Litre Kettle 1200-watts, Maroon color (Super solid body with aluminium base)",price:999,image:"https://images-na.ssl-images-amazon.com/images/I/511wIb%2By8BL._SL1000_.jpg",rating:5})]}),Object(b.jsx)("div",{className:"home_row",children:Object(b.jsx)("img",{className:"random_image1",src:"https://images-na.ssl-images-amazon.com/images/G/31/img2020/fashion/WA_2020/WWnewstore/PC/pcbanner._CB427862063_.jpg"})}),Object(b.jsxs)("div",{className:"home_row",children:[Object(b.jsx)("img",{className:"random_image1",src:"https://images-na.ssl-images-amazon.com/images/G/31/img2020/fashion/WA_2020/WWnewstore/PC/a._SY530_QL85_.jpg"}),Object(b.jsx)("img",{className:"random_image1",src:"https://images-na.ssl-images-amazon.com/images/G/31/img2020/fashion/WA_2020/WWnewstore/PC/b._SY530_QL85_.jpg"}),Object(b.jsx)("img",{className:"random_image1",src:"https://images-na.ssl-images-amazon.com/images/G/31/img2020/fashion/WA_2020/WWnewstore/PC/c._SY530_QL85_.jpg"}),Object(b.jsx)("img",{className:"random_image1",src:"https://images-na.ssl-images-amazon.com/images/G/31/img2020/fashion/WA_2020/WWnewstore/PC/d._SY530_QL85_.jpg"}),Object(b.jsx)("img",{className:"random_image1",src:"https://images-na.ssl-images-amazon.com/images/G/31/img2020/fashion/WA_2020/WWnewstore/PC/e._SY530_QL85_.jpg"}),Object(b.jsx)("img",{className:"random_image1",src:"https://images-na.ssl-images-amazon.com/images/G/31/img2020/fashion/WA_2020/WWnewstore/PC/f._SY530_QL85_.jpg"})]}),Object(b.jsx)("h2",{children:"WESTERN WEAR - A LINE DRESSES, TOPS AND TUNICS FOR WOMEN"}),Object(b.jsxs)("div",{className:"home_row",children:[Object(b.jsx)(A,{title:"Max Rayon a-line Dress ",price:679,image:"https://images-na.ssl-images-amazon.com/images/I/81w5sYZuivL._UL1500_.jpg",rating:4}),Object(b.jsx)(A,{title:"Max A-Line Dress ",price:799,image:"https://m.media-amazon.com/images/I/71X66zZPDkL._AC_UL320_.jpg",rating:3}),Object(b.jsx)(A,{title:"Cotton Pleated Dress",price:559,image:"https://m.media-amazon.com/images/I/81krKP2INoL._AC_UL320_.jpg",rating:5})]}),Object(b.jsx)("h2",{children:"DESIGNER SILK AND COTTON SAREE FOR WOMEN"}),Object(b.jsxs)("div",{className:"home_row",children:[Object(b.jsx)(A,{title:"Anni Designer Art Silk Orange Saree With Blouse ",price:279,image:"https://m.media-amazon.com/images/I/91Nfpvp1yhL._AC_UL320_.jpg",rating:4}),Object(b.jsx)(A,{title:"Mahi Creation Women's Banarasi Silk Saree",price:599,image:"https://images-na.ssl-images-amazon.com/images/I/91AkaCx4QJL._UY606_.jpg",rating:5}),Object(b.jsx)(A,{title:"RIVANA Women's Banarasi Silk Saree With Blouse Piece",price:799,image:"https://images-na.ssl-images-amazon.com/images/I/71H5yNzHxfL._UL1440_.jpg",rating:4})]}),Object(b.jsx)("div",{className:"home_row",children:Object(b.jsx)("img",{className:"random_image1",src:"https://images-eu.ssl-images-amazon.com/images/G/31/IMG20/Home/BAU/Homemain/XCM_Manual_1500x250_1209699_1077610_1209699_in_home_28_01_20_page_5d027374_166d_466f_9f22_5789bd5e69af_jpg._CB423636511_.jpg"})}),Object(b.jsx)("h2",{children:"HOME DECOR ITEMS - MATRESSES, FURNITURE AND DECORATIVES"}),Object(b.jsxs)("div",{className:"home_row",children:[Object(b.jsx)(A,{title:"Status 5 x 7 Feet Multi Printed Vintage Persian Carpet Rug Runner  with Anti Slip Backing ",price:1500,image:"https://images-na.ssl-images-amazon.com/images/I/71YEzdDdsHL._SL1000_.jpg",rating:3}),Object(b.jsx)(A,{title:"Party Propz Rose Gold Metallic Tinsel Foil Fringe Curtains for Celebrations and Decorations ( 3 X 6 ft 10 inches ) - Set of 3",price:799,image:"https://m.media-amazon.com/images/I/91r49kHmZvL._AC_UL320_.jpg",rating:5}),Object(b.jsx)(A,{title:"Gmall Wax Nugget Floating Candles (White) - Pack of 25",price:399,image:"https://m.media-amazon.com/images/I/41cIqFdszvL._AC_UL320_.jpg",rating:4})]}),Object(b.jsx)("div",{className:"home_row",children:Object(b.jsx)(A,{title:"Rose Home Fashion RHF Multi-Size Sofa Cover for Extra-Wide Couch, Sofa Cover, Extra-Wide Couch Cover for Dogs, Extra-Wide Couch Covers for Pets, Couch Slipcover (Sofa-Extra Wide Set)",price:34e3,image:"https://images-na.ssl-images-amazon.com/images/I/7161pZQeuSL._AC_SL1200_.jpg",rating:5})}),Object(b.jsx)("div",{className:"home_row",children:Object(b.jsx)("img",{className:"random_image2",src:"https://images-eu.ssl-images-amazon.com/images/G/31/img20/Vernac13th/1500x150_V2_Eng._CB412582591_.jpg"})})]})})};s(85),s(86);var C=function(e){var t=e.image,s=e.title,a=e.price,c=e.rating,i=e.hideButton,n=u(),r=Object(l.a)(n,2),j=(r[0].basket,r[1]);return Object(b.jsxs)("div",{className:"checkoutProduct",children:[Object(b.jsx)("img",{className:"checkoutProduct_image",src:t}),Object(b.jsxs)("div",{className:"checkoutProduct_info",children:[Object(b.jsx)("p",{className:"checkoutProduct_title",children:s}),Object(b.jsxs)("p",{className:"checkoutProduct_price",children:[Object(b.jsx)("small",{children:"\u20b9 "}),Object(b.jsx)("strong",{children:a})]}),Object(b.jsx)("div",{className:"checkoutProduct_rating",children:Array(c).fill().map((function(e,t){return Object(b.jsx)("p",{children:"\u2b50"})}))}),!i&&Object(b.jsx)("button",{onClick:function(){j({type:"REMOVE_FROM_BASKET",image:t})},children:" Remove From Basket"})]})]})},N=(s(87),s(24)),w=s.n(N),E=s(39),y=s(19),k=function(e){return null===e||void 0===e?void 0:e.reduce((function(e,t){return t.price+e}),0)},L=function(e,t){switch(console.log(t),t.type){case"ADD_TO_BASKET":return Object(y.a)(Object(y.a)({},e),{},{basket:[].concat(Object(E.a)(e.basket),[t.item])});case"REMOVE_FROM_BASKET":var s=e.basket.findIndex((function(e){return e.image===t.image})),a=Object(E.a)(e.basket);return s>=0?a.splice(s,1):console.warn("Can't Remove the Product (id: ".concat(t.image,") as it is Not Present in the Basket !")),Object(y.a)(Object(y.a)({},e),{},{basket:a});case"SET_USER":return Object(y.a)(Object(y.a)({},e),{},{user:t.user});case"EMPTY_BASKET":return Object(y.a)(Object(y.a)({},e),{},{basket:[]});default:return e}},W=s(10);var I=function(){var e=Object(W.f)(),t=u(),s=Object(l.a)(t,2),a=s[0].basket;return s[1],Object(b.jsxs)("div",{className:"subtotal",children:[Object(b.jsx)(w.a,{renderText:function(e){return Object(b.jsxs)(b.Fragment,{children:[Object(b.jsxs)("p",{children:["SUBTOTAL ( ",null===a||void 0===a?void 0:a.length," items ) :",Object(b.jsxs)("strong",{children:[" ",e," "]})]}),Object(b.jsxs)("small",{className:"subtotal_gift",children:[Object(b.jsx)("input",{type:"checkbox"}),"This Order Contains A Gift"]})]})},decimalScale:3,value:k(a),displayType:"text",thousandSeparator:!0,prefix:"\u20b9 "}),Object(b.jsx)("button",{onClick:function(t){return e.push("/payment")},children:" Proceed To CheckOut"})]})};var R=function(){var e=u(),t=Object(l.a)(e,2),s=t[0],a=s.basket,c=s.user;return t[1],Object(b.jsxs)("div",{className:"checkout",children:[Object(b.jsxs)("div",{className:"checkout_left",children:[Object(b.jsx)("div",{children:Object(b.jsx)("img",{className:"checkout_ad",src:"https://images-eu.ssl-images-amazon.com/images/G/31/gateway-2015/amazonshop/banner_1_newStore.jpg",alt:""})}),Object(b.jsxs)("div",{children:[Object(b.jsxs)("h3",{className:"checkout_title_email",children:["Welcome, ",null===c||void 0===c?void 0:c.email]}),Object(b.jsx)("h1",{className:"checkout_title",children:"YOUR SHOPPING BASKET LIST"}),a.map((function(e){return Object(b.jsx)(C,{title:e.title,image:e.image,price:e.price,rating:e.rating})}))]})]}),Object(b.jsx)("div",{className:"checkout_right",children:Object(b.jsx)(I,{})})]})};s(89);var G=function(){var e=Object(W.f)(),t=Object(a.useState)(""),s=Object(l.a)(t,2),c=s[0],i=s[1],n=Object(a.useState)(""),r=Object(l.a)(n,2),j=r[0],o=r[1];return Object(b.jsxs)("div",{className:"login",children:[Object(b.jsx)(h.b,{to:"/",children:Object(b.jsx)("img",{className:"login_logo",src:"data:image/png;base64,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"})}),Object(b.jsxs)("div",{className:"login_container",children:[Object(b.jsx)("h1",{children:"Sign In"}),Object(b.jsxs)("form",{children:[Object(b.jsx)("h4",{children:" E-mail"}),Object(b.jsx)("input",{type:"text",value:c,onChange:function(e){return i(e.target.value)}}),Object(b.jsx)("h4",{children:"Password"}),Object(b.jsx)("input",{type:"password",value:j,onChange:function(e){return o(e.target.value)}}),Object(b.jsx)("button",{type:"submit",onClick:function(t){t.preventDefault(),f.signInWithEmailAndPassword(c,j).then((function(t){e.push("/")})).catch((function(e){return alert(e.message)}))},className:"login_signInButton",children:"Sign In"})]}),Object(b.jsx)("p",{children:"By continuing, you agree to Amazon's Fake Clone Conditions of Use and Privacy Notice."}),Object(b.jsx)("button",{onClick:function(t){t.preventDefault(),f.createUserWithEmailAndPassword(c,j).then((function(t){console.log(t),t&&e.push("/")})).catch((function(e){return alert(e.message)}))},className:"login_registerButton",children:"Register Now"})]})]})},z=s(26),B=s.n(z),T=s(37),U=s(22),Y=(s(91),s(57)),P=s.n(Y).a.create({baseURL:"http://localhost:5001/challenge-79ced/us-central1/api"});var D=function(){var e=u(),t=Object(l.a)(e,2),s=t[0],c=s.basket,i=s.user,n=t[1],r=Object(W.f)(),j=Object(U.useStripe)(),o=Object(U.useElements)(),d=Object(a.useState)(!1),m=Object(l.a)(d,2),g=m[0],O=m[1],p=Object(a.useState)(""),f=Object(l.a)(p,2),S=f[0],A=f[1],v=Object(a.useState)(null),N=Object(l.a)(v,2),E=N[0],y=N[1],L=Object(a.useState)(!0),I=Object(l.a)(L,2),R=I[0],G=I[1],z=Object(a.useState)(!0),Y=Object(l.a)(z,2),D=Y[0],F=Y[1];Object(a.useEffect)((function(){(function(){var e=Object(T.a)(B.a.mark((function e(){var t;return B.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,P({method:"post",url:"/payments/create?total=".concat(100*k(c))});case 2:t=e.sent,F(t.data.clientSecret);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[c]),console.log("THE SECRET IS >>> ",D);var H=function(){var e=Object(T.a)(B.a.mark((function e(t){return B.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),A(!0),e.next=4,j.confirmCardPayment(D,{payment_method:{card:o.getElement(U.CardElement)}}).then((function(e){var t=e.paymentIntent;x.collection("users").doc(null===i||void 0===i?void 0:i.uid).collection("orders").doc(t.image).set({basket:c,amount:t.amount,created:t.created}),O(!0),y(null),A(!1),n({type:"EMPTY_BASKET"}),r.replace("/orders")}));case 4:e.sent;case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(b.jsx)("div",{className:"payment",children:Object(b.jsxs)("div",{className:"payment_container",children:[Object(b.jsx)("h1",{children:Object(b.jsxs)(h.b,{to:"/checkout",children:["My Products And Payments ( ",null===c||void 0===c?void 0:c.length," items )"]})}),Object(b.jsxs)("div",{className:"payment_section",children:[Object(b.jsx)("div",{className:"payment_title",children:Object(b.jsx)("h2",{children:"Delivery Address"})}),Object(b.jsxs)("div",{className:"payment_address",children:[Object(b.jsx)("strong",{children:Object(b.jsx)("p",{children:null===i||void 0===i?void 0:i.email})}),Object(b.jsx)("p",{children:"GG-42, Hindalco Colony"}),Object(b.jsx)("p",{children:"Renukoot, Sonebhdra ( U.P )"})]})]}),Object(b.jsxs)("div",{className:"payment_section",children:[Object(b.jsx)("div",{className:"payment_title",children:Object(b.jsx)("h2",{children:"Review Basket Items And Delivery"})}),Object(b.jsx)("div",{className:"payment_items",children:c.map((function(e){return Object(b.jsx)(C,{title:e.title,image:e.image,price:e.price,rating:e.rating})}))})]}),Object(b.jsxs)("div",{className:"payment_section",children:[Object(b.jsx)("div",{className:"payment_title",children:Object(b.jsx)("h2",{children:"Payment Method"})}),Object(b.jsx)("div",{className:"payment_details",children:Object(b.jsxs)("form",{onSubmit:H,children:[Object(b.jsx)(U.CardElement,{onChange:function(e){G(e.empty),y(e.error?e.error.message:"")}}),Object(b.jsxs)("div",{className:"payment_priceContainer",children:[Object(b.jsx)(w.a,{renderText:function(e){return Object(b.jsxs)("h3",{children:["Payment Order Total: ",e]})},decimalScale:3,value:k(c),displayType:"text",thousandSeparator:!0,prefix:"\u20b9 "}),Object(b.jsx)("button",{disabled:S||R||g,children:Object(b.jsxs)("span",{children:[" ",S?Object(b.jsx)("p",{children:"Processing..."}):"Buy Now"]})})]}),E&&Object(b.jsx)("div",{children:E})]})})]})]})})},F=s(58),H=(s(109),s(110),s(59)),M=s.n(H);var _=function(e){var t,s=e.order;return Object(b.jsxs)("div",{className:"order",children:[Object(b.jsx)("h2",{children:"Order"}),Object(b.jsx)("p",{children:M.a.unix(s.data.created).format("MMMM DD YYYY, hh:mm:ss")}),Object(b.jsx)("p",{className:"order_id",children:Object(b.jsx)("h3",{children:Object(b.jsxs)("small",{children:["Order Id : ",s.id]})})}),null===(t=s.data.basket)||void 0===t?void 0:t.map((function(e){return Object(b.jsx)(C,{title:e.title,image:e.image,price:e.price,rating:e.rating,hideButton:!0})})),Object(b.jsx)(w.a,{renderText:function(e){return Object(b.jsxs)("h3",{className:"order_total",children:["Payment Order Total: ",e]})},decimalScale:3,value:s.data.amount/100,displayType:"text",thousandSeparator:!0,prefix:"\u20b9 "})]})};var Q=function(){var e=u(),t=Object(l.a)(e,2),s=t[0],c=(s.basket,s.user),i=(t[1],Object(a.useState)([])),n=Object(l.a)(i,2),r=n[0],j=n[1];return Object(a.useEffect)((function(){c?x.collection("users").doc(null===c||void 0===c?void 0:c.uid).collection("orders").orderBy("created","desc").onSnapshot((function(e){return j(e.docs.map((function(e){return{id:e.id,data:e.data()}})))})):j([])}),[c]),Object(b.jsxs)("div",{className:"orders",children:[Object(b.jsx)("h1",{children:"Your Recent Orders"}),Object(b.jsx)("div",{className:"orders_order",children:null===r||void 0===r?void 0:r.map((function(e){return Object(b.jsx)(_,{order:e})}))})]})};s(112);var K=function(){return Object(b.jsx)("div",{className:"footer",children:Object(b.jsxs)("div",{className:"footer_container",children:[Object(b.jsxs)("div",{className:"row",children:[Object(b.jsxs)("div",{className:"col1",children:[Object(b.jsx)("h3",{children:"Get to Know Us"}),Object(b.jsxs)("ul",{className:"list-unstyled",children:[Object(b.jsx)("li",{className:"li",children:Object(b.jsx)("a",{href:"https://www.aboutamazon.in/?utm_source=gateway&utm_medium=footer",children:"About Us"})}),Object(b.jsx)("li",{className:"li",children:Object(b.jsx)("a",{href:"https://amazon.jobs/en/",children:"Careers"})}),Object(b.jsx)("li",{className:"li",children:Object(b.jsx)("a",{href:"https://press.aboutamazon.in/?utm_source=gateway&utm_medium=footer",children:"Press Releases"})}),Object(b.jsx)("li",{className:"li",children:Object(b.jsx)("a",{href:"https://www.amazon.in/gp/browse.html?node=8872558031&ref_=footer_cares",children:"Amazon Cares"})}),Object(b.jsx)("li",{className:"li",children:Object(b.jsx)("a",{href:"https://www.amazon.in/gp/browse.html?node=4594605031&ref_=footer_smile",children:"Gift a Smile"})})]})]}),Object(b.jsxs)("div",{className:"col1",children:[Object(b.jsx)("h3",{children:"Connect with Us"}),Object(b.jsxs)("ul",{className:"list-unstyled",children:[Object(b.jsx)("li",{className:"li",children:Object(b.jsx)("a",{href:"https://www.facebook.com",children:"Facebook"})}),Object(b.jsx)("li",{className:"li",children:Object(b.jsx)("a",{href:"https://www.twitter.com",children:"Twitter"})}),Object(b.jsx)("li",{className:"li",children:Object(b.jsx)("a",{href:"https://www.instagram.com",children:"Instagram"})}),Object(b.jsx)("li",{className:"li",children:Object(b.jsx)("a",{href:"https://www.gmail.com",children:"Gmail"})}),Object(b.jsx)("li",{className:"li",children:Object(b.jsx)("a",{href:"https://www.linkedin.com",children:"Linkedin"})})]})]}),Object(b.jsxs)("div",{className:"col1",children:[Object(b.jsx)("h3",{children:"Address"}),Object(b.jsxs)("ul",{className:"list-unstyled",children:[Object(b.jsx)("li",{children:"GG - 42"}),Object(b.jsx)("li",{children:"Hindalco Colony "}),Object(b.jsx)("li",{children:"Renukoot, Sonebhdra"}),Object(b.jsx)("li",{children:"Uttar Pradesh"}),Object(b.jsx)("li",{children:"India"})]})]})]}),Object(b.jsx)("div",{className:"footer_bottom",children:Object(b.jsxs)("p",{children:["\xa9 Copyright to",Object(b.jsx)("a",{href:"https://www.linkedin.com/mwlite/in/shrutika-pandey-01ba361b1",children:" @Shrutika_Pandey"}),"  |  All Rights Reserved  |  Terms Of Service | Privacy"]})})]})})},X=Object(F.a)("pk_test_51IqHN0SEvEh1JNN3ZPPubK5AzlOGlxz5VY8fXICmyI5spVxKR3qBZor6odGhnJOqYhEynqeK1VhLKQDvrRAGXJKj00CfnHQqiV");var J=function(){var e=u(),t=Object(l.a)(e,2);Object(r.a)(t[0]);var s=t[1];return Object(a.useEffect)((function(){f.onAuthStateChanged((function(e){console.log("THE USER IS >>>> ",e),s(e?{type:"SET_USER",user:e}:{type:"SET_USER",user:null})}))}),[]),Object(b.jsx)(h.a,{children:Object(b.jsx)("div",{className:"app",children:Object(b.jsxs)(W.c,{children:[Object(b.jsx)(W.a,{path:"/login",children:Object(b.jsx)(G,{})}),Object(b.jsx)(W.a,{path:"/footer",children:Object(b.jsx)(K,{})}),Object(b.jsxs)(W.a,{path:"/orders",children:[Object(b.jsx)(S,{}),Object(b.jsx)(Q,{}),Object(b.jsx)(K,{})]}),Object(b.jsxs)(W.a,{path:"/checkout",children:[Object(b.jsx)(S,{}),Object(b.jsx)(R,{}),Object(b.jsx)(K,{})]}),Object(b.jsxs)(W.a,{path:"/payment",children:[Object(b.jsx)(S,{}),Object(b.jsx)(U.Elements,{stripe:X,children:Object(b.jsx)(D,{})}),Object(b.jsx)(K,{})]}),Object(b.jsxs)(W.a,{path:"/",children:[Object(b.jsx)(S,{}),Object(b.jsx)(v,{}),Object(b.jsx)(K,{})]})]})})})},V=function(e){e&&e instanceof Function&&s.e(3).then(s.bind(null,126)).then((function(t){var s=t.getCLS,a=t.getFID,c=t.getFCP,i=t.getLCP,n=t.getTTFB;s(e),a(e),c(e),i(e),n(e)}))};n.a.render(Object(b.jsx)(c.a.StrictMode,{children:Object(b.jsx)(O,{initialState:{basket:[],user:null},reducer:L,children:Object(b.jsx)(J,{})})}),document.getElementById("root")),V()},65:function(e,t,s){},66:function(e,t,s){},67:function(e,t,s){},83:function(e,t,s){},84:function(e,t,s){},85:function(e,t,s){},86:function(e,t,s){},87:function(e,t,s){},89:function(e,t,s){},91:function(e,t,s){}},[[114,1,2]]]);
//# sourceMappingURL=main.1cb08f3d.chunk.js.map