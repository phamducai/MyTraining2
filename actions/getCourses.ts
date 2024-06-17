import axios from 'axios';
import { CourseDto } from '@/dto/course.dto';

export async function getCourses(): Promise<CourseDto[]> {
  const res = await axios.get("/api/courses");
  return res.data;
}


// import { CourseDto } from "@/dto/course.dto";
// import prisma from '@/utils/prisma';

// const getCoursesByCategory = async (): Promise<CourseDto[]> => {
//     const courses:CourseDto[] = await prisma.courses.findMany();
//     return courses
//   }
  
//   export default getCoursesByCategory