export const registerFormControls = [
  {
    name: "userName",
    label: "User Name",
    placeholder: "Enter your user name",
    componentType: "input",
    type: "text",
  },
  {
    name: "email",
    label: "Email",
    placeholder: "Enter your email",
    componentType: "input",
    type: "email",
  },
  {
    name: "password",
    label: "Password",
    placeholder: "Enter your password",
    componentType: "input",
    type: "password",
  },
];

export const loginFormControls = [
  {
    name: "email",
    label: "Email",
    placeholder: "Enter your email",
    componentType: "input",
    type: "email",
  },
  {
    name: "password",
    label: "Password",
    placeholder: "Enter your password",
    componentType: "input",
    type: "password",
  },
];

export const addProductFormElements = [
  {
    label: "Title",
    name: "title",
    componentType: "input",
    type: "text",
    placeholder: "Enter product title",
  },
  {
    label: "Description",
    name: "description",
    componentType: "textarea",
    placeholder: "Enter product description",
  },
  {
    label: "Category",
    name: "category",
    componentType: "select",
    options: [
      { id: "prescription", label: "Prescription Medicines" },
        { id: "otc", label: "Over-the-Counter (OTC)" },
        { id: "supplements", label: "supplements" },

        { id: "skin-care", label: "Skin Care" },

        { id: "vitamins", label: "Vitamins & Minerals" },

    ],
  },
  {
    label: "Brand",
    name: "brand",
    componentType: "select",
    options: [
      { id: "pfizer", label: "Pfizer" },
      { id: "cipla", label: "Cipla" },
      { id: "sun-pharma", label: "Sun Pharma" },
      { id: "himalaya", label: "Himalaya" },
      { id: "dabur", label: "Dabur" },
    ],
  },
  {
    label: "Price",
    name: "price",
    componentType: "input",
    type: "number",
    placeholder: "Enter product price",
  },
  {
    label: "Sale Price",
    name: "salePrice",
    componentType: "input",
    type: "number",
    placeholder: "Enter sale price (optional)",
  },
  {
    label: "Total Stock",
    name: "totalStock",
    componentType: "input",
    type: "number",
    placeholder: "Enter total stock",
  },
];

export const shoppingViewHeaderMenuItems = [
  {
    id: "home",
    label: "Home",
    path: "/shop/home",
  },
  {
    id: "products",
    label: "Products",
    path: "/shop/listing",
  },
  // {
  //   id: "men",
  //   label: "Men",
  //   path: "/shop/listing",
  // },
  // {
  //   id: "women",
  //   label: "Women",
  //   path: "/shop/listing",
  // },
  // {
  //   id: "kids",
  //   label: "Kids",
  //   path: "/shop/listing",
  // },
  // {
  //   id: "footwear",
  //   label: "Footwear",
  //   path: "/shop/listing",
  // },
  // {
  //   id: "accessories",
  //   label: "Accessories",
  //   path: "/shop/listing",
  // },
  // {
  //   id: "search",
  //   label: "Search",
  //   path: "/shop/search",
  // },
];

export const categoryOptionsMap = {
  pens: "Pens",
  papers: "Papers",
  notebook: "Notebook",
  officeSupplies: "Office Supplies",
  writingTools: "Writing Tools",
};

export const brandOptionsMap = {
  reynolds: "Reynolds",
  classmate: "Classmate",
  parker: "Parker",
  luxor: "Luxor",
  camlin: "Camlin",
};

export const filterOptions = {
  category: [
    { id: "prescription", label: "Prescription Medicines" },
    { id: "otc", label: "Over-the-Counter (OTC)" },
    { id: "supplements", label: "Supplements" },
    { id: "skin-care", label: "skin-care" },
    { id: "vitamins", label: "vitamins" },
  ],
  brand: [
    { id: "pfizer", label: "Pfizer" },
    { id: "cipla", label: "Cipla" },
    { id: "sun-pharma", label: "Sun Pharma" },
    { id: "himalaya", label: "Himalaya" },
    { id: "dabur", label: "Dabur" },
  ],
};

export const sortOptions = [
  { id: "price-lowtohigh", label: "Price: Low to High" },
  { id: "price-hightolow", label: "Price: High to Low" },
  { id: "title-atoz", label: "Title: A to Z" },
  { id: "title-ztoa", label: "Title: Z to A" },
];

export const addressFormControls = [
  {
    label: "Address",
    name: "address",
    componentType: "input",
    type: "text",
    placeholder: "Enter your address",
  },
  {
    label: "City",
    name: "city",
    componentType: "input",
    type: "text",
    placeholder: "Enter your city",
  },
  {
    label: "Pincode",
    name: "pincode",
    componentType: "input",
    type: "text",
    placeholder: "Enter your pincode",
  },
  {
    label: "Phone",
    name: "phone",
    componentType: "input",
    type: "text",
    placeholder: "Enter your phone number",
  },
  {
    label: "Notes",
    name: "notes",
    componentType: "textarea",
    placeholder: "Enter any additional notes",
  },];