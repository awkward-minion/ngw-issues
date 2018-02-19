import { Component, OnInit, ViewChild } from '@angular/core';
import { Validators } from '@angular/forms';

@Component({
  selector: 'app-textarea-ie-issue',
  templateUrl: './textarea-ie-issue.component.html',
  styleUrls: ['./textarea-ie-issue.component.css']
})
export class TextareaIeIssueComponent implements OnInit {

  constructor() { }

  public formConfiguration: any;

  @ViewChild('detailsForm')
  private detailsForm;

  private errorMessages;

  ngOnInit() {
    this.errorMessages = {
      'interesting': {
        'required': 'Please enter Interesting thing in this',
      }
    };

    this.formConfiguration = {
      type: 'container',
      cssClass: 'basic-details',
      errorMap: this.errorMessages,
      children: [
        {
          label: 'Why is this interesting?',
          type: 'textarea',
          name: 'interesting',
          placeholder: 'Why is this interesting?',
          cssClass: 'interested-reason',
          validators: Validators.compose([
            Validators.required,
          ])
        },
        {
          type: 'container',
          cssClass: 'buttons',
          children: [
            {
              type: 'button',
              name: 'save',
              buttonType: 'button',
              enableOnValid: true,
              buttonText: 'Save the data',
              cssClass: 'save-btn btn-primary',
              onClick: (event) => {
                console.log('submitted form data ', this.detailsForm.value);
              }
            }
          ]
        }
      ]
    };
  }

}
