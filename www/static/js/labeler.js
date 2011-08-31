//globals
var throbber_pulse_interval;

//DOM elements
var body_e,
    photo_throber_e,
    buckets_e,
    svg_stage_e,
    score_player_e,
    score_all_e;

function defaultValues(){
  return {
    bucket_names: ['yes','no','maybe'],
    photos:[
      {url:'http://farm3.static.flickr.com/2538/4165413563_f0d0c161c9_m.jpg'},
      {url:'http://farm4.static.flickr.com/3441/3923119254_73253efea2_m.jpg'},
      {url:'http://farm7.static.flickr.com/6193/6080825482_b66e80b669_m.jpg'},
      {url:'http://farm7.static.flickr.com/6206/6085626220_860a6a59cc.jpg'  },
      {url:'http://farm7.static.flickr.com/6088/6087833418_5b6d53426d.jpg'  },
      {url:'http://farm2.static.flickr.com/1281/1294684643_eda0c0e755.jpg'  },
      {url:'http://farm7.static.flickr.com/6011/6009886158_26a80585e6.jpg'  },
      {url:'http://farm7.static.flickr.com/6070/6086960682_48fa068baf.jpg'  },
      {url:'http://farm7.static.flickr.com/6083/6086618107_ea27a58ee8.jpg'  },
      {url:'http://farm7.static.flickr.com/6090/6079143531_083839517d.jpg'  },
      {url:'http://farm6.static.flickr.com/5066/5673926509_32435ab516.jpg'  },
      {url:'http://farm1.static.flickr.com/115/304810883_807dd2c83b.jpg'    },
      {url:'http://farm2.static.flickr.com/1370/5106564165_5f20388d08.jpg'  },
      {url:'http://farm3.static.flickr.com/2538/4165413563_f0d0c161c9_m.jpg'},
      {url:'http://farm4.static.flickr.com/3441/3923119254_73253efea2_m.jpg'},
      {url:'http://farm7.static.flickr.com/6193/6080825482_b66e80b669_m.jpg'},
      {url:'http://farm7.static.flickr.com/6206/6085626220_860a6a59cc.jpg'  },
      {url:'http://farm7.static.flickr.com/6088/6087833418_5b6d53426d.jpg'  },
      {url:'http://farm2.static.flickr.com/1281/1294684643_eda0c0e755.jpg'  },
      {url:'http://farm7.static.flickr.com/6011/6009886158_26a80585e6.jpg'  },
      {url:'http://farm7.static.flickr.com/6070/6086960682_48fa068baf.jpg'  },
      {url:'http://farm7.static.flickr.com/6083/6086618107_ea27a58ee8.jpg'  },
      {url:'http://farm7.static.flickr.com/6090/6079143531_083839517d.jpg'  },
      {url:'http://farm6.static.flickr.com/5066/5673926509_32435ab516.jpg'  },
      {url:'http://farm1.static.flickr.com/115/304810883_807dd2c83b.jpg'    },
      {url:'http://farm2.static.flickr.com/1370/5106564165_5f20388d08.jpg'  },
      {url:'http://farm3.static.flickr.com/2538/4165413563_f0d0c161c9_m.jpg'},
      {url:'http://farm4.static.flickr.com/3441/3923119254_73253efea2_m.jpg'},
      {url:'http://farm7.static.flickr.com/6193/6080825482_b66e80b669_m.jpg'},
      {url:'http://farm7.static.flickr.com/6206/6085626220_860a6a59cc.jpg'  },
      {url:'http://farm7.static.flickr.com/6088/6087833418_5b6d53426d.jpg'  },
      {url:'http://farm2.static.flickr.com/1281/1294684643_eda0c0e755.jpg'  },
      {url:'http://farm7.static.flickr.com/6011/6009886158_26a80585e6.jpg'  },
      {url:'http://farm7.static.flickr.com/6070/6086960682_48fa068baf.jpg'  },
      {url:'http://farm7.static.flickr.com/6083/6086618107_ea27a58ee8.jpg'  },
      {url:'http://farm7.static.flickr.com/6090/6079143531_083839517d.jpg'  },
      {url:'http://farm6.static.flickr.com/5066/5673926509_32435ab516.jpg'  },
      {url:'http://farm1.static.flickr.com/115/304810883_807dd2c83b.jpg'    },
      {url:'http://farm2.static.flickr.com/1370/5106564165_5f20388d08.jpg'  },
      {url:'http://farm7.static.flickr.com/6090/6079143531_083839517d.jpg'  },
      {url:'http://farm6.static.flickr.com/5066/5673926509_32435ab516.jpg'  },
      {url:'http://farm1.static.flickr.com/115/304810883_807dd2c83b.jpg'    },
      {url:'http://farm2.static.flickr.com/1370/5106564165_5f20388d08.jpg'  },
      {url:'http://farm7.static.flickr.com/6090/6079143531_083839517d.jpg'  },
      {url:'http://farm6.static.flickr.com/5066/5673926509_32435ab516.jpg'  },
      {url:'http://farm1.static.flickr.com/115/304810883_807dd2c83b.jpg'    },
      {url:'http://farm2.static.flickr.com/1370/5106564165_5f20388d08.jpg'  },
      {url:'http://farm7.static.flickr.com/6090/6079143531_083839517d.jpg'  },
      {url:'http://farm6.static.flickr.com/5066/5673926509_32435ab516.jpg'  },
      {url:'http://farm1.static.flickr.com/115/304810883_807dd2c83b.jpg'    },
      {url:'http://farm2.static.flickr.com/1370/5106564165_5f20388d08.jpg'  },
      {url:'http://farm7.static.flickr.com/6090/6079143531_083839517d.jpg'  },
      {url:'http://farm6.static.flickr.com/5066/5673926509_32435ab516.jpg'  },
      {url:'http://farm1.static.flickr.com/115/304810883_807dd2c83b.jpg'    },
      {url:'http://farm2.static.flickr.com/1370/5106564165_5f20388d08.jpg'  },
      {url:'http://farm7.static.flickr.com/6090/6079143531_083839517d.jpg'  },
      {url:'http://farm6.static.flickr.com/5066/5673926509_32435ab516.jpg'  },
      {url:'http://farm1.static.flickr.com/115/304810883_807dd2c83b.jpg'    },
      {url:'http://farm2.static.flickr.com/1370/5106564165_5f20388d08.jpg'  },
      {url:'http://farm7.static.flickr.com/6090/6079143531_083839517d.jpg'  },
      {url:'http://farm6.static.flickr.com/5066/5673926509_32435ab516.jpg'  },
      {url:'http://farm1.static.flickr.com/115/304810883_807dd2c83b.jpg'    },
      {url:'http://farm2.static.flickr.com/1370/5106564165_5f20388d08.jpg'  },
      {url:'http://farm7.static.flickr.com/6090/6079143531_083839517d.jpg'  },
      {url:'http://farm6.static.flickr.com/5066/5673926509_32435ab516.jpg'  },
      {url:'http://farm1.static.flickr.com/115/304810883_807dd2c83b.jpg'    },
      {url:'http://farm2.static.flickr.com/1370/5106564165_5f20388d08.jpg'  }
    ],
  };
}

function windowResized(){
  var ww = window.innerWidth,
      wh = window.innerHeight,
      bh,
      v_align,
      scaleW = ww/100,
      scaleH = wh/100;
  
  if (ww > wh) {v_align = 0.7;} else {v_align = 0.52;}
  body_e.css('height',wh);
  bh = body_e.height();
  score_player_e.html(wh/2);
  score_all_e.html(bh);
  buckets_e.css('top',bh/2);
  buckets_e.css('margin-top', -bh*v_align);
  svg_stage_e.attr('transform', 'scale('+scaleW+','+scaleW+')');
}

function playPhotoThrobber(){
  photo_throber_e.css('display', 'block');
  throbber_pulse_interval = setInterval(
                              function throbberPulse(){
                                photo_throber_e.toggleClass('pulse');
                              },1000);
}

function stopPhotoThrobber(){
  clearInterval(throbber_pulse_interval);
  photo_throber_e.css('display', 'none');
}

function sectorOver(ev){
  $(this).attr('class','sector selected');
}

function sectorOut(){
  $(this).attr('class','sector');
}

function addSectorListeners(){
  $('.sector').bind('mouseover', sectorOver);
  $('.sector').bind('mouseout', sectorOut);
}

function init(){
  body_e = $('body');
  photo_throber_e = $('#photo-throbber');
  buckets_e = $('#buckets');
  svg_stage_e = $('#svg-stage');
  score_player_e = $('#score-player');
  score_all_e = $('#score-all');
  // playPhotoThrobber();
  addSectorListeners();
  window.addEventListener('resize', windowResized, true);
  windowResized();
}

$(init);