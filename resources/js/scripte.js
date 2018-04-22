var videoMDPH ="//www.youtube.com/embed/OvtC6ueQDTE";
var videoCPAM ="//www.youtube.com/embed/_scMZqtMdl4";
var videoLoi2005 ="//www.youtube.com/embed/ROEfEnIHr38";

$( document ).ready(function() {
    // load the overlay
    $('#myModal').modal({show:true});

    var url = $("#cartoonVideo").attr('src');

    /* Assign empty url value to the iframe src attribute when
    modal hide, which stop the video playing */
    $("#myModal").on('hide.bs.modal', function(){
        $("#cartoonVideo").attr('src', '');
    });

    /* Assign the initially stored url back to the iframe src
    attribute when modal is displayed again */
    $("#myModal").on('show.bs.modal', function(){
        $("#cartoonVideo").attr('src', url);
    });

    $(".mdph-id").click(function(){
      alert("Hello World!");
      console.log('test1');
      //  activePagination("MPDH");
    });

    $(".cpam-id").click( function(){
      alert("Hello World!");
      console.log('test2');
      //  activePagination("CPAM");
    });
});

function callEmployer(){
  var modalBody = $('#modal-body');
  console.log(modalBody);
  modalBody.find('ul').remove();

  appearVideoEmployer(videoLoi2005);

/*  var html = '<ul class="special">'+
    '<li><a href="#" class="icon fa-user-circle" onclick="appearVideoEmployer(videoLoi2005);"><span class="label">Magnifier</span></a></li>'+
  '</ul>';
  modalBody.append(html);
  */
}

function callWorker(){
  console.log("callWorker");
  var modalBody = $('#modal-body');
  modalBody.find('ul').remove();
  var html = '<ul class="special">'+
    '<li><a href="#" class="icon fa-home" onclick="appearVideo(videoMDPH);"><span >Mon problème est reconnu par la MDPH et/ou la CPAM'+
    '</span></a></li>'+
    '<li><a href="#" class="icon fa-hourglass-end" onclick="callDoctor();"><span >Mon problème N’est PAS reconnu par la MDPH et/ou la CPAM'+
    '</span></a></li>'+
  '</ul>';

  modalBody.append(html);
}

function callUnemployed(){
  console.log("callUnemployed");
  var modalBody = $('#modal-body');
  modalBody.find('ul').remove();

  var html = '<ul class="special">'+
    '<li><a href="#" class="icon fa-home" onclick="appearVideo(videoMDPH,1);"><span >Mon problème est reconnu par la MDPH et/ou la CPAM'+
    '</span></a></li>'+
    '<li><a href="#" class="icon fa-hourglass-end" onclick="callDoctor();"><span >Mon problème N’est PAS reconnu par la MDPH et/ou la CPAM'+
    '</span></a></li>'+
  '</ul>';

  modalBody.append(html);
}

function appearVideo(param1,param2){

  var modalBody = $('#modal-body');
 console.log(param1,param2);
  var href_html,text_modal;
  if(param2==1){
    href_html = 'href="#" onclick="UnemployedStepOne();"';
    text_modal = "Next";
    console.log("11");
  }else {
    href_html = 'href="/organizations"';
    text_modal = "Les structures qui peuvent m’aider CAP EMPLOI/SAMETH CARSAT";
    console.log("22");
  }

  modalBody.find('ul').remove();
  var html1 ='<iframe id="cartoonVideo" width="560" height="315" src="'+param1+'"  frameborder="0" allowfullscreen></iframe>';

  modalBody.find('.modal-footer').remove();

  var html2 ='<div class="modal-footer"><center>'+
  '<ul class="pagination">'+
  '<li class="active" id=mdph-id><a href="#" onclick="activePagination(1,'+param2+');">MDPH</a></li>'+
  '<li id=cpam-id><a href="#" onclick="activePagination(2,'+param2+');">CPAM</a></li>'+
  '<li id=next-id><a '+href_html+'  >Next<span>'+text_modal+'</span></a></li>'+
  '</ul>'+
  '</center></div>';

    modalBody.append(html1);
    modalBody.append(html2);
}
function activePagination(parm,param2){

    var modalBody = $('#modal-body');
    modalBody.find('#cartoonVideo').remove();
    $('#modal-footer').remove();

 if(parm== 1){

  //call function
    appearVideo(videoMDPH,param2);
  //remove class
    $("#cpam-id").removeClass( "active" );
  //add class
    $("#mdph-id").addClass('active');

 }else{
   //call function
   appearVideo(videoCPAM,param2);
   //remove class
   $("#mdph-id").removeClass( "active" );
   //add class
    $("#cpam-id").addClass('active');
 }
}
function callDoctor(){
  var modalBody = $('#modal-body');
  console.log(modalBody);
  modalBody.find('ul').remove();
  var html = '<center><ul class="special">'+
    '<li><a href="#" class="icon fa-user-md" onclick="appearVideo(videoMDPH);"><span>Médecin</span></a></li>'+
    '<li> Je contacte mon médecin  traitant ou mon spécialiste Pour m’aider dans ma reconnaissance</li>'+
    '<li> Je contacte mon médecin du travail ou mon médecin de prévention</li>'+
  '</ul></center>';
  modalBody.append(html);
}
function UnemployedStepOne(){

  var modalBody = $('#modal-body');

  var var1 = "Je peux avoir un accompagnement adapté à mes problèmes de santé J’EN PARLE A MON CONSEILLE";
  var var2 = "Je  vais à l’accueil de pôle emploi (le matin) Ou de la Mission Locale des Jeunes (la journée) POUR M’INSCRIRE";

  modalBody.find('#cartoonVideo').remove();
  modalBody.find('ul').remove();
  var html = '<ul class="special">'+
    '<li><a href="#" class="icon fa-user-circle" onclick="UnemployedStepTwo(\''+var1+'\',1);"><span >Je suis demandeur d’emploi Inscrit à Pôle Emploi Ou à la  Mission Locale  des Jeunes (<26 ans)'+
    '</span></a></li>'+
    '<li><a href="#" class="icon fa-user" onclick="UnemployedStepTwo(\''+var2+'\',2);"><span >Je suis demandeur d’emploi mais PAS inscrit à Pôle Emploi Ou à la Mission Locale des Jeunes (<26 ans)'+
    '</span></a></li>'+
  '</ul>';

  modalBody.append(html);
}
function UnemployedStepTwo(param,param2){
  var modalBody = $('#modal-body');
  modalBody.find('ul').remove();
  if(param2==1){
    var html = '<center><ul class="special">'+
      '<li><a href="/organizations" class="icon fa-fort-awesome" ><span >'+param+'</span></a></li>'+
      '</ul></center>';
  }else if(param2==2){
    var var3 ="Je peux avoir un accompagnement adapté à mes problèmes de santé J’EN PARLE A MON CONSEILLER ";
    var html = '<center><ul class="special">'+
      '<li><a href="#" class="icon fa-fort-awesome" onclick="UnemployedStepTwo('+var3+',3);"><span >'+param+'</span></a></li>'+
      '</ul></center>';
  }else{
    var var3 ="Je peux avoir un accompagnement adapté à mes problèmes de santé J’EN PARLE A MON CONSEILLER ";
    var html = '<ul class="special"><center>'+
      '<li><a href="/organizations" class="icon fa-fort-awesome" ><span >'+param+'</span></a></li></center>'+
      '</ul>';
  }


  modalBody.append(html);
}
function appearVideoEmployer(param1){

  var modalBody = $('#modal-body');

  modalBody.find('ul').remove();
  var html1 ='<iframe id="cartoonVideo" width="560" height="315" src="'+param1+'"  frameborder="0" allowfullscreen></iframe>';

  modalBody.find('.modal-footer').remove();

  var html2 ='<div class="modal-footer"><center>'+
  '<ul class="pagination">'+
  '<li id=next-id><a href="#" onclick="UnemployedStepOne();">Next<span>J’appelle CAP EMPLOI ou POLE EMPLOI et demande un référent travailleur handicapé </span></a></li>'+
  '</ul>'+
  '</center></div>';

    modalBody.append(html1);
    modalBody.append(html2);
}
