'use strict';

{
    const images = [
        "image/a.jpg",
        "image/b.jpg",
        "image/c.jpg",
        "image/d.jpg",
        "image/e.jpg",
        "image/f.jpg",
        "image/g.jpg",
        "image/h.jpg",
        "image/i.jpg",
    ];

    let currentIndex = 0;

    const mainImage = document.getElementById("main");
    mainImage.src = images[currentIndex];

    images.forEach((image, index) => {
        const img = document.createElement("img");
        img.src = image;

        const li = document.createElement("li");
        if(index === currentIndex) {
            li.classList.add("current")
        }
        li.addEventListener("click", () => {
            mainImage.src = image;

            const thumbnails = document.querySelectorAll(".thumbnails > li")
            // console.log(thumbnails);
            thumbnails[currentIndex].classList.remove("current");
            currentIndex = index;
            thumbnails[currentIndex].classList.add("current");

        });
        li.appendChild(img);

        document.querySelector(".thumbnails").appendChild(li);
    });

    const next = document.getElementById("next");
    next.addEventListener("click", () => {
        
    })



}