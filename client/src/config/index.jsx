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
    label: "Medicine Name",
    name: "medicineName",
    componentType: "input",
    type: "text",
    placeholder: "Enter medicine name",
  },
  {
    label: "Description",
    name: "description",
    componentType: "textarea",
    placeholder: "Enter medicine description",
  },
  {
    label: "Category",
    name: "category",
    componentType: "select",
    options: [
      { id: "prescription", label: "Prescription Medicines" },
      { id: "otc", label: "OTC (Over The Counter)" },
      { id: "ayurveda", label: "Ayurveda & Herbal" },
      { id: "wellness", label: "Wellness Products" },
      { id: "devices", label: "Medical Devices" },
      { id: "babyCare", label: "Baby Care" },
      { id: "personalCare", label: "Personal Care" },
      { id: "healthSupplements", label: "Health Supplements" },
    ],
  },
  {
    label: "Brand",
    name: "brand",
    componentType: "select",
    options: [
      { id: "sunPharma", label: "Sun Pharma" },
      { id: "cipla", label: "Cipla" },
      { id: "zandu", label: "Zandu" },
      { id: "himalaya", label: "Himalaya" },
      { id: "drReddys", label: "Dr. Reddy's" },
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
    label: "Discount Price",
    name: "discountPrice",
    componentType: "input",
    type: "number",
    placeholder: "Enter discount price (optional)",
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
    id: "medicines",
    label: "Medicines",
    path: "/shop/medicines",
  },
  {
    id: "healthWellness",
    label: "Health & Wellness",
    path: "/shop/health-wellness",
  },
  {
    id: "devices",
    label: "Medical Devices",
    path: "/shop/devices",
  },
  {
    id: "personalCare",
    label: "Personal Care",
    path: "/shop/personal-care",
  },
  {
    id: "babyCare",
    label: "Baby Care",
    path: "/shop/baby-care",
  },
];

export const categoryOptionsMap = {
  prescription: "Prescription Medicines",
  otc: "OTC (Over The Counter)",
  ayurveda: "Ayurveda & Herbal",
  wellness: "Wellness Products",
  devices: "Medical Devices",
  babyCare: "Baby Care",
  personalCare: "Personal Care",
  healthSupplements: "Health Supplements",
};

export const brandOptionsMap = {
  sunPharma: "Sun Pharma",
  cipla: "Cipla",
  zandu: "Zandu",
  himalaya: "Himalaya",
  drReddys: "Dr. Reddy's",
};

export const filterOptions = {
  category: [
    { id: "prescription", label: "Prescription Medicines" },
    { id: "otc", label: "OTC (Over The Counter)" },
    { id: "ayurveda", label: "Ayurveda & Herbal" },
    { id: "wellness", label: "Wellness Products" },
    { id: "devices", label: "Medical Devices" },
    { id: "babyCare", label: "Baby Care" },
    { id: "personalCare", label: "Personal Care" },
    { id: "healthSupplements", label: "Health Supplements" },
  ],
  brand: [
    { id: "sunPharma", label: "Sun Pharma" },
    { id: "cipla", label: "Cipla" },
    { id: "zandu", label: "Zandu" },
    { id: "himalaya", label: "Himalaya" },
    { id: "drReddys", label: "Dr. Reddy's" },
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