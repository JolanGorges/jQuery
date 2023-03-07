$(document).ready(function () {
    let count = 0;
    $("#btn").click(function () {
        count++;
        $("#result").text(count);
    });

    <!--Grâce à JQuery, réaliser les tâches suivantes : Lors du submit vérifiez que chaque champ contient bien le bon type de données dans le cas contraire afficher le fond du champ en rouge - Si aucune erreur n'est détectée affichez le nom, le prénom et l'âge de la personne-->

    $("#form").submit(function (e) {
        e.preventDefault();

        let name = $("#nom").val();
        let firstname = $("#prenom").val();
        let date = $("#date").val();
        let error = false;
        if (name === '') {
            $("#nom").css("background-color", "red");
            error = true;
        } else {
            $("#nom").css("background-color", "white");
        }
        if (firstname === '') {
            $("#prenom").css("background-color", "red");
            error = true;
        } else {
            $("#prenom").css("background-color", "white");
        }
        if (date === '') {
            $("#date").css("background-color", "red");
            error = true;
        } else {
            $("#date").css("background-color", "white");
        }
        if (!error) {
            $("#resultat").text("Nom : " + name + " Prénom : " + firstname + " Date de naissance : " + date);
        }
        return false;
    });

    // Création d'une variable qui va déterminer le déplacement à chaque evt
    const speed = 10;

// Selection de mon carré qui bouge + Initialisation de la position
    const mvSq = $('#sqMvt');
    mvSq.css('top', '0px');
    mvSq.css('left', '0px');

// Event permet de capter des informations liées à l'événement
// Dans le cas d'une touche pressé event.key permet de déterminer la touche concernée
    $(document).keydown(function(event) {
        // parseInt converti du string en integer
        let top = parseInt(mvSq.css('top'));
        let left = parseInt(mvSq.css('left'));

        if(event.key === 'ArrowRight') {
            console.log('right');
            left = left + speed;
            if(left >= 360) {
                left = 360;
                setRed();
            }
        }

        if(event.key === 'ArrowLeft') {
            left = left - speed;
            if(left <= 0) {
                left = 0;
                setRed();
            }
        }

        if(event.key === 'ArrowUp') {
            top = top - speed;
            if(top <= 0) {
                top = 0;
                setRed();
            }
        }

        if(event.key === 'ArrowDown') {
            top = top + speed;
            if(top >= 360) {
                top = 360;
                setRed();
            }
        }

        mvSq.css('top', top + 'px');
        mvSq.css('left', left + 'px');
    });
// Pour aller plus loin
// Lors du clique sur le carré je vais changer sa couleur
// Puis au bout de 3s je vais la remettre en noir
    mvSq.click(function() {
        mvSq.toggleClass('toucher');
        setTimeout(function() {
            mvSq.toggleClass('toucher');
        }, 3000);
    });


// Changer la couleur lorsque le carré touche le bord
    function setRed() {
        mvSq.addClass('toucher');
        setTimeout(function() {
            mvSq.removeClass('toucher');
        }, 3000);
    }
});


