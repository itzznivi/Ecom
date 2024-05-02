import { configureStore, createSlice } from "@reduxjs/toolkit";

const userDetailsSlice = createSlice({
  name: "details",
  initialState: {
    shoppingCart: {},
    temp: "hello",
    products: [
      {

        id: 1,
        price: 2000,
        brand: "Nike",
        size: "M",
        name: "Running Shoes",
        category: "Footwear",
        gender: "men",
        description: "High-performance running shoes for men.",
        imageUrl:
          "https://rukminim2.flixcart.com/image/612/612/xif0q/shoe/r/9/x/10-rsl056-red-tape-off-white-grey-original-imagyua3zq252pjz.jpeg?q=70",
      },
      {
        id: 2,
        price: 5000,
        brand: "Adidas",
        size: "L",
        name: "Hoodie",
        category: "Western Wear",
        gender: "women",
        description: "Comfortable and stylish hoodie for women.",
        imageUrl:
          "https://rukminim2.flixcart.com/image/612/612/xif0q/sweatshirt/f/f/d/m-wm17-ss01-grey-alan-jones-original-imaghhyjxsyxzz4p.jpeg?q=70",
      },
      {
        id: 3,
        price: 5000,
        brand: "Puma",
        size: "S",
        name: "Sports Socks",
        category: "Accessories",
        gender: "men",
        description: "Moisture-wicking sports socks for men.",
        imageUrl:
          "https://rukminim2.flixcart.com/image/612/612/khavrm80-0-0/sock/j/z/0/free-sm-b-navy-sport-original-imafxcgeafqkvhut.jpeg?q=70",
      },
      {
        id: 4,
        price: 3000,
        brand: "Under Armour",
        size: "S",
        name: "Training Shorts",
        category: "Western Wear",
        gender: "women",
        description: "Breathable and lightweight training shorts for women.",
        imageUrl:
          "https://rukminim2.flixcart.com/image/612/612/xif0q/short/4/4/3/l-men-s-outdoor-quick-dry-lightweight-sports-shorts-zipper-original-imagncwxxfghfkjv.jpeg?q=70",
      },
      {
        id: 5,
        price: 6000,
        brand: "Reebok",
        size: "XL",
        name: "CrossFit Shoes",
        category: "Footwear",
        gender: "men",
        description: "Durable shoes designed for CrossFit workouts.",
        imageUrl:
          "https://rukminim2.flixcart.com/image/612/612/xif0q/sandal/e/x/k/6-60950111-liberty-n-blue-original-imagmszchzfxw4wn.jpeg?q=70",
      },
      {
        id: 6,
        price: 5000,
        brand: "New Balance",
        size: "XXL",
        name: "Running Jacket",
        category: "Western Wear",
        gender: "women",
        description: "Water-resistant running jacket for women.",
        imageUrl:
          "https://rukminim2.flixcart.com/image/612/612/xif0q/jacket/k/m/a/l-1-no-rockstar-black-hunza-original-imagzufzvr6qvbdb.jpeg?q=70",
      },
      {
        id: 7,
        price: 2000,
        brand: "Columbia",
        size: "XL",
        name: "Hiking Boots",
        category: "Footwear",
        gender: "men",
        description: "Sturdy hiking boots with excellent traction.",
        imageUrl:
          "https://rukminim2.flixcart.com/image/612/612/kqqykcw0/shoe/x/g/4/7-bbma2171-7-bacca-bucci-brown-original-imag4zezdxcxtwza.jpeg?q=70",
      },
      {
        id: 8,
        price: 2000,
        brand: "The North Face",
        size: "S",
        name: "Beanie",
        category: "Accessories",
        gender: "women",
        description: "Warm and cozy beanie for cold weather.",
        imageUrl:
          "https://rukminim2.flixcart.com/image/612/612/kfsl18w0/cap/g/3/h/free-ys-wc7120b-youstylo-original-imafw6yhpkf22hyp.jpeg?q=70",
      },

      {
        id: 9,
        price: 2500,
        brand: "Adidas",
        size: "L",
        name: "Sweatpants",
        category: "Western Wear",
        gender: "men",
        description: "Comfortable sweatpants for men.",
        imageUrl:
          "https://rukminim2.flixcart.com/image/612/612/xif0q/track-pant/i/4/b/l-mkaktp-80-netclick-original-imagen7jzgguk5jm.jpeg?q=70",
      },
      {
        id: 10,
        price: 5000,
        brand: "Nike",
        size: "L",
        name: "Sports track pants",
        category: "Western Wear",
        gender: "women",
        description: "High-support sports track pants for intense workouts.",
        imageUrl:
          "https://rukminim2.flixcart.com/image/612/612/xif0q/track-pant/l/e/k/32-tp01-black-q-rious-original-imagmjmgtawjugm8.jpeg?q=70",
      },
      {
        id: 11,
        price: 5000,
        brand: "Under Armour",
        size: "L",
        name: "Training Tights",
        category: "Western Wear",
        gender: "women",
        description: "Compression fit training tights for women.",
        imageUrl:
          "https://rukminim2.flixcart.com/image/300/300/xif0q/tight/g/y/m/l-unisex-compression-half-tight-short-for-gym-kyk-original-imagkhm7dzunfnfw.jpeg?q=90",
      },
      {
        id: 12,
        price: 5000,
        brand: "Puma",
        size: "XL",
        name: "Gym Bag",
        category: "Accessories",
        gender: "men",
        description: "Spacious gym bag with multiple compartments.",
        imageUrl:
          "https://rukminim2.flixcart.com/image/612/612/xif0q/duffel-bag/r/v/d/-original-imahyakedtghvfcn.jpeg?q=70",
      },
      {
        id: 13,
        price: 3000,
        brand: "Reebok",
        size: "M",
        name: "Yoga Mat",
        category: "Accessories",
        gender: "women",
        description: "Non-slip yoga mat for comfortable workouts.",
        imageUrl:
          "https://rukminim2.flixcart.com/image/612/612/xif0q/sport-mat/i/x/i/eva-anti-slip-home-gym-exercise-workout-fitness-for-men-women-original-imagx692zfg6u6xt.jpeg?q=70",
      },
      {
        id: 14,
        price: 2000,
        brand: "Columbia",
        size: "M",
        name: "Beanie",
        category: "Accessories",
        gender: "men",
        description: "Lightweight beanie for outdoor adventures.",
        imageUrl:
          "https://rukminim2.flixcart.com/image/612/612/xif0q/kids-cap/a/w/r/7-8-years-boys-winter-woolen-warm-maroon-sherpa-beanie-cap-for-original-imaguegh3hjjzvm7.jpeg?q=70",
      },
      {
        id: 15,
        price: 8000,
        brand: "The North Face",
        size: "S",
        name: "Down Jacket",
        category: "Western Wear",
        gender: "women",
        description: "Insulated down jacket for cold weather.",
        imageUrl:
          "https://rukminim2.flixcart.com/image/612/612/xif0q/jacket/p/h/1/m-1-no-bc410y-breil-by-fort-collins-original-imagv53zbedu8hdn.jpeg?q=70",
      },
      {
        id: 16,
        price: 4000,
        brand: "New Balance",
        size: "M",
        name: "Running Shorts",
        category: "Western Wear",
        gender: "men",
        description: "Lightweight running shorts for men.",
        imageUrl:
          "https://rukminim2.flixcart.com/image/612/612/xif0q/short/v/d/u/m-blue-black-shorts-just-rider-original-imaghg2hbb5hdegv.jpeg?q=70",
      },
      {
        id: 17,
        price: 2500,
        brand: "Adidas",
        size: "S",
        name: "Sports Cap",
        category: "Accessories",
        gender: "women",
        description: "Adjustable sports cap for sunny days.",
        imageUrl:
          "https://rukminim2.flixcart.com/image/612/612/xif0q/cap/c/p/6/free-pannel-of-6-hony-fashion-original-imaggk245m7sqfqm.jpeg?q=70",
      },
      {
        id: 18,
        price: 6000,
        brand: "Nike",
        size: "XL",
        name: "Basketball Shoes",
        category: "Footwear",
        gender: "men",
        description: "High-top basketball shoes for optimal ankle support.",
        imageUrl:
          "https://rukminim2.flixcart.com/image/612/612/xif0q/shoe/1/h/h/10-bs-1174bg-10-nivia-black-gold-original-imagntr46wqb339e.jpeg?q=70",
      },

      {
        id: 19,
        price: 8000,
        brand: "FabIndia",
        size: "M",
        name: "Kurta-Pajama Set",
        category: "Ethnic Wear",
        gender: "men",
        description: "Traditional kurta-pajama set for men.",
        imageUrl:
          "https://rukminim2.flixcart.com/image/612/612/xif0q/ethnic-set/f/4/g/xs-sada-pair-new-zedin-original-imagzwsjkqscnsgh.jpeg?q=70",
      },
      {
        id: 20,
        price: 1200,
        brand: "Manyavar",
        size: "L",
        name: "Sherwani",
        category: "Ethnic Wear",
        gender: "men",
        description: "Elegant sherwani for special occasions.",
        imageUrl:
          "https://rukminim2.flixcart.com/image/612/612/xif0q/sherwani/j/6/7/3xl-up-12775-rblue-sg-rajasahab-original-imagg8ghetq2hecf.jpeg?q=70",
      },
      {
        id: 21,
        price:  5000,
        brand: "Biba",
        size: "M",
        name: "Anarkali Suit",
        category: "Ethnic Wear",
        gender: "women",
        description: "Stylish anarkali suit for women.",
        imageUrl:
          "https://rukminim2.flixcart.com/image/612/612/xif0q/ethnic-set/p/j/q/xxl-ks001-guru-kripa-garment-original-imagth2hhccwk7gh.jpeg?q=70",
      },
      {
        id: 22,
        price: 5000,
        brand: "Westie",
        size: "S",
        name: "Lehenga Choli",
        category: "Ethnic Wear",
        gender: "women",
        description: "Beautiful lehenga choli for festive occasions.",
        imageUrl:
          "https://rukminim2.flixcart.com/image/612/612/l1pc3gw0/lehenga-choli/l/u/c/free-short-sleeve-mf-yellow-mf-14-marutiii-creation-original-imagd7n2kjmrdmpx.jpeg?q=70",
      },
      {
        id: 23,
        price: 4000,
        brand: "Catwalk",
        size: 7,
        name: "Wedge Sandals",
        category: "Footwear",
        gender: "women",
        description: "Stylish wedge sandals for women.",
        imageUrl:
          "https://rukminim2.flixcart.com/image/612/612/xif0q/sandal/n/v/o/6-33-2-39-mochi-11-black-original-imagzyefggcnhhhc.jpeg?q=70",
      },
      {
        id: 24,
        price: 4000,
        brand: "Clarks",
        size: 9,
        name: "Leather Boots",
        category: "Footwear",
        gender: "women",
        description: "Classic leather boots for women.",
        imageUrl:
          "https://rukminim2.flixcart.com/image/612/612/xif0q/shoe/g/l/n/6-gb-2355116-40-woodland-camel-original-imagtabzprb7fcrh.jpeg?q=70",
      },
    ],
  },
  reducers: {
    setShoppingCart(state, action) {
      state.shoppingCart = action.payload;
    },
    inc(state, action) {
      state.i = state.i + 1;
    },

    addItem(state, action) {
      state.shoppingCart = action.payload;
    },
  },
});

export const { setShoppingCart, addItem, inc } = userDetailsSlice.actions;

const store = configureStore({
  reducer: userDetailsSlice.reducer,
});

export default store;
