import { Injectable } from '@angular/core';

@Injectable()
export class LocalStorageService {

  save(name,data){
  	let localData= localStorage.getItem('tinyApp');
  	if(localData){
  		localData = JSON.parse(localData);
  	}else{
  		localData = {};
  	}

  	localData[name] = data;

  	localStorage.setItem('tinyApp',JSON.stringify(localData))
  }

  get(name){
	let data = JSON.parse(localStorage.getItem('tinyApp'));
  	if(!data){
  		return undefined;
  	}
	if(name){
  		if(data[name]){
  			return data[name];
  		}else{
  			return {};
  		}
  	}
  	return data ;
  }




}
