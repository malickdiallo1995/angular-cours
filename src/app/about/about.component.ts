import { Component, OnInit } from '@angular/core';
import {FormControl, Validators} from '@angular/forms';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  info= {
    nom : "malick",
    email :  "malick.diallo@hotmail.com",
    tel : 771070096
  };

  comments = [{date:new Date(),message:'message 1'},
              {date:new Date(),message:'message 2'},
              {date:new Date(),message:'message 3'}];

  //Stocker les commentaires saisis dans le formulaire
  commentaireSaisi =  {date : null,
                        message : ""};
  afficher = false;

  constructor() { }

  ngOnInit(): void {

  }


/*
  //Ancien Model
  saveComments() {
    this.commentaireSaisi.date = new Date();

    this.comments.push(this.commentaireSaisi);
    this.commentaireSaisi = {date: null,message: ''};
    this.afficher = true;

  }
*/

  saveComments(commentaireSaisi) {
    //Ajouter commentaire dans le tableau des commentaire
    commentaireSaisi.date = new Date();

    this.comments.push(commentaireSaisi);
    //On reinitialise l'object commentaireSaisi a null
    this.commentaireSaisi.message =  '';
    this.afficher = true;
  }
}
