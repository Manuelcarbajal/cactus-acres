function validarFormulario(){
    //remover el div con la clase alert
    $('.alert').remove();


   //declaracion de variable
    var nombre=$('#nombre').val(),
        correo=$('#correo').val(),
        asunto=$('#asunto').val(),
        mensaje=$('#mensaje').val();

        

    
   //valiadamos el campo de nombre
       if(nombre=="" || nombre==null){
            cambiarColor('nombre');
             //mostrar msj de alerta
             mostarAlerta("Campo obligatorio");
             return false;
       
        }else{
            var expresion=/^[a-zA-ZñÑáéíóúÁÉÍÓÚ ]*$/;
            if (!expresion.test(nombre)){
                cambiarColor("nombre")
                mostarAlerta("No se permiten caracteres especiales o numeros")
                return false;
            }
        }

         //valiadamos el correo
       if(correo=="" || correo==null){
        cambiarColor('correo');
         //mostrar msj de alerta
         mostarAlerta("Campo obligatorio");
         return false;
   
        }else{
            var expresion= /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/;
            if (!expresion.test(correo)){
                cambiarColor("correo")
                mostarAlerta("Ingrese un correo valido")
                return false;
            }
        }

    
         //valiadamos el asunto
         if(asunto=="" || asunto==null){
            cambiarColor('asunto');
             //mostrar msj de alerta
             mostarAlerta("Campo obligatorio");
             return false;
       
        }else{
            var expresion= /^[,\\.\\a-zA-Z0-9ñÑáéíóúÁÉÍÓÛ ]*$/;
            if (!expresion.test(asunto)){
                cambiarColor("asunto")
                mostarAlerta("No se permiten caracteres especiales")
                return false;
            }
        }

          //valiadamos el mesnaje
          if(mensaje=="" || mensaje==null){
            cambiarColor('mensaje');
             //mostrar msj de alerta
             mostarAlerta("Campo obligatorio");
             return false;
       
        }else{
            var expresion= /^[,\\.\\a-zA-Z0-9ñÑáéíóúÁÉÍÓÛ ]*$/;
            if (!expresion.test(mensaje)){
                cambiarColor("mensaje")
                mostarAlerta("No se permiten caracteres especiales")
                return false;
            }
        }

        $('form').submit();
        return true;

}

$('input').focus(function(){
    $('.alert').remove();
    colorDefault('nombre');
    colorDefault('correo');
    colorDefault('asunto');
});

$('textarea').focus(function(){
    $('.alert').remove();
    colorDefault('mensaje');
});

//funcion de color por defecto a los bordes  de los input

function colorDefault(dato){
    $('#' + dato).css({
        border:"1px solid #999"
    });
}




//se crea funcion para cambiar de color los bordes de los input

function cambiarColor(dato){
    $('#' + dato).css({
        border:"1px solid #dd5144"
    });
}

//funcion para mostar alerta

function mostarAlerta(texto){
     $('#nombre').before('<div class = "alert">Error: '+ texto + ' </div>');
}