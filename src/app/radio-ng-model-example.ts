import { Component } from "@angular/core";
import { MatRadioChange } from "@angular/material";

/**
 * @title Radios with ngModel
 */
@Component({
  selector: "radio-ng-model-example",
  templateUrl: "radio-ng-model-example.html",
  styleUrls: ["radio-ng-model-example.css"]
})
export class RadioNgModelExample {
  answer: string;
  seasons: string[] = ["Winter", "Spring", "Summer", "Autumn"];
  questions: object[] = [
    {
      choiceMade: "",
      answer: 1,
      name: "Who wrote Mahabharat",
      choices: ["Valmiki", "Shiva", "Unknown"]
    }
  ];
  answerSelect($event: MatRadioChange) {
    console.log(event);
  }
}
