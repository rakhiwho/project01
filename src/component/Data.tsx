import React from 'react'
import "../App.css"
function Data() {
    const whyData = [
        {
          title: "Luxury facilities",
          description:
            "The advantage of hiring a workspace with us is that gives you comfortable service and all-around facilities.",
        },
        {
          title: "Affordable Price",
          description:
            "You can get a workspace of the highest quality at an affordable price and still enjoy the facilities.",
        },
        {
          title: "Many Choices",
          description:
            "We provide many unique workspace choices so that you can choose the workspace to your liking.",
        },
      ];
      
  return (
    <div>
      <section className="why">
  <h3>
    Why <br /> Choosing Us
  </h3>

  {whyData.map((item, index) => (
    <div className="card" key={index}>
      <h4>{item.title}</h4>
      <p>{item.description}</p>
      <span>More Info →</span>
    </div>
  ))}
</section>

    </div>
  )
}

export default Data
