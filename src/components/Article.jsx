import articleImagMobile from "../assets/images/image-web-3-mobile.jpg"
import articleImagDesktop from "../assets/images/image-web-3-desktop.jpg"

export default function Article() {
  return (
    <article>
      <picture className="article__img-container">
        <source srcSet={articleImagDesktop} media="(min-width: 1440px)" />
        <img src={articleImagMobile} alt="web-3 img" />
      </picture>
      <div className="article__text">
      <div className="article__title">
        <h1>The Bright Future of Web 3.0</h1>
      </div>
      <div className="article__content">
        <p className="article__paragraph">
          We dive into the next evalution of the web that claims to put the power of the platforms back into the hands of the people. But is it really fulfilling its promise?
        </p>
        <button className="article__btn">
          read more
        </button>
      </div>
      </div>
    </article>
  )
}
