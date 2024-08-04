import Card from "./components/card"
import "./index.css"



const App = ()=>{

  const myProduct = [
    {
      id:1,
      price: "31589000",
      title: "لپ تاپ 15.6 اینچی ایسوس مدل Vivobook E1504GA-BQ509-i3 N305 4GB 512SSD",
      rate:4.3,
      discount : 10,
      isFreeShipping:false,
      Count:10,
      isSpecialSale: true,
      photo:"photos/laptop.webp"
    }
  ]



  return(
    <Card id={myProduct[0].id} photo={myProduct[0].photo} price={myProduct[0].price} title={myProduct[0].title} rate={myProduct[0].rate} discount={myProduct[0].discount} isFreeShipping={myProduct[0].isFreeShipping} isSpecialSale={myProduct[0].isSpecialSale} count={myProduct[0].Count} />
  )
}


export default App