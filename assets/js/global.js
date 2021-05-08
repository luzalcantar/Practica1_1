$(document).ready(function() {

    $("#btnExportar").click(function(e){
        e.preventDefault();

        $.ajax({
            url: "proceso/exportar.php",
            success: function(response)
            {
                console.log(response);
                alert("Archivo exportado con exito, consulte la carpeta actual");
            }
        });
    });
    
});