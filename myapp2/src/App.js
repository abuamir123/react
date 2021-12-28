
import  React from 'react'
class App extends React.Component
{
  constructor()
  {
    super()
    this.state={
      product:[
        {
          pname:'Samsung A10',company:"Samsung",category:"smartphone",price:7000,discount: 200,image:"./images/img1.jpeg"},
         { pname:'Acer Laptop',company:"Acer",category:"Laptop",price:70000,discount: 1200,image:"./images/img3.jpeg"},
         { pname:'SmartWatch A1',company:"Noise",category:"Smartwatch",price:17000,discount:100,image:"./images/img2.jpg"},
      ]
    }
  }

  render()
  {
    console.log("render run")
    return <div>
      <h1>hello </h1>
      {this.state.product.map((product, index) => (
        <div><h1>{product.pname} </h1>
       <h1>{product.company}</h1> 
        <img src={product.image} height={200} width={200}/>
        </div>
        
      ))}
      {/* <img src={product.image}/> */}
    </div>
  }
}

export default App;
