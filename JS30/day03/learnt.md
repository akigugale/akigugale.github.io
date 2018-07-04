<center> <h3> Notes For day 3 </h3> </center>

# CSS and JS Clock

<span style="color: #7b35ed; font-size: 1.2em;">
Topping - added the ability to change the image blending mode via a dropdown.
</span>

### Declare a CSS variable:

A variable can be declared at various levels like root, h1, div, etc.
The use of '--' before a word symbolizes that it is a CSS variable.
It is not compiled upon run time and thus can be changed with JS.

```css
:root {
    --blur: 10px;
}
```

### Using a CSS variable:

Use the variable inside `var()`

```css
img {
    filter: blur(var(--blur));
}
```

### Node list vs array:

Array has all kinds of method like map, pop, etc. but a node list has a limited methods.


### Data attribute in html (data-*):

The data-* attributes gives us the ability to embed custom data attributes on all HTML elements.
The stored (custom) data can then be used in the page's JavaScript to create a more engaging user experience (without any Ajax calls or server-side database queries).

The data-* attributes consist of two parts:
1. The attribute name should not contain any uppercase letters, and must be at least one character long after the prefix "data-"
2. The attribute value can be any string

*Additional tip:* In JavaScript use `this.dataset` to get all the data attributes & `this.dataset.var_name` to get the specific data attribute.


### New Event Listeners in JS

- change
- mouseover

### CSS cheats

- Bluring a background `filter: blur(var(--blur));`
- Changing background blending mode `background-blend-mode: var(--blend-mode);`

### Reference:

- https://www.w3schools.com/js/js_htmldom_nodelist.asp
- https://www.w3schools.com/tags/att_global_data.asp
- https://codepen.io/wesbos/pen/gPZBZQ
- https://www.sitepoint.com/practical-guide-css-variables-custom-properties/


----
<center>the end ✌</center>



