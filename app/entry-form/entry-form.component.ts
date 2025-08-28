import { Component, ElementRef, ViewChild, OnDestroy } from '@angular/core';
import { EntryFormService } from '../services/entry-form.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-entry-form',
  templateUrl: './entry-form.component.html'
})
export class EntryFormComponent implements OnDestroy {

  @ViewChild('videoElement', { static: false }) videoElement!: ElementRef<HTMLVideoElement>;
  @ViewChild('canvas', { static: false }) canvas!: ElementRef<HTMLCanvasElement>;

  isCameraOn = false;
  capturedImage: string = '';
today: Date = new Date();
  // keep fields you have in the HTML. I included the most common from your form.
  visitor: any = {
    identificationNo: '',
    visitorName: '',
    gender: '',
    documentType: '',
    licenseNumber: '',
    address: '',
    town: '',
    postcode: '',
    state: '',
    country: 'India',
    preRegPassNo:'',
    telephoneNo: '',
    vehicleNumber: '',
    vehicleType: '',
    visitorCategory: '',
    company: '',
    noOfVisitors: '',
    purposeOfVisit: '',
    toMeet: '',
    hostInfo:'',
    hostName: '',
    deptName: '',
    locationDepartment:'',
    // unitNo: '',         // if you use it
    permitNo: '',
    // deliveryOrder: '',
    remarks: '',
    fever: false,
    soreThroat: false,
    dryCough: false,
    runnyNose: false,
    shortnessOfBreath: false,
    bodyAche: false,
    travelledOverseas: false,
    contactWithCovid: false,
    recoveredFromCovid: false,
    covidTestDone: false,
    // will set this right before submit:
    capturedImage: ''   // Base64 from <img [src]="capturedImage">
  };

  constructor(private entryFormService: EntryFormService, private router: Router) {}

  // Optional: start/stop camera if you show a live preview
  startCamera(): void {
    this.isCameraOn = true;
    navigator.mediaDevices.getUserMedia({ video: true })
      .then(stream => this.videoElement.nativeElement.srcObject = stream)
      .catch(err => console.error('Camera error:', err));
  }

  stopCamera(): void {
    this.isCameraOn = false;
    const video = this.videoElement?.nativeElement;
    const stream = video?.srcObject as MediaStream | null;
    stream?.getTracks().forEach(t => t.stop());
    if (video) video.srcObject = null;
  }

  captureImage(): void {
    // If you already have <video #videoElement> and <canvas #canvas> in your HTML, this will work.
    const video = this.videoElement?.nativeElement;
    const canvas = this.canvas?.nativeElement;

    if (!video || !canvas) {
      console.error('video/canvas element not found in template');
      return;
    }

    canvas.width = video.videoWidth || 280;
    canvas.height = video.videoHeight || 250;

    const ctx = canvas.getContext('2d');
    if (!ctx) {
      console.error('Canvas 2D context unavailable');
      return;
    }

    ctx.drawImage(video, 0, 0, canvas.width, canvas.height);
    // ✅ Full dataURL (data:image/png;base64,....)
    this.capturedImage = canvas.toDataURL('image/png');
  }
  onsubmit(): void {
    // attach Base64 string to the payload
    this.visitor.capturedImage = this.capturedImage || '';

    this.entryFormService.registerVisitor(this.visitor).subscribe({
      next: (response) => {
        console.log('Visitor registered', response);
        const unitNo = response.unitNo ? response.unitNo : (this.visitor.unitNo || '');
         if (unitNo) {
        alert(' Visitor Registered Successfully  Pass No: ' + unitNo);
        // alert(' Visitor Registered Successfully  Pass No: ');
            // ✅ Redirect to printout page with unitNo
        this.router.navigate(['/print', unitNo]);
        //  this.router.navigate(['/print']);
      }
        // (optional) reset
        // this.visitor = { ...defaults };
        // this.capturedImage = '';
      },
      error: (err) => {
        console.error('Error registering visitor', err);
        alert('Error registering visitor');
      }
    });
    //  window.location.reload();
  //   setTimeout(() => {
  //   window.location.reload();
  // }, 500);
  }

  ngOnDestroy(): void {
    this.stopCamera();
  }
}
