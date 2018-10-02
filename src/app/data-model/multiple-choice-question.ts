export class MultipleChoiceQuestion {
    public static fromJson(json): MultipleChoiceQuestion {
        return new MultipleChoiceQuestion(
            json.question,
            json.answers,
            json.correctIndex,
            json.randomizeAnswers);
    }
    constructor(
        private question: string,
        private answers: string[],
        private correctAnswerIndex: number,
        private randomizeAnswers: boolean,
    ) { }

    getAnswers(): string[] {
        if (this.randomizeAnswers) {
            const copy = [];
            let n = this.answers.length, i;
            while (n) {
                i = Math.floor(Math.random() * this.answers.length);
                if (i in this.answers) {
                    copy.push(this.answers[i]);
                    delete this.answers[i];
                    n--;
                }
            }
            return copy;
        } else {
            return this.answers;
        }
    }
}


