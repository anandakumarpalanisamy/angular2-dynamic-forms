import { Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

import { QuestionControlService } from '../services/question-control.service';
import { QuestionBase } from '../viewmodels/question-base';

@Component({
    selector: 'dynamic-form',
    templateUrl: './dynamic-form.component.html',
    providers: [ QuestionControlService ]
})
export class DynamicFormComponent {

    @Input() questions: QuestionBase<any> [] = [];
    form: FormGroup;
    payload = '';

    constructor(private qcs: QuestionControlService){

    }

    ngOnInit(){
        console.log(JSON.stringify(this.questions));
        this.form = this.qcs.toFormGroup(this.questions);
    }

    onSubmit(){
        console.log('Inside onSubmit')
        console.log(JSON.stringify(this.form.value));
        this.payload = JSON.stringify(this.form.value);
        
    }

}