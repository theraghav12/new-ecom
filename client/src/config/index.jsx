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
      label: "Product Name",
      name: "productName",
      componentType: "input",
      type: "text",
      placeholder: "Enter product name",
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
        {
          id: "supplements",
          label: "Supplements",
          subcategories: [
            { id: "supplements-men", label: "For Men" },
            { id: "supplements-women", label: "For Women" },
            { id: "supplements-kids", label: "For Kids" },
            { id: "supplements-seniors", label: "For Seniors" },
            { id: "supplements-general", label: "General Wellness" },
          ],
        },
        {
          id: "wellness",
          label: "Wellness Products",
          subcategories: [
            { id: "skin-care", label: "Skin Care" },
            { id: "hair-care", label: "Hair Care" },
            { id: "weight-management", label: "Weight Management" },
            { id: "vitamins", label: "Vitamins & Minerals" },
          ],
        },
        { id: "equipment", label: "Medical Equipment" },
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
        { id: "gsk", label: "GSK" },
        { id: "lupin", label: "Lupin" },
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
      label: "Stock Quantity",
      name: "stockQuantity",
      componentType: "input",
      type: "number",
      placeholder: "Enter stock quantity",
    },
  ];
  
  export const shoppingViewHeaderMenuItems = [
    {
      id: "home",
      label: "Home",
      path: "/shop/home",
    },
    {
      id: "medicines",
      label: "Medicines",
      path: "/shop/medicines",
    },
    {
      id: "supplements",
      label: "Supplements",
      path: "/shop/supplements",
    },
    {
      id: "equipment",
      label: "Medical Equipment",
      path: "/shop/equipment",
    },
    {
      id: "wellness",
      label: "Wellness",
      path: "/shop/wellness",
    },
  ];
  
  export const categoryOptionsMap = {
    prescription: "Prescription Medicines",
    otc: "Over-the-Counter (OTC)",
    supplements: "Supplements",
    supplementsMen: "Supplements for Men",
    supplementsWomen: "Supplements for Women",
    supplementsKids: "Supplements for Kids",
    supplementsSeniors: "Supplements for Seniors",
    supplementsGeneral: "General Wellness Supplements",
    wellness: "Wellness Products",
    skinCare: "Skin Care",
    hairCare: "Hair Care",
    weightManagement: "Weight Management",
    vitamins: "Vitamins & Minerals",
    equipment: "Medical Equipment",
  };
  
  export const brandOptionsMap = {
    pfizer: "Pfizer",
    cipla: "Cipla",
    sunPharma: "Sun Pharma",
    gsk: "GSK",
    lupin: "Lupin",
    himalaya: "Himalaya",
    dabur: "Dabur",
  };
  
  export const filterOptions = {
    category: [
      { id: "prescription", label: "Prescription Medicines" },
      { id: "otc", label: "Over-the-Counter (OTC)" },
      { id: "supplements", label: "Supplements" },
      { id: "equipment", label: "Medical Equipment" },
      { id: "wellness", label: "Wellness Products" },
    ],
    subcategory: [
      { id: "supplements-men", label: "Supplements for Men" },
      { id: "supplements-women", label: "Supplements for Women" },
      { id: "supplements-kids", label: "Supplements for Kids" },
      { id: "supplements-seniors", label: "Supplements for Seniors" },
      { id: "skin-care", label: "Skin Care" },
      { id: "hair-care", label: "Hair Care" },
      { id: "weight-management", label: "Weight Management" },
      { id: "vitamins", label: "Vitamins & Minerals" },
    ],
    brand: [
      { id: "pfizer", label: "Pfizer" },
      { id: "cipla", label: "Cipla" },
      { id: "sun-pharma", label: "Sun Pharma" },
      { id: "gsk", label: "GSK" },
      { id: "lupin", label: "Lupin" },
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
    },
  ];