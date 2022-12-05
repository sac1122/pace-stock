
import "bootstrap/dist/css/bootstrap.min.css"
import "./App.css"

function Header(props) {
  return (
   
<nav class="navbar navbar-expand-lg border-b ">
  <div class="container-fluid">
  <a class="navbar-brand" href="#"><img className="image2" src="./images.png" alt="wrong Url"></img> </a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse space-between" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Features</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Pricing</a>
        </li>
        <li class="nav-item">
          <a class="nav-link disabled">Disabled</a>
        </li>
      </ul>
      <ul class="navbar-nav mr-auto">
        <li><a href="#" class="fa fa-facebook icon"></a></li>
        <li><a href="#" class="fa fa-twitter social-media icon"></a></li>
        <li><a href="#" class="fa fa-youtube social-media icon"></a></li>
        <li><a href="#" class="fa fa-instagram social-media icon"></a></li>
    </ul>
    </div>
  </div>
</nav>
  )
}

export default Header
