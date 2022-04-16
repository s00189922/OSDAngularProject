import { Component, OnInit } from '@angular/core';
import { Artist } from '../../artist'
import { ArtistService  }  from '../../artist.service'
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-artist-list',
  templateUrl: './artist-list.component.html',
  styleUrls: ['./artist-list.component.css']
})
export class ArtistListComponent implements OnInit {

  //properties
  artistList: Artist[] = [];
  message: string = "";
  showArtistForm: boolean = false;

  currentArtist? : Artist= undefined;

  constructor(private artistService: ArtistService) { }

  ngOnInit(): void {


    this.artistService.getArtists().subscribe({
      next: (value: Artist[] )=> this.artistList = value,
      complete: () => console.log('artist service finished'),
      error: (mess) => this.message = mess
    })
  }

  clicked (artist: Artist): void {
    this.currentArtist = artist;
    console.table(this.currentArtist)
  }

  isSelected(artist: Artist): boolean {
    if (!artist || !this.currentArtist) {
      return false;
    }
    else {

      return artist._id === this.currentArtist._id;
    }
  }

  //Method
  openAddArtist(): void {
    this.currentArtist = undefined;
    this.showArtistForm = true;
  }//End of Method

  openEditArtist(): void {
    this.showArtistForm = true;
  }
//Method which takes the data entered and uses the service to send it to the API
  addNewArtist(newArtist: Artist): void {
    console.log('adding new artist ' + JSON.stringify(newArtist));
    this.artistService.addArtist({ ...newArtist })
      .subscribe({
        next: artist => {
          console.log(JSON.stringify(artist) + ' has been added');
          this.message = "new Artist has been added";
        },
        error: (err) => this.message = err
      });

    // so the updated list appears

    this.artistService.getArtists().subscribe({
      next: (value: Artist[]) => this.artistList = value,
      complete: () => console.log('Artist service finished'),
      error: (mess) => this.message = mess
    })
  }//End of Method

  updateArtist(id: string, artist: Artist): void {
    console.log('updating ' + JSON.stringify(artist));
    this.artistService.updateArtist(id, artist)
      .subscribe({
        next: artist => {
          console.log(JSON.stringify(artist) + ' has been updated');
          this.message = " artist has been updated";
        },
        error: (err) => this.message = err
      });
    // so the updated list appears

    this.artistService.getArtists().subscribe({
      next: (value: Artist[]) => this.artistList = value,
      complete: () => console.log('Artist service finished'),
      error: (mess) => this.message = mess
    })
  }


  /* either the form has closed without saving or new Artist details have been
  entered or a Artist has been updated */

  artistFormClose(artist?: Artist): void {
    this.showArtistForm = false;
    console.table(artist);
    if (artist == null) {
      this.message = "form closed without saving";
      this.currentArtist = undefined
    }
    else if (this.currentArtist == null) {
      this.addNewArtist(artist);
    }
    else {
      this.updateArtist(this.currentArtist._id, artist)
    }
  }

// note: Bad UX there is no check that the user wants to delete the Artist and hasn't just 
// hit the button by mistake

  deleteArtist() {
    console.log('deleting a Artist ');
    if (this.currentArtist) {
      this.artistService.deleteArtist(this.currentArtist._id)
        .subscribe({
          next: artist => {
            console.log(JSON.stringify(artist) + ' has been added');
            this.message = "Artist has been deleted";
          },
          error: (err) => this.message = err
        });
    }

    // so the updated list appears

    this.artistService.getArtists().subscribe({
      next: (value: Artist[]) => this.artistList = value,
      complete: () => console.log('artist service finished'),
      error: (mess) => this.message = mess
    })

  }


  dismissAlert() {
    this.message = "";
  }

}
