import "../App.css"
import"./Style.css";
import c1 from "../../public/c1.jpg"
import c2 from "../../public/c2.jpg"
import c3 from "../../public/c3.jpg"
import c4 from "../../public/c4.jpg"
function TopItems() {
    
const products = [
    { img : c1  , name: "Sakarias Armchair", price: "$392" },
    {img : c2  , name: "Baltsar Chair", price: "$299" },
    {  img : c3  ,name: "Anjay Chair", price: "$519" },
    { img : c4  ,name: "Nyantuy Chair", price: "$921" },
  ];
  
  return (
    <div className='sections'>
       <section className="best">
        <h2>Best Selling Product</h2>
        <div className="product-grid">
          {products.map((p) => (
            <div className="product-card" key={p.name}>
              <div className="product-img" >
                <img className='product-img1' src={p.img} alt="img" />
              </div>
              <h4>{p.name}</h4>
              <p>{p.price}</p>
              <button>Add to cart</button>
            </div>
          ))}
        </div>
      </section>

    </div>
  )
}

export default TopItems
