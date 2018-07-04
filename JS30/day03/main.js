document.addEventListener("DOMContentLoaded", function(event) {
    console.log("DOM fully loaded and parsed");
    const inputs = document.querySelectorAll('.controls input');
    const inputs_new = document.querySelectorAll('.controls select');

    function handleUpdate() {
        // console.log(this);
        const suffix = this.dataset.sizing || '';
        document.documentElement.style.setProperty(`--${this.name}`, this.value + suffix);
    }

    function handleUpdateNew() {
        // console.log(this.name  + this.value);
        document.documentElement.style.setProperty(`--${this.name}`, this.value);
    }

    inputs.forEach(input => input.addEventListener('change',handleUpdate));
    inputs.forEach(input => input.addEventListener('mousemove',handleUpdate));
    inputs_new.forEach(input_new => input_new.addEventListener('change',handleUpdateNew));

});



