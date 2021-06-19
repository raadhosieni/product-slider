//select up angle
const upAngle = document.querySelector('.up');
// select down angle 
const downAngle = document.querySelector('.down');
//select images inside slider
const imgs = document.querySelectorAll('.slider img');
//select bullets
const bullets = document.querySelectorAll('.container .slider-controls ul li');
//this variable to track current image index
let currentImage = 0;

const watches = [
    {
        model: "watch01",
        desc: "Lorem ipsum, dolor sit amet consectetur"
             +"adipisicing elit. Dolore adipisci sapiente,"
             +"eaque a inventore cupiditate."
    },
    {
        model: "watch02",
        desc: "Lorem ipsum, dolor sit amet consectetur"
             +"adipisicing elit. Dolore adipisci sapiente,"
             +"eaque a inventore cupiditate."
    },
    {
        model: "watch03",
        desc: "Lorem ipsum, dolor sit amet consectetur"
             +"adipisicing elit. Dolore adipisci sapiente,"
             +"eaque a inventore cupiditate."
    },
    {
        model: "watch04",
        desc: "Lorem ipsum, dolor sit amet consectetur"
             +"adipisicing elit. Dolore adipisci sapiente,"
             +"eaque a inventore cupiditate."
    },
    {
        model: "watch05",
        desc: "Lorem ipsum, dolor sit amet consectetur"
             +"adipisicing elit. Dolore adipisci sapiente,"
             +"eaque a inventore cupiditate."
    },
    {
        model: "watch06",
        desc: "Lorem ipsum, dolor sit amet consectetur"
             +"adipisicing elit. Dolore adipisci sapiente,"
             +"eaque a inventore cupiditate."
    },
    {
        model: "watch07",
        desc: "Lorem ipsum, dolor sit amet consectetur"
             +"adipisicing elit. Dolore adipisci sapiente,"
             +"eaque a inventore cupiditate."
    },
    {
        model: "watch08",
        desc: "Lorem ipsum, dolor sit amet consectetur"
             +"adipisicing elit. Dolore adipisci sapiente,"
             +"eaque a inventore cupiditate."
    }
]


//handle click event on up angle
upAngle.onclick = function() {
    if (currentImage > 0) {
        currentImage--;
        moveSliderIn();
        showSlider();
    }
    
}


//handle click event on down angle
downAngle.onclick = function() {
    if (currentImage < imgs.length - 1) {
        currentImage++;
        moveSliderOut();
        showSlider();
    }
}

//handle click event on bullets
bullets.forEach(function(bullet, i) {
    bullet.onclick = function() {
        if (i > currentImage) {
            while(currentImage < i) {
                currentImage++;
                moveSliderOut();
                showSlider();
            }
            
        } else {
            while(i < currentImage) {
                currentImage--;
                moveSliderIn();
                showSlider();
            }
        }
            
    }
})

function moveSliderIn() {
    if (currentImage > 0) {
        imgs[currentImage + 1].classList.add('in');
    }
}

function moveSliderOut() {
    if (currentImage > 0) {
        imgs[currentImage - 1].classList.add('out');
    }
}

function showSlider() {
    moveSlider();
}

function moveSlider() {
    //remove active class from all images
    imgs.forEach(function(img) {
        img.classList.remove('show');
    })
    //add active class to current image
    imgs[currentImage].classList.remove('out');
    imgs[currentImage].classList.remove('in');
    imgs[currentImage].classList.add('show');

    //remove active class from all bullets
    bullets.forEach(function(bullet) {
        bullet.classList.remove('active');
    })
    //add active class to current bullet
    bullets[currentImage].classList.add('active');
    
    disableControls();

    displayProductInfo();
    
}

//disable controls when reach edge
function disableControls() {
    //disable up angle when currentImage is zero
    if (currentImage === 0) {
        upAngle.classList.add('disable');
        bullets[0].classList.add('disable');
    } else {
        upAngle.classList.remove('disable');
        bullets[0].classList.remove('disable');
    }
    //disable down angle when currentImage on last 
    if (currentImage === imgs.length - 1) {
        downAngle.classList.add('disable');
        bullets[bullets.length - 1].classList.add('disable');
    } else {
        downAngle.classList.remove('disable');
        bullets[bullets.length - 1].classList.remove('disable');
    }
}

//display product related info
function displayProductInfo() {
    const model = document.querySelector('.model');
    const desc = document.querySelector('.desc');
    model.textContent = watches[currentImage].model;
    desc.textContent = watches[currentImage].desc;
}