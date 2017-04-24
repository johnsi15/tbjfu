$(function(){
  var codigos = [], nombres = [], semestres = [], correos = [];
  var codigosHistorico = [], nombresHistorico = [], semestresHistorico = [], correosHistorico = [];

  $('#formAgregar #agregar').click(function(e){
    e.preventDefault();
    var codigo = $('#formAgregar #aggCodigo').val();
    var nombre = $('#formAgregar #aggNombre').val();
    var semestre = $('#formAgregar #aggSemestre').val();
    var correo = $('#formAgregar #aggCorreo').val();

    codigos.push(codigo);
    nombres.push(nombre);
    semestres.push(semestre);
    correos.push(correo);
    // $('#tableData').append('<tr>     <td>'+codigo+'</td>      <td>'+nombre+'</td>     <td>'+semestre+'</td>       <td>'+correo+'</td></tr>');
    
    // var alumno = {
    //   codigo: codigos,
    //   nombre: nombres,
    //   semestre: semestres,
    //   correo: correos
    // }
    $('#formAgregar')[0].reset();
    // console.log(codigos);
  });

  function menu(){
    $('#menu li').each(function(){
      console.log('Hol');
      if($(this).hasClass('active')){
        $(this).removeClass();
      }
    });
  }

  $('#btnAgregar').click(function(e){
    e.preventDefault();
    $('#tablaHistorico').hide();
    $('.consultar').hide();
    $('#formAgregar').show();
    menu();
    $('#menuAgregar').addClass('active');
  });

  $('#formAgregarCancelar').click(function(e){
    e.preventDefault();
    $('#formAgregar').hide();
    menu();
    $('#menuHome').addClass('active')
  });

  $('#btnHistorico').click(function(e){
    e.preventDefault();
    $('#formAgregar').hide();
    $('.consultar').hide();
    $('#tablaHistorico').show();
    menu();
    $('#menuHistorico').addClass('active');

    var d = codigosHistorico.length;
    $('#tableData').html('');
    for (i = 0; i < d; i++) {
      // console.log(d);
      $('#tableData').append('<tr>     <td>'+codigosHistorico[i]+'</td>      <td>'+nombresHistorico[i]+'</td>     <td>'+semestresHistorico[i]+'</td>  <td>'+correosHistorico[i]+'</td></tr>');
    };
    
  });

  $('#btnConsultar').click(function(e){
    e.preventDefault();
    $('#tablaHistorico').hide();
    $('#formAgregar').hide();
    $('.consultar').show();
    menu();
    $('#menuConsultar').addClass('active');
    var d = codigos.length;
    $('#tableDataConsultar').html('');
    for (i = 0; i < d; i++) {
      // console.log(d);
      $('#tableDataConsultar').append('<tr>     <td>'+codigos[i]+'</td>      <td>'+nombres[i]+'</td>     <td>'+semestres[i]+'</td>  <td>'+correos[i]+'</td> <td><button type="button" class="btn btn-success editar" data-toggle="modal" data-target="#myModal" data-codigo='+i+'>Editar <span class="glyphicon glyphicon-pencil" aria-hidden="true"></span></button></td></tr>');
    };
  });

  $('#consulta').click(function(e){
    // console.log(codigos)
  });

  $('#tableDataConsultar').on('click', '.editar',function(e){
    e.preventDefault();

    var id = $(this).data('codigo');
    $('#editCodEstud').val(id);
    //aca esta la respuesta
    $('#editCodigo').val($(this).parent().parent().children('td:eq(0)').text());
    $('#editNombre').val($(this).parent().parent().children('td:eq(1)').text());
    $('#editSemestre').val($(this).parent().parent().children('td:eq(2)').text());
    $('#editCorreo').val($(this).parent().parent().children('td:eq(3)').text());
    
  });

  $('#editGuardar').click(function(e){
    e.preventDefault();
    console.log('editar')

    var id = $('#editCodEstud').val();
    var codigo = $('#formEditar #editCodigo').val();
    var nombre = $('#formEditar #editNombre').val();
    var semestre = $('#formEditar #editSemestre').val();
    var correo = $('#formEditar #editCorreo').val();

    codigos[id] = codigo;
    nombres[id] = nombre;
    semestres[id] = semestre;
    correos[id] = correo;

    //Guardar para historico
    codigosHistorico.push(codigo);
    nombresHistorico.push(nombre);
    semestresHistorico.push(semestre);
    correosHistorico.push(correo);

    var d = codigos.length;
    $('#tableDataConsultar').html('');
    for (i = 0; i < d; i++) {
      // console.log(d);
      $('#tableDataConsultar').append('<tr>     <td>'+codigos[i]+'</td>      <td>'+nombres[i]+'</td>     <td>'+semestres[i]+'</td>  <td>'+correos[i]+'</td> <td><button type="button" class="btn btn-success editar" data-toggle="modal" data-target="#myModal" data-codigo='+i+'>Editar <span class="glyphicon glyphicon-pencil" aria-hidden="true"></span></button></td></tr>');
    };
    $('#myModal').modal('toggle');
  });

  $('body').keypress(function(e) {
    if(e.keyCode == 13) {
      // Acciones a realizar, por ej: enviar formulario.
      $('#formAgregar').submit(function(e){
        e.preventDefault();
        var codigo = $('#formAgregar .codigo').val();
        var nombre = $('#formAgregar .nombre').val();
        var semestre = $('#formAgregar .semestre').val();
        var correo = $('#formAgregar .correo').val();

        codigos.push(codigo);
        nombres.push(nombre);
        semestres.push(semestre);
        correos.push(correo);
        $('#formAgregar')[0].reset();
        $('#formAgregar #aggCodigo').attr('autofocus');
      });
    }
  });

  // $('#myModal').on('shown.bs.modal', function () {
  //   $('#myInput').focus()
  // })
});