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
  var window_width = window.innerWidth,
      window_height = window.innerHeight,
      body_height,
      v_align,
      scaleW = window_width/100,
      scaleH = window_height/100;
  
  body_e.css('height',window_height);
  body_height = body_e.height();
  if (window_width > window_height) {v_align = 0.75;} else {v_align = 0.56;}
  buckets_e.css('top',(body_height/2) - (body_height*v_align));
  svg_stage_e.attr('transform', 'scale('+scaleW+','+scaleW+')');
  score_player_e.html(window_width);
  score_all_e.html(window_height);
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