/*const formulario = document.getElementById('formLogin');
const inputs = document.querySelectorAll('#formLogin input');

const expresiones = {
    usuario: /^[a-zA-Z0-9\@\.\_\-]{4,16}$/ //Letras,numeros,punto,guion,guion bajo
}

const campos={
    usuario: false,
    password: false
}

const validarFormulario = (e) =>{
    switch(e.target.name){
        case "usuario":
            if(expresiones.usuario.test(e.target.value)){
                campos['usuario']=true
            }
        break
        case "password":
            campos['password']=true

    }
}


inputs.forEach((input) =>{
    input.addEventListener('keyup', validarFormulario)
    input.addEventListener('blur', validarFormulario)
});


formulario.addEventListener('submit', (e) => {
        e.preventDefault();

        if (campos.usuario && campos.password){
            console.log(document.getElementById('usuario').value)
        }
});*/

$('#formLogin').submit(function(e) {
    e.preventDefault()
    const usuario=$.trim($("#usuario").val());    
    const password=$.trim($("#password").val());

    if(usuario.length == "" || password == ""){
        Swal.fire({
            type:'warning',
            icon: 'warning',
            title:'Debes ingresar un usuario y/o password',
        });
        return false; 
    }else{
        $.ajax({
            url:"bd/login.php",
            type:"POST",
            datatype: "json",
            data: {usuario:usuario, password:password}, 
            success:function(data){               
                if(data == "null"){
                    Swal.fire({
                        type:'error',
                        icon: 'error',
                        title:'Usuario y/o password incorrecto',
                    });
                }else{
                    Swal.fire({
                        type:'success',
                        icon: 'success',
                        title:'¡Conexión exitosa!',
                        confirmButtonColor:'#3085d6',
                        confirmButtonText:'Ingresar'
                    }).then((result) => {
                        if(result.value){
                            window.location.href = "dashboard/dashboard.php";
                        }
                    })
                    
                }
            }    
        });
    }
});


//botón BORRAR - Borrar Empleado
$(document).on("click", "#btnBorrar", function(){
    const botonEliminar = document.getElementById('btnBorrar');
    const registro=botonEliminar.parentNode.parentNode.parentNode;
    idEmpleado = parseInt($(this).closest("tr").find('td:eq(0)').text());
    opcion = 3 //borrar
    Swal.fire({
        title: 'Estas seguro en eliminar el registro '+idEmpleado+' ?',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#d33',
        cancelButtonColor: '#3085d6',
        confirmButtonText: 'Eliminar',
        cancelButtonText: 'Cancelar',
    }).then((result) => {
        if (result.isConfirmed) {
            $.ajax({
                url: "../bd/crudEmpleado.php",
                type: "POST",
                dataType: "json",
                data: {opcion:opcion, idEmpleado:idEmpleado},
                success: function(){
                    registro.remove()
                },
                error: function() {
                    alert('No funciono :<');
                }
            });
            
            Swal.fire({
                title: 'Eliminado Exitosamente',
                icon:'success'
            })
        }
    })

});


//botón Modificar - - Modificar Empleado
$(document).on("click", "#btnModificar", function(){
    const botonModificar = document.getElementById('btnModificar');
    const fila = $(this).closest("tr");
    idEmpleado = parseInt(fila.find('td:eq(0)').text());
    $nombre = fila.find('td:eq(1)').text();
    $apellido = fila.find('td:eq(2)').text();
    $fechaNacimiento = Date.parse(fila.find('td:eq(3)').text());
    $tipoUsuario = parseInt(fila.find('td:eq(4)').text());
    $idEmpresa = parseInt(fila.find('td:eq(5)').text());
    $codigoAreaComun = parseInt(fila.find('td:eq(6)').text());
    $codigoCargo = parseInt(fila.find('td:eq(7)').text());
    opcion = 2 //Modificar

    $("#nombre").val(nombre);
    $("#apellido").val(apellido);
    $("#fechaNacimiento").val(fechaNacimiento);
    $("#tipoUsuario").val(tipoUsuario);
    $("#idEmpresa").val(idEmpresa);
    $("#codigoAreaComun").val(codigoAreaComun);
    $("#codigoCargo").val(codigoCargo);

    $(".modal-title").text("Editar Persona");            
    /*const myModal = document.getElementById('modalCRUD')

    myModal.addEventListener('shown.bs.modal', function () {
        myInput.focus()
      })*/
   

});


$("#formEmpleados").submit(function(e){
    e.preventDefault();    
    const botonEliminar = document.getElementById('btnBorrar');
    const registro=botonEliminar.parentNode.parentNode.parentNode;
    nombre = $.trim($("#nombre").val());
    apellido = $.trim($("#apellido").val());
    fechaNacimiento = $.trim($("#fechaNacimiento").val());    
    tipoUsuario = $.trim($("#tipoUsuario").val());
    idEmpresa = $.trim($("#idEmpresa").val());
    codigoAreaComun = $.trim($("#codigoAreaComun").val()); 
    codigoCargo = $.trim($("#codigoCargo").val());

    $.ajax({
        url: "../bd/crud.php",
        type: "POST",
        dataType: "json",
        data: {opcion:opcion, idEmpleado:idEmpleado, nombre:nombre, apellido:apellido, fechaNacimiento:fechaNacimiento, idEmpresa:idEmpresa, codigoAreaComun:codigoAreaComun, codigoCargo:codigoCargo },
        success: function(data){  
            console.log(data);
            idEmpleado = data[0].idEmpleado;            
            nombre = data[0].nombre;
            apellido = data[0].apellido;
            fechaNacimiento = data[0].fechaNacimiento;
            idEmpresa = data[0].idEmpresa;
            codigoAreaComun = data[0].codigoAreaComun;
            codigoCargo = data[0].codigoCargo;
            if(opcion == 1){registro.add([idEmpleado, nombre, apellido,fechaNacimiento,tipoUsuario,idEmpresa,codigoAreaComun,codigoCargo]).draw();}
            else{registro.data([idEmpleado, nombre, apellido,fechaNacimiento,tipoUsuario,idEmpresa,codigoAreaComun,codigoCargo]).draw();}  
            Swal.fire({
                title: 'Guardado Exitosamente',
                icon:'success'
            })          
        } ,
        error: function() {
            alert('No funciono :<');
        }          
    });
    $("#modalCRUD").modal("hide");    
    
});   