var meu_gitHub = "github.com/WCL79";
    var myip;
    var ip = myip;
    var f_db = new Firebase("https://cliqueslinks.firebaseio.com/"+meu_gitHub+"/");
    var usuario_db = f_db.push();
    var db_presensa = new Firebase("https://cliqueslinks.firebaseio.com/.info/connected/");
    db_presensa.on("value", function (snap) {
        if (snap.val()) {
            usuario_db.onDisconnect().remove();
            usuario_db.set(""+ip+"");
        }
    });
    f_db.on("value", function (snap) {
        //console.log("# of online users = " + snap.numChildren());
        document.getElementById("u_online_ativos").innerHTML = snap.numChildren()
    });
