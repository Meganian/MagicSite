document.addEventListener("DOMContentLoaded", function(e) {
    //var currentId = e.target.value;
    document.getElementById('name').addEventListener('change', function() {
        var classText = 'errorField';
        var reg = new RegExp('^[a-zA-Z]{3,}$', 'g');
    
        if (!reg.test(this.value)) {
            this.className += " "+classText; //dodaję klase do pola
        } else {
            var regError = new RegExp('(\\s|^)'+classText+'(\\s|$)');
            this.className = this.className.replace(regError, ''); //usuwam klasę
        }
    });
});
document.addEventListener("DOMContentLoaded", function() {
    document.getElementById('e-mail').addEventListener('change', function() {
        var classText = 'errorField';
        var mailReg = new RegExp('^[0-9a-z_.-]+@[0-9a-z.-]+\.[a-z]{2,3}$', 'i');

        if (!mailReg.test(this.value)) {
            this.className += " "+classText; //dodaję klase do pola
        } else {
            var regError = new RegExp('(\\s|^)'+classText+'(\\s|$)');
            this.className = this.className.replace(regError, ''); //usuwam klasę
        }
    });
});