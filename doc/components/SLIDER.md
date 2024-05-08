# SLIDER
# How it works

The carousel is a slideshow for cycling through a series of content.

Please be aware that nested carousels are not supported, and carousels are generally not compliant with accessibility standards.

## With controls 
To use our slider with the navigation buttons we must use the following structure:
```
            <div class="slider">
                <ul class="slider__body">
                    <li id="slide1">
                        <img src="./assets/1.png" alt=""> // Select your image.
                     </li>
                    <li id="slide2">
                        <img src="./assets/2.jpg" alt=""> // Select your image.
                    </li>
                    <li id="slide3">
                        <img src="./assets/3.jpg" alt=""> // Select your image.
                    </li>
                </ul>
                <ul class="slider__menu">
                    <li>
                        <a href="#slide1">1</a>
                    </li>
                    <li>
                        <a href="#slide2">2</a>
                    </li>
                    <li>
                        <a href="#slide3">3</a>
                    </li>
                </ul>
            </div>
```

