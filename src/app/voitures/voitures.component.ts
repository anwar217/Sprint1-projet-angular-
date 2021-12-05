import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Voiture } from '../model/voiture.model';
import { VoitureService } from '../services/voiture.service';


@Component({
  selector: 'app-voitures',
  templateUrl: './voitures.component.html',
  
 
})
export class VoituresComponent implements OnInit {
  voitures : Voiture[];

  constructor(private voitureService: VoitureService,private router :Router) { 
    //this.voitures = voitureService.listeVoiture();
  
  }

  ngOnInit(): void {
    this.voitureService.listeVoiture().subscribe(voit => {
      console.log(voit);
      this.voitures = voit;
      });
  }
  supprimerVoiture(v: Voiture)
  {
  let conf = confirm("Etes-vous sûr ?");
  if (conf)
  this.voitureService.supprimerVoiture(v.idVoiture).subscribe(() => {
  console.log("voiture supprimée");
  this.SuprimerVoitureDuTableau(v);
  });
  
  }

  SuprimerVoitureDuTableau(voit : Voiture) {
    this.voitures.forEach((cur, index) => {
    if(voit.idVoiture=== cur.idVoiture) {
    this.voitures.splice(index, 1);
    }
    });
    }
}
