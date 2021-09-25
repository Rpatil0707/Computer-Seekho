import React from 'react'
import "./styles.css"


const Gallery = () => {
    return (
       <React.Fragment>
         <div class="wrapper">
    <nav>
        <div className="text-center" class="items" >
            <span class="item active" data-name="all">All</span>
            {/* <span class="item" data-name="faculty">Faculty</span>
            <span class="item" data-name="events">Events</span>
            <span class="item" data-name="campus">Campus</span>
            <span class="item" data-name="alumni">Alumni</span> */}
        </div>
    </nav>
{/* <!-- filter images --> */}
<div class="gallery">
    <div class="image" data-name="campus"><span><img src="assets/images/img1.jpg" alt=""/></span></div>
    <div class="image" data-name="campus"><span><img src="assets/images/img2.jpg" alt=""/></span></div>
    <div class="image" data-name="campus"><span><img src="assets/images/img7.jpg" alt=""/></span></div>
    <div class="image" data-name="campus"><span><img src="assets/images/img8.jpg" alt=""/></span></div>
    <div class="image" data-name="alumni"><span><img src="assets/images/img18.jpg" alt=""/></span></div>
    <div class="image" data-name="events"><span><img src="assets/images/img19.jpg" alt=""/></span></div>
    <div class="image" data-name="faculty"><span><img src="assets/images/faculty/jayant.jpg" alt=""/></span></div>
    <div class="image" data-name="faculty"><span><img src="assets/images/faculty/ketki.jpg" alt=""/></span></div>
    <div class="image" data-name="faculty"><span><img src="assets/images/faculty/nitin.jpg" alt=""/></span></div>
    <div class="image" data-name="faculty"><span><img src="assets/images/faculty/pradeep1.jpg" alt=""/></span></div>
    <div class="image" data-name="faculty"><span><img src="assets/images/faculty/vikram.jpg" alt=""/></span></div>
    <div class="image" data-name="faculty"><span><img src="assets/images/faculty/sanjay.jpg" alt=""/></span></div>
</div>

{/* <!-- fulll screen image preview box --> */}
 <div class="preview-box">
     <div class="details">
         <span class="title">Image Category :  <p> &nbsp; Not Defined</p></span>
        <span class="icon fas fa-times"></span>
        </div>
        <div class="image-box">
            <img src="" alt=""/>
        </div>
 </div>
<div class="shadow"></div>

<script src="assets/script.js"></script>


  </div>  
       </React.Fragment>
    )
}

export default Gallery;