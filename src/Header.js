
import "bootstrap/dist/css/bootstrap.min.css"
import "./App.css"

function Header(props) {
  return (
    <nav class="navbar navbar-expand-lg navbar-light header item-center pb-2">
  <a class="navbar-brand" href="#"><img className="image2" src="./images.png" alt="wrong Url"></img> </a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

  <div class="collapse navbar-collapse space-between" id="navbarSupportedContent">
    <ul class="navbar-nav mr-auto">
      <li class="nav-item active">
        <a class="nav-link" href="#">Learn <span class="sr-only"></span></a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">Bookmark</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">BLOG</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">UI KIT</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">LAIN NYA</a>
      </li>
    
    </ul>
    <ul class="navbar-nav mr-auto">
        <li><a href="#" class="fa fa-facebook icon"></a></li>
        <li><a href="#" class="fa fa-twitter social-media icon"></a></li>
        <li><a href="#" class="fa fa-youtube social-media icon"></a></li>
        <li><a href="#" class="fa fa-instagram social-media icon"></a></li>
    </ul>
  </div>
</nav>
  )
}

export default Header
