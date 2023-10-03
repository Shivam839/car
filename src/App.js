import "./App.css";
import Navbar from "./components/Navbar";
import CarSection from "./components/CarSection";
import "./components/CarList.css"
import { useState } from "react";
function App() {
  const product = [
    {
      title: "Tata Nexon",
      rentPrice: "$440",
      mileage: "6.5km/l",
      seater: 4,
      fuel: "Hybrid",
      model: "2021",
      image: "https://stimg.cardekho.com/images/carexteriorimages/630x420/Tata/Nexon/9675/1695710737561/front-left-side-47.jpg?imwidth=420&impolicy=resize",
      gear: "automatic",
    },
    {
      title: "Mahindra Thar",
      rentPrice: "$440",
      mileage: "5.5km/l",
      seater: 4,
      fuel: "Hybrid",
      model: "2020",
      image: "https://stimg.cardekho.com/images/carexteriorimages/630x420/Mahindra/Thar/10743/1690192572470/front-left-side-47.jpg?imwidth=420&impolicy=resize",
      gear: "automatic",
    },
    {
      title: "Hyundai Exter",
      rentPrice: "$1040",
      mileage: "6.5km/l",
      seater: 4,
      fuel: "Hybrid",
      model: "2021",
      image: "https://stimg.cardekho.com/images/carexteriorimages/630x420/Hyundai/Exter/10443/1694584843066/front-left-side-47.jpg?tr=w-456",
      gear: "automatic",
    },
    {
      title: "Toyota Innova Crysta",
      rentPrice: "$840",
      mileage: "6.5km/l",
      seater: 4,
      fuel: "Hybrid",
      model: "2019",
      image: "https://stimg.cardekho.com/images/carexteriorimages/630x420/Toyota/Innova-Crysta/9612/1680599962805/front-left-side-47.jpg?tr=w-456",
      gear: "automatic",
    },
    {
      title: "Tata Punch",
      rentPrice: "$440",
      mileage: "6.5km/l",
      seater: 4,
      fuel: "Hybrid",
      model: "2021",
      image: "https://stimg.cardekho.com/images/carexteriorimages/630x420/Tata/Punch/10681/1691392713058/front-left-side-47.jpg?tr=w-456",
      gear: "automatic",
    },
    {
      title: "Hyundai Creta",
      rentPrice: "$440",
      mileage: "6.5km/l",
      seater: 4,
      fuel: "Hybrid",
      model: "2021",
      image: "https://stimg.cardekho.com/images/carexteriorimages/630x420/Hyundai/Creta/10544/1689588616959/front-left-side-47.jpg?tr=w-456",
      gear: "automatic",
    },
    {
      title: "Maruti Swift",
      rentPrice: "$440",
      mileage: "6.5km/l",
      seater: 4,
      fuel: "Hybrid",
      model: "2021",
      image: "https://stimg.cardekho.com/images/carexteriorimages/630x420/Maruti/Swift/10402/1688128138547/front-left-side-47.jpg?tr=w-456",
      gear: "automatic",
    },
    {
      title: "Maruti Brezza",
      rentPrice: "$440",
      mileage: "6.5km/l",
      seater: 4,
      fuel: "Hybrid",
      model: "2021",
      image: "https://stimg.cardekho.com/images/carexteriorimages/630x420/Maruti/Brezza/10388/1694424068944/front-left-side-47.jpg?tr=w-456",
      gear: "automatic",
    },
    {
      title: "Toyota Fortuner",
      rentPrice: "$1040",
      mileage: "6.5km/l",
      seater: 6,
      fuel: "Hybrid",
      model: "2021",
      image: "https://stimg.cardekho.com/images/carexteriorimages/630x420/Toyota/Fortuner/10903/1695443447797/front-left-side-47.jpg?tr=w-456",
      gear: "automatic",
    },
    {
      title: "Kia Seltos",
      rentPrice: "$440",
      mileage: "6.5km/l",
      seater: 4,
      fuel: "Hybrid",
      model: "2021",
      image: "https://stimg.cardekho.com/images/carexteriorimages/630x420/Kia/Seltos-2023/8709/1688465684023/front-left-side-47.jpg?tr=w-456",
      gear: "automatic",
    },
    {
      title: "Tata Nexon",
      rentPrice: "$650",
      mileage: "6.5km/l",
      seater: 4,
      fuel: "Hybrid",
      model: "2021",
      image: "https://stimg.cardekho.com/images/carexteriorimages/630x420/Tata/Nexon/9675/1695710737561/front-left-side-47.jpg?imwidth=420&impolicy=resize",
      gear: "automatic",
    },
    {
      title: "Mahindra Thar",
      rentPrice: "$440",
      mileage: "5.5km/l",
      seater: 4,
      fuel: "Hybrid",
      model: "2020",
      image: "https://stimg.cardekho.com/images/carexteriorimages/630x420/Mahindra/Thar/10743/1690192572470/front-left-side-47.jpg?imwidth=420&impolicy=resize",
      gear: "automatic",
    },
    {
      title: "Hyundai Exter",
      rentPrice: "$1040",
      mileage: "6.5km/l",
      seater: 4,
      fuel: "Hybrid",
      model: "2021",
      image: "https://stimg.cardekho.com/images/carexteriorimages/630x420/Hyundai/Exter/10443/1694584843066/front-left-side-47.jpg?tr=w-456",
      gear: "automatic",
    },
    {
      title: "Toyota Innova Crysta",
      rentPrice: "$840",
      mileage: "6.5km/l",
      seater: 4,
      fuel: "Hybrid",
      model: "2019",
      image: "https://stimg.cardekho.com/images/carexteriorimages/630x420/Toyota/Innova-Crysta/9612/1680599962805/front-left-side-47.jpg?tr=w-456",
      gear: "automatic",
    },
    {
      title: "Tata Punch",
      rentPrice: "$440",
      mileage: "6.5km/l",
      seater: 4,
      fuel: "Hybrid",
      model: "2021",
      image: "https://stimg.cardekho.com/images/carexteriorimages/630x420/Tata/Punch/10681/1691392713058/front-left-side-47.jpg?tr=w-456",
      gear: "automatic",
    },
    {
      title: "Hyundai Creta",
      rentPrice: "$440",
      mileage: "6.5km/l",
      seater: 4,
      fuel: "Hybrid",
      model: "2021",
      image: "https://stimg.cardekho.com/images/carexteriorimages/630x420/Hyundai/Creta/10544/1689588616959/front-left-side-47.jpg?tr=w-456",
      gear: "automatic",
    },
    {
      title: "Hyundai Creta",
      rentPrice: "$440",
      mileage: "6.5km/l",
      seater: 4,
      fuel: "Hybrid",
      model: "2021",
      image: "https://stimg.cardekho.com/images/carexteriorimages/630x420/Hyundai/Creta/10544/1689588616959/front-left-side-47.jpg?tr=w-456",
      gear: "automatic",
    },
    {
      title: "Maruti Swift",
      rentPrice: "$440",
      mileage: "6.5km/l",
      seater: 4,
      fuel: "Hybrid",
      model: "2021",
      image: "https://stimg.cardekho.com/images/carexteriorimages/630x420/Maruti/Swift/10402/1688128138547/front-left-side-47.jpg?tr=w-456",
      gear: "automatic",
    },
    {
      title: "Maruti Brezza",
      rentPrice: "$440",
      mileage: "6.5km/l",
      seater: 4,
      fuel: "Hybrid",
      model: "2021",
      image: "https://stimg.cardekho.com/images/carexteriorimages/630x420/Maruti/Brezza/10388/1694424068944/front-left-side-47.jpg?tr=w-456",
      gear: "automatic",
    },
    {
      title: "Toyota Fortuner",
      rentPrice: "$1040",
      mileage: "6.5km/l",
      seater: 6,
      fuel: "Hybrid",
      model: "2021",
      image: "https://stimg.cardekho.com/images/carexteriorimages/630x420/Toyota/Fortuner/10903/1695443447797/front-left-side-47.jpg?tr=w-456",
      gear: "automatic",
    },
    {
      title: "Kia Seltos",
      rentPrice: "$440",
      mileage: "6.5km/l",
      seater: 4,
      fuel: "Hybrid",
      model: "2021",
      image: "https://stimg.cardekho.com/images/carexteriorimages/630x420/Kia/Seltos-2023/8709/1688465684023/front-left-side-47.jpg?tr=w-456",
      gear: "automatic",
    },
    {
      title: "Tata Nexon",
      rentPrice: "$740",
      mileage: "6.5km/l",
      seater: 4,
      fuel: "Hybrid",
      model: "2021",
      image: "https://stimg.cardekho.com/images/carexteriorimages/630x420/Tata/Nexon/9675/1695710737561/front-left-side-47.jpg?imwidth=420&impolicy=resize",
      gear: "automatic",
    },
    {
      title: "Mahindra Thar",
      rentPrice: "$440",
      mileage: "5.5km/l",
      seater: 4,
      fuel: "Hybrid",
      model: "2020",
      image: "https://stimg.cardekho.com/images/carexteriorimages/630x420/Mahindra/Thar/10743/1690192572470/front-left-side-47.jpg?imwidth=420&impolicy=resize",
      gear: "automatic",
    },
    {
      title: "Hyundai Exter",
      rentPrice: "$1040",
      mileage: "6.5km/l",
      seater: 4,
      fuel: "Hybrid",
      model: "2021",
      image: "https://stimg.cardekho.com/images/carexteriorimages/630x420/Hyundai/Exter/10443/1694584843066/front-left-side-47.jpg?tr=w-456",
      gear: "automatic",
    },
    {
      title: "Toyota Innova Crysta",
      rentPrice: "$840",
      mileage: "6.5km/l",
      seater: 4,
      fuel: "Hybrid",
      model: "2019",
      image: "https://stimg.cardekho.com/images/carexteriorimages/630x420/Toyota/Innova-Crysta/9612/1680599962805/front-left-side-47.jpg?tr=w-456",
      gear: "automatic",
    },
    {
      title: "Tata Punch",
      rentPrice: "$440",
      mileage: "6.5km/l",
      seater: 4,
      fuel: "Hybrid",
      model: "2021",
      image: "https://stimg.cardekho.com/images/carexteriorimages/630x420/Tata/Punch/10681/1691392713058/front-left-side-47.jpg?tr=w-456",
      gear: "automatic",
    },
    {
      title: "Hyundai Creta",
      rentPrice: "$440",
      mileage: "6.5km/l",
      seater: 4,
      fuel: "Hybrid",
      model: "2021",
      image: "https://stimg.cardekho.com/images/carexteriorimages/630x420/Hyundai/Creta/10544/1689588616959/front-left-side-47.jpg?tr=w-456",
      gear: "automatic",
    },
    {
      title: "Maruti Swift",
      rentPrice: "$440",
      mileage: "6.5km/l",
      seater: 4,
      fuel: "Hybrid",
      model: "2021",
      image: "https://stimg.cardekho.com/images/carexteriorimages/630x420/Maruti/Swift/10402/1688128138547/front-left-side-47.jpg?tr=w-456",
      gear: "automatic",
    },
    {
      title: "Maruti Brezza",
      rentPrice: "$440",
      mileage: "6.5km/l",
      seater: 4,
      fuel: "Hybrid",
      model: "2021",
      image: "https://stimg.cardekho.com/images/carexteriorimages/630x420/Maruti/Brezza/10388/1694424068944/front-left-side-47.jpg?tr=w-456",
      gear: "automatic",
    },
    {
      title: "Toyota Fortuner",
      rentPrice: "$1040",
      mileage: "6.5km/l",
      seater: 6,
      fuel: "Hybrid",
      model: "2021",
      image: "https://stimg.cardekho.com/images/carexteriorimages/630x420/Toyota/Fortuner/10903/1695443447797/front-left-side-47.jpg?tr=w-456",
      gear: "automatic",
    },
    {
      title: "Kia Seltos",
      rentPrice: "$440",
      mileage: "6.5km/l",
      seater: 4,
      fuel: "Hybrid",
      model: "2021",
      image: "https://stimg.cardekho.com/images/carexteriorimages/630x420/Kia/Seltos-2023/8709/1688465684023/front-left-side-47.jpg?tr=w-456",
      gear: "automatic",
    },
    {
      title: "Tata Nexon",
      rentPrice: "$440",
      mileage: "6.5km/l",
      seater: 4,
      fuel: "Hybrid",
      model: "2021",
      image: "https://stimg.cardekho.com/images/carexteriorimages/630x420/Tata/Nexon/9675/1695710737561/front-left-side-47.jpg?imwidth=420&impolicy=resize",
      gear: "automatic",
    },
    {
      title: "Mahindra Thar",
      rentPrice: "$440",
      mileage: "5.5km/l",
      seater: 4,
      fuel: "Hybrid",
      model: "2020",
      image: "https://stimg.cardekho.com/images/carexteriorimages/630x420/Mahindra/Thar/10743/1690192572470/front-left-side-47.jpg?imwidth=420&impolicy=resize",
      gear: "automatic",
    },
    {
      title: "Hyundai Exter",
      rentPrice: "$1040",
      mileage: "6.5km/l",
      seater: 4,
      fuel: "Hybrid",
      model: "2021",
      image: "https://stimg.cardekho.com/images/carexteriorimages/630x420/Hyundai/Exter/10443/1694584843066/front-left-side-47.jpg?tr=w-456",
      gear: "automatic",
    },
    {
      title: "Toyota Innova Crysta",
      rentPrice: "$840",
      mileage: "6.5km/l",
      seater: 4,
      fuel: "Hybrid",
      model: "2019",
      image: "https://stimg.cardekho.com/images/carexteriorimages/630x420/Toyota/Innova-Crysta/9612/1680599962805/front-left-side-47.jpg?tr=w-456",
      gear: "automatic",
    },
    {
      title: "Tata Punch",
      rentPrice: "$440",
      mileage: "6.5km/l",
      seater: 4,
      fuel: "Hybrid",
      model: "2021",
      image: "https://stimg.cardekho.com/images/carexteriorimages/630x420/Tata/Punch/10681/1691392713058/front-left-side-47.jpg?tr=w-456",
      gear: "automatic",
    },
    {
      title: "Hyundai Creta",
      rentPrice: "$440",
      mileage: "6.5km/l",
      seater: 4,
      fuel: "Hybrid",
      model: "2021",
      image: "https://stimg.cardekho.com/images/carexteriorimages/630x420/Hyundai/Creta/10544/1689588616959/front-left-side-47.jpg?tr=w-456",
      gear: "automatic",
    },
    {
      title: "Maruti Swift",
      rentPrice: "$440",
      mileage: "6.5km/l",
      seater: 4,
      fuel: "Hybrid",
      model: "2021",
      image: "https://stimg.cardekho.com/images/carexteriorimages/630x420/Maruti/Swift/10402/1688128138547/front-left-side-47.jpg?tr=w-456",
      gear: "automatic",
    },
    {
      title: "Maruti Brezza",
      rentPrice: "$440",
      mileage: "6.5km/l",
      seater: 4,
      fuel: "Hybrid",
      model: "2021",
      image: "https://stimg.cardekho.com/images/carexteriorimages/630x420/Maruti/Brezza/10388/1694424068944/front-left-side-47.jpg?tr=w-456",
      gear: "automatic",
    },
    {
      title: "Toyota Fortuner",
      rentPrice: "$1040",
      mileage: "6.5km/l",
      seater: 6,
      fuel: "Hybrid",
      model: "2021",
      image: "https://stimg.cardekho.com/images/carexteriorimages/630x420/Toyota/Fortuner/10903/1695443447797/front-left-side-47.jpg?tr=w-456",
      gear: "automatic",
    },
    {
      title: "Kia Seltos",
      rentPrice: "$440",
      mileage: "6.5km/l",
      seater: 4,
      fuel: "Hybrid",
      model: "2021",
      image: "https://stimg.cardekho.com/images/carexteriorimages/630x420/Kia/Seltos-2023/8709/1688465684023/front-left-side-47.jpg?tr=w-456",
      gear: "automatic",
    },
    {
      title: "Tata Nexon",
      rentPrice: "$440",
      mileage: "6.5km/l",
      seater: 4,
      fuel: "Hybrid",
      model: "2021",
      image: "https://stimg.cardekho.com/images/carexteriorimages/630x420/Tata/Nexon/9675/1695710737561/front-left-side-47.jpg?imwidth=420&impolicy=resize",
      gear: "automatic",
    },
    {
      title: "Mahindra Thar",
      rentPrice: "$440",
      mileage: "5.5km/l",
      seater: 4,
      fuel: "Hybrid",
      model: "2020",
      image: "https://stimg.cardekho.com/images/carexteriorimages/630x420/Mahindra/Thar/10743/1690192572470/front-left-side-47.jpg?imwidth=420&impolicy=resize",
      gear: "automatic",
    },
    {
      title: "Hyundai Exter",
      rentPrice: "$1040",
      mileage: "6.5km/l",
      seater: 4,
      fuel: "Hybrid",
      model: "2021",
      image: "https://stimg.cardekho.com/images/carexteriorimages/630x420/Hyundai/Exter/10443/1694584843066/front-left-side-47.jpg?tr=w-456",
      gear: "automatic",
    },
    {
      title: "Toyota Innova Crysta",
      rentPrice: "$840",
      mileage: "6.5km/l",
      seater: 4,
      fuel: "Hybrid",
      model: "2019",
      image: "https://stimg.cardekho.com/images/carexteriorimages/630x420/Toyota/Innova-Crysta/9612/1680599962805/front-left-side-47.jpg?tr=w-456",
      gear: "automatic",
    },
    {
      title: "Tata Punch",
      rentPrice: "$440",
      mileage: "6.5km/l",
      seater: 4,
      fuel: "Hybrid",
      model: "2021",
      image: "https://stimg.cardekho.com/images/carexteriorimages/630x420/Tata/Punch/10681/1691392713058/front-left-side-47.jpg?tr=w-456",
      gear: "automatic",
    },
    {
      title: "Hyundai Creta",
      rentPrice: "$440",
      mileage: "6.5km/l",
      seater: 4,
      fuel: "Hybrid",
      model: "2021",
      image: "https://stimg.cardekho.com/images/carexteriorimages/630x420/Hyundai/Creta/10544/1689588616959/front-left-side-47.jpg?tr=w-456",
      gear: "automatic",
    },
    {
      title: "Maruti Swift",
      rentPrice: "$440",
      mileage: "6.5km/l",
      seater: 4,
      fuel: "Hybrid",
      model: "2021",
      image: "https://stimg.cardekho.com/images/carexteriorimages/630x420/Maruti/Swift/10402/1688128138547/front-left-side-47.jpg?tr=w-456",
      gear: "automatic",
    },
    {
      title: "Maruti Brezza",
      rentPrice: "$440",
      mileage: "6.5km/l",
      seater: 4,
      fuel: "Hybrid",
      model: "2021",
      image: "https://stimg.cardekho.com/images/carexteriorimages/630x420/Maruti/Brezza/10388/1694424068944/front-left-side-47.jpg?tr=w-456",
      gear: "automatic",
    },
    {
      title: "Toyota Fortuner",
      rentPrice: "$1040",
      mileage: "6.5km/l",
      seater: 6,
      fuel: "Hybrid",
      model: "2021",
      image: "https://stimg.cardekho.com/images/carexteriorimages/630x420/Toyota/Fortuner/10903/1695443447797/front-left-side-47.jpg?tr=w-456",
      gear: "automatic",
    },
    {
      title: "Kia Seltos",
      rentPrice: "$440",
      mileage: "6.5km/l",
      seater: 4,
      fuel: "Hybrid",
      model: "2021",
      image: "https://stimg.cardekho.com/images/carexteriorimages/630x420/Kia/Seltos-2023/8709/1688465684023/front-left-side-47.jpg?tr=w-456",
      gear: "automatic",
    },
  ];
  const [searchValue, setSeachvalue]=useState("");
  const getData =(data)=>{
    setSeachvalue(data);
  }

  return (
    <div className="main-section">
      <Navbar onSubmit={getData} />
      <CarSection product = {product} searchValue={searchValue}  />
    </div>
  );
}

export default App;