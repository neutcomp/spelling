class Progressbar {
    start() {
        var i = 0;

        if (i == 0) {
            i = 1;
            var elem = document.getElementById("progressbar");
            var width = 1;
            var id = setInterval(frame, 200);
            function frame() {
                if (width >= 100) {
                    clearInterval(id);
                    i = 0;
                } else {
                    width++;
                    elem.style.width = width + "%";

                    if (width === 50) {
                        elem.className = 'progress-bar bg-warning';
                    }

                    if (width === 80) {
                        elem.className = 'progress-bar bg-danger';
                    }
                }
            }
        }
    }
}