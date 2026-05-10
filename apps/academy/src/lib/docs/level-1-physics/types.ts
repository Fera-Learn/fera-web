export type QuestionRating =
  | "*"
  | "*+"
  | "**"
  | "**+"
  | "***"
  | "***+"
  | "****"
  | "****+"
  | "*****";

export type Level1PhysicsAnswer = {
  answer: string;
  id: string;
};

export type Level1PhysicsQuestionPrompt = {
  id: string;
  prompt: string;
  rating: QuestionRating;
};

export type Level1PhysicsQuestion = Level1PhysicsQuestionPrompt &
  Level1PhysicsAnswer;

export function q(
  id: string,
  prompt: string,
  answer: string,
  rating: QuestionRating = "*",
): Level1PhysicsQuestion {
  return { answer, id, prompt, rating };
}
