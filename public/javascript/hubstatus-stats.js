$.getJSON("/api/uptime",function(components){var list=$('.stats-list.uptime');list.empty();data_color={"HD-BITS":"#ffffff","DeZire":"#003366","Nebula":"#00ff00","Jhanjhatless":"#ff9c00","Hell":"#bf00ff"}for(var component in components){var name=component;temp_uptime=components[component];temp_days=Math.floor(temp_uptime/(24*60));temp_hour=Math.floor((temp_uptime/60)-(temp_days*24));temp_minutes=Math.floor(temp_uptime-(temp_hour*60));table_time="";if(temp_days>0){table_time=table_time+temp_days+"d "}if(temp_hour>0){table_time=table_time+temp_hour+"h "}if(temp_minutes>0){table_time=table_time+temp_days+"m "}var el=$('<li>').attr('id',name).text('Hub - '+name).append($('<span>').attr('id','stats-uptime-'+name));list.append(el);$("#stats-uptime-"+component).html(table_time).append($('<font>').attr('color',data_color[name]).text('|'))}});$.getJSON("/api/records",function(components){var list=$('.stats-list.record');list.empty();for(var component in components){var name=component;temp_rec_uptime=components[component];temp_rec_days=Math.floor(temp_rec_uptime/(24*60));temp_rec_hour=Math.floor((temp_rec_uptime/60)-(temp_rec_days*24));temp_rec_minutes=Math.floor(temp_rec_uptime-(temp_rec_hour*60));table_rec_time="";if(temp_rec_days>0){table_rec_time=table_rec_time+temp_rec_days+"d "}if(temp_rec_hour>0){table_rec_time=table_rec_time+temp_rec_hour+"h "}if(temp_rec_minutes>0){table_rec_time=table_rec_time+temp_rec_days+"m "}var el=$('<li>').text('Hub - '+name).append($('<span>').attr('id','stats-uptimerecord-'+name));list.append(el);$("#stats-uptimerecord-"+component).html(table_rec_time)}});
