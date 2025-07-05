export const annapi = 'http://localhost:8000/api/announcements';
export const allAnn = 'announcement/getAll';
export interface Announcement {
    _id: string;
    senderName: string;
    course: string;
    description: string;
    image: string;
    createdAt: string;
    updatedAt: string;
    __v?: number;
  }
  
export const quizApi = 'http://localhost:8000/api/quiz';
export const allQuiz = 'quiz/getAll';
export interface Quiz {
    _id: string;
    quizName: string;
    course: string;
    topic: string;
   dueDate: string;
    createdAt: string;
    updatedAt: string;
    __v?: number;
  }
