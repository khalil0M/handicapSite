var titre,sitation,li1,li2,li3,li4,li5,desc;

function handicapMoteur(req,res){
   titre = "La déficience motrice = handicap Moteur.";
    sitation = "Atteinte plus ou moins importante d’une fonction locomotrice pouvant toucher les membres supérieurs, inférieurs, le docs, les muscles, les nerfs et les artucilation.";
    li1 = "En pratique, les déficiences motrices engendrent une gêne ou un empêchement dans : En pratique, les déficiences motrices engendrent une gêne ou un empêchement dans : les déplacements, la station debout ou assise prolongée, préhension d'objets… ";
    li2 = "Le handicap moteur peut être d’origine génétique, accidentel, cérébral ou la conséquence d’une maladie.";
    li3 = "En France, on estime que  1,5 millions de personnes souffrent d’un handicap moteur dont la cause peut aller de l’arthrose ou d’un rhumatisme à l’hémiplégie, paraplégie tétraplégie.rhumatisme à l’hémiplégie, paraplégie tétraplégie.";
    li4 = "370 000 personnes utilisent un fauteuil roulant, ce qui correspond à moins de 10% de la population handicapée en France";
   res.render('info',{name:'Handicap Moteur',img:'moteur.png', titre:titre, sitation:sitation, li1:li1, li2:li2, li3:li3, li4:li4, li5:li5, desc:desc});
}

function handicapAuditif(req,res){
    titre = "La déficience Auditif";
    sitation= "Perte de l’acuité auditive partielle et plus rarement totale";
    li1= "Peut appraître dès la naissance ou au cours de la vie (malformation, séquelles d'otites, accident, vieillissement...).";
    li2= "Selon les cas, ce handicap peut s'accompagner d'une difficulté à parler.";
    li3= "Certaine malentendants lisent sur les lèvres, d'autres utlisent la langue des signes.";
    li4= "5 à 6 millons de personnes sont sourdes ou malentendants (en augmentation avec le viellisemment de la population), ce qui en le premier type de déficience en France, Et c'est aussi la première ause de handicap dans le monde, même si de plus en plus de personnes souffrent de diabète qui seracertainement, selon l'OMS, la première cause de handicap dans le monde avant 2020.";
    res.render('info',{name:'Handicap Auditif',img:'auditif.png',titre:titre, sitation:sitation, li1:li1, li2:li2, li3:li3, li4:li4, li5:li5, desc:desc});
}

function handicapVisuel(req,res){
  titre = "La déficience visuelle";
  sitation= "Réduction de la vision, de la personne malvoyante à la personne non voyante";
  li1= "La cécité régresse, mais le nombre de mlavoyantes augmente.";
  li2= "Les causes principales : problèmes, malformations du cristallin, anomalies congénitales, accident, diabète, maladie du nerf optique...";
  li3= "Selon les cas, la personne peut avoir un problème de vision centrale, de vision périphérique, les objets peuvent être déformes, les couleurs altérées ou les contrastes atténués.";
  li4= "En France : 1 500 000 personnes malvoyantes, dont 60 000 personnes aveugles.";
    res.render('info',{name:'Handicap Visuel',img:'visuel.png',titre:titre, sitation:sitation, li1:li1, li2:li2, li3:li3, li4:li4, li5:li5, desc:desc});
}

function handicapInvalidantes(req,res){
  titre = "Les maladies Invalidantes";
  sitation= "Troubles de la santé invalidants pouvant atteindre les organes internes vitaux.";
  desc = "EX : insuffisance respiratoire (mucoviscidose...), insufisance cardiaque, rénale, immunitaire (SIDA...); cancers; certaines maladies rhumatoîdes; troubles musculo-squelettiques (douleurs articulaires...).";
  li1= "Ces maladies peuvent être momentanées, permanentes ou évolutives. Ces déficience constituent souvent un handicap non visible.";
  li2= "Les maladies invalidantes entraînent une restriction plus ou moins grande d'activité en termes de mobilité, d'aptitude gestuelle ou de résistance à la fatigue.";
  li3= "Beaucoup de personnes atteites de maladies invalidantes travaillent et les effets de la maladie sont invisibles aux yeux de leurs collègues et de la hiérarchie.";
  li4= "Certaines maladies sont évolutives et leur rythme d'évolution relativement lent permet d'antciper les aménagement de poste (techniques et organisationnels) nécessaires.";
  li5= "<li>Les maladies invalidates représentent chaque année 279 000 nouveaux cas dans la population active</li>";
   res.render('info',{name:'Handicap Invalidantes',img:'invanlidante.png',titre:titre, sitation:sitation, li1:li1, li2:li2, li3:li3, li4:li4, li5:li5, desc:desc});
}

module.exports.handicapMoteur=handicapMoteur;
module.exports.handicapAuditif=handicapAuditif;
module.exports.handicapVisuel=handicapVisuel;
module.exports.handicapInvalidantes=handicapInvalidantes;
