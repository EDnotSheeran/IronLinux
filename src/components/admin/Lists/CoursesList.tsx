import React, { useState, useEffect } from 'react';
// import api from '@services/axios';
import { CheckBox } from '@components/admin/Inputs';

const FormCoursesList: React.FC = ({ children }) => {
  const [courses, setCourses] = useState<Course[]>([]);
  const [selectedCourses, setSelectedCourses] = useState<Course[]>([]);
  const [selectedCoursesIds, setSelectedCoursesIds] = useState<String[]>([]);

  const getCourses = async () => {
    // const { data } = await api.get('/course/filter');
    const data = [
      {
        id: '1',
        title: '',
        imageURL: '',
        description: '',
        price: 1,
        slug: 'string',
      },
    ];
    // setCourses(data.course);
    setCourses(data);
  };

  const getSelectedCoursesIds = async () => {
    const selectedCoursesIds = JSON.parse(
      localStorage.getItem('selectedCoursesIds') || '[]'
    );
    setSelectedCoursesIds(selectedCoursesIds);

    const selectedCourses = JSON.parse(localStorage.getItem('courses') || '[]');
    setSelectedCourses(selectedCourses);
  };

  const handleSelectCourse: React.MouseEventHandler<HTMLInputElement> = e => {
    const { checked, value } = e.target as HTMLInputElement;

    const coursesIds = selectedCoursesIds || [];
    if (checked) {
      coursesIds.push(value);
      setSelectedCoursesIds(coursesIds);

      const c = courses.find(course => course.id === value);
      if (c) selectedCourses.push(c);
      setSelectedCourses(selectedCourses);
    } else {
      const index = coursesIds.indexOf(value);
      coursesIds.splice(index, 1);
      setSelectedCoursesIds(coursesIds);

      console.log(selectedCourses);

      const selected = selectedCourses.filter(course => course.id !== value);

      setSelectedCourses(selected);
      console.log(selectedCourses);
    }

    localStorage.setItem('selectedCoursesIds', JSON.stringify(coursesIds));
    localStorage.setItem('courses', JSON.stringify(selectedCourses));
  };

  useEffect(() => {
    getCourses();
    getSelectedCoursesIds();
  }, []);

  if (!courses) return <div className="spinner"></div>;

  // console.log('Courses:', selectedCourses);
  // console.log('Selected Ids', selectedCoursesIds);

  return (
    <ul>
      {courses.map(course => (
        <li key={course.id} className="flex gap-3 items-center">
          <CheckBox
            value={course.id}
            checked={selectedCoursesIds?.includes(course.id)}
            onClick={handleSelectCourse}
          />
          <p className="text-xl">{course.title}</p>
        </li>
      ))}
    </ul>
  );
};

export default FormCoursesList;
