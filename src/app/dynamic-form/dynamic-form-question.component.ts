import { Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

import { QuestionBase } from '../viewmodels/question-base';

@Component({
    selector: 'dynamic-form-question',
    templateUrl: './dynamic-form-question.component.html'   
})
export class DynamicFormQuestionComponent {

    @Input() question: QuestionBase<any>;
    @Input() form: FormGroup;

    ngOnInit(){
        console.log(JSON.stringify(this.question));
    }

    get isValid() {
        
        return this.form.controls[this.question.key].valid;
    }
}