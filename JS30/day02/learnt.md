<center> <h3> Notes For day 2 </h3> </center>

# CSS and JS Clock

<span style="color: #7b35ed; font-size: 1.2em;">
Topping - added digital display to the clock.
</span>

### To add a beizer curve to the animation:

Add a `transition-timing-function` and then go to inspect element and edit the curve by using the curved icon present. ![Beizer Curve Image](day02/beizer-curve.png)

```css
    transition: all 0.5s;
    transition-timing-function: cubic-bezier(.48,2.64,.46,1.45);
```

### Difference between call_function() and call_function in setInterval:

( I tried calling `setDate()` inside `setInterval` but it did not work, here's why? )

`setInterval(funcName, timeDuration)` requires a function definition as its first papameter, but when you give `setDate()` as the first parameter in setInterval then the return value is the type taken into consideration which is not a function. A function which returns a function can we written as `setDate()` in `setInterval`. Otherwise just use the function name as `setDate`.

To pass a function with arguments in setInterval use the following format:

```js
 intId = setInterval(function(){
    functionToCall(param1, param2, ...);
    }, 10000);
```

i.e. calling a function inside a function def.

OR

```js
 setInterval(function, milliseconds, param1, param2, ...)
```


### Note:

Also adding on load event before selection of DOM elements is very important. If the element is not loaded yet, it will show null.

### Reference:

- https://stackoverflow.com/questions/15410384/javascript-setinterval-function-with-arguments/15410449


----
<center>the end ✌</center>



