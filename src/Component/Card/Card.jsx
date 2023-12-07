import React from 'react'

function Card() {
  return (
    <div className='d-flex justify-content-around'>
      <div class="card" style={{width: "18rem"}}>
  <img src="https://images.fineartamerica.com/images/artworkimages/mediumlarge/1/i-am-art-painted-linda-woods.jpg" class="card-img-top" alt="..." style={{height: "22em"}}/>
  <div class="card-body">
    <h5 class="card-title">Card title</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div>

<div class="card" style={{width: "18rem"}}>
  <img src="https://images.fineartamerica.com/images/artworkimages/mediumlarge/1/rise-up-and-create-art-by-linda-woods-linda-woods.jpg" class="card-img-top" alt="..." style={{height: "22rem"}}/>
  <div class="card-body">
    <h5 class="card-title">Card title</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div>

<div class="card" style={{width: "18rem"}}>
  <img src="https://images.fineartamerica.com/images/artworkimages/mediumlarge/3/antonio-brown-steelers-art-5-joe-hamilton.jpg" class="card-img-top" alt="..." style={{height: "22em"}}/>
  <div class="card-body">
    <h5 class="card-title">Card title</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div>

    </div>
  )
}

export default Card
