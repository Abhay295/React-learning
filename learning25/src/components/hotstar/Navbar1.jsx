import React from 'react'

const Navbar1 = () => {
  return (
    <div>
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <a class="navbar-brand" href="">Navbar</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

  <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav mr-auto">
      <li class="nav-item active">
        <a class="nav-link" href="/home">Home <span class="sr-only">(current)</span></a>
      </li>
      
      {/* <li class="nav-item">
        <a class="nav-link" href="/movies">Movie</a>
      </li> 
      <li class="nav-item">
        <a class="nav-link" href="/form1">Form1</a>
      </li> 
      <li class="nav-item">
        <a class="nav-link" href="/form2">Form2</a>
      </li>  */}
      <li class="nav-item">
        <a class="nav-link" href="/api1">Api1</a>
      </li> 
      <li class="nav-item">
        <a class="nav-link" href="/searchmovie">searchmovie</a>
      </li> 
      <li class="nav-item">
        <a class="nav-link" href="/postapidemo1">postApiDemo1</a>
      </li> 
      <li class="nav-item">
        <a class="nav-link" href="/postapidemo2">postApiDemo2</a>
      </li> 
    </ul>
    
  </div>
</nav>
    </div>
  )
}

export default Navbar1
