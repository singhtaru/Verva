import { z } from "zod";

export const questionSchema = z.object({
  id: z.number(),
  questionText: z.string(),
  options: z.array(z.string()),
  correctAnswer: z.number(),
  explanation: z.object({
    title: z.string(),
    text: z.string(),
  }),
});

export const topicSchema = z.object({
  id: z.string(),
  title: z.string(),
  description: z.string(),
  icon: z.string(),
  questionCount: z.number(),
  estimatedMinutes: z.number(),
  questions: z.array(questionSchema),
});

export const quizDataSchema = z.object({
  topics: z.array(topicSchema),
});

export type Question = z.infer<typeof questionSchema>;
export type Topic = z.infer<typeof topicSchema>;
export type QuizData = z.infer<typeof quizDataSchema>;
