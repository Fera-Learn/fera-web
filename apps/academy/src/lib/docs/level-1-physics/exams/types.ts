export type Level1PhysicsExamPart = {
  answer: string;
  id: string;
  label: string;
  marks: number;
  prompt: string;
};

export type Level1PhysicsExamQuestion = {
  id: string;
  marks: number;
  number: number;
  parts: Level1PhysicsExamPart[];
  section: string;
  stem?: string;
  title: string;
};

export type Level1PhysicsExamPaper = {
  constants?: Array<{
    label: string;
    value: string;
  }>;
  description: string;
  id: string;
  instructions: string[];
  label: string;
  placeholder?: string;
  questions: Level1PhysicsExamQuestion[];
  timeAllowed: string;
  title: string;
  totalMarks: number;
};

export type Level1PhysicsExamSet = {
  description: string;
  id: string;
  label: string;
  papers: Level1PhysicsExamPaper[];
};
