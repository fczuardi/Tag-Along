//globals
var config,
    is_iPad,
    is_iPhone,
    is_webApp,
    throbber_pulse_interval,
    active_photo_container = 1,
    queue_position = 0;
    

//DOM elements
var body_e,
    photo_throber_e,
    photo_items = [],
    buckets_e,
    photo_label_e,
    photo_label_text_e,
    label_color_e,
    svg_stage_e,
    score_player_e,
    score_all_e;

function defaultValues(){
  config = {
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
      scale,
      translate;
  
  body_height = body_e.height();
  if ((is_iPhone)&&(!is_webApp)){
    //add extra body size and scroll to remove the browser bar
    window_height = window.innerHeight + 150;
    body_height = body_e.height() + 230;
    main_e.css('height',body_height);
    setTimeout(function(){window.scrollTo(0, 1);},1000);
  }
  scale = window_width/100;
  translate = -2*scale;
  svg_stage_e.attr('transform', 'scale('+scale+','+scale+') translate(0,'+translate+')');
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

function getNextPhoto(){
  console.log('getNextPhoto');
}



function sectorOver(){
  var sector = $(this),
      index = sector.data('index');
  $(this).attr('class','sector selected');
  photo_label_e.css('display', 'block');
  photo_label_text_e.html(config.bucket_names[index]);
  photo_label_e.removeClass('skip');
  label_color_e.css('background-color', sector.attr('fill'));
}

function sectorOut(){
  $(this).attr('class','sector');
}

function doLabel(){
  var index = $(this).data('index');
  console.log('doLabel');
  
  // var wedge_index = -1;
  // if(ev.target.nodeName.toLowerCase() == 'path'){
  //   wedge_index = parseInt(ev.target.id[ev.target.id.length-1],10);
  // }else{
  //   wedge_index = fatia -1;
  // }
  // if(wedge_index >= 0){
  //   sendLabel(config.bucketnames[wedge_index]);
  // }
  
  getNextPhoto();
}

function addSectorListeners(){
  var sectors = $('.sector');
  sectors.bind('mouseover', sectorOver);
  sectors.bind('mouseout', sectorOut);
  sectors.each(function(i, sector){
    sector.addEventListener('click', doLabel, true);
  });
  
}

function resetPhotoQueue(){
  active_photo_container = 1;
  queue_position = 0;
  for(i=0;i<photo_items.length;i++){
    photo_items[i].source.attr('src','');
    photo_items[i].source.attr('src', config.photos[queue_position+i].url);
  }
}

function init(){
  body_e = $('body');
  main_e = $('#main');
  photo_throber_e = $('#photo-throbber');
  for(i=1;i<=3;i++){
    photo_items.push({
      'container': $('#photo-slot-'+i),
      'source': $('#photo-source-'+i)
    });
  }
  buckets_e = $('#buckets');
  svg_stage_e = $('#svg-stage');
  score_player_e = $('#score-player');
  score_all_e = $('#score-all');
  photo_label_e = $('#photo-label');
  photo_label_text_e = $('#photo-label-text');
  label_color_e = $('#label-color');
  
  is_iPhone = (navigator.userAgent.match(/iPhone/i) !== null);
  is_iPad = (navigator.userAgent.match(/iPad/i) !== null);
  is_webApp = (window.navigator.standalone === true);
  if (is_iPhone){ is_iPhone = true; body_e.addClass('iphone');}
  if (is_iPad){ body_e.addClass('ipad');}
  if (is_webApp){ body_e.addClass('web-app');}
  
  // playPhotoThrobber();
  defaultValues();
  addSectorListeners();
  window.addEventListener('resize', windowResized, true);
  windowResized();
  resetPhotoQueue();
}

$(init);