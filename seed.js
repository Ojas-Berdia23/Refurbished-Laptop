const mongoose = require("mongoose");
const dotenv = require("dotenv");
const Laptop = require("./models/laptop");

dotenv.config();

const MONGO_URI = process.env.MONGO_URI || "mongodb://localhost:27017/refurbished";
const adminId = "686737c15d6ffb33a633b080"; // ✅ Your admin ID

const laptops = [
  {
    brand: "Dell",
    model: "Latitude 5400",
    Processor: "Intel Core i5-8265U",
    RAM: "8GB",
    Storage: "256GB SSD",
    Condition: "refurbished",
    Price: 42000,
    createdBy: adminId,
  },
  {
    brand: "HP",
    model: "EliteBook 840 G5",
    Processor: "Intel Core i7-8650U",
    RAM: "16GB",
    Storage: "512GB SSD",
    Condition: "pre-owned",
    Price: 50000,
    createdBy: adminId,
  },
  {
    brand: "Lenovo",
    model: "ThinkPad T480",
    Processor: "Intel Core i5-8350U",
    RAM: "8GB",
    Storage: "256GB SSD",
    Condition: "refurbished",
    Price: 39000,
    createdBy: adminId,
  },
  {
    brand: "Acer",
    model: "Aspire 5",
    Processor: "AMD Ryzen 5 3500U",
    RAM: "8GB",
    Storage: "512GB SSD",
    Condition: "pre-owned",
    Price: 37000,
    createdBy: adminId,
  },
  {
    brand: "Apple",
    model: "MacBook Air 2017",
    Processor: "Intel Core i5",
    RAM: "8GB",
    Storage: "128GB SSD",
    Condition: "pre-owned",
    Price: 45000,
    createdBy: adminId,
  },
  {
    brand: "Asus",
    model: "VivoBook 14",
    Processor: "Intel Core i3-1005G1",
    RAM: "8GB",
    Storage: "512GB SSD",
    Condition: "refurbished",
    Price: 33000,
    createdBy: adminId,
  },
  {
    brand: "Dell",
    model: "Inspiron 15",
    Processor: "Intel Core i7-10510U",
    RAM: "16GB",
    Storage: "1TB HDD",
    Condition: "pre-owned",
    Price: 52000,
    createdBy: adminId,
  },
  {
    brand: "HP",
    model: "Pavilion x360",
    Processor: "Intel Core i5-10210U",
    RAM: "8GB",
    Storage: "512GB SSD",
    Condition: "refurbished",
    Price: 48000,
    createdBy: adminId,
  },
  {
    brand: "Lenovo",
    model: "IdeaPad Slim 3",
    Processor: "AMD Ryzen 5 5500U",
    RAM: "8GB",
    Storage: "512GB SSD",
    Condition: "refurbished",
    Price: 40000,
    createdBy: adminId,
  },
  {
    brand: "Asus",
    model: "ROG Strix G15",
    Processor: "AMD Ryzen 7 4800H",
    RAM: "16GB",
    Storage: "1TB SSD",
    Condition: "pre-owned",
    Price: 65000,
    createdBy: adminId,
  },
  {
    brand: "Acer",
    model: "Nitro 5",
    Processor: "Intel Core i5-10300H",
    RAM: "8GB",
    Storage: "512GB SSD",
    Condition: "pre-owned",
    Price: 60000,
    createdBy: adminId,
  },
  {
    brand: "Dell",
    model: "XPS 13",
    Processor: "Intel Core i7-1165G7",
    RAM: "16GB",
    Storage: "512GB SSD",
    Condition: "refurbished",
    Price: 72000,
    createdBy: adminId,
  },
  {
    brand: "HP",
    model: "Spectre x360",
    Processor: "Intel Core i7-1165G7",
    RAM: "16GB",
    Storage: "1TB SSD",
    Condition: "refurbished",
    Price: 85000,
    createdBy: adminId,
  },
  {
    brand: "Apple",
    model: "MacBook Pro 2019",
    Processor: "Intel Core i5",
    RAM: "8GB",
    Storage: "256GB SSD",
    Condition: "pre-owned",
    Price: 90000,
    createdBy: adminId,
  },
  {
    brand: "Lenovo",
    model: "Legion 5",
    Processor: "AMD Ryzen 7 5800H",
    RAM: "16GB",
    Storage: "512GB SSD",
    Condition: "pre-owned",
    Price: 74000,
    createdBy: adminId,
  },
];

mongoose
  .connect(MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(async () => {
    await Laptop.deleteMany({});
    const inserted = await Laptop.insertMany(laptops);
    console.log(`✅ Inserted ${inserted.length} laptops`);
    mongoose.disconnect();
  })
  .catch((err) => {
    console.error("❌ Seeding error:", err);
    process.exit(1);
  });
