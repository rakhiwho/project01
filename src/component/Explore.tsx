import"../App.css";
import "./Style.css"
import p1 from "../../public/person1.avif"
import p2 from "../../public/person2.avif"
import p3 from "../../public/istockphoto-484005924-612x612.webp"
function Explore() {
    const reviews = [
        { img : p1 , name: "Bang Upin", text: "Terimakasih banyak, kini ruanganku menjadi lebih mewah dan terlihat mahal." },
        { img : p2 ,name: "Ibuk Sukijan", text: "Makasih Panto, aku sekarang berasa tinggal di apartment karena barang-barangnya." },
        { img : p3 ,name: "Mpok Ina", text: "Sangat terjangkau untuk kantong saya yang tidak terlalu banyak." },
      ];
    return (
        <div className="sections">
          {/* Best Selling */}
         
     
          {/* Reviews */}
          <section className="reviews">
            <h2>Our Client Reviews</h2>
            <div className="review-grid">
              {reviews.map((r) => (
                <div className="review-card" key={r.name}>
                  <div  className="avatar" >
                    <img className='avatar' src={r.img} alt="img" />
                  </div>
                  <h4>{r.name}</h4>
                  <p>{r.text}</p>
                </div>
              ))}
            </div>
          </section>
        </div>
  )
}

export default Explore
