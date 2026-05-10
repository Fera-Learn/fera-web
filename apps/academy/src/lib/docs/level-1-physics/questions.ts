import { level1PhysicsQuestionTopics } from "./questions.generated";
import type { Level1PhysicsQuestion } from "./types";

export type {
  Level1PhysicsAnswer,
  Level1PhysicsQuestion,
  Level1PhysicsQuestionPrompt,
  QuestionRating,
} from "./types";

type Level1PhysicsTopicQuestionData = {
  questions: Level1PhysicsQuestion[];
  topicTitle: string;
};

const topicQuestionData =
  level1PhysicsQuestionTopics as unknown as Level1PhysicsTopicQuestionData[];

export const level1PhysicsQuestionSets = new Map<
  string,
  Level1PhysicsQuestion[]
>(
  topicQuestionData.map((topic) => [
    topic.topicTitle,
    topic.questions.map((question) => ({
      answer: question.answer,
      id: question.id,
      prompt: question.prompt,
      rating: question.rating,
    })),
  ]),
);

export function getLevel1PhysicsQuestions(topicTitle: string) {
  return level1PhysicsQuestionSets.get(topicTitle) ?? [];
}
