export type Question = {
    question: string;
    type: "boolean" | "multiple";
    category: string;
    correct_answer: string;
    incorrect_answers: string[];
  };