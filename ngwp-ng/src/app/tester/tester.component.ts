import { Component, OnInit, Inject } from '@angular/core';
import { MatDialog, MatSnackBar, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { DialogData } from '../home/home.component';

@Component({
  selector: 'app-tester',
  templateUrl: './tester.component.html',
  styleUrls: ['./tester.component.scss']
})
export class TesterComponent implements OnInit {

  form = new FormGroup({
    name: new FormControl('', [Validators.required]),
    partner: new FormControl('', [Validators.required])
  });

  constructor(
    public dialog: MatDialog,
    private snackBar: MatSnackBar
  ) { }

  ngOnInit() {
  }

  onSubmit()
  {
    let name = this.form.get('name').value;
    let partner = this.form.get('partner').value;

    if(name && partner)
    {
      const dialogRef = this.dialog.open(ExDialog, {
        width: '300px',
        data: {name, partner}
      });
    }
    else{
      this.snackBar.open('Sila masukkan nama dan nama pasangan', 'Close', {duration: 7000});
    }

  }
}

@Component({
  selector: 'example-dialog',
  styleUrls: ['./tester.component.scss'],
  template: ` 
    <div class="card" style="text-align: center; position: relative; background-color: #fff;">
      <div class="card__image">
        <img src="../../assets/images/phone_big.png">
        <div class="card__writings" 
          style="
            z-index: 2;
            position: absolute;
            top: 38%;
            left: 50%;
            transform: translate(-50%, -50%);
          ">
          <h2 style="font-size: 30px; background-color: #fff; padding: 10px;">{{ data.name }} <br>
            & <br>
            {{ data.partner }}
          </h2>
        </div>
      </div>
      
    </div>
  `,
})

export class ExDialog {

  constructor(
    public dialogRef: MatDialogRef<ExDialog>,
    @Inject (MAT_DIALOG_DATA) public data: DialogData
  ) {}

  onNoClick(): void {
    this.dialogRef.close();
  }
}
