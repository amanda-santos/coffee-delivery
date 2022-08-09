import americanEspressoImg from "assets/coffees-images/american-espresso.svg";
import arabicImg from "assets/coffees-images/arabic.svg";
import capuccinoImg from "assets/coffees-images/capuccino.svg";
import coffeeWithMilkImg from "assets/coffees-images/coffee-with-milk.svg";
import creamyEspressoImg from "assets/coffees-images/creamy-espresso.svg";
import cubanImg from "assets/coffees-images/cuban.svg";
import hawaiianImg from "assets/coffees-images/hawaiian.svg";
import hotChocolateImg from "assets/coffees-images/hot-chocolate.svg";
import icedEspressoImg from "assets/coffees-images/iced-espresso.svg";
import irishImg from "assets/coffees-images/irish.svg";
import latteImg from "assets/coffees-images/latte.svg";
import macchiatoImg from "assets/coffees-images/macchiato.svg";
import mocaccinoImg from "assets/coffees-images/mocaccino.svg";
import traditionalEspressoImg from "assets/coffees-images/traditional-espresso.svg";

export const coffeeData = [
  {
    name: "Traditional Espresso",
    description: "Traditional coffee made with hot water and ground beans",
    price: 9.9,
    labels: ["traditional"],
    image: traditionalEspressoImg,
  },
  {
    name: "American Espresso",
    description: "Diluted espresso, less intense than traditional",
    price: 9.9,
    labels: ["traditional"],
    image: americanEspressoImg,
  },
  {
    name: "Creamy Espresso",
    description: "Traditional espresso with creamy foam",
    price: 9.9,
    labels: ["traditional"],
    image: creamyEspressoImg,
  },
  {
    name: "Iced Espresso",
    description: "Drink prepared with espresso coffee and ice cubes",
    price: 9.9,
    labels: ["traditional", "iced"],
    image: icedEspressoImg,
  },
  {
    name: "Coffee With Milk",
    description: "Half and half traditional espresso with steamed milk",
    price: 9.9,
    labels: ["traditional", "with milk"],
    image: coffeeWithMilkImg,
  },
  {
    name: "Latte",
    description: "A shot of espresso with twice the milk and creamy foam",
    price: 9.9,
    labels: ["traditional", "with milk"],
    image: latteImg,
  },
  {
    name: "Capuccino",
    description:
      "Cinnamon drink made from equal doses of coffee, milk and foam",
    price: 9.9,
    labels: ["traditional", "with milk"],
    image: capuccinoImg,
  },
  {
    name: "Macchiato",
    description: "Espresso mixed with some hot milk and foam",
    price: 9.9,
    labels: ["traditional", "with milk"],
    image: macchiatoImg,
  },
  {
    name: "Mocaccino",
    description: "Espresso coffee with chocolate syrup, little milk and foam",
    price: 9.9,
    labels: ["traditional", "with milk"],
    image: mocaccinoImg,
  },
  {
    name: "Hot chocolate",
    description: "Drink made with chocolate dissolved in hot milk and coffee",
    price: 9.9,
    labels: ["special", "with milk"],
    image: hotChocolateImg,
  },
  {
    name: "Cuban",
    description: "Iced espresso drink with rum, cream and mint",
    price: 9.9,
    labels: ["special", "alcoholic", "iced"],
    image: cubanImg,
  },
  {
    name: "Hawaiian",
    description: "Sweet drink prepared with coffee and coconut milk",
    price: 9.9,
    labels: ["special"],
    image: hawaiianImg,
  },
  {
    name: "Arabic",
    description: "Drink prepared with Arabic coffee beans and spices",
    price: 9.9,
    labels: ["special"],
    image: arabicImg,
  },
  {
    name: "Irish",
    description:
      "Drink made from coffee, Irish whiskey, sugar and whipped cream",
    price: 9.9,
    labels: ["special", "alcoholic"],
    image: irishImg,
  },
];
