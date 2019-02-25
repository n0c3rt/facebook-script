content_wrapper = document.getElementsByClassName("userContentWrapper");
for(i = 0; i< content_wrapper.length; i++){	
	content = content_wrapper[i];
	obj_tmp = content.getElementsByTagName('h5');
	if(obj_tmp.length == 0){
		obj_tmp = content.getElementsByTagName('h6')
	}
	facebooker_text = obj_tmp[0].innerText
	facebooker_title = obj_tmp[0].getElementsByTagName('a')[0].innerText;
	console.log(facebooker_title);
	facebooker_link = obj_tmp[0].getElementsByTagName('a')[0].getAttribute('href').split('?')[0];
	console.log(facebooker_link);
	console.log(facebooker_text);

	title = content.getElementsByClassName('livetimestamp');
	if(title.length > 0 ){
		console.log(title[0].getAttribute('title'));//post time
		console.log(title[0].parentNode.getAttribute('href'));//original link
	}
	desc = content.getElementsByClassName('userContent');
	console.log(desc[0].innerText);
	img = content.getElementsByClassName('uiScaledImageContainer');
	if(img.length > 0){
		for(j=0; j < img.length; j++){
			console.log(img[j].getElementsByTagName('img')[0].getAttribute('src'));
		}
	}
}
