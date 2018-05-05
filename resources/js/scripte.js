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

function callEmployer(param){
  var modalBody = $('#modal-body');
  modalBody.find('.alert-danger').remove();
  modalBody.find('#row').remove();
  modalBody.find('ul').remove();
  appearVideoEmployer(videoLoi2005,param);
}
function formModal(param){
  var modalBody = $('#modal-body');
  modalBody.find('ul').remove();
  modalBody.find('a').remove();
  modalBody.find('.modal-footer').remove();
  modalBody.find('iframe').remove();
  var html = '<ul>   <a  href="/home" ><i class="fa fa-reply-all"></i></a>'+
   '<div class="row">'+
      '<div class="col-md-12">'+
        '<div class="form-group">'+
        '<input type="number" class="form-control input-lg" name="age" id="age" placeholder="Enter age" required="required" />'+
        '</div>'+
      '</div>'+
      '<div class="col-md-12">'+
        '<div class="form-group">'+
          '<input type="text" class="form-control input-lg" name="codePostal" id="codePostal" placeholder="Enter code postal" required="required" />'+
        '</div>'+
      '</div>'+
    '</div>'+
    '<div class="row">'+
      '<div class="col-md-12">'+
        '<button  class="btn btn-red btn-block" name="submitcontact" id="valider"  onclick="isValid('+param+');">Valider</button>'+
    '  </div>'+
    '</div></ul>';

  modalBody.append(html);
}
function isValid(param){
    var modalBody = $('#modal-body');
    var age = $('#age').val();
    var codePostal = $('#codePostal').val();
    if(age===""||codePostal===""){
      var modalBody = $('#modal-body');
      modalBody.find('.alert-danger').remove();
       var html =   '<div class="alert alert-danger">'+
         '<strong>Info!</strong> Age et code postal sont obligatoire.</div>';
       modalBody.append(html);
    }else{

      var user = {'age' : age,'codePostal':codePostal } ;
      console.log(user);
      $( document ).session = user;
      console.log(  $( document ).session);
      if(param==1){
        callWorker(param);
      }else if(param==2){
        callUnemployed(param);
      }else{
        callEmployer(param);
      }
    }
}
function callWorker(paramReturn){

  var modalBody = $('#modal-body');
  //supprimer le div ou la balise qui contient le message d'alert
  modalBody.find('.alert-danger').remove();
  modalBody.find('#row').remove();
  modalBody.find('ul').remove();
  modalBody.find('a').remove();
  modalBody.find('#cartoonVideo').remove();
  //supprimer le div ou la balise de footer modal
  modalBody.find('.modal-footer').remove();
  var html = '<a  onclick="formModal('+paramReturn+');" ><i class="fa fa-reply-all"></i></a><ul class="special">'+
    '<li><a href="#" class="icon fa-home" onclick="appearVideo(videoMDPH,null,'+paramReturn+');"><span >Mon problème est reconnu par la MDPH et/ou la CPAM'+
    '</span></a></li>'+
    '<li><a href="#" class="icon fa-hourglass-end" onclick="callDoctor(1,'+paramReturn+');"><span >Mon problème N’est PAS reconnu par la MDPH et/ou la CPAM'+
    '</span></a></li>'+
  '</ul>';

  modalBody.append(html);
}
function callUnemployed(paramReturn){//paramReturn = 2
  console.log("callUnemployed");
  var modalBody = $('#modal-body');
  modalBody.find('.alert-danger').remove();
  modalBody.find('#row').remove();
  modalBody.find('ul').remove();
  modalBody.find('a').remove();
  modalBody.find('iframe').remove();
  //supprimer le div ou la balise de footer modal
  modalBody.find('.modal-footer').remove();
  var html = '<a  onclick="formModal('+paramReturn+');" ><i class="fa fa-reply-all"></i></a><ul class="special">'+
    '<li><a href="#" class="icon fa-home" onclick="appearVideo(videoMDPH,1,'+paramReturn+');"><span >Mon problème est reconnu par la MDPH et/ou la CPAM'+
    '</span></a></li>'+
    '<li><a href="#" class="icon fa-hourglass-end" onclick="callDoctor(2,'+paramReturn+');"><span >Mon problème N’est PAS reconnu par la MDPH et/ou la CPAM'+
    '</span></a></li>'+
  '</ul>';

  modalBody.append(html);
}
function appearVideo(src,param2,paramReturn,param){

  var modalBody = $('#modal-body');
  var href_html,text_modal,return1;

  if(param2==1){
    href_html = 'href="#" onclick="UnemployedStepOne('+paramReturn+');"';
    text_modal = "Suivant";
    return1 = '<a  onclick="callUnemployed('+paramReturn+');" ><i class="fa fa-reply-all"></i></a>';
  }else if(param2==2){
    href_html = 'href="/organizations"';
    text_modal = "Suivant";
    return1 = '<a  onclick="callDoctor('+param+','+paramReturn+');" ><i class="fa fa-reply-all"></i></a>';
  }else {
    href_html = 'href="/organizations"';
    text_modal = "Suivant";
    return1 = '<a  onclick="callWorker('+paramReturn+');" ><i class="fa fa-reply-all"></i></a>';
    var html = '<ul class="special">'+
      '<li>- Je contacte mon médecin du travail ou mon médecin de prévention.</li>'+
      '<li>- Les structures qui peuvent m’aider CAP EMPLOI/SAMETH CARSAT.</li>'+
    '</ul>';
  }

  modalBody.find('ul').remove();
  modalBody.find('a').remove();
  var html1 = return1+'<iframe id="cartoonVideo" width="560" height="315" src="'+src+'"  frameborder="0" allowfullscreen></iframe>';

  modalBody.find('.modal-footer').remove();

  var html2 ='<div class="modal-footer"><center>'+
  '<ul class="pagination">'+
  '<li class="active" id=mdph-id><a href="#" onclick="activePagination(1,'+param2+');">MDPH</a></li>'+
  '<li id=cpam-id><a href="#" onclick="activePagination(2,'+param2+');">CPAM</a></li>'+
  '<li id=next-id><a '+href_html+'  >Suivant<span>'+text_modal+'</span></a></li>'+
  '</ul>'+
  '</center></div>';

    modalBody.append(html1);
    modalBody.append(html2);
    modalBody.append(html);
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
function callDoctor(parm,paramReturn){
  var modalBody = $('#modal-body');
  modalBody.find('ul').remove();
  //supprimer le div ou la balise qui fait le retoure
  modalBody.find('a').remove();
  //supprimer le div ou la balise de video
  modalBody.find('iframe').remove();
  //supprimer le div ou la balise de footer modal
  modalBody.find('.modal-footer').remove();
  if(parm==1){
    var html = '<a  onclick="callWorker('+paramReturn+');" ><i class="fa fa-reply-all"></i></a><center><ul class="special">'+
      '<li><a href="#" class="icon fa-user-md" onclick="appearVideo(videoMDPH,2,'+paramReturn+','+parm+');"><span>Médecin</span></a></li>'+
      '<li> Je contacte mon médecin  traitant ou mon spécialiste Pour m’aider dans ma reconnaissance</li>'+
      '<li> Je contacte mon médecin du travail ou mon médecin de prévention</li>'+
    '</ul></center>';
  }else{
    var html = '<a  onclick="callUnemployed('+paramReturn+');" ><i class="fa fa-reply-all"></i></a><center><ul class="special">'+
      '<li><a href="#" class="icon fa-user-md" onclick="appearVideo(videoMDPH,2,'+paramReturn+','+parm+');"><span>Médecin</span></a></li>'+
      '<li> J’en parle à mon médecin traitant ou mon spécialiste pour savoir si c’est UTILE D’ETRE RECONNU.</li>'+
    '</ul></center>';
  }

  modalBody.append(html);
}
function UnemployedStepOne(paramReturn){

  var modalBody = $('#modal-body');

  var var1 = "Je peux bénéficier un accompagnement adapté à mes problèmes de santé J’EN PARLE A MON CONSEILLE";
  var var2 = "Je  vais à l’accueil de pôle emploi (le matin) Ou de la Mission Locale des Jeunes (la journée) POUR M’INSCRIRE";

  modalBody.find('#cartoonVideo').remove();
  modalBody.find('.modal-footer').remove();
  modalBody.find('ul').remove();
  modalBody.find('a').remove();
  var html = '<a  onclick="appearVideo(videoMDPH,1,'+paramReturn+');" ><i class="fa fa-reply-all"></i></a><ul class="special">'+
    '<li><a href="#" class="icon fa-user-circle" onclick="UnemployedStepTwo(\''+var1+'\',1,'+paramReturn+');"><span >Je suis demandeur d’emploi Inscrit à Pôle Emploi Ou à la  Mission Locale  des Jeunes (<26 ans)'+
    '</span></a></li>'+
    '<li><a href="#" class="icon fa-user" onclick="UnemployedStepTwo(\''+var2+'\',2,'+paramReturn+');"><span >Je suis demandeur d’emploi mais PAS inscrit à Pôle Emploi Ni à la Mission Locale des Jeunes (<26 ans)'+
    '</span></a></li>'+
  '</ul>';

  modalBody.append(html);
}
function UnemployedStepTwo(param,param2,paramReturn){

  var modalBody = $('#modal-body');
  modalBody.find('ul').remove();
  modalBody.find('a').remove();
  if(param2==1){
    var html = '<a  onclick="UnemployedStepOne('+paramReturn+');" ><i class="fa fa-reply-all"></i></a><center><ul class="special">'+
      '<li><a href="/organizations" class="icon fa-fort-awesome" ><span >'+param+'</span></a></li>'+
      '</ul></center>';
  }else if(param2==2){
    var var3 ="Je peux avoir un accompagnement adapté à mes problèmes de santé J’EN PARLE A MON CONSEILLER ";
    var html = '<a  onclick="UnemployedStepOne('+paramReturn+');" ><i class="fa fa-reply-all"></i></a><center><ul class="special">'+
      '<li><a href="#" class="icon fa-fort-awesome" onclick="UnemployedStepTwo(\''+var3+'\',3);"><span >'+param+'</span></a></li>'+
      '</ul></center>';
  }else if(param2==3){
    var var3 ="Je peux avoir un accompagnement adapté à mes problèmes de santé J’EN PARLE A MON CONSEILLER ";
    var html = '<a  onclick="UnemployedStepOne('+paramReturn+');" ><i class="fa fa-reply-all"></i></a><ul class="special"><center>'+
      '<li><a href="/organizations" class="icon fa-fort-awesome" ><span >'+var3+'</span></a></li></center>'+
      '</ul>';
  }


  modalBody.append(html);
}
function appearVideoEmployer(src,paramReturn){

  var modalBody = $('#modal-body');

  modalBody.find('ul').remove();
  modalBody.find('a').remove();
  var html1 ='<a  onclick="formModal('+paramReturn+');" ><i class="fa fa-reply-all"></i></a><iframe id="cartoonVideo" width="560" height="315" src="'+src+'"  frameborder="0" allowfullscreen></iframe>';

  modalBody.find('.modal-footer').remove();

  var html2 ='<div class="modal-footer"><center>'+
  '<ul class="pagination">'+
  '<li id=next-id><a href="#" onclick="EmployerStepOne('+paramReturn+');">Suivant<span>Suivant</span></a></li>'+
  '</ul>'+
  '</center></div>';

    modalBody.append(html1);
    modalBody.append(html2);
}
function EmployerStepOne(paramReturn){
  var modalBody = $('#modal-body');
  modalBody.find('#cartoonVideo').remove();
  modalBody.find('ul').remove();
  modalBody.find('a').remove();
  modalBody.find('.modal-footer').remove();
  var html = '<a  onclick="callEmployer('+paramReturn+');" ><i class="fa fa-reply-all"></i></a><ul class="special">'+
    '<li><a href="#" class="icon fa-info-circle" onclick="EmployerStepTwo('+paramReturn+');"><span >Je cherche des informations sur l’emploi et la santé'+
    '</span></a></li>'+
    '<li><a href="#" class="icon fa-address-book" onclick="EmployerStepTwo('+paramReturn+');"><span >Je cherche à recruter une personne bénéficière de la loi de 2005 sur le handicap (RQTH, PI, rente AT/MP)'+
    '</span></a></li>'+
    '<li><a href="#" class="icon fa-male" onclick="EmployerStepTwo2('+paramReturn+');"><span >J’ai un salarié qui a un problème de santé'+
    '</span></a></li>'+
  '</ul>';

  modalBody.append(html);
}
function EmployerStepTwo(paramReturn){
  var modalBody = $('#modal-body');
  modalBody.find('#cartoonVideo').remove();
  modalBody.find('ul').remove();
  modalBody.find('a').remove();
  var html = '<a  onclick="EmployerStepOne('+paramReturn+');" ><i class="fa fa-reply-all"></i></a><ul class="special">'+
    '<li>J’appelle CAP EMPLOI ou POLE EMPLOI et demande un référent travailleur handicapé (liens des noms et numéros)</li>'+
  '</ul>'+

  '<center>'+
  '<ul class="pagination">'+
  '<li><a href="#" onclick="EmployerStepTree('+paramReturn+');" >Suivant<span>Suivant</span></a></li>'+
  '</ul>'+
  '</center>';
  modalBody.append(html);
}
function EmployerStepTree(paramReturn){
  var modalBody = $('#modal-body');
  modalBody.find('#cartoonVideo').remove();
  modalBody.find('ul').remove();
  modalBody.find('a').remove();
  var html = '<a  onclick="EmployerStepTwo('+paramReturn+');" ><i class="fa fa-reply-all"></i></a><ul class="special">'+
    '<li><a href="/organizations" class="icon fa-info-circle" ><span >PLUS DE PRECISIONS TPE = CMA PME = CCI <26 ans = Mission Locale des Jeunes MEDEF = CPME SAMETH = ?'+
    '</span></a></li>'+
    '<li><a href="/organizations" class="icon fa-address-book" ><span >AIDES FINANCIERES FIPH AGEFIPH'+
    '</span></a></li>'+
  '</ul>';

  modalBody.append(html);
}
function EmployerStepTwo2(paramReturn){
  var modalBody = $('#modal-body');
  modalBody.find('#cartoonVideo').remove();
  modalBody.find('ul').remove();
  modalBody.find('a').remove();
  var html = '<a  onclick="EmployerStepOne('+paramReturn+');" ><i class="fa fa-reply-all"></i></a><ul class="special">'+
    '<li><a href="#" class="icon fa-check-circle" onclick="EmployerStepTree2('+paramReturn+');"><span >Il est bénéficiaire de la loi de 2005 sur le handicap'+
    '</span></a></li>'+
    '<li><a href="#" class="icon fa-times-circle" onclick="EmployerStepTree2('+paramReturn+');"><span >Il N’est  PAS bénéficiaire de la loi de 2005 sur le handicap'+
    '</span></a></li>'+
  '</ul>';

  modalBody.append(html);
}
function EmployerStepTree2(paramReturn){
  var modalBody = $('#modal-body');
  modalBody.find('#cartoonVideo').remove();
  modalBody.find('ul').remove();
  modalBody.find('a').remove();
  var html = '<a  onclick="EmployerStepTwo2('+paramReturn+');" ><i class="fa fa-reply-all"></i></a><ul class="special">'+
    '<li><a href="/organizations" class="icon fa-user-md" ><span >Je contacte le médecin du travail ou le médecin de prévention'+
    '</span></a></li>'+
    '<li><a href="/organizations" class="icon fa-phone" ><span >Je contacte : CAP EMPLOI/SAMETH LADAPT INFO SANTE (numéro vert)'+
    '</span></a></li>'+
  '</ul>';

  modalBody.append(html);
}
