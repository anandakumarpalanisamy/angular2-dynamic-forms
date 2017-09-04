import { Injectable } from '@angular/core';

import { QuestionBase } from '../viewmodels/question-base';
import { TextBoxQuestion }  from '../viewmodels/question-textbox';
import { DropdownQuestion }  from '../viewmodels/question-dropdown';

@Injectable()
export class QuestionService {

    getQuestions(): any {
        
        let questions: QuestionBase<any>[] = [

            new DropdownQuestion({
                key: 'brave',
                label: 'Bravery Rating',
                options: [
                    { key: 'solid', value: 'Solid'},
                    { key: 'great', value: 'Great'},
                    { key: 'good', value: 'Good'},
                    { key: 'unproven', value: 'Unproven'},
                ],
                order: 4
            }),

            new TextBoxQuestion({
                key: 'firstName',
                label: 'First Name',
                value: 'Anand',
                required: true,
                order: 1,
                type:'text'                
            }),

            new TextBoxQuestion({
                key: 'lastName',
                label: 'Last Name',
                value: 'Kumar',
                required: true,
                order: 2,
                type:'text'                
            }),

            new TextBoxQuestion({
                key: 'emailAddress',
                label: 'Email',
                type: 'email',
                order: 3
            })

        ];

        return questions.sort((a, b) => a.order - b.order);

    }

}