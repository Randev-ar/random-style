Learn how and why we build nearly all our components responsively and with base and modifier classes.

### Base classes 

random-style’s components are largely built with a base-modifier nomenclature. We group as many shared properties as possible into a base class, like .btn, and then group individual styles for each variant into modifier classes, like .btn-primary or .btn-success.

To build our modifier classes, we use Sass’s @each loops to iterate over a Sass map. This is especially helpful for generating variants of a component by our $theme-colors and creating responsive variants for each breakpoint. As you customize these Sass maps and recompile, you’ll automatically see your changes reflected in these loops.

Check out [our Sass maps and loops docs](https://getbootstrap.com/docs/5.2/customize/sass/#maps-and-loops) for how to customize these loops and extend Bootstrap’s base-modifier approach to your own code.

### Modifiers 
Many of random-style’s components are built with a base-modifier class approach. This means the bulk of the styling is contained to a base class (e.g., .btn) while style variations are confined to modifier classes (e.g., .btn-danger). These modifier classes are built from the $theme-colors map to make customizing the number and name of our modifier classes.

### Pre-declared colors
<img alt="pre-declared colors" src="https://i.postimg.cc/vBNVYfkR/colors.png">

