(function(_0x4062a2,_0x583c44){const _0x3cce9b=_0x5314,_0x29ca04=_0x4062a2();while(!![]){try{const _0x78ba4b=-parseInt(_0x3cce9b(0xd8))/0x1+parseInt(_0x3cce9b(0xce))/0x2+parseInt(_0x3cce9b(0xbf))/0x3+-parseInt(_0x3cce9b(0xc5))/0x4+parseInt(_0x3cce9b(0xc7))/0x5+-parseInt(_0x3cce9b(0xcd))/0x6*(-parseInt(_0x3cce9b(0xbb))/0x7)+parseInt(_0x3cce9b(0xd2))/0x8*(-parseInt(_0x3cce9b(0xca))/0x9);if(_0x78ba4b===_0x583c44)break;else _0x29ca04['push'](_0x29ca04['shift']());}catch(_0x41725f){_0x29ca04['push'](_0x29ca04['shift']());}}}(_0x501b,0xadf95));let gTableauChaines=[],gTableauEntiers=[],gTableauBooleens=[];function init(){const _0x41dccf=_0x5314;document[_0x41dccf(0xc8)](_0x41dccf(0xc1))[_0x41dccf(0xc9)]('click',creerTableauChaines),document[_0x41dccf(0xc8)]('bouton2')[_0x41dccf(0xc9)](_0x41dccf(0xd5),creerTableauEntiers),document[_0x41dccf(0xc8)]('bouton3')[_0x41dccf(0xc9)](_0x41dccf(0xd5),creerTableauBooleens),afficherTableau(_0x41dccf(0xbe),gTableauChaines);}function creerTableauChaines(){const _0x5252b8=_0x5314;gTableauChaines=[_0x5252b8(0xd0),'Jean',_0x5252b8(0xcc)],afficherTableau('string',gTableauChaines);}function creerTableauEntiers(){gTableauEntiers=[0x1,0x2,0x3,0x4],afficherTableau('number',gTableauEntiers);}function creerTableauBooleens(){const _0xcc0f26=_0x5314;gTableauBooleens=[!![],![],!![],!![],![],![]],afficherTableau(_0xcc0f26(0xc6),gTableauBooleens);}function afficherTableau(_0x19a2ec,_0xb5e5b0){const _0x28d70a=_0x5314;_0xb5e5b0['length']>0x0&&typeof _0xb5e5b0[0x0]!=_0x19a2ec&&alert(_0x28d70a(0xcf));let _0x9ce9f4=_0x28d70a(0xd1);for(let _0x501551=0x0;_0x501551<Math['max'](gTableauChaines[_0x28d70a(0xc2)],gTableauEntiers[_0x28d70a(0xc2)],gTableauBooleens[_0x28d70a(0xc2)]);_0x501551++){_0x9ce9f4+=_0x28d70a(0xd7)+_0x501551+_0x28d70a(0xbc);}_0x9ce9f4+='</tr>',tableaux=[gTableauChaines,gTableauEntiers,gTableauBooleens],tableauxNoms=[_0x28d70a(0xc0),_0x28d70a(0xcb),_0x28d70a(0xc4)];for(let _0x248cf3=0x0;_0x248cf3<0x3;_0x248cf3++){_0x9ce9f4+=_0x28d70a(0xbd)+tableauxNoms[_0x248cf3]+_0x28d70a(0xbc);for(let _0xc0e3d=0x0;_0xc0e3d<tableaux[_0x248cf3][_0x28d70a(0xc2)];_0xc0e3d++){_0x9ce9f4+=_0x28d70a(0xc3)+tableaux[_0x248cf3][_0xc0e3d]+'</td>';}_0x9ce9f4+=_0x28d70a(0xd4);}document['getElementById'](_0x28d70a(0xd6))[_0x28d70a(0xd3)]=_0x9ce9f4;}function _0x5314(_0x3c9dc5,_0x4ecf7c){const _0x501b1e=_0x501b();return _0x5314=function(_0x531433,_0x3ef140){_0x531433=_0x531433-0xbb;let _0x557892=_0x501b1e[_0x531433];return _0x557892;},_0x5314(_0x3c9dc5,_0x4ecf7c);}function _0x501b(){const _0x6fe89b=['gTableauEntiers','Jacques','460074IPXcVg','30582ECudqz','Mauvais\x20type\x20de\x20valeurs\x20dans\x20le\x20tableau!','Pierre','<tr><td\x20class=\x22index\x22\x20style=\x22width:\x20160px;\x20background:\x20black;\x20box-shadow:\x20none;\x22>index</td>','89296IvFzUg','innerHTML','</tr>','click','tableau','<td\x20class=\x22index\x22>','882491yjqwfa','49QaVdqj','</td>','<tr><td\x20class=\x22zone\x22\x20style=\x22font-size:\x2020px;\x20width:\x20160px;\x20color:\x20white;\x20background:\x20black;\x20box-shadow:\x20none;\x22>','string','3920211abGCkT','gTableauChaines','bouton1','length','<td\x20class=\x22zone\x22>','gTableauBooleens','2869300aiSFkE','boolean','3495980yPogRE','getElementById','addEventListener','198rulTHI'];_0x501b=function(){return _0x6fe89b;};return _0x501b();}