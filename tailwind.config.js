/** @type {import('tailwindcss').Config} */
export default {
  separator: '_', // if you recall the : operator for div(class="blah-blah:blah"), you can do something like:
  //                                                  div.blah-blah_blah()                        
  // these two statements are equivalent
  content: [
    './pages/**/*.{html,js,ts,vue,tsx}',
    './components/**/*.{html,js,ts,vue,tsx}',
  ],
  theme: {
    colors: {
      'forest-green': '#2e7d32',
      'sky-blue': '#81d4fa',
      'soft-beige': '#f5f5dc',
      'dark-gray': '#37474f',
      "deep-blue": "#1565C0",
      "soft-mint": "#A5D6A7",
      "slate-gray": "#546E7A",
      "white": "#FFFFFF",
      "teal": "#009688",
      "light-gray": "#F5F5F5",
      "bright-orange": "#FF7043",
      "steel-blue": "#607D8B",
      "paw_print_brown": "#8D6E63",
      "golden_retriever_gold": "#FFB74D",
      "calming_aqua": "#4DB6AC",
      "snow_white": "#FAFAFA",
      "rich_clay": "#D84315",
      "soft_olive": "#C5E1A5",
      "warm_cream": "#FFF9C4",
      "charcoal_black": "#212121"
    }, 
    extend: {},
  },
  plugins: [],
}

