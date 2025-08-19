import { Component, OnInit,ElementRef, ViewChild } from '@angular/core';
import { EntryFormService } from '../services/entry-form.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-entry-form',
  templateUrl: './entry-form.component.html'
})
export class EntryFormComponent implements OnInit {
  @ViewChild('videoElement', { static: false }) videoElement!: ElementRef;
  isCameraOn = false;
previewUrl: string | ArrayBuffer | null = null;
visitor: any = {
    idenno: '',
    visname: '',
    gender: '',
    documentType: '',
    licenseNumber: '',
    address: '',
    town: '',
    postcode: '',
    state: '',
    country: '',
    telephone: '',
    vehicleNo: '',
    vehicleType: '',
    visitorCategory: '',
    company: '',
    passNo: '',
    visitorsCount: '',
    purpose: '',
    host: '',
    department:'',
    hostInfo: '',
    location: '',
    locationInfo: '',
    unitNo: '',
    permitNo: '',
    deliveryOrder: '',
    remarks: ''
    
};
  constructor(private entryFormService: EntryFormService) {}

  ngOnInit(): void {
  }
// onFileSelected(event: Event): void {
//   const file = (event.target as HTMLInputElement).files?.[0];
//   if (file) {
//     const reader = new FileReader();
//     reader.onload = () => {
//       this.previewUrl = reader.result;
//     };
//     reader.readAsDataURL(file);
//   }
// }
onsubmit(): void {
    this.entryFormService.registerVisitor(this.visitor).subscribe({
      next: (response) => {
        console.log('Visitor registered successfully', response);
         // assuming backend returns JSON like { message: "...", unitNo: "MCK/GP/25-26/0001" }
      const unitNo = response.unitNo ? response.unitNo : this.visitor.unitNo;
        alert('{ Visitor Registered Successfully }  Unit No: ' + unitNo);
      },
      error: (err) => {
        console.error('Error registering visitor', err);
        alert('Error registering visitor');
      }
    });
  }
  

  async startCamera() {
    if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
      try {
        const stream = await navigator.mediaDevices.getUserMedia({ video: true });
        this.videoElement.nativeElement.srcObject = stream;
        this.isCameraOn = true;
      } catch (err) {
        console.error('Error accessing webcam: ', err);
      }
    } else {
      alert('Camera not supported in this browser.');
    }
  }
}
