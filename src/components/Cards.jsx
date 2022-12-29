import retro from "../assets/images/image-retro-pcs.jpg"
import laptop from "../assets/images/image-top-laptops.jpg"
import gaming from "../assets/images/image-gaming-growth.jpg"


export default function Cards() {
  return (
    <section className="cards">
      <div className="cards__card-1">
        <div className="cards_img-container">
          <img src={retro} alt="" />
        </div>
        <div className="cards__content">
          <span className="cards__number">01</span>
          <h3 className="cards__title">Reviving Retro PC</h3>
          <p className="cards__text">What happens when old PCs are given modern upgrades?</p>
        </div>
      </div>
      <div className="cards__card-2">
        <div className="cards_img-container">
          <img src={laptop} alt="" />
        </div>
        <div className="cards__content">
          <span className="cards__number">02</span>
          <h3 className="cards__title">Top 10 Laptops of 2022</h3>
          <p className="cards__text">Our best picks for various needs and budgets.</p>
        </div>
      </div>
      <div className="cards__card-3">
        <div className="cards_img-container">
          <img src={gaming} alt="" />
        </div>
        <div className="cards__content">
          <span className="cards__number">03</span>
          <h3 className="cards__title">The Growth of Gaming</h3>
          <p className="cards__text">How the pandemic has sparked fresh opportunities.</p>
        </div>
      </div>
    </section>
  )
}
