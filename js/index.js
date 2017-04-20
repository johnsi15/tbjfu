$(function(){
  var codigos = [], nombres = [], semestres = [], correos = [];

  $('#formAgregar #agregar').click(function(e){
    e.preventDefault();
    var codigo = $('#formAgregar .codigo').val();
    var nombre = $('#formAgregar .nombre').val();
    var semestre = $('#formAgregar .semestre').val();
    var correo = $('#formAgregar .correo').val();

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
    console.log(codigos);
  });

  $('#btnAgregar').click(function(e){
    e.preventDefault();
    $('#tablaHistorico').hide();
    $('.consultar').hide();
    $('#formAgregar').show();
  });

  $('#formAgregarCancelar').click(function(e){
    e.preventDefault();
    $('#formAgregar').hide();
  });

  $('#btnHistorico').click(function(e){
    e.preventDefault();
    $('#formAgregar').hide();
    $('.consultar').hide();
    $('#tablaHistorico').show();
    
  });

  $('#btnConsultar').click(function(e){
    e.preventDefault();
    $('#tablaHistorico').hide();
    $('#formAgregar').hide();
    $('.consultar').show();
    var d = codigos.length;
    $('#tableDataConsultar').html('');
    for (i = 0; i < d; i++) {
      console.log(d);
      $('#tableDataConsultar').append('<tr>     <td>'+codigos[i]+'</td>      <td>'+nombres[i]+'</td>     <td>'+semestres[i]+'</td>       <td>'+correos[i]+'</td></tr>');
    };
  })

  $('#consulta').click(function(e){
    console.log(codigos)
  })
});