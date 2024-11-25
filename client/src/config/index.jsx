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
        { id: "pen", label: "Pens" },
        { id: "papers", label: "Papers" },
        { id: "notebook", label: "Notebook" },
        { id: "Office Supplies", label: "Office Supplies" },
        { id: "Writing Tools", label: "Writing Tools" },
      ],
    },
    {
      label: "Brand",
      name: "brand",
      componentType: "select",
      options: [
        { id: "Reynolds", label: "Reynolds" },
        { id: "Classmate", label: "Classmate" },
        { id: "Parker", label: "Parker" },
        { id: "Luxor", label: "Luxor" },
        { id: "Camlin", label: "Camlin" },
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
      { id: "pen", label: "Pens" },
      { id: "papers", label: "Papers" },
      { id: "notebook", label: "Notebook" },
      { id: "Office Supplies", label: "Office Supplies" },
      { id: "Writing Tools", label: "Writing Tools" },
    ],
    brand: [
      { id: "Reynolds", label: "Reynolds" },
      { id: "Classmate", label: "Classmate" },
      { id: "Parker", label: "Parker" },
      { id: "Luxor", label: "Luxor" },
      { id: "Camlin", label: "Camlin" },
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
    },
  ];