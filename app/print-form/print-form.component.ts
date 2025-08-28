import { Component, OnInit ,ElementRef, ViewChild, Input} from '@angular/core';
import { PrintoutService } from '../services/print-form.service';
import * as printJS from 'print-js'
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-print-form',
  templateUrl: './print-form.component.html'
})
export class PrintFormComponent implements OnInit {
  unitNo: string = '';
  visitor: any = {};

  // printSection = false
  @ViewChild('videoElement', { static: false }) videoElement!: ElementRef<HTMLVideoElement>;
  @ViewChild('canvas', { static: false }) canvas!: ElementRef<HTMLCanvasElement>;
    isCameraOn = false;
    stream: MediaStream | null = null;
     capturedImage: string | null = null;
  constructor(private route: ActivatedRoute, private printoutService: PrintoutService) { }

 ngOnInit(): void {
    this.unitNo = this.route.snapshot.paramMap.get('unitNo') || '';

    if (this.unitNo) {
      this.printoutService.getVisitorByUnitNo(this.unitNo).subscribe({
        next: (data) => {
          this.visitor = data;
        },
        error: (err) => {
          console.error('Error fetching visitor', err);
        }
      });
    }
  }


// async startCamera() {
//   this.isCameraOn = true; // triggers *ngIf to render video/canvas

//   // wait a tick so DOM renders before accessing
//   setTimeout(async () => {
//     try {
//       const stream = await navigator.mediaDevices.getUserMedia({ video: true });
//       this.videoElement.nativeElement.srcObject = stream;
//     } catch (err) {
//       console.error('Error accessing webcam:', err);
//     }
//   });
// }
// stopCamera() {
  
//     if (this.stream) {
//       this.stream.getTracks().forEach(track => track.stop());
//       this.stream = null;
      
//     }
//     this.isCameraOn = false;
//   }
  // captureImage() {
  //   const video = this.videoElement.nativeElement;
  //   const canvas = this.canvas.nativeElement;
  //   const context = canvas.getContext('2d');
  //   if (context) {
  //     canvas.width = video.videoWidth;
  //     canvas.height = video.videoHeight;
  //     context.drawImage(video, 0, 0, canvas.width, canvas.height);
  //     this.capturedImage = canvas.toDataURL('image/png');
  //   }
  // }
  printInvoice() {
    // this.printSection = !this.printSection;
  printJS({
    printable: 'print-section', // 👈 the id of your div
    type: 'html',
    targetStyles: ['*'],        // include all styles (Bootstrap/Material)
  });
}
}

