import { Component, OnInit } from '@angular/core';
import { Artwork } from '../../artwork'
import { ArtworkService } from '../../artwork.service'

@Component({
  selector: 'app-artwork-list',
  templateUrl: './artwork-list.component.html',
  styleUrls: ['./artwork-list.component.css']
})
export class ArtworkListComponent implements OnInit {

  //properties
  artworkList: Artwork[] = [];
  message: string = "";
  showArtworkForm: boolean = false;

  currentArtwork?: Artwork = undefined;

  constructor(private artworkService: ArtworkService) { }

  ngOnInit(): void {

    this.artworkService.getArtworks().subscribe({
      next: (value: Artwork[]) => this.artworkList = value,
      complete: () => console.log('artwork service finished'),
      error: (mess) => this.message = mess
    })
  }

  clicked(artwork: Artwork): void {
    this.currentArtwork = artwork;
    console.table(this.currentArtwork)
  }

  isSelected(artwork: Artwork): boolean {
    if (!artwork || !this.currentArtwork) {
      return false;
    }
    else {

      return artwork._id === this.currentArtwork._id;
    }
  }

  //Method
  openAddArtwork(): void {
    this.currentArtwork = undefined;
    this.showArtworkForm = true;
  }//End of Method

  openEditArtwork(): void {
    this.showArtworkForm = true;
  }
  //Method which takes the data entered and uses the service to send it to the API
  addNewArtwork(newArtwork: Artwork): void {
    console.log('adding new artwork ' + JSON.stringify(newArtwork));
    this.artworkService.addArtwork({ ...newArtwork })
      .subscribe({
        next: artwork => {
          console.log(JSON.stringify(artwork) + ' has been added');
          this.message = "new Artwork has been added";
        },
        error: (err) => this.message = err
      });

    // so the updated list appears

    this.ngOnInit();
    
  }//End of Method

  updateArtwork(_id: string, artwork: Artwork): void {
    console.log('updating ' + JSON.stringify(artwork));
    this.artworkService.updateArtwork(_id, artwork)
      .subscribe({
        next: artwork => {
          console.log(JSON.stringify(artwork) + ' has been updated');
          this.message = " artwork has been updated";
        },
        error: (err) => this.message = err
      });
    // so the updated list appears

    this.ngOnInit();

this.currentArtwork = undefined;
  }


  /* either the form has closed without saving or new Artwork details have been
  entered or a Artwork has been updated */

  artworkFormClose(artwork?: Artwork): void {
    this.showArtworkForm = false;
    console.table(artwork);
    if (artwork == null) {
      this.message = "form closed without saving";
      this.currentArtwork = undefined
    }
    else if (this.currentArtwork == null) {
      this.addNewArtwork(artwork);
    }
    else {
      this.updateArtwork(this.currentArtwork._id, artwork)
    }
  }

  // note: Bad UX there is no check that the user wants to delete the Artwork and hasn't just 
  // hit the button by mistake

  deleteArtwork() {
    console.log('deleting a Artwork ');
    if (this.currentArtwork) {
      this.artworkService.deleteArtwork(this.currentArtwork._id)
        .subscribe({
          next: artwork => {
            console.log(JSON.stringify(artwork) + ' has been added');
            this.message = "Artwork has been deleted";
          },
          error: (err) => this.message = err
        });
    }

    // so the updated list appears

    this.ngOnInit();
    this.currentArtwork = undefined;

  }


  dismissAlert() {
    this.message = "";
  }

}
